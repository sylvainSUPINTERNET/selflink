'use client';

// If you need to fetch  data in client mode, consider to use 
// https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#use-in-client-components

import Image from 'next/image'
import Link from 'next/link';

import { motion } from "framer-motion";
import { useSession } from 'next-auth/react';

export default function Home() {

  const { data: session, status } = useSession();

  // if (session) {
  //   console.log("logged");
  //   console.log(session.user); // You'll have user.name, user.email, etc. based on your profile() method.
  // } else {
  //   console.log("not logged");
  // }


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
  {/* <div className="relative bg-no-repeat min-h-screen h-full bg-cover" style={{backgroundImage: 'url(https://i.postimg.cc/Xv5GsJxG/hhholographic.jpg)'}}>
    <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md"></div>
    <div className="relative z-10 text-white">
      Contenu que vous souhaitez faire ressortir
    </div>
  </div> */}

  <div className="bg-no-repeat min-h-screen h-full bg-cover" style={{backgroundImage: 'url(./ffflurry.svg)'}}>
    <div className="font-extrabold  text-8xl text-white leading-1 tracking-tighter mt-10">
          On that
    </div>
  </div>

</main>

  );
    
    // <main className='bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900'>
    //   <div className="bg-no-repeat min-h-screen h-full bg-cover" style={{backgroundImage: 'url(https://preview.tailwindtemplates.co/basic/assets/images/banner-bg.svg)'}}>

    //     <div className="container mx-auto flex flex-col h-full">

            {/* <div className='justify-center mt-3 md:mt-[7em]'>
              <div className="w-full text-center text-white">
                <h1 className="font-extrabold  text-8xl text-white leading-1 tracking-tighter">
                  Self 
                  <span className='text-blue-500 ml-3'>
                  Link
                  </span>
                </h1>


                <p className="mt-10 md:mt-2 p-2 text-4xl md:text-6xl leading-1 font-bold tracking-tighter">Un tunnel de paiement en 5 minutes</p>
 
              </div>
            </div> */}

            {/* <div className="flex flex-row md:flex-col justify-center lg:space-x-2 mt-[10em]"> */}
            {/* <div className="">
            </div>

            <p className="mt-10 md:mt-2 p-2 text-4xl md:text-4xl leading-1 font-bold tracking-tighter text-center">Simplicité</p>
            <p className="mt-10 md:mt-2 p-2 text-4xl md:text-4xl leading-1 font-bold tracking-tighter text-center">Peu de budget</p>
            <p className="mt-10 md:mt-2 p-2 text-4xl md:text-4xl leading-1 font-bold tracking-tighter text-center">Pas le temps</p>

            <div className="flex justify-center space-x-5 p-4 mt-[6em]">
              
                <Link href="/dashboard" className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-blue-600 ring-offset-blue-500 hover:ring-offset-indigo-500 ease focus:outline-none">
                    <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                    <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                    <span className="relative z-20 flex items-center text-2xl">
                        <svg className="relative w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        Présentation
                    </span>
                </Link>  
                <Link href="/dashboard" className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-blue-600 ring-offset-blue-500 hover:ring-offset-indigo-500 ease focus:outline-none">
                    <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                    <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                    <span className="relative z-20 flex items-center text-2xl">
                        <svg className="relative w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        Commencer
                    </span>
                </Link>                
            </div> */}



