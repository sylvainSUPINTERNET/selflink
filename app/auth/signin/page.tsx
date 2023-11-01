"use client";

import { getSession, signIn, useSession } from "next-auth/react"
import { authOptions } from '../../api/auth/[...nextauth]/route';
import { useEffect } from "react";


function displaySocialBtn(provider: any) {

    return (<div key={provider.name}>
                {
                    provider.name === "Google" && (
                        <div className="my-4">
                        <button type="button" className="border-solid border-2 border-indigo-600 text-xl py-2 px-4 flex justify-center items-center bg-black hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                        onClick={() => signIn(provider.id)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="43" height="43" viewBox="0 0 48 48">
                                <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                            </svg> <span className="mr-2 ml-2"></span> 
                            Continuer avec {provider.name}
                        </button>
                    </div>
                    )
                } 

                {
                    provider.name === "Facebook" && (
                        <div className="my-4">
                            <button type="button" className="border-solid border-2 border-indigo-600 text-xl py-2 px-4 flex justify-center items-center bg-black hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                            onClick={() => signIn(provider.id)}
                            >
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45" height="45" viewBox="0 0 48 48">
                            <path fill="#0081fb" d="M47,29.36l-2.193,1.663L42.62,29.5c0-0.16,0-0.33-0.01-0.5c0-0.16,0-0.33-0.01-0.5	c-0.14-3.94-1.14-8.16-3.14-11.25c-1.54-2.37-3.51-3.5-5.71-3.5c-2.31,0-4.19,1.38-6.27,4.38c-0.06,0.09-0.13,0.18-0.19,0.28	c-0.04,0.05-0.07,0.1-0.11,0.16c-0.1,0.15-0.2,0.3-0.3,0.46c-0.9,1.4-1.84,3.03-2.86,4.83c-0.09,0.17-0.19,0.34-0.28,0.51	c-0.03,0.04-0.06,0.09-0.08,0.13l-0.21,0.37l-1.24,2.19c-2.91,5.15-3.65,6.33-5.1,8.26C14.56,38.71,12.38,40,9.51,40	c-3.4,0-5.56-1.47-6.89-3.69C1.53,34.51,1,32.14,1,29.44l4.97,0.17c0,1.76,0.38,3.1,0.89,3.92C7.52,34.59,8.49,35,9.5,35	c1.29,0,2.49-0.27,4.77-3.43c1.83-2.53,3.99-6.07,5.44-8.3l1.37-2.09l0.29-0.46l0.3-0.45l0.5-0.77c0.76-1.16,1.58-2.39,2.46-3.57	c0.1-0.14,0.2-0.28,0.31-0.42c0.1-0.14,0.21-0.28,0.31-0.41c0.9-1.15,1.85-2.22,2.87-3.1c1.85-1.61,3.84-2.5,5.85-2.5	c3.37,0,6.58,1.95,9.04,5.61c2.51,3.74,3.82,8.4,3.97,13.25c0.01,0.16,0.01,0.33,0.01,0.5C47,29.03,47,29.19,47,29.36z"></path><linearGradient id="wSMw7pqi7WIWHewz2_TZXa_PvvcWRWxRKSR_gr1" x1="42.304" x2="13.533" y1="24.75" y2="24.75" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0081fb"></stop><stop offset=".995" stop-color="#0064e1"></stop></linearGradient><path fill="url(#wSMw7pqi7WIWHewz2_TZXa_PvvcWRWxRKSR_gr1)" d="M4.918,15.456	C7.195,11.951,10.483,9.5,14.253,9.5c2.184,0,4.354,0.645,6.621,2.493c2.479,2.02,5.122,5.346,8.419,10.828l1.182,1.967	c2.854,4.746,4.477,7.187,5.428,8.339C37.125,34.606,37.888,35,39,35c2.82,0,3.617-2.54,3.617-5.501L47,29.362	c0,3.095-0.611,5.369-1.651,7.165C44.345,38.264,42.387,40,39.093,40c-2.048,0-3.862-0.444-5.868-2.333	c-1.542-1.45-3.345-4.026-4.732-6.341l-4.126-6.879c-2.07-3.452-3.969-6.027-5.068-7.192c-1.182-1.254-2.642-2.754-5.067-2.754	c-1.963,0-3.689,1.362-5.084,3.465L4.918,15.456z"></path><linearGradient id="wSMw7pqi7WIWHewz2_TZXb_PvvcWRWxRKSR_gr2" x1="7.635" x2="7.635" y1="32.87" y2="13.012" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0081fb"></stop><stop offset=".995" stop-color="#0064e1"></stop></linearGradient><path fill="url(#wSMw7pqi7WIWHewz2_TZXb_PvvcWRWxRKSR_gr2)" d="M14.25,14.5	c-1.959,0-3.683,1.362-5.075,3.465C7.206,20.937,6,25.363,6,29.614c0,1.753-0.003,3.072,0.5,3.886l-3.84,2.813	C1.574,34.507,1,32.2,1,29.5c0-4.91,1.355-10.091,3.918-14.044C7.192,11.951,10.507,9.5,14.27,9.5L14.25,14.5z"></path><path d="M21.67,20.27l-0.3,0.45l-0.29,0.46c0.71,1.03,1.52,2.27,2.37,3.69l0.21-0.37c0.02-0.04,0.05-0.09,0.08-0.13 c0.09-0.17,0.19-0.34,0.28-0.51C23.19,22.5,22.39,21.29,21.67,20.27z M24.94,15.51c-0.11,0.14-0.21,0.28-0.31,0.42 c0.73,0.91,1.47,1.94,2.25,3.1c0.1-0.16,0.2-0.31,0.3-0.46c0.04-0.06,0.07-0.11,0.11-0.16c0.06-0.1,0.13-0.19,0.19-0.28 c-0.76-1.12-1.5-2.13-2.23-3.03C25.15,15.23,25.04,15.37,24.94,15.51z" opacity=".05"></path><path d="M21.67,20.27l-0.3,0.45c0.71,1.02,1.51,2.24,2.37,3.65c0.09-0.17,0.19-0.34,0.28-0.51C23.19,22.5,22.39,21.29,21.67,20.27 z M24.63,15.93c0.73,0.91,1.47,1.94,2.25,3.1c0.1-0.16,0.2-0.31,0.3-0.46c-0.77-1.14-1.52-2.16-2.24-3.06 C24.83,15.65,24.73,15.79,24.63,15.93z" opacity=".07"></path>
                            </svg>
                            <span className="mr-2 ml-2"></span> 
                                {/* Continuer avec {provider.name} */}
                                Continuer avec Meta
                            </button>
                    </div>
                    )
                }      

                

                {
                    provider.name === "Twitch" && (
                        <div className="my-4">
                            <button type="button" className="border-solid border-2 border-indigo-600 text-xl py-2 px-4 flex justify-center items-center bg-black hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                            onClick={() => signIn(provider.id)}
                            >
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45" height="45" viewBox="0 0 48 48">
                            <path fill="#8343c8" d="M41.754,27.958l-8.455,9.699C33.109,37.875,32.834,38,32.545,38H26.37	c-0.239,0-0.47,0.085-0.651,0.241l-6.438,5.519C19.1,43.915,18.869,44,18.63,44H17c-0.552,0-1-0.448-1-1v-4c0-0.552-0.448-1-1-1H7	c-0.552,0-1-0.448-1-1V15.943c0-0.156,0.036-0.309,0.106-0.448l3.981-7.943C10.257,7.214,10.603,7,10.981,7H41c0.552,0,1,0.448,1,1	v19.301C42,27.543,41.913,27.776,41.754,27.958z"></path><path fill="#fafafa" d="M39,26.369c-1.667,1.877-3.333,3.754-5,5.631c-2.333,0-4.667,0-7,0c-2.333,2-4.667,4-7,6c0-2,0-4,0-6	c-2.667-0.008-5.333-0.016-8-0.024C12,24.65,12,17.325,12,10c9,0,18,0,27,0C39,15.456,39,20.912,39,26.369z"></path><rect width="3" height="10" x="21" y="16" fill="#8343c8"></rect><rect width="3" height="10" x="30" y="16" fill="#8343c8"></rect>
                            </svg>
                            <span className="mr-2 ml-2"></span> 
                                Continuer avec {provider.name}
                            </button>
                    </div>
                    )
                }    
                   
        </div>);
}


