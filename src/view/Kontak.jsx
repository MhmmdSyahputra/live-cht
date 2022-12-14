import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, getAllUser, addNewKontak } from "../action/MessageAction";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {MyKontak} from"../components/"

export const Kontak = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { getUserResult, getUserLoading, getUserError, getAllUserResult } =
    useSelector((state) => state.MessageReducer);
  const [nama, setNama] = useState();
  const [pin, setPin] = useState();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(getUser(localStorage.getItem("uidl")));
    dispatch(getAllUser());
  }, []);

  const simpanNewkontak = () => {
    // getAllUserResult.map((user) => {
    //     if (pin == user.pin) {
    //         getUserResult.map((me) => {
    //             if (pin !== me.pin) {
    //                 if (me.mykontak.length > 0) {
    //                     me.mykontak.map((myfriend) => {
    //                         if (pin !== myfriend.pin) {
    //                             dispatch(addNewKontak({ uid: user.uid, name: nama, pin: user.pin, email: user.email, photo: user.photo, status: user.status }))
    //                         } else {
    //                             swal({
    //                                 title: "Akun Sudah ada",
    //                                 text: "akun yang anda tambah sudah ada",
    //                                 icon: "warning",
    //                                 button: "Oke"
    //                             })
    //                             return false
    //                         }
    //                     })
    //                 } else {
    //                     dispatch(addNewKontak({ uid: user.uid, name: nama, pin: user.pin, email: user.email, photo: user.photo, status: user.status }))
    //                 }
    //             } else {
    //                 swal({
    //                     title: "Aneh",
    //                     text: "Pin kau itu blokk!",
    //                     icon: "warning",
    //                     button: "Oke"
    //                 })
    //             }
    //         })
    //     } else {
    //         // swal({
    //         //     title: "Akun Tidak Ditemukan",
    //         //     text: "Pin yang anda masukan salah!",
    //         //     icon: "error",
    //         //     button: "Oke"
    //         // })
    //     }

    // })

    getAllUserResult.map((alluser) => {
      getUserResult.map((me) => {
        // jika kontak saya tidak kosong
        if (me.mykontak.length > 0) {
          me.mykontak.map((kontakme) => {
            console.log(kontakme.pin);
            // jika  pin input == pin yg ada
            // dan pin input != mypin dan
            // pin != pin yg ada dikontakku
            //maka lakukan
            if (
              (pin == alluser.pin) &
              (pin !== me.pin) &
              (pin !== kontakme.pin)
            ) {
              dispatch(
                addNewKontak({
                  uid: alluser.uid,
                  name: nama,
                  pin: alluser.pin,
                  email: alluser.email,
                  photo: alluser.photo,
                  status: alluser.status,
                })
              );
            } else {
              // jika tidak memenuhi berarti salah
              swal({
                title: "Akun Tidak Ditemukan",
                text: "Pin yang anda masukan salah!",
                icon: "error",
                button: "Oke",
              });
            }
          });
        } else {
          // jika mykontak masik kosong maka hanya cek
          // pin == pin yg ada dan
          // pin != pin saya
          // maka lakukan
          if ((pin == alluser.pin) & (pin !== me.pin)) {
            dispatch(
              addNewKontak({
                uid: alluser.uid,
                name: nama,
                pin: alluser.pin,
                email: alluser.email,
                photo: alluser.photo,
                status: alluser.status,
              })
            );
          } else {
            swal({
              title: "Akun Tidak Ditemukan",
              text: "Pin yang anda masukan salah!",
              icon: "error",
              button: "Oke",
            });
          }
        }
      });
    });

    setOpen(false);
    setNama("");
    setPin("");
  };

  // useEffect(() => {
  //     if (getAllUserResult) {

  //     }
  // }, [getAllUserResult, dispatch])

  const back = () => {
    navigate("/");
  };

  return (
    <>
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
                <Navbar.Brand className="fs-3">
                  <div className="row">
                    <div className="col-1" onClick={() => back()}>
                      <i className="fa-solid fa-caret-left fs-1 me-4"></i>
                    </div>
                    <div className="col">Pilih Kontak</div>
                  </div>
                </Navbar.Brand>
              </Container>
            </Navbar>

            <div className="mt-5">
              <div
                className="row mt-3 mb-2"
                onClick={handleClickOpen}
                style={{ cursor: "pointer" }}
              >
                <div className="col">
                  <div className="row">
                    <div className="col-3" style={{ width: "100px" }}>
                      <img
                        src="https://media.istockphoto.com/photos/human-crowd-forming-plus-sign-picture-id1065159078?b=1&k=20&m=1065159078&s=170667a&w=0&h=GTjB8DB440kPLV18foU1UN88OL5fxZVW2Ivfb6cm7hc="
                        className="rounded-circle border border-white bg-light "
                        width="55"
                        alt=""
                      />
                    </div>
                    <div className="col m-auto text-start">
                      <label className="username fw-bold">Kontak Baru</label>
                    </div>
                  </div>
                </div>
              </div>

              {/* add kontak pop up */}
              <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Tambah Kontak Baru</DialogTitle>
                <DialogContent>
                  <div className="row">
                    <div className="col">
                      <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        value={nama}
                        onChange={(e) => setNama(e.target.value)}
                        autoComplete="off"
                        label="Name"
                        type="text"
                        fullWidth
                        variant="standard"
                      />
                    </div>
                    <div className="col">
                      <TextField
                        margin="dense"
                        id="pin"
                        value={pin}
                        onChange={(e) => setPin(e.target.value)}
                        label="Pin"
                        autoComplete="off"
                        type="text"
                        fullWidth
                        variant="standard"
                      />
                    </div>
                  </div>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button onClick={simpanNewkontak}>Save</Button>
                </DialogActions>
              </Dialog>
            </div>

            <div className="text-muted mt-4 text-start fs-5">
              Daftar Kontak Saya
            </div>
            <MyKontak />
          </div>
        </div>
      </div>
    </>
  );
};
