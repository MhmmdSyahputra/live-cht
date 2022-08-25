import React from "react"
import { Route, Routes } from "react-router-dom";
import { HomeCht } from "../view/Index";
import { PersonalChat } from "../view/Chat";
import { Login } from "../view/login";
const Pages = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<HomeCht />} />
                <Route path='/cht/:id' element={<PersonalChat />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </>
    )
}

export default Pages