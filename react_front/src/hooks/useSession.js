import { addToken, removeToken } from "../redux/sesionSlice";

function useSession(props){

    const saveTokenIntoSession = (token) => {
        return new Promise(async (resolve, reject) => {
            await sessionStorage.setItem('token', token)
            addToken(token)
            resolve(true)
        })
    }

    const removeTokenFromSession = () => {
        return new Promise(async (resolve, reject) => {
            await sessionStorage.removeItem('token')
            removeToken()
            resolve(true)
        })
    }

    const getTokenFromSession = () => {
        return new Promise(async (resolve, reject) => {
            const token = await sessionStorage.getItem('token')
            if (token === null) reject(null)
            resolve(token)
        })
    }

    const existsTokenFromSession = () => {
        return new Promise(async (resolve, reject) => {
            const token = await sessionStorage.getItem('token')
            console.log('token-recuperado->', token)
            if (token === null || token === undefined) reject(false)
            resolve(true)
        })
    }

    return {
        saveTokenIntoSession,
        removeTokenFromSession,
        getTokenFromSession,
        existsTokenFromSession
    }
}

export default useSession;