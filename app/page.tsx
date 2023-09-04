'use client';

// If you need to fetch  data in client mode, consider to use 
// https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#use-in-client-components

import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <main className='bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900'>
      <div className="bg-no-repeat h-screen bg-cover" style={{backgroundImage: 'url(https://preview.tailwindtemplates.co/basic/assets/images/banner-bg.svg)'}}>

        <div className="container mx-auto flex flex-col h-full">

          <div className='justify-center mt-3 md:mt-[7em]'>
            <div className="w-full text-center text-white">
            <h1 className="font-extrabold  text-8xl text-white leading-1 tracking-tighter">
              Self 
              <span className='text-blue-500 ml-3'>
              Link
              </span>
            </h1>
            <p className="mt-10 md:mt-2 p-2 text-4xl md:text-6xl leading-1 font-bold tracking-tighter">Build your payment tunnel in 5 minutes</p>
            </div>
          </div>

          <div className="w-4/4 mb-3 mt-[3em]">
              <div className="flex text-center justify-center">
                  <div>
                      <Link href="/get-started" className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-blue-600 ring-offset-blue-500 hover:ring-offset-indigo-500 ease focus:outline-none">
                          <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                          <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                          <span className="relative z-20 flex items-center text-2xl"> {/* Ici, j'ai changé text-sm à text-lg */}
                              <svg className="relative w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                              Get Started !
                          </span>
                      </Link>                
                  </div>
              </div>
          </div>



          <div className="mockup-phone border-primary mt-10 shadow-lg shadow-blue-600 opacity-100 transition-opacity duration-300 " onLoad={(e) => e.currentTarget.style.opacity = "1"}>
            <div className="camera"></div> 
            <div className="display">
              <div className="artboard artboard-demo phone-1">
                <div className='bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 h-screen w-full'>
                  <div className="bg-no-repeat h-screen bg-cover w-full" style={{backgroundImage: 'url(https://preview.tailwindtemplates.co/basic/assets/images/banner-bg.svg)'}}>

                    {/* <iframe className="w-full h-full aspect-video" src="https://media.istockphoto.com/id/1439624755/fr/vid%C3%A9o/meilleure-vue-a%C3%A9rienne-de-la-ville-illumin%C3%A9e-la-nuit-superbes-images-dapr%C3%A8s-le-coucher-du.mp4?s=mp4-640x640-is&k=20&c=VzHLtiMU5q7nqI5-BdSYDPzm-toDtVN1-ZdzYvIgzok="></iframe> */}

                  </div>
                </div>
              </div>
            </div>
          </div>

          
        </div>



            
   
      </div>

      



    </main>
  )
}
