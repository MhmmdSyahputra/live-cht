import React from "react"
import { Route, Routes } from "react-router-dom";
import { HomeCht } from "../view/Index";
import { PersonalChat } from "../view/Chat";
const Pages = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<HomeCht />} />
                <Route path='/cht/:id' element={<PersonalChat />} />
            </Routes>
        </>
    )
}

export default Pages