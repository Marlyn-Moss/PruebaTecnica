import { createSlice } from "@reduxjs/toolkit";

const sesionSlice = createSlice({
    name: 'sesion',
    initialState: {
        token: sessionStorage.getItem('token')
    },
    reducers: {
        addToken: (state, action) => {
            state.token = action.payload;
        },
        removeToken: (state, action) => {
            state.token = null;
        }
    }
})

export const {
    addToken,
    removeToken
} = sesionSlice.actions

export const selectSesionToken = (state) => state.sesion.token;

export default sesionSlice.reducer