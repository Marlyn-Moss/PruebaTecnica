import { useEffect, useState } from "react"
import Login from "./pages/login/Login"
import Sidebar from "./components/sidebar/Sidebar"
import { Outlet } from "react-router-dom"
import useRouter from "./hooks/useRouter"
import { UserWhiteIcon } from "./components/icons/User"
import toast from "react-hot-toast"
import useSession from "./hooks/useSession"
import { decodeToken } from "react-jwt"
import Inicio from "./pages/inicio/Inicio"

function App() {

//Conexion API (fallé)
  const {
    removeTokenFromSession,
    saveTokenIntoSession,
    getTokenFromSession,
    existsTokenFromSession
  } = useSession()

  const {
    RouterProvider
  } = useRouter()

  //const token = useSelector(selectSesionToken)
  /*
  const initialToken = () => {
    getTokenFromSession()
      .then((tokenTaked) => {
        console.log('initial-token->', tokenTaked)
        return tokenTaked
      })
      .catch((error) => {
        return null
      })
  }
  */

  const decodificar = () => {
    if (token === undefined || token === null) return
    const decodedToken = decodeToken(token)
    if (decodedToken) {
      const { nombre } = decodedToken
      setUsuario(nombre)
      console.log('decoded-token->', decodedToken)
    }
  }

  const [usuario, setUsuario] = useState(null) 
  const [token, setToken] = useState(null)

  useEffect(() => {
    decodificar()
    console.log('token-from-session->', token)
  }, [token])

  useEffect(() => {
    getTokenFromSession()
      .then((tokenTaked) => {
        setToken(tokenTaked)
      })
      .catch((error) => console.log('error->', error))
  }, [])

  const handleOnLogin = (access_token) => {
    console.log('token-from-sesion->', access_token)
    if (access_token !== undefined || access_token !== null) {
      saveTokenIntoSession(access_token)
        .then((isOk) => {
          setToken(access_token)
          toast('Se ha iniciado la sesión')
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  // const handleOnCloseSesion = () => {
  //   console.log('is-closing->', token)
  //   if (token) {
  //     removeTokenFromSession()
  //       .then((isOk) => {
  //         console.log('token-removed-from-session->', isOk)
  //         setToken(null)
  //         toast('Sesión cerrada')
  //       })
  //       .catch((error) => {
  //         console.log(error)
  //       })
  //   }
  // }

  if (token === null || token === undefined || token === null) {
    return <Login
      onLogin={handleOnLogin}
    />
  }

  return (
    <>
      <div className="w-screen h-screen bg-white flex">
        <aside className='w-44'>
          <h1 className='text-white text-xl text-center font-semibold bg-sky-800 p-1'>SPOTIFY WEB</h1>
          <div className='mt-2 p-2'>
          </div>
        </aside>
        <main className='flex-grow bg-slate-100 max-h-fit'>
          <div className=' flex flex-row bg-sky-700 p-2'>
            <UserWhiteIcon />
            <h1 className='font-normal text-sm text-white ml-2'>{usuario ? usuario : 'no-conectado'}</h1>
          </div>
          <div className='m-2 bg-white border-2 border-solid border-slate-200'>
            <RouterProvider>
              <Outlet />
            </RouterProvider>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
