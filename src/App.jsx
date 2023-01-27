import { useState } from 'react'
import {
    createBrowserRouter,
    Route,
    createRoutesFromElements,
    RouterProvider
} from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import PageTwo from './pages/PageTwo'
import './index.css'
import RootLayout from './pages/RootLayout';
import Footer from "./pages/Footer.jsx";
import Pagethree from "./pages/Pagethree.jsx";
import PageThree2 from "./pages/PageThree2.jsx";
import PageThree3 from "./pages/PageThree3.jsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayout />}>
            <Route index element={<Home/>} />
            <Route path="pagetwo" element={<PageTwo/>}/>
            <Route path="pagethree" element={<Pagethree />}>
                <Route path="pagethree2" element={<PageThree2 />} />
                <Route path='PageThree3' element={<PageThree3 />} />
            </Route>
        </Route>
    )
)

function App(){
    return (
        <RouterProvider router={router}/>
    );
}

export default App;