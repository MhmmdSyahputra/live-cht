import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUser,
  getAllUser,
  getAllMessage,
  inRoomcht,
} from "../../action/MessageAction";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const MyKontak = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    getUserResult,
    getUserLoading,
    getUserError,
    getAllUserResult,
    getAllMessageResult,
    inRoomchtResult,
  } = useSelector((state) => state.MessageReducer);
  const [nama, setNama] = useState();
  const [pin, setPin] = useState();

  useEffect(() => {
    dispatch(getUser(localStorage.getItem("uidl")));
    dispatch(getAllUser());
    dispatch(getAllMessage());
  }, []);

  const inCht = (friendpin, mypin) => {
    getAllMessageResult.map((room) => {
      if (room.nama == mypin + " and " + friendpin) {
        axios({
          method: "get",
          url: "http://localhost:3000/room?nama=" + mypin + " and " + friendpin,
          
        }).then(function (response) {
            navigate('/cht/'+response.data[0].id)
          console.log(response.data[0].id);
        });
       
      } else {
        console.log("gadak");
      }
    });
  };

  return (
    <>
      {getUserResult ? (
        getUserResult.map((user, index) => {
          return (
            <div key={index}>
              {user.mykontak.length > 0 ? (
                user.mykontak.map((kontakme, index) => {
                  return (
                    <div
                      className="row mt-3 mb-2"
                      key={index}
                      style={{ cursor: "pointer" }}
                      onClick={() => inCht(kontakme.pin, user.pin)}
                    >
                      <div className="col">
                        <div className="row">
                          <div className="col-3" style={{ width: "100px" }}>
                            <img
                              src={kontakme.photo}
                              className="rounded-circle border border-white bg-light "
                              width="55"
                              alt=""
                            />
                          </div>
                          <div className="col m-auto text-start">
                            <label className="username fw-bold">
                              {kontakme.name}
                            </label>
                            <div className="status">
                              <label className="username fw-bold">
                                {kontakme.status}{" "}
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <label className="username fw-bold mt-4">
                  Kontak anda masih Kosong
                </label>
              )}
            </div>
          );
        })
      ) : getUserLoading ? (
        <div>
          <Box style={{ width: "100%" }}>
            <div className="row mb-3">
              <div className="col-1 me-3">
                <Skeleton
                  animation="wave"
                  variant="circular"
                  width={40}
                  height={40}
                />
              </div>
              <div className="col">
                <Skeleton width={70} />
                <Skeleton animation="wave" />
              </div>
            </div>
          </Box>
          <Box style={{ width: "100%" }}>
            <div className="row mb-3">
              <div className="col-1 me-3">
                <Skeleton
                  animation="wave"
                  variant="circular"
                  width={40}
                  height={40}
                />
              </div>
              <div className="col">
                <Skeleton width={70} />
                <Skeleton animation="wave" />
              </div>
            </div>
          </Box>
          <Box style={{ width: "100%" }}>
            <div className="row mb-3">
              <div className="col-1 me-3">
                <Skeleton
                  animation="wave"
                  variant="circular"
                  width={40}
                  height={40}
                />
              </div>
              <div className="col">
                <Skeleton width={70} />
                <Skeleton animation="wave" />
              </div>
            </div>
          </Box>
          <Box style={{ width: "100%" }}>
            <div className="row mb-3">
              <div className="col-1 me-3">
                <Skeleton
                  animation="wave"
                  variant="circular"
                  width={40}
                  height={40}
                />
              </div>
              <div className="col">
                <Skeleton width={70} />
                <Skeleton animation="wave" />
              </div>
            </div>
          </Box>
        </div>
      ) : (
        <p>{getUserError ? getUserError : "data kosong"}</p>
      )}
    </>
  );
};
