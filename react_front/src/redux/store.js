import { configureStore } from "@reduxjs/toolkit";
import sesionSlice from "./sesionSlice";
import userStore from "./Spotify/userSlice";
import currentTrack from "./Spotify/currentTrack";
import playList from "./Spotify/playList";

export default configureStore({
    reducer: {
        sesion: sesionSlice,
        user: userStore.reducer,
        playlist: playList,
        currentTrack: currentTrackStore,
    },
});

