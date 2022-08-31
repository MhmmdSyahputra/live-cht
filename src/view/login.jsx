import React from 'react'
import { useState, useEffect } from 'react';
import firebase from '../config/index';
import { signInWithGoogle } from '../config/index';
import { auth } from '../config/index'
import GoogleButton from 'react-google-button'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { addUser, getUser } from "../action/MessageAction";
import axios from 'axios';
import { nanoid } from 'nanoid';


export const Login = () => {
    const [users, setUsers] = useState("");

    let navigate = useNavigate();
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getUser("kRuqzk2ZTGMstuqaJTOdX8w3yt33"))
    // }, [])

    const login = () => {
        signInWithGoogle()
        firebase.auth().onAuthStateChanged(user => {
            // dispatch(getUser(user.uid))

            axios.get('http://localhost:3000/user?uid=' + user.uid)
                .then(function (response) {
                    const status = "hey im new user in aplication"
                    const pin = nanoid(7)
                    if (response.data.length == 1) {
                        sessionStorage.setItem("uidl", user.uid);
                    } else {
                        dispatch(addUser({ uid: user.uid, pin: pin, name: user.displayName, email: user.email, photo: user.photoURL, status: status, mykontak: [] }))
                    }
                    dispatch(getUser(user.uid))
                    // handle success
                    // console.log(response.data.length);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })

            // console.log(getUserResult);
            setUsers(user);
            localStorage.setItem("uidl", user.uid);

        })
    }

    return (
        <>
            {
                users ? (navigate('/')) : (
                    <div className="container">

                        <div className="row d-flex justify-content-center my-5">
                            <div className="col-md-5 bg-dark text-center text-light" >
                                <h2 className='m-3'>Welcome To My Aplication</h2>
                            </div >

                            <div className="col-md-4 p-1" style={{ backgroundColor: '#D3D3D3' }}>
                                <div className='h2 mb-4 mt-5'>Live Chat PT</div>

                                <form action="#" className='p-4'>
                                    <div className='h6  mb-4'>Welcome to Live Chat Me</div>
                                    <div className="form-floating m-3">
                                        <input type="email" className="form-control ps-4" id="email" placeholder="Email" autoComplete="off" style={{ borderRadius: '30px' }} />
                                        <label htmlFor="email" className='ps-4'>Email</label>
                                    </div>

                                    <div className="form-floating m-3">
                                        <input type="password" name="password" id="password" placeholder="Password" className="form-control ps-4" style={{ borderRadius: '30px' }} />
                                        <label htmlFor="Password" className='ps-4'>Password</label>
                                    </div>

                                    <button className='btn btn-primary p-2' style={{ width: '50%', borderRadius: '20px' }}>Login</button>

                                </form>
                                <label className='mt-4 mb-4 text-center fw-bold' >Or</label>

                                <div className="d-flex justify-content-center mb-5">
                                    <GoogleButton
                                        label='Sign Up With Google'
                                        onClick={() => login()}
                                    />
                                </div>
                            </div>

                        </div >

                    </div >
                )
            }


            {/* <button className='btn btn-info' onClick={signInWithGoogle}>Login</button>
            <button className="button signout" onClick={() => auth.signOut()}>Sign out</button> */}
        </>
    )
}
