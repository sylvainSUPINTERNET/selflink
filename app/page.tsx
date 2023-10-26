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

                <div className="p-10 backdrop-blur-md bg-opacity-30 bg-black rounded-xl space-y-10 w-full">

                    <div className="mb-6 font-extrabold text-6xl md:text-8xl text-white leading-1 tracking-tighter text-center">
                    <p>Self <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">Link</span></p>
                    </div>

                    <div className="mb-6 font-extrabold text-4xl md:text-6xl text-white leading-1 tracking-tighter text-center">
                        <p><span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">Vendez</span> à votre audience <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">avec juste un lien !</span></p>
                    </div>

                    <br className='hidden md:block'></br>  

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
  
                    </div>
                    
                    <div>

                    </div>

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




                    <div className='flex justify-center space-x-3 md:p-8 text-center'>
                        <a href="/dashboard" className="text-md md:text-2xl relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                          <span className="w-full h-full bg-gradient-to-br from-[#ff05c1] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                          <span className="relative px-6 py-3 transition-all ease-out bg-black rounded-md group-hover:bg-opacity-0 duration-400">
                          <span className="relative text-white">Commencez</span>
                          </span>
                        </a>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" className="text-md md:text-2xl relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                          <span className="w-full h-full bg-gradient-to-br from-[#ff05c1] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                          <span className="relative px-6 py-3 transition-all ease-out bg-black rounded-md group-hover:bg-opacity-0 duration-400">
                          <span className="relative text-white">La démo</span>
                          </span>
                        </a>
          
                    </div>

                </div>

            </div>
        </main>

    );
}
