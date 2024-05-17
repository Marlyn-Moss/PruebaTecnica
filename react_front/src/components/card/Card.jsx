import React from "react";
import { FaPlay } from "react-icons/fa";

function Card(){

    return(
        <>
            <div className="card col-span-2 secundary_bg p-4 rounded-lg">
                <img src="https://i1.sndcdn.com/artworks-000138912548-0unoss-t500x500.jpg" alt="" />
                <button className="flex items-center play_btn bottom-0 right-0 justify-center rounded-[50%] p-3 bg-green-500">
                    <FaPlay className="text-black text-2xl"/>
                </button>
                <h3 className="text-xl font-semibold my-2">ROCK</h3>
                <p className="text-xs text-white leading-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
        </>
    )
}

export default Card;