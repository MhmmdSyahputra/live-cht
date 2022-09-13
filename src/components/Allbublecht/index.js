import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllMessage, getUser } from "../../action/MessageAction";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import axios from "axios";
import { store } from "../../index";

export const AllBubleCht = (data) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  
  const {
    getAllMessageResult,
    getAllMessageLoading,
    getAllMessageError,
    getUserResult,
  } = useSelector((state) => state.MessageReducer);

  // fungsi agar add langsung live
  useEffect(() => {
    // panggil action getlistkontak
    // console.log("1. use effect component did mount");

    dispatch(getAllMessage());

    dispatch(getUser(localStorage.getItem("uidl")));
  }, [dispatch]);

  const cht = (id) => {
    navigate(`/cht/${id}`);
  };

  return (
    <>
      {getAllMessageResult ? (
        // const mypin = store.getState().MessageReducer.getUserResult[0].pin),
        getAllMessageResult
          .filter((allmessage) => allmessage.member.includes(data.data))
          .map((allmessage) => {
            return (
              <div
                className="row mt-3 mb-2"
                key={allmessage.id}
                onClick={() => cht(allmessage.id)}
                style={{ cursor: "pointer" }}
              >
                <div className="col">
                  <div className="row">
                    <div className="col-3" style={{ width: "100px" }}>
                      <img
                        src="https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNhcnRvb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                        className="rounded-circle border border-white bg-light "
                        width="55"
                        alt=""
                      />
                    </div>
                    <div className="col m-auto text-start">
                      <label className="username fw-bold">
                        {allmessage.nama}
                      </label>

                      {allmessage.allmessage
                        .map((allmessage2, index) => (
                          <div className="message" key={index}>
                            {
                              //cek panjang pesan > 20 maka
                              allmessage2.pesan.length > 20 ? (
                                //cek apakah ini pesan saya atau bukan
                                allmessage2.uid ===
                                localStorage.getItem("uid") ? (
                                  <div>
                                    <i className="fa-solid fa-check me-2"></i>
                                    {allmessage2.pesan.slice(0, 25) + ". . ."}
                                  </div>
                                ) : (
                                  //jika bukan maka tanpa ceklis
                                  allmessage2.pesan.slice(0, 25) + ". . ."
                                )
                              ) : //else panjang < 20
                              //cek lagi apakah ini pesan saya atau bukan
                              allmessage2.uid ===
                                localStorage.getItem("uidl") ? (
                                <div>
                                  <i className="fa-solid fa-check me-2"></i>
                                  {allmessage2.pesan}
                                </div>
                              ) : (
                                //jika bukan maka tanpa ceklis
                                allmessage2.pesan
                              )
                            }
                          </div>
                          // console.log(allmessage2.Aceh.pesan)
                        ))
                        .reverse()
                        .slice(0, 1)}
                      {/* {allmessage.allmessage.Aceh.pesan} */}
                    </div>
                  </div>
                </div>
              </div>
            );
          })
      ) : getAllMessageLoading ? (
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
        <p>{getAllMessageError ? getAllMessageError : "data kosong"}</p>
      )}
    </>
  );
};
