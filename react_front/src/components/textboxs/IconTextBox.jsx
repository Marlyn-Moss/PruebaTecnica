import React from "react"

function IconTextBox(props) {
    const {
        text,
        name,
        id,
        value,
        placeholder,
        password,
        register,
        error,
        icon
    } = props

    const RenderErrorMessage = () => {
        if (error === null) {
            return null
        }
        if (error[id] !== undefined) {
            return <h1 className='ml-1 text-[12px] text-red-600'>{`*${error[id].message}`}</h1>
        } else {
            return null
        }
    }

    const RenderIcon = ({ icon }) => {
        if (icon === 'email') {
            return (
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                </div>
            )
        }

        if (icon === 'lock') {
            return (
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg className="w-4 h-6 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                        <path d="M14 7h-1.5V4.5a4.5 4.5 0 1 0-9 0V7H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Zm-5 8a1 1 0 1 1-2 0v-3a1 1 0 1 1 2 0v3Zm1.5-8h-5V4.5a2.5 2.5 0 1 1 5 0V7Z" />
                    </svg>
                </div>
            )
        }
    }

    if (password) {
        return (
            <div>
                <div className='relative'>
                    {text
                        ? <label
                            for={name}
                            className="block mb-2 text-sm font-lg text-gray-900"
                        >{text}</label>
                        : null
                    }
                    <RenderIcon icon={icon} />
                    <input
                        type="password"
                        id={name}
                        name={name}
                        className="bg-gray-300 border ps-10 border-gray-300 text-sm rounded-lg block w-full p-2.5  placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500"
                        placeholder={placeholder}
                        {...register()}
                    />
                </div>
                <RenderErrorMessage />
            </div>
        );
    }

    return (
        <div>
            <div className='relative'>
                {text
                    ? <label
                        for={name}
                        className="block mb-2 text-sm font-lg text-gray-900"
                    >{text}</label>
                    : null
                }
                <RenderIcon icon={icon} />
                <input
                    type="text"
                    id={name}
                    name={name}
                    className="bg-gray-300 border ps-10 text-sm rounded-lg  block w-full p-2.5 border-gray-600 placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500"
                    placeholder={placeholder}
                    {...register()}
                />
            </div>
            <RenderErrorMessage />
        </div>
    );
}

export default IconTextBox;