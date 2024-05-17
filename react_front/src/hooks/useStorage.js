import React from "react";

function useStorage(props) {

    const addToStorage = (key, value) => {
        return new Promise((resolve, reject) => {
            sessionStorage.setItem(key, JSON.stringify(value))
            resolve(true)
        })
    }

    const removeFromStorage = (key) => {
        return new Promise((resolve, reject) => {
            sessionStorage.removeItem(key)
            resolve(true)
        })
    }

    const getFromStorage = (key) => {
        return new Promise((resolve, reject) => {
            const resp = sessionStorage.getItem(key) ? sessionStorage.getItem(key) : null
            resolve(resp)
        })
    }

    return {
        addToStorage,
        removeFromStorage,
        getFromStorage
    }
}

export default useStorage;