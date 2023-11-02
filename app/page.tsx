'use client';

// If you need to fetch  data in client mode, consider to use 
// https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#use-in-client-components

import Image from 'next/image'
import Link from 'next/link';

import { motion } from "framer-motion";
import { useSession } from 'next-auth/react';

export default function Home() {

  const { data: session, status } = useSession();

  if (session) {
    // console.log("logged");
    // console.log(session.user); // You'll have user.name, user.email, etc. based on your profile() method.
  } else {
    // console.log("not logged");
  }


  // // this is working
  // if (status === 'loading') {
    
  //   return <div>Loading...</div>; // Or any other placeholder/loading UI
  // } else {
  //   if ( status === 'authenticated' ) {
  //     if ( session ) {
  //       console.log("logged", session);
  //     } else {
  //       console.log("authenticated but error session is null ...");
  //     }
  //   } else {
  //     console.log("not logged");
  //   }

  // }

  // if ( status === 'unauthenticated') {
  // }

  // if ( status === 'authenticated') {
  // }

  return (
        <main>
            <div className="bg-no-repeat min-h-screen bg-cover flex flex-col items-center justify-center" style={{backgroundImage: 'url(./ffflurry.svg)'}}>

                <div className="p-10 backdrop-blur-md bg-opacity-30 bg-black rounded-xl space-y-10 w-full ">

                    <div className="mb-6 font-extrabold text-6xl md:text-8xl text-white leading-1 tracking-tighter text-center">
                        <p>Self <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">Link</span></p>
                    </div>

                    <div className="mb-6 font-extrabold text-4xl md:text-6xl text-white leading-1 tracking-tighter text-center">
                        <p><span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">Vendez</span> à votre audience <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">avec juste un lien !</span></p>
                    </div>

                    <br className='hidden md:block'></br>  
{/* 
                    <div className="font-extrabold text-2xl text-white leading-1 tracking-tighter flex justify-around space-x-8 mb-6">
                        <div className="flex flex-col items-center">
                            <img src="./homme.png" alt="Description 2" className="w-20 h-20 mb-2 rounded-full" />
                            Equipe réduite
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="./pirate.png" alt="Description 2" className="w-20 h-20 mb-2 rounded-full" />
                            Pas le temps
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="./nouilles.png" alt="Description 2" className="w-20 h-20 mb-2 rounded-full" />
                            Budget réduit
                        </div>
  
                    </div> */}
 
                    
                    <div className='md:flex justify-center md:space-x-5'>
                        
                        <div className="text-center rounded mt-8 md:w-1/4 flex flex-col bg-slate-700/25 px-5 py-8 ring-1 ring-slate-700/50 sm:mx-0 sm:rounded-2xl text-white">
                            <p className="flex items-center justify-center">
                                <img src="./homme.png" alt="Description 2" className="w-20 h-20 mb-2 rounded-full" />

                                {/* <span className="text-[2.5rem] leading-none text-white">€
                                    <span className="font-bold">749</span>
                                </span> */}

                                <span className="ml-3 text-sm">
                                    <span className="font-semibold text-white">one-time payment</span>
                                    <br></br>
                                <span className="text-slate-400">plus local taxes</span>
                                </span>
                            </p>

                            <div className="flex left-1/2 -ml-68 h-[2px] w-full mt-4">
                                <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]">
                                </div>
                                <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]">
                                    </div>
                                    <div className="-ml-[100%] w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]">
                                        </div>
                                    <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]">
                                </div>
                            </div>

                        </div>

                        
                        <div className="text-center rounded mt-8 md:w-1/4 flex flex-col bg-slate-700/25 px-5 py-8 ring-1 ring-slate-700/50 sm:mx-0 sm:rounded-2xl text-white">
                            <p className="flex items-center justify-center">
                                <img src="./pirate.png" alt="Description 2" className="w-20 h-20 mb-2 rounded-full" />

                                {/* <span className="text-[2.5rem] leading-none text-white">€
                                    <span className="font-bold">749</span>
                                </span> */}
                                <span className="ml-3 text-sm">
                                    <span className="font-semibold text-white">one-time payment</span>
                                    <br></br>
                                <span className="text-slate-400">plus local taxes</span>
                                </span>
                            </p>

                            <div className="flex left-1/2 -ml-68 h-[2px] w-full mt-4">
                                <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(255,20,147,0)_0%,#FF1493_20%,#FF0000_50%,#800080_80%,rgba(128,0,128,0)_100%)]">
                                </div>
                                <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(255,20,147,0)_0%,#FF1493_20%,#FF0000_50%,#800080_80%,rgba(128,0,128,0)_100%)]">
                                </div>
                                <div className="-ml-[100%] w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(255,20,147,0)_0%,#FF1493_20%,#FF0000_50%,#800080_80%,rgba(128,0,128,0)_100%)]">
                                </div>
                                <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(255,20,147,0)_0%,#FF1493_20%,#FF0000_50%,#800080_80%,rgba(128,0,128,0)_100%)]">
                                </div>
                            </div>
                        </div>

                        <div className="text-center rounded mt-8 md:w-1/4 flex flex-col bg-slate-700/25 px-5 py-8 ring-1 ring-slate-700/50 sm:mx-0 sm:rounded-2xl text-white">
                            <p className="flex items-center justify-center">
                                {/* <span className="text-[2.5rem] leading-none text-white">€
                                    <span className="font-bold">749</span>
                                </span> */}
                                <img src="./nouilles.png" alt="Description 2" className="w-20 h-20 mb-2 rounded-full" />

                                <span className="ml-3 text-sm">
                                    <span className="font-semibold text-white">one-time payment</span>
                                    <br></br>
                                <span className="text-slate-400">plus local taxes</span>
                                </span>
                            </p>
                            <div className="flex left-1/2 -ml-68 h-[2px] w-full mt-4">
                                <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(148,0,211,0)_0%,#9400D3_20%,#8A2BE2_50%,#4169E1_80%,rgba(65,105,225,0)_100%)]">
                                </div>
                                <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(148,0,211,0)_0%,#9400D3_20%,#8A2BE2_50%,#4169E1_80%,rgba(65,105,225,0)_100%)]">
                                </div>
                                <div className="-ml-[100%] w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(148,0,211,0)_0%,#9400D3_20%,#8A2BE2_50%,#4169E1_80%,rgba(65,105,225,0)_100%)]">
                                </div>
                                <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(148,0,211,0)_0%,#9400D3_20%,#8A2BE2_50%,#4169E1_80%,rgba(65,105,225,0)_100%)]">
                                </div>
                            </div>
                        </div>
                    </div>


                
                    
                    <div className='flex justify-center'>
                        <div className="text-center rounded mt-0 md:w-1/4 flex flex-col bg-slate-700/25 px-5 py-2 ring-1 ring-slate-700/50 sm:mx-0 sm:rounded-2xl text-white">
            
                            <div className='flex justify-center space-x-3 text-center p-4 mb-5'>
                                <a href="/dashboard" className="text-2xl md:text-4xl relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                                <span className="w-full h-full bg-gradient-to-br from-[#ff05c1] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                                <span className="relative px-6 py-3 transition-all ease-out bg-black rounded-md group-hover:bg-opacity-0 duration-400">
                                <span className="relative text-white">Commencez</span>
                                </span>
                                </a>
                                {/* <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" className="text-md md:text-2xl relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                                <span className="w-full h-full bg-gradient-to-br from-[#ff05c1] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                                <span className="relative px-6 py-3 transition-all ease-out bg-black rounded-md group-hover:bg-opacity-0 duration-400">
                                <span className="relative text-white">La démo</span>
                                </span>
                                </a> */}
                            </div>
                            
                            <p className="flex items-center justify-center mb-5">
                                <span className="text-[2.5rem] leading-none text-white">
                                    <span className="font-bold">2.5%</span>
                                </span>
                                <span className="ml-3 text-sm">
                                    <span className="font-semibold text-white">de frais par vente</span>
                                    <br></br>
                                <span className="text-slate-400">Taxes comprises</span>
                                </span>
                            </p>

                            

                            <div className='py-6 bg-slate-500/25 rounded mt-3'>


                                <p className="flex items-center justify-center space-x-5 p-2">
                                    {/* <span className="text-[2.5rem] leading-none text-white">
                                        <span className="font-bold">2.5%</span>
                                    </span> */}
                                    <img src="./dashboard.png" alt="Description 2" className="w-20 h-20 mb-2 rounded-full" />

                                    <span className="ml-3 text-md">
                                        <span className="font-semibold text-white">Dashboard</span>
                                        <br></br>
                                    <span className="text-slate-400">Gratuit</span>
                                    </span>
                                </p>

                                <p className="flex items-center justify-center space-x-5 p-2">
                                    {/* <span className="text-[2.5rem] leading-none text-white">
                                        <span className="font-bold">2.5%</span>
                                    </span> */}
                                    <img src="./dashboard.png" alt="Description 2" className="w-20 h-20 mb-2 rounded-full" />

                                    <span className="ml-3 text-md">
                                        <span className="font-semibold text-white">Virement</span>
                                        <br></br>
                                    <span className="text-slate-400">Gratuit</span>
                                    </span>
                                </p>


                                <p className="flex items-center justify-center space-x-5 p-2">
                                    {/* <span className="text-[2.5rem] leading-none text-white">
                                        <span className="font-bold">2.5%</span>
                                    </span> */}
                                    <img src="./dashboard.png" alt="Description 2" className="w-20 h-20 mb-2 rounded-full" />

                                    <span className="ml-3 text-md">
                                        <span className="font-semibold text-white">Dashboard</span>
                                        <br></br>
                                    <span className="text-slate-400">Gratuit</span>
                                    </span>
                                </p>


 
                                
                            </div>

                                                           
                            <div className='mt-8'>
                            </div>


                        </div>
                    </div>

{/* 
                    <br className='hidden md:block'></br>  


                    <div className="flex items-center justify-center mb-4 space-x-4 mt-5">
                        <img src="check.png" alt="checkmark" className="w-10 h-10" />
                        <div className="font-bold text-xl md:text-2xl text-white leading-1 tracking-tighter text-center">
                            Généré en 5 minutes votre lien de paiement
                        </div>
                    </div>

                    <div className="flex items-center justify-center space-x-4">
                        <img src="check.png" alt="checkmark" className="w-10 h-10" />
                        <div className="font-bold text-xl md:text-2xl text-white leading-1 tracking-tighter text-center">
                            Suivez vos ventes et gérer vos commandes
                        </div>
                    </div>
 */}

        
                
                    {/* <div className="flex justify-center">
                    <div className='bg-[radial-gradient(164.75%_100%_at_50%_0%,#000000_0%,#0F172A_48.73%,#000000_100%)] p-6 rounded text-white'>
                        <p>OK</p>
                    </div>


                    </div> */}

                </div>


            </div>
        </main>

    );
}
