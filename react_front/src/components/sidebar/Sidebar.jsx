import React from "react";
import { BiLibrary, BiSolidHome } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import playList from "../../redux/Spotify/playList";
import { TbWorld } from "react-icons/tb";

function Sidebar(props){
  return (
    <div className="w-[30%] sidebar">
      <div className="nav secondary_bg rounded-lg p-6">
        <div className="flex items-cente gap-4 mb-4"> 
          <BiSolidHome className="font-bold text-xl" />
          <span>Home</span>
        </div>
        <div className="flex items-cente gap-4"> 
          <FiSearch className="font-bold text-xl" />
          <span>Search</span>
        </div>  
        </div>
        <div className="flex justify-between items-center gap-4">
              <div className="flex gap-2 items-center">
                <BiLibrary className="font-bold text-xl" />
                <span>Your library</span>
              </div>
              <button className="hover:bg-black/25 rounded-[50%] p-2">
                <FaPlus className="font-bold text-xl"/>
              </button>
            </div> 
          <div className="your_library mt-2 secondary_bg rounded-lg px-2 py-2">
              <div className="leading-8 mt-2 tertiary_bg rounded-lg px-2 py-4">
              <p className="font-bold">Create your first playlist</p>
              <p className="font-semibold">It's easy, we'll help you</p>
              <button className="rounded-full text-black mt-4 px-4 py-0 bg-white font-semibold">  
                  Create Playlist
              </button>
            </div> 
            <div className="leading-8 mt-4 tertiary_bg rounded-lg px-2 py-2">
              <p className="font-bold">Lest's find some pofcast to follow</p>
              <p className="font-semibold">IWe'll keep you updated on new episodes</p>
              <button className="rounded-full text-black mt-4 px-4 py-0 bg-white font-semibold">  
                  Browse Podcast
              </button>
            </div> 
          </div>
          <div className="mt-4 px-4 flex gap-4 flex-wrap">
              <a className="text-xs mx-4 text-gray-300" href="#">Legal</a>
              <a className="text-xs mx-4 text-gray-300" href="#">Privacy Center</a>
              <a className="text-xs mx-4 text-gray-300" href="#">Privacy Policy</a>
              <a className="text-xs mx-4 text-gray-300" href="#">Cookies</a>
              <a className="text-xs mx-4 text-gray-300" href="#">About Ads</a>
              <a className="text-xs mx-4 text-gray-300" href="#">Accesiblity</a>
            </div>
            <button className="mx-4 mt-8 text-sm border-white border rounded-full flex gap-2 px-3 py-1 items-center text-white">
              <TbWorld/>
              <span className="text-white font-bold">English</span>
            </button>
    </div>
  );
}; 
  export default Sidebar;
      

   