import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { SingleCht } from '../components';
import { useNavigate } from "react-router-dom";
import { nanoid } from 'nanoid'
import { useDispatch, useSelector } from 'react-redux'
import { sendMessage } from "../action/MessageAction";
import { useEffect } from 'react';
import { getAllMessage } from '../action/MessageAction';


export const PersonalChat = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();

    // jika uid sudah ada di local storage maka pakai uid itu jika belum ada maka create new uid
    const [uid, setUid] = useState(localStorage.getItem("uidl"))

    const [nama, setNama] = useState("Anonymous")
    const [pesan, setPesan] = useState("")

    const now = new Date()
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const time = hours + ":" + minutes

    const { sendMessageInResult } = useSelector((state) => state.MessageReducer)

    const back = () => {
        navigate('/');
    }

    const sendmessage = (e) => {
        e.preventDefault();
        // jika localStorage uid masih kosong maka masukkan new id kelocalstorage
        
        dispatch(sendMessage({ uid: uid, nama: nama, pesan: pesan, time: time }))
    }
    useEffect(() => {
        if (sendMessageInResult) {
            dispatch(getAllMessage())
            setPesan('')
        }
    }, [sendMessageInResult, dispatch])

    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-7 bg-dark text-light scroll" style={{ height: '100vh' }}>
                        <Navbar className='shadow sticky-top' style={{ backgroundColor: '#6D62FF', margin: '-1.7vh' }} variant="dark">
                            <Container>
                                <Navbar.Brand className=''>
                                    <div className="row">
                                        <div className="col-1 ms-2 m-auto" style={{ cursor: 'pointer' }} onClick={() => back()}>
                                            <label><i className="fa-solid fa-caret-left fs-1"></i></label>
                                        </div>
                                        <div className="col-2 m-auto">
                                            <img src="https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNhcnRvb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className="rounded-circle border border-white bg-light  me-3" width='50' alt="" />
                                        </div>
                                        <div className="col m-auto">
                                            <label className='username fs-5'>Muhammad Syahputra</label>
                                        </div>
                                    </div>
                                </Navbar.Brand>
                            </Container>
                        </Navbar>

                        <div className="row">
                            <div className="col-md-13 scroll" style={{ height: '80vh', overflowY: 'scroll' }}>
                                <br />
                                <SingleCht />
                            </div>

                            <div className="col-md-13 ">
                                <form action="" onSubmit={(e) => sendmessage(e)}>
                                    <div className="d-flex mt-1 mb-2">
                                        <textarea placeholder="Pesan . . ." style={{ borderRadius: '15px' }} className='form-control me-2' value={pesan} onChange={(e) => setPesan(e.target.value)}></textarea>

                                        <button style={{ width: '10vh', background: '#6D62FF', borderRadius: '15px' }} className='' ><i className="fa-solid fa-paper-plane fs-3 text-dark"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>



                    </div>
                </div>

            </div >
        </>
    )
}
