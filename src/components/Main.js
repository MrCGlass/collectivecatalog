import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import CatalogPage from '../pages/CatalogPage'
import AboutPage from '../pages/AboutPage'

const Main = () => {
    return (
        <Routes>
            <Route exact path='/' element={<HomePage/>}></Route>
            <Route exact path='/Catalogs' element={<CatalogPage/>}></Route>
            <Route exact path='/About-Us' element={<AboutPage/>}></Route>
        </Routes>
    );
}

export default Main;