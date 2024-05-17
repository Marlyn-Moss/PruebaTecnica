import React, { useState } from "react";
import NormalButton from "../../components/buttons/NormalButton";
import { useForm } from "react-hook-form";
import IconTextBox from "../../components/textboxs/IconTextBox";
import LoginStack from "../../components/forms/LoginStack";
import useFetchs from "../../hooks/useFetch";
import toast from "react-hot-toast";
import SpotifyButton from "../../components/buttons/SpotifyButton";

function Login(props) {

    const {
        onLogin
    } = props

    const {
        register,
        handleSubmit,
        errors
    } = useForm()

    const {
        postHandler
    } = useFetchs()

    const [errores, setErrores] = useState(null)
    const [loading, setLoading] = useState(false)

    const validations = {
        userName: { required: 'Debe proporcionar un usuario' },
        userPassword: { required: "Debe proporcionar una contraseña" }
    }

    const handleErrors = (errors) => {
        setErrores(errors)
    }

    const handleOnSubmit = (data) => {
        setLoading(true)
        //console.log('form-data->', data)
        const { userName, userPassword } = data

        postHandler('/login', { email: userName, password: userPassword })
            .then(({ status, mensaje, datos }) => {
                console.log('api-datos->', datos)
                if (datos === undefined) {
                    toast.error('Acceso denegado!')
                    return
                }
                const { access_token } = datos
                if (status) {
                    onLogin(access_token)
                } else {
                    toast.error('Acceso denegado!')
                }
            })
            .catch((error) => {
                console.log('error-from-api->', error)
            })
            .finally(() => setLoading(false))
    }

    return (
        <div className="py-20 flex justify-center items-center">
            <div className='w-80 h-60'>
                <form onSubmit={handleSubmit(handleOnSubmit, handleErrors)}>
                    <LoginStack
                        title='SPOTIFY WEB'
                        description='Ingrese sus credenciales para conectarse.'
                    >
                        <IconTextBox
                            icon='email'
                            text=''
                            id='userName'
                            placeholder='nombre@spotify.com'
                            register={() => register('userName', validations.userName)}
                            error={errores}
                        />
                        <IconTextBox
                            icon='lock'
                            text=''
                            password={true}
                            id='userPassword'
                            placeholder='**********'
                            register={() => register('userPassword', validations.userPassword)}
                            error={errores}
                        />
                        <NormalButton
                            title='Login'
                            isSubmit={true}
                            loading={loading}
                        />
                        <SpotifyButton 
                            title='Spotify login'
                            isSubmit={true}
                            loading={loading}
                        />
                    </LoginStack>
                </form>
            </div>
        </div>
    );
}

export default Login;