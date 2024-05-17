import React from 'react';

// create a component
const useFetchs = () => {

    const urlServer = 'http://127.0.0.1:8000/api'
    let urlbase = urlServer

    const deleteHandler = (urlComplement) => {
        return new Promise((resolve, reject) => {
            let url = urlbase.concat(urlComplement)
            // console.log('url->', url)

            const payload = {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            fetch(url, payload)
                .then((response) => response.json())
                .then((response) => {
                    console.log('get-handler-response->', response)
                    resolve(response)
                })
                .catch((err) => {
                    reject(err)
                })
        })
    }

    const getHandler = (urlComplement) => {
        return new Promise((resolve, reject) => {
            let url = urlbase.concat(urlComplement)
            //console.log(url)
            fetch(url)
                .then((response) => response.json())
                .then((response) => {
                    //console.log('get-handler-response->', response)
                    resolve(response)
                })
                .catch((err) => {
                    reject(err)
                })
        })
    }

    const postHandler = (urlComplement, parametros) => {
        return new Promise((resolve, reject) => {
            if (parametros === null || parametros === undefined) {
                reject('Datos no son validos')
            }

            const payload = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 'datos': parametros })
            }

            let url = urlbase.concat(urlComplement)

            fetch(url, payload)
                .then((response) => response.json())
                .then((response) => {
                    //console.log('post-handler-response->', response)
                    resolve(response)
                })
                .catch((err) => {
                    reject(err)
                })
        })
    }

    const putHandler = (urlComplement, parametros) => {
        return new Promise((resolve, reject) => {
            if (parametros === null || parametros === undefined) {
                reject('Datos no son validos')
            }

            const payload = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 'datos': parametros })
            }

            let url = urlbase.concat(urlComplement)

            fetch(url, payload)
                .then((response) => response.json())
                .then((response) => {
                    resolve(response)
                })
                .catch((err) => {
                    reject(err)
                })
        })
    }

    return {
        postHandler,
        putHandler,
        getHandler,
        deleteHandler
    }
};

//make this component available to the app
export default useFetchs;