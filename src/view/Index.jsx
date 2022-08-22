import React, { useState } from 'react'
import { AllBubleCht } from '../components';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export const HomeCht = () => {
    const [searchinput, setSearchinput] = useState(false)

    const search = () => {
        if (searchinput) {
            setSearchinput(false)
        } else {
            setSearchinput(true)
        }

    }
    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-7 bg-dark text-light scroll" style={{ height: '100vh', overflowY: 'scroll' }}>
                        <Navbar className='shadow sticky-top' style={{ backgroundColor: '#6D62FF', margin: '-1.7vh' }} variant="dark">
                            <Container>
                                <Navbar.Brand className='fs-3'>Wak Shaf</Navbar.Brand>

                                {/* <label className='me-4'><i class="fa-solid fa-ellipsis-vertical fs-4"></i></label> */}

                                <div>
                                    <div className="dropdown me-4">
                                        <div className="dropdown" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown">
                                            <i className="fa-solid fa-ellipsis-vertical fs-4"></i>
                                        </div>
                                        <ul className="dropdown-menu" style={{ marginLeft: '-21vh' }} aria-labelledby="dropdownMenuButton1">
                                            <li><a className="dropdown-item" href="#">Add Kontak</a></li>
                                            <li><a className="dropdown-item" href="#">Lihat Kontak</a></li>
                                            <li><a className="dropdown-item" href="#">Setting</a></li>
                                        </ul>
                                    </div>

                                </div>


                            </Container>
                        </Navbar>
                        {
                            searchinput ? (
                                <div className='mt-5'>
                                    <div className="row p-2 shadow  text-light">
                                        <div className="col-1 m-auto" style={{ paddingRight: '0px' }} onClick={() => search()}>
                                            <label><i class="fa-solid fa-arrow-left fs-4"></i></label>
                                        </div>
                                        <div className="col">
                                            <input type="search" autoFocus className='form-control shadow-none text-light search' style={{ background: 'transparent', border: 'none' }} />
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className='mt-5 text-end me-4'>
                                    <i class="fa-solid fa-magnifying-glass fs-2" onClick={() => search()}></i>
                                </div>

                            )
                        }

                        <div>

                        </div>

                        <AllBubleCht />
                    </div>
                </div>

            </div >
        </>
    )
}