{/*
           <div className="w-4/4 mb-3 mt-[3em]">
                <div className="flex text-center justify-center">
                    <div>
                        <Link href="/dashboard" className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-blue-600 ring-offset-blue-500 hover:ring-offset-indigo-500 ease focus:outline-none">
                            <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                            <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                            <span className="relative z-20 flex items-center text-2xl">
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
              <motion.div
                initial={{
                  x: 50,
                  opacity: 0,
                  scale: 1,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.1,
                }}>


                
                <div className="artboard artboard-demo phone-1">
                  <div className='bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 h-screen w-full'>
                    
                    <div className="bg-no-repeat h-screen bg-cover w-full" style={{backgroundImage: 'url(https://preview.tailwindtemplates.co/basic/assets/images/banner-bg.svg)'}}>
                    </div>
                    
                  </div>
                </div>



                </motion.div>

              </div>
            </div> */}



    //           <div className="mt-5 justify-center flex md:justify-normal md:flex-none md:mt-[10em] md:ml-10">
    //             <h1 className="font-extrabold  text-6xl md:text-6xl text-white leading-1 tracking-tighter">
    //                 Self 
    //                 <span className='text-blue-500 ml-3'>
    //                 Link
    //                 </span>
    //             </h1>
    //           </div>
              
    //           <div className="mt-[5em] items-center flex flex-col md:flex-row md:space-x-10 justify-center md:justify-normal">
    //             <div>
    //             <svg width="400" height="400" viewBox="0 0 247 253" fill="none" xmlns="http://www.w3.org/2000/svg">
    //               <rect x="63" y="75" width="121" height="103" rx="2" fill="#E5EDFA"/>
    //               <rect x="74" y="91" width="121" height="103" rx="2" fill="#3707F4"/>
    //               <rect x="87" y="107" width="42" height="71" rx="2" fill="#55C2FF"/>
    //               <rect x="127" y="107" width="57" height="71" rx="2" fill="white"/>
    //               <ellipse cx="155" cy="143.5" rx="5" ry="5.5" fill="black"/>
    //               <path d="M155 144L161.062 155.25H148.938L155 144Z" fill="black"/>
    //               <g filter="url(#filter0_b_6_18)">
    //               <path d="M55.4343 61.16C53.381 61.16 51.8343 60.5867 50.7943 59.44C49.7676 58.2933 49.2543 56.5867 49.2543 54.32C49.2543 52.0533 49.7676 50.3467 50.7943 49.2C51.8343 48.0533 53.381 47.48 55.4343 47.48C56.141 47.48 56.8343 47.5667 57.5143 47.74C58.1943 47.9133 58.8543 48.1533 59.4943 48.46V49.84C58.881 49.5067 58.2476 49.26 57.5943 49.1C56.941 48.9267 56.2743 48.84 55.5943 48.84C54.4743 48.84 53.5543 49.0333 52.8343 49.42C52.1276 49.8067 51.601 50.4067 51.2543 51.22C50.921 52.02 50.7543 53.0533 50.7543 54.32C50.7543 55.5867 50.921 56.6267 51.2543 57.44C51.601 58.24 52.1276 58.8333 52.8343 59.22C53.5543 59.6067 54.4743 59.8 55.5943 59.8C56.2743 59.8 56.941 59.72 57.5943 59.56C58.2476 59.4 58.881 59.1533 59.4943 58.82V60.2C59.0676 60.4 58.6276 60.5733 58.1743 60.72C57.7343 60.8667 57.281 60.9733 56.8143 61.04C56.361 61.12 55.901 61.16 55.4343 61.16ZM66.2957 61.3C64.7357 61.3 63.5757 60.84 62.8157 59.92C62.069 58.9867 61.6957 57.6933 61.6957 56.04C61.6957 54.3067 62.089 53.0067 62.8757 52.14C63.6757 51.2733 64.8024 50.84 66.2557 50.84C67.3357 50.84 68.2157 51.06 68.8957 51.5C69.5757 51.9267 70.0757 52.5333 70.3957 53.32C70.7157 54.0933 70.8757 55 70.8757 56.04C70.8757 57.68 70.4757 58.9667 69.6757 59.9C68.889 60.8333 67.7624 61.3 66.2957 61.3ZM66.2757 59.98C67.089 59.98 67.7224 59.8067 68.1757 59.46C68.629 59.1 68.949 58.6267 69.1357 58.04C69.3357 57.44 69.4357 56.7733 69.4357 56.04C69.4357 55.2533 69.3357 54.5733 69.1357 54C68.9357 53.4133 68.6024 52.96 68.1357 52.64C67.6824 52.32 67.0624 52.16 66.2757 52.16C65.4757 52.16 64.849 52.3333 64.3957 52.68C63.9424 53.0267 63.6157 53.4933 63.4157 54.08C63.229 54.6533 63.1357 55.3067 63.1357 56.04C63.1357 57.2133 63.369 58.1667 63.8357 58.9C64.3024 59.62 65.1157 59.98 66.2757 59.98ZM73.5824 51.82C73.9024 51.66 74.2291 51.52 74.5624 51.4C74.9091 51.2667 75.2558 51.16 75.6024 51.08C75.9624 51 76.3224 50.94 76.6824 50.9C77.0558 50.86 77.4291 50.84 77.8024 50.84C78.7758 50.84 79.5491 50.9867 80.1224 51.28C80.6958 51.56 81.1091 51.9733 81.3624 52.52C81.6291 53.0667 81.7624 53.7267 81.7624 54.5V61H80.3224V54.5C80.3224 54.26 80.2891 54.0067 80.2224 53.74C80.1691 53.4733 80.0558 53.22 79.8824 52.98C79.7091 52.7267 79.4424 52.5267 79.0824 52.38C78.7224 52.22 78.2424 52.14 77.6424 52.14C77.2291 52.14 76.8024 52.1733 76.3624 52.24C75.9224 52.3067 75.4758 52.4067 75.0224 52.54V61H73.5824V51.82ZM84.9691 51.82C85.2891 51.66 85.6158 51.52 85.9491 51.4C86.2958 51.2667 86.6425 51.16 86.9891 51.08C87.3491 51 87.7091 50.94 88.0691 50.9C88.4425 50.86 88.8158 50.84 89.1891 50.84C90.1625 50.84 90.9358 50.9867 91.5091 51.28C92.0825 51.56 92.4958 51.9733 92.7491 52.52C93.0158 53.0667 93.1491 53.7267 93.1491 54.5V61H91.7091V54.5C91.7091 54.26 91.6758 54.0067 91.6091 53.74C91.5558 53.4733 91.4425 53.22 91.2691 52.98C91.0958 52.7267 90.8291 52.5267 90.4691 52.38C90.1091 52.22 89.6291 52.14 89.0291 52.14C88.6158 52.14 88.1891 52.1733 87.7491 52.24C87.3091 52.3067 86.8625 52.4067 86.4091 52.54V61H84.9691V51.82ZM100.476 61.3C99.5292 61.3 98.7092 61.1067 98.0159 60.72C97.3225 60.32 96.7892 59.7267 96.4159 58.94C96.0425 58.1533 95.8559 57.1733 95.8559 56C95.8559 54.28 96.2425 52.9933 97.0159 52.14C97.8025 51.2733 98.8759 50.84 100.236 50.84C101.303 50.84 102.156 51.08 102.796 51.56C103.449 52.04 103.916 52.6867 104.196 53.5C104.476 54.3133 104.609 55.2333 104.596 56.26H96.5759L96.6759 54.94H103.656L103.096 55.14C103.056 54.14 102.803 53.3933 102.336 52.9C101.883 52.4067 101.183 52.16 100.236 52.16C99.5825 52.16 99.0359 52.28 98.5959 52.52C98.1692 52.76 97.8492 53.18 97.6359 53.78C97.4225 54.3667 97.3159 55.1933 97.3159 56.26C97.3159 57.4733 97.5959 58.4 98.1559 59.04C98.7292 59.6667 99.5292 59.98 100.556 59.98C101.049 59.98 101.503 59.9467 101.916 59.88C102.329 59.8 102.709 59.6933 103.056 59.56C103.403 59.4267 103.709 59.28 103.976 59.12V60.6C103.496 60.8267 102.963 61 102.376 61.12C101.803 61.24 101.169 61.3 100.476 61.3ZM111.293 56.64L108.013 61H106.393L110.433 55.56L111.293 56.64ZM115.633 61H113.793L106.493 51.02H108.313L115.633 61ZM110.633 55.42L113.933 51.02H115.593L111.433 56.64L110.633 55.42ZM118.018 61V51.02H119.458V61H118.018ZM117.938 49.24V47.66H119.538V49.24H117.938ZM126.843 61.3C125.283 61.3 124.123 60.84 123.363 59.92C122.616 58.9867 122.243 57.6933 122.243 56.04C122.243 54.3067 122.636 53.0067 123.423 52.14C124.223 51.2733 125.349 50.84 126.803 50.84C127.883 50.84 128.763 51.06 129.443 51.5C130.123 51.9267 130.623 52.5333 130.943 53.32C131.263 54.0933 131.423 55 131.423 56.04C131.423 57.68 131.023 58.9667 130.223 59.9C129.436 60.8333 128.309 61.3 126.843 61.3ZM126.823 59.98C127.636 59.98 128.269 59.8067 128.723 59.46C129.176 59.1 129.496 58.6267 129.683 58.04C129.883 57.44 129.983 56.7733 129.983 56.04C129.983 55.2533 129.883 54.5733 129.683 54C129.483 53.4133 129.149 52.96 128.683 52.64C128.229 52.32 127.609 52.16 126.823 52.16C126.023 52.16 125.396 52.3333 124.943 52.68C124.489 53.0267 124.163 53.4933 123.963 54.08C123.776 54.6533 123.683 55.3067 123.683 56.04C123.683 57.2133 123.916 58.1667 124.383 58.9C124.849 59.62 125.663 59.98 126.823 59.98ZM134.129 51.82C134.449 51.66 134.776 51.52 135.109 51.4C135.456 51.2667 135.803 51.16 136.149 51.08C136.509 51 136.869 50.94 137.229 50.9C137.603 50.86 137.976 50.84 138.349 50.84C139.323 50.84 140.096 50.9867 140.669 51.28C141.243 51.56 141.656 51.9733 141.909 52.52C142.176 53.0667 142.309 53.7267 142.309 54.5V61H140.869V54.5C140.869 54.26 140.836 54.0067 140.769 53.74C140.716 53.4733 140.603 53.22 140.429 52.98C140.256 52.7267 139.989 52.5267 139.629 52.38C139.269 52.22 138.789 52.14 138.189 52.14C137.776 52.14 137.349 52.1733 136.909 52.24C136.469 52.3067 136.023 52.4067 135.569 52.54V61H134.129V51.82Z" fill="black"/>
    //               <path d="M151.317 61V51.82C151.477 51.7533 151.783 51.64 152.237 51.48C152.703 51.32 153.257 51.1733 153.897 51.04C154.55 50.9067 155.223 50.84 155.917 50.84C156.023 50.84 156.13 50.8533 156.237 50.88C156.343 50.9067 156.45 50.9333 156.557 50.96V52.24C156.21 52.2 155.87 52.18 155.537 52.18C155.217 52.18 154.903 52.2 154.597 52.24C154.29 52.2667 153.983 52.3067 153.677 52.36C153.37 52.4133 153.063 52.4667 152.757 52.52V61H151.317ZM162.296 61.3C161.856 61.3 161.409 61.2533 160.956 61.16C160.516 61.0667 160.103 60.9067 159.716 60.68C159.343 60.4533 159.036 60.1467 158.796 59.76C158.569 59.36 158.456 58.86 158.456 58.26C158.456 57.4333 158.609 56.7733 158.916 56.28C159.236 55.7733 159.669 55.4133 160.216 55.2C160.776 54.9733 161.416 54.86 162.136 54.86C162.683 54.86 163.156 54.8933 163.556 54.96C163.956 55.0267 164.309 55.1267 164.616 55.26C164.936 55.38 165.223 55.52 165.476 55.68L165.756 57C165.449 56.7733 165.003 56.58 164.416 56.42C163.843 56.2467 163.209 56.16 162.516 56.16C161.676 56.16 161.029 56.32 160.576 56.64C160.123 56.96 159.896 57.4267 159.896 58.04C159.896 58.5333 160.029 58.9267 160.296 59.22C160.576 59.5133 160.923 59.72 161.336 59.84C161.763 59.96 162.196 60.02 162.636 60.02C163.503 60.02 164.156 59.96 164.596 59.84C165.049 59.7067 165.276 59.4133 165.276 58.96V54.38C165.276 53.6067 165.049 53.04 164.596 52.68C164.143 52.32 163.496 52.14 162.656 52.14C162.123 52.14 161.556 52.22 160.956 52.38C160.369 52.5267 159.863 52.7667 159.436 53.1V51.66C159.849 51.3933 160.403 51.1933 161.096 51.06C161.789 50.9133 162.463 50.84 163.116 50.84C163.556 50.84 163.963 50.8867 164.336 50.98C164.709 51.06 165.043 51.1867 165.336 51.36C165.629 51.52 165.876 51.7333 166.076 52C166.289 52.2533 166.449 52.5533 166.556 52.9C166.676 53.2333 166.736 53.6133 166.736 54.04V58.88C166.736 59.5867 166.523 60.1133 166.096 60.46C165.683 60.8067 165.136 61.0333 164.456 61.14C163.789 61.2467 163.069 61.3 162.296 61.3ZM173.85 61.28C173.557 61.28 173.223 61.24 172.85 61.16C172.49 61.08 172.137 60.98 171.79 60.86C171.443 60.74 171.137 60.6133 170.87 60.48L171.37 59.98V65.34H169.93V52.82C169.93 52.4067 170.057 52.0733 170.31 51.82C170.577 51.5667 170.917 51.3733 171.33 51.24C171.743 51.0933 172.183 50.9933 172.65 50.94C173.117 50.8733 173.557 50.84 173.97 50.84C174.77 50.84 175.523 51.0067 176.23 51.34C176.937 51.6733 177.51 52.24 177.95 53.04C178.39 53.8267 178.61 54.9 178.61 56.26C178.61 57.2867 178.423 58.18 178.05 58.94C177.69 59.6867 177.157 60.2667 176.45 60.68C175.743 61.08 174.877 61.28 173.85 61.28ZM173.85 59.96C174.583 59.96 175.183 59.8067 175.65 59.5C176.13 59.18 176.49 58.74 176.73 58.18C176.97 57.62 177.09 56.98 177.09 56.26C177.09 55.54 177.01 54.8667 176.85 54.24C176.69 53.6133 176.383 53.1133 175.93 52.74C175.477 52.3533 174.817 52.16 173.95 52.16C173.257 52.16 172.65 52.24 172.13 52.4C171.623 52.56 171.37 52.7867 171.37 53.08V59.26C171.783 59.5 172.197 59.68 172.61 59.8C173.023 59.9067 173.437 59.96 173.85 59.96ZM181.397 61V51.02H182.837V61H181.397ZM181.317 49.24V47.66H182.917V49.24H181.317ZM190.261 61.3C189.781 61.3 189.275 61.2267 188.741 61.08C188.208 60.9467 187.701 60.6933 187.221 60.32C186.755 59.9333 186.368 59.3867 186.061 58.68C185.768 57.96 185.621 57.0267 185.621 55.88C185.621 54.3333 185.995 53.1133 186.741 52.22C187.501 51.3133 188.648 50.86 190.181 50.86C190.475 50.86 190.821 50.9 191.221 50.98C191.621 51.06 192.015 51.16 192.401 51.28C192.788 51.4 193.108 51.5267 193.361 51.66L192.861 52.16V46.8H194.301V59.28C194.301 59.6533 194.168 59.9733 193.901 60.24C193.648 60.4933 193.315 60.7 192.901 60.86C192.488 61.0067 192.048 61.1133 191.581 61.18C191.115 61.26 190.675 61.3 190.261 61.3ZM190.281 59.98C190.975 59.98 191.575 59.9 192.081 59.74C192.601 59.58 192.861 59.38 192.861 59.14V52.88C192.448 52.64 192.001 52.4667 191.521 52.36C191.055 52.24 190.608 52.18 190.181 52.18C189.461 52.18 188.875 52.34 188.421 52.66C187.981 52.9667 187.655 53.4 187.441 53.96C187.241 54.5067 187.141 55.1467 187.141 55.88C187.141 56.6 187.221 57.2733 187.381 57.9C187.541 58.5133 187.848 59.0133 188.301 59.4C188.755 59.7867 189.415 59.98 190.281 59.98ZM201.628 61.3C200.682 61.3 199.862 61.1067 199.168 60.72C198.475 60.32 197.942 59.7267 197.568 58.94C197.195 58.1533 197.008 57.1733 197.008 56C197.008 54.28 197.395 52.9933 198.168 52.14C198.955 51.2733 200.028 50.84 201.388 50.84C202.455 50.84 203.308 51.08 203.948 51.56C204.602 52.04 205.068 52.6867 205.348 53.5C205.628 54.3133 205.762 55.2333 205.748 56.26H197.728L197.828 54.94H204.808L204.248 55.14C204.208 54.14 203.955 53.3933 203.488 52.9C203.035 52.4067 202.335 52.16 201.388 52.16C200.735 52.16 200.188 52.28 199.748 52.52C199.322 52.76 199.002 53.18 198.788 53.78C198.575 54.3667 198.468 55.1933 198.468 56.26C198.468 57.4733 198.748 58.4 199.308 59.04C199.882 59.6667 200.682 59.98 201.708 59.98C202.202 59.98 202.655 59.9467 203.068 59.88C203.482 59.8 203.862 59.6933 204.208 59.56C204.555 59.4267 204.862 59.28 205.128 59.12V60.6C204.648 60.8267 204.115 61 203.528 61.12C202.955 61.24 202.322 61.3 201.628 61.3Z" fill="#B5C8FB"/>
    //               </g>
    //               <defs>
    //               <filter id="filter0_b_6_18" x="45.2543" y="42.8" width="164.514" height="26.54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    //               <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    //               <feGaussianBlur in="BackgroundImageFix" stdDeviation="2"/>
    //               <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_6_18"/>
    //               <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_6_18" result="shape"/>
    //               </filter>
    //               </defs>
    //             </svg>
    //             </div>

    //             <div className='border  h-48 w-48 md:h-64 md:w-64 rounded p-2 flex items-center justify-center border-blue-400 mb-5 md:mb-0 shadow-lg'>
    //               XD
    //             </div>

    //             <div className='border  h-48 w-48 md:h-64 md:w-64  rounded p-2 flex items-center justify-center border-blue-400 mb-5 md:mb-0 shadow-lg'>
    //               XD
    //             </div>
    //           </div>

              




          
    //     </div>




            
   
    //   </div>

      



    // </main>

}
