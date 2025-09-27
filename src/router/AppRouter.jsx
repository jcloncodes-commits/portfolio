import React from "react"
import { createBrowserRouter } from "react-router-dom"
//Main Layout
import MainLayout from "../layouts"

//feautures or pages
import Home from '../features/home/index'
import Works from '../features/work/index'


const AppRouter = createBrowserRouter([
    {
        path:'/portfolio',
        element: <MainLayout/>,
        children: [
            { index: true, element: <Home/> },
            { path: "works", element: <Works/> }
        ]
    }
])
export default AppRouter