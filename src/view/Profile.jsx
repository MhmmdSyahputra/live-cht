import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { store } from '../index'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export const Profile = () => {
    const { getUserResult, getUserLoading, getUserError } = useSelector((state) => state.MessageReducer)
    const navigate = useNavigate()
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
                                        <div className="col">Profile</div>
                                    </div>
                                </Navbar.Brand>
                            </Container>
                        </Navbar>
                        {
                            getUserResult ? (
                                getUserResult.map((data, index) => {
                                    return (
                                        <div key={index}>
                                            <img src={data.photo} width='200' height='200' className='rounded-circle mb-5 mt-5' alt="" />
                                            <div className="row text-start mb-5 ms-4">
                                                <div className="col-1" >
                                                    <i className="fa-solid fa-user fs-2"></i>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className='text-muted fs-5'>Nama</div>
                                                    <div className="col text-start fs-4">{data.name}</div>
                                                </div>
                                            </div>

                                            <div className="row text-start ms-4">
                                                <div className="col-1">
                                                    <i className="fa-solid fa-hashtag fs-2"></i>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className='text-muted fs-5'>Pin</div>
                                                    <div className="col text-start fs-4">{data.uid}</div>
                                                </div>
                                            </div>
                                        </div>

                                    )
                                })
                            ) : ''
                        }




                    </div>
                </div>
            </div>
        </>
    )
}
