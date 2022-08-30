import React, { useEffect } from "react"
import { Route, Routes } from "react-router-dom";
import { HomeCht } from "../view/Index";
import { PersonalChat } from "../view/Chat";
import { Login } from "../view/login";
import { Profile } from "../view/Profile";
import { getUser } from "../action/MessageAction";
import { useDispatch } from "react-redux";
import { store } from "../index";

const Pages = () => {
    // const dispatch = useDispatch()
    // const uid = store.getState().MessageReducer.getUserResult[0].uid
    // useEffect(() => {
    //     dispatch(getUser(uid))
    // }, [])

    return (
        <>

            <Routes>
                <Route path='/' element={<HomeCht />} />
                <Route path='/cht/:id' element={<PersonalChat />} />
                <Route path='/login' element={<Login />} />
                <Route path='/profile' element={<Profile />} />
            </Routes>
        </>
    )
}

export default Pages