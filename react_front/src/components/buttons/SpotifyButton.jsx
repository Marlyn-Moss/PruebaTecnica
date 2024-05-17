import React from "react";
import { useEffect } from "react";


const handleOnClick = () => {
  const client_id = process.env.CLIENT_ID;
  const client_secret = process.env.CLIENT-SECRET;
  const redirect_uri = process.env.REDIRECT_URL_AFTER_LOGIN;
  const api_uri = process.env.SPOTIFY_AUTHORIZE_ENDPOINT;
  const scope = [
    "user-read-private",
    "user-read-email",
    "user-modify-playback-state",
    "user-read-playback-state",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-top-read",

  ];
  window.location.href = `${api_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join(
    " "
  )}&response_type=token&show_dialog=true`;
};
  
function SpotifyButton(props) {

    const {
        title,
        children,
    } = props

    return (
        <button
        onClick={handleOnClick}
            type="button"
            className="text-white font-normal focus:ring-4 focus:outline-none rounded text-sm px-5 py-2 text-center bg-green-600 hover:bg-green-600 focus:ring-green-600"
        >{title ? title : children}</button>
    );
}

export default SpotifyButton;