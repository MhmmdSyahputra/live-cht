import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { getAllMessage } from '../../action/MessageAction';

export const AllBubleCht = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const { getAllMessageResult, getAllMessageLoading, getAllMessageError } = useSelector((state) => state.MessageReducer)

    // fungsi agar add langsung live
    useEffect(() => {
        // panggil action getlistkontak
        // console.log("1. use effect component did mount");
        dispatch(getAllMessage());

    }, [dispatch])

    const cht = (id) => {
        navigate(`/cht/${id}`);
    }
    return (
        <>
            {
                getAllMessageResult ? (
                    getAllMessageResult.map((allmessage) => {
                        return (
                            <div className="row mt-3 mb-2" key={allmessage.id} onClick={() => cht(allmessage.id)} style={{ cursor: 'pointer' }}>
                                <div className="col">
                                    <div className="row">
                                        <div className="col-3" style={{ width: '100px' }}>
                                            <img src="https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNhcnRvb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className="rounded-circle border border-white bg-light " width='55' alt="" />
                                        </div>
                                        <div className="col m-auto text-start">
                                            <label className='username fw-bold'>{allmessage.nama}</label>

                                            {
                                                allmessage.allmessage
                                                    .map((allmessage2, index) => (
                                                        <div className='message' key={index}>
                                                            {allmessage2.pesan}
                                                        </div>
                                                        // console.log(allmessage2.Aceh.pesan)

                                                    )).reverse().slice(0, 1)

                                            }
                                            {/* {allmessage.allmessage.Aceh.pesan} */}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        )

                    })
                ) : getAllMessageLoading ? (
                    <p>loading...</p>
                ) : (
                    <p>{getAllMessageError ? getAllMessageError : "data kosong"}</p>
                )
            }

        </>
    )
}
