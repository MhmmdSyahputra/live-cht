import React from 'react'
import { useState, useEffect } from 'react';
import firebase from '../config/index';
import { signInWithGoogle } from '../config/index';
import { auth } from '../config/index'
import GoogleButton from 'react-google-button'
import { HomeCht } from './Index';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [user, setUser] = useState(null);
    let navigate = useNavigate();

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            setUser(user);
        })
    }, [])
    // console.log(user.displayName);




    console.log(user);
    return (
        <>
            {
                user ? (navigate(`/`)) : (
                    <div className="container">

                        <div className="row d-flex justify-content-center my-5">
                            <div className="col-md-5 bg-dark text-center text-light" >
                                <h2 className='m-3'>Welcome To My Aplication</h2>
                            </div>

                            <div className="col-md-4 p-1" style={{ backgroundColor: '#D3D3D3' }}>
                                <div className='h2 mb-4 mt-5'>Live Chat PT</div>

                                <form action="#" className='p-4'>
                                    <div className='h6  mb-4'>Welcome to Live Chat Me</div>
                                    <div className="form-floating m-3">
                                        <input type="email" className="form-control ps-4" id="email" placeholder="Email" autocomplete="off" style={{ borderRadius: '30px' }} />
                                        <label for="email" className='ps-4'>Email</label>
                                    </div>

                                    <div className="form-floating m-3">
                                        <input type="password" name="password" id="password" placeholder="Password" className="form-control ps-4" style={{ borderRadius: '30px' }} />
                                        <label for="Password" className='ps-4'>Password</label>
                                    </div>

                                    <button className='btn btn-primary p-2' style={{ width: '50%', borderRadius: '20px' }}>Login</button>

                                </form>
                                <label className='mt-4 mb-4 text-center fw-bold' >Or</label>

                                <div className="d-flex justify-content-center mb-5">
                                    <GoogleButton
                                        label='Sign Up With Google'
                                        onClick={signInWithGoogle}
                                    />
                                </div>
                            </div>

                        </div>


                        {/* <div className="row m-auto d-flex justify-content-center" >
                    <div className="col-md-8 bg-info p-5" style={{ marginTop: '10vh', borderRadius: '20px' }}>
                        <div className="row" style={{ padding: '-40px' }}>
                            <div className="col-md-6 bg-dark">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore perspiciatis similique placeat dolores esse quam optio dicta! Voluptatibus, aperiam praesentium accusantium explicabo nisi quo inventore velit adipisci voluptatem aliquam illum!
                            </div>
                            <div className="col-md-5 m-auto">
                                <div className='h1 mb-5'>Live Chat PT</div>

                                <div className='h6 mt-5 mb-4'>Welcome to Live Chat Me</div>
                                <form action="" className='mb-4'>
                                    <input type="email" className='form-control mb-4' placeholder='Email' style={{ borderRadius: '20px', height: '6vh' }} />
                                    <input type="password" className='form-control mb-4' placeholder='password' style={{ borderRadius: '20px', height: '6vh' }} />
                                    <button className='btn btn-primary' style={{ width: '50%', borderRadius: '20px' }}>Login</button>
                                </form>

                                <label className='mt-4 mb-4 bg-info text-center fw-bold' >Or</label>

                                <div className="d-flex justify-content-center">
                                    <GoogleButton
                                        label='Sign Up With Google'
                                        onClick={signInWithGoogle}
                                    />
                                </div>

                            </div>

                        </div>
                    </div>

                </div> */}
                    </div>
                )
            }


            {/* <button className='btn btn-info' onClick={signInWithGoogle}>Login</button>
            <button className="button signout" onClick={() => auth.signOut()}>Sign out</button> */}
        </>
    )
}
