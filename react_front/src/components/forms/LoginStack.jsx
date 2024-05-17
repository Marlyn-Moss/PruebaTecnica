import React from "react";

function LoginStack(props) {
    const { children, title, description, footer } = props
    return (
        <div className="container max-w-xs">
            <section className="mb-32 text-center">
                    <div className='relative block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-neutral-600'>
                        <div className="flex">
                            <div className="relative mx-4 -mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20" data-te-ripple-init data-te-ripple-color="light">
                                <img src="https://i.blogs.es/827c3a/spotify-0/1366_2000.jpg" class="w-full" />
                            </div>
                        </div>
                        <div>
                            <h5 className="text-center text-lg font-bold mt-2 text-white">{title}</h5>
                                {description
                                ? <h4 className='text-center text-white'>{description}</h4>
                                : null
                                }   
                        </div>
                        <div className='grid g lg:grid-rows-2 gap-2 rounded-full justify-center bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'>
                            {children}
                        </div>
                    </div>
            </section>
        </div>
    );
}

export default LoginStack;
