import React, { useEffect, useState } from "react";
import { AllBubleCht } from "../components";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "react-phone-number-input/style.css";
import { auth } from "../config/index";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import { Login } from "./login";
import { useDispatch } from "react-redux";
import { getAllMessage, getUser } from "../action/MessageAction";
import axios from "axios";

export const HomeCht = () => {
  const [searchinput, setSearchinput] = useState(false);
  const [mypin, setMypin] = useState("");
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { getUserResult, getUserLoading, getUserError } = useSelector(
    (state) => state.MessageReducer
  );

  useEffect(() => {
    axios
      .get("http://localhost:3000/user?uid=" + localStorage.getItem("uidl"))
      .then(function (response) {
        setMypin(response.data[0].pin);
        // <AllBubleCht data={response.data[0].pin} />
        // console.log(response.data[0].pin);
      });
  },[]);

  useEffect(() => {
    // panggil action getlistkontak
    // console.log("1. use effect component did mount");

    dispatch(getUser());

    dispatch(getUser(localStorage.getItem("uidl")));
  }, [dispatch]);

  const search = () => {
    if (searchinput) {
      setSearchinput(false);
    } else {
      setSearchinput(true);
    }
  };
  let navigate = useNavigate();
  const logout = () => {
    auth.signOut().then(() => {
      localStorage.removeItem("uidl");
      navigate("/login");
    });
  };

  return (
    <>
      {localStorage.getItem("uidl") === null ? (
        <Login />
      ) : (
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div
              className="col-md-7 bg-dark text-light scroll"
              style={{ height: "100vh", overflowY: "scroll" }}
            >
              <Navbar
                className="shadow sticky-top"
                style={{ backgroundColor: "#6D62FF", margin: "-1.7vh" }}
                variant="dark"
              >
                <Container>
                  <Navbar.Brand className="fs-3">Wak Shaf</Navbar.Brand>

                  <div>
                    <Button
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                    >
                      <i className="fa-solid fa-ellipsis-vertical fs-4 text-light"></i>
                    </Button>
                    <Menu
                      transformOrigin={{ horizontal: "right", vertical: "top" }}
                      anchorOrigin={{ horizontal: "right", vertical: "top" }}
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <MenuItem className="p-3 pe-5" onClick={handleClose}>
                        <Link
                          to="/kontak"
                          className="text-decoration-none text-dark"
                        >
                          Lihat Kontak
                        </Link>
                      </MenuItem>

                      <MenuItem className="p-3 pe-5" onClick={handleClose}>
                        <Link
                          to="/profile"
                          className="text-decoration-none text-dark"
                        >
                          Setelan
                        </Link>
                      </MenuItem>
                      <Divider />
                      <MenuItem onClick={() => logout()}>Logout</MenuItem>
                    </Menu>
                  </div>
                </Container>
              </Navbar>
              {searchinput ? (
                <div className="mt-5">
                  <div className="row p-2 shadow  text-light">
                    <div
                      className="col-1 m-auto"
                      style={{ paddingRight: "0px" }}
                      onClick={() => search()}
                    >
                      <label>
                        <i className="fa-solid fa-arrow-left fs-4"></i>
                      </label>
                    </div>
                    <div className="col">
                      <input
                        type="search"
                        autoFocus
                        className="form-control shadow-none text-light search"
                        style={{ background: "transparent", border: "none" }}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mt-5 text-end me-4">
                  <i
                    className="fa-solid fa-magnifying-glass fs-4"
                    onClick={() => search()}
                  ></i>
                </div>
              )}
              <AllBubleCht data={mypin}/>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
