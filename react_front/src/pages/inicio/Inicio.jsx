import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Home from "../../components/home/Home";


function Inicio (props){

    return(
        <div className="flex gap-2">
            <Sidebar />
            <div className="w-full"> 
                <Home/>
            </div>
        </div>
    )
}

export default Inicio;