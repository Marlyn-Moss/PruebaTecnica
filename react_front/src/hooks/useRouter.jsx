import React from "react";
import { Route, Routes } from "react-router-dom";
import Inicio from "../pages/inicio/Inicio";
import Home from "../components/home/Home";

function useRouter(){

    const RouterProvider = () => {
        return (
            <Routes>
                <Route path="/" element={<Inicio />} />
            </Routes>
        )
    }
    return {
        RouterProvider
    }
}

export default useRouter

