import { FaBackward, FaForward } from "react-icons/fa";
import Card from "../card/Card";

function Home (props){
    return(
        <>
        <div className="flex justify-between items-center w-full">
            <div>
                <span>{"<"}</span>
                <span>{">"}</span>
            </div>
            <div>
                <button className="rounded-full mt-4 px-8 text-lg py-2 text-white font-semibold">
                    Sing Up
                </button>
                <button className="rounded-full mt-4 text-lg px-8 py-3 text-white font-semibold">
                    Sing Up free
                </button>
            </div>
        </div>  
        <div className="tertiary_bg">
            <div className="grid px-4 py-4 gap-4 grid-cols-8">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div> 
        </div>


        </>
    ) 
}

export default Home;