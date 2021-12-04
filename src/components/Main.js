import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'

import Homepage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'

const Main = () => {
    return (
        <Routes>
            <Route exact path='/' element={<HomePage/>}></Route>
            <Route exact path='/Catalogs' element={<LoginPage/>}></Route>
        </Routes>
    );
}

export default Main 