export default function SignIn()  {


    const { data: session, status } = useSession();


    useEffect ( () => {
        if (status === 'authenticated') {
            window.location.href = "/dashboard";
        }
    }, [status])
    
  if (status === 'loading') {
        return   <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500"></div>
    </div>;
    }

    if ( status === "authenticated") {
        return (<div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500"></div>
        </div>);
    }

    return (

        <>
            <div className="flex text-white bg-black min-h-screen items-center space-x-5 bg-cover bg-no-repeat" style={{backgroundImage: "url('../ggglitch.svg')"}}>
                
                <div className="flex backdrop-blur-md bg-opacity-50 w-full justify-center min-h-screen items-center bg-black">
                    
                    <div className="rounded-tl-lg rounded-bl-lg ">

                        <div className="mb-6 font-extrabold text-6xl md:text-8xl text-white leading-1 tracking-tighter text-center">
                            <p>Self <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">Link</span></p>
                        </div>
                        
                        <div className="">
                            {
                                Object.values(authOptions.providers!).map((provider:any) => (
                                    displaySocialBtn(provider)
                                ))
                            }
                    </div>

                    <div className="flex justify-center mt-5">
                            <button onClick={ () => {
                                window.location.href = "/";
                            }} type="button" className="border-solid border-2 border-indigo-600 text-xl py-2 px-4  bg-black hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
                                Accueil
                            </button>
                    </div>


                    </div>
                                        
                </div>

            </div>
        </>
    )
      
}