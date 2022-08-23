import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getAllPesanIn, getAllMessage } from '../../action/MessageAction';


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
                                    <div style={{ width: '70%' }} className='ms-auto' key={index}>
                                        <div className='bubble-chat bg-light m-2 p-3 text-start text-dark shadow cht-right'
                                            style={{ clear: 'both', float: 'right', }}>

                                            <h6 className='text-muted text-end'>{allPesanIn2.nama}</h6>
                                            <div>
                                                {allPesanIn2.pesan}
                                            </div>
                                            <div className='text-muted mx-2 text-start'>
                                                12-12-12
                                            </div>
                                        </div>
                                    </div>

                                )
                            })
                        )

                    })
                ) : getAllMessageInLoading ? (
                    <p>Bentar Cok</p>
                ) : (
                    <p>{getAllMessageInError ? getAllMessageInError : "data kosong"}</p>
                )
            }


        </>
    )
}
