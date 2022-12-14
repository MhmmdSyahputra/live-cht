import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getAllPesanIn, getAllMessage } from '../../action/MessageAction';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export const SingleCht = () => {
    const params = useParams();

    const dispatch = useDispatch();

    const { getAllMessageInResult, sendMessageInResult, getAllMessageInLoading, getAllMessageInError } = useSelector((state) => state.MessageReducer)


    useEffect(() => {
        if (sendMessageInResult) {
            dispatch(getAllMessage())

        }
    }, [sendMessageInResult, dispatch])

    useEffect(() => {
        if (getAllMessageInResult) {
            dispatch(getAllMessage())

        }
    }, [getAllMessageInResult, dispatch])

    // useEffect(() => {
    //     const id = params.id
    //     dispatch(getAllPesanIn(id)).scrollIntoView({ behavior: "smooth" })
    // }, [])

    useEffect(() => {
        const id = params.id
        dispatch(getAllPesanIn(id))
    }, [])

    return (
        <>
            {
                getAllMessageInResult ? (
                    getAllMessageInResult.map((allPesanIn) => {
                        return (
                            allPesanIn.allmessage.map((allPesanIn2, index) => {
                                return (
                                    <div style={{ width: '70%' }} className={allPesanIn2.uid === localStorage.getItem("uidl") ? 'ms-auto' : ''} key={index}>
                                        <div className='bubble-chat bg-light m-2 p-3 text-start text-dark shadow cht-right'
                                            style={{ clear: 'both', float: allPesanIn2.uid === localStorage.getItem("uidl") ? 'right' : 'left', borderRadius: '20px' }}>

                                            <h6 className={'text-muted ' + (allPesanIn2.uid === localStorage.getItem("uidl") ? 'text-end' : 'text-start')}>
                                                {allPesanIn2.nama}
                                            </h6>
                                            <div>
                                                {allPesanIn2.pesan}
                                            </div>
                                            <div className='text-muted mx-2 text-start'>
                                                {allPesanIn2.time}
                                            </div>
                                        </div>
                                        <div style={{ float: "left", clear: "both" }}
                                            ref={(el) => { allPesanIn2 = el; }}>
                                        </div>
                                    </div>

                                )
                            })
                        )

                    })
                ) : getAllMessageInLoading ? (
                    <div>
                        <Skeleton animation="wave" className='ms-auto' style={{ width: '70%', height: '18vh' }} />
                        <Skeleton animation="wave" className='' style={{ width: '60%', height: '15vh' }} />
                        <Skeleton animation="wave" className='ms-auto' style={{ width: '30%', height: '15vh' }} />
                        <Skeleton animation="wave" className='ms-auto' style={{ width: '50%', height: '15vh' }} />
                        <Skeleton animation="wave" className='' style={{ width: '50%', height: '15vh' }} />
                    </div>

                ) : (
                    <p>{getAllMessageInError ? getAllMessageInError : "data kosong"}</p>
                )
            }


        </>
    )
}
