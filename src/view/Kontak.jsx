import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from "../action/MessageAction";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export const Kontak = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { getUserResult, getUserLoading, getUserError } = useSelector((state) => state.MessageReducer)

    useEffect(() => {
        dispatch(getUser(localStorage.getItem("uidl")))
    }, [])

    const back = () => {
        navigate('/')
    }

    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-7 bg-dark text-light scroll" style={{ height: '100vh', overflowY: 'scroll' }}>
                        <Navbar className='shadow sticky-top' style={{ backgroundColor: '#6D62FF', margin: '-1.7vh' }} variant="dark">
                            <Container>
                                <Navbar.Brand className='fs-3'>
                                    <div className="row">
                                        <div className="col-1" onClick={() => back()}>
                                            <i className="fa-solid fa-caret-left fs-1 me-4"></i>
                                        </div>
                                        <div className="col">Pilih Kontak</div>
                                    </div>
                                </Navbar.Brand>
                            </Container>
                        </Navbar>


                        <div className='mt-5'>
                            <div className="row mt-3 mb-2" style={{ cursor: 'pointer' }}>
                                <div className="col">
                                    <div className="row">
                                        <div className="col-3" style={{ width: '100px' }}>
                                            <img src='https://media.istockphoto.com/photos/human-crowd-forming-plus-sign-picture-id1065159078?b=1&k=20&m=1065159078&s=170667a&w=0&h=GTjB8DB440kPLV18foU1UN88OL5fxZVW2Ivfb6cm7hc=' className="rounded-circle border border-white bg-light " width='55' alt="" />
                                        </div>
                                        <div className="col m-auto text-start">
                                            <label className='username fw-bold'>Kontak Baru</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='text-muted mt-4 text-start fs-5'>Daftar Kontak Saya</div>
                        {
                            getUserResult ? (
                                getUserResult.map((user) => {
                                    return (
                                        <div>
                                            {
                                                user.mykontak.length > 0 ? (
                                                    user.mykontak.map((kontakme, index) => {
                                                        return (

                                                            <div className='mt-4'>

                                                                <div className="row mt-3 mb-2" key={index} style={{ cursor: 'pointer' }}>
                                                                    <div className="col">
                                                                        <div className="row">
                                                                            <div className="col-3" style={{ width: '100px' }}>

                                                                                <img src={kontakme.photo} className="rounded-circle border border-white bg-light " width='55' alt="" />
                                                                            </div>
                                                                            <div className="col m-auto text-start">
                                                                                <label className='username fw-bold'>{kontakme.name}</label>
                                                                                <div className='status'>
                                                                                    <label className='username fw-bold'>ada</label>
                                                                                </div>

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                ) : (
                                                    <label className='username fw-bold mt-4'>Kontak anda masih Kosong</label>
                                                )
                                            }
                                        </div>

                                    )
                                })
                            ) : getUserLoading ? (
                                <div>
                                    <Box style={{ width: '100%' }} >
                                        <div className="row mb-3">
                                            <div className="col-1 me-3"><Skeleton animation="wave" variant="circular" width={40} height={40} /></div>
                                            <div className="col">
                                                <Skeleton width={70} />
                                                <Skeleton animation="wave" />
                                            </div>
                                        </div>
                                    </Box>
                                    <Box style={{ width: '100%' }} >
                                        <div className="row mb-3">
                                            <div className="col-1 me-3"><Skeleton animation="wave" variant="circular" width={40} height={40} /></div>
                                            <div className="col">
                                                <Skeleton width={70} />
                                                <Skeleton animation="wave" />
                                            </div>
                                        </div>
                                    </Box>
                                    <Box style={{ width: '100%' }} >
                                        <div className="row mb-3">
                                            <div className="col-1 me-3"><Skeleton animation="wave" variant="circular" width={40} height={40} /></div>
                                            <div className="col">
                                                <Skeleton width={70} />
                                                <Skeleton animation="wave" />
                                            </div>
                                        </div>
                                    </Box>
                                    <Box style={{ width: '100%' }} >
                                        <div className="row mb-3">
                                            <div className="col-1 me-3">
                                                <Skeleton animation="wave" variant="circular" width={40} height={40} />
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
                            )
                        }




                    </div>
                </div>
            </div>

        </>
    )
}
