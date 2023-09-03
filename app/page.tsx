import Image from 'next/image'

export default function Home() {
  return (
    <main className='bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900'>
      <div className="bg-auto bg-no-repeat h-screen" style={{backgroundImage: 'url(https://preview.tailwindtemplates.co/basic/assets/images/banner-bg.svg)'}}>

        <div className="container mx-auto flex flex-col h-full">

          <div className='justify-center mt-[7em]'>
            <div className="w-full text-center text-white">
                <h1 className="text-5xl md:text-6xl leading-tight mb-6 font-bold">Self Link</h1>
                <p className="text-2xl mb-6">Build your payment tunnel in 5 minutes</p>
            </div>
          </div>

          <div className="w-4/4 mb-3 mt-[1em]">
              <div className="flex text-center justify-center">
                  <div>
                      <a href="#_" className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-blue-600 ring-offset-blue-500 hover:ring-offset-indigo-500 ease focus:outline-none">
                          <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                          <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                          <span className="relative z-20 flex items-center text-2xl"> {/* Ici, j'ai changé text-sm à text-lg */}
                              <svg className="relative w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                              Get Started !
                          </span>
                      </a>                
                  </div>
              </div>
          </div>
          
        <ol className="items-center sm:flex mt-0 md:mt-[5em]">
            <li className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                    <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                        <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </div>
                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pr-8">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.0.0</h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 2, 2021</time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
                </div>
            </li>
            <li className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                    <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                        <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </div>
                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pr-8">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.2.0</h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 23, 2021</time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
                </div>
            </li>
            <li className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                    <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                        <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </div>
                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pr-8">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.3.0</h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on January 5, 2022</time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
                </div>
            </li>
        </ol>



            {/* <div className="md:space-x-5 w-full  flex-col md:flex-row bg-blue-900 rounded-0 md:rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 mt-10 p-6 text-center flex justify-around items-center">
              <div>
                <h3 className="mt-5 md:mt-0 text-2xl font-semibold text-white mb-2">Rapide & Facile</h3>
                <img src="https://cdn-icons-png.flaticon.com/512/10795/10795096.png" alt="Description de l'image" className="mb-2 w-24 h-24 object-cover rounded-full mx-auto block"/>
                <p className="text-white"></p>
              </div>
              <div>
                <h3 className="mt-5 md:mt-0 text-2xl font-semibold text-white mb-2">Suivez vos ventes</h3>
                <img src="https://cdn-icons-png.flaticon.com/512/10795/10795096.png" alt="Description de l'image" className="mb-2 w-24 h-24 object-cover rounded-full mx-auto block"/>
                <p className="text-white">Nous concevons des sites Web uniques adaptés à vos besoins.</p>
              </div>
            </div> */}


            {/* <div className="mt-5 md:mt-[5em] w-4/4 text-white font-bold leading-tight text-lg">
              <div className="flex text-center md:justify-around">
                <div className="mt-3 p-2">Creer vos produits 
                  <img className="w-48 mt-2 shadow-md shadow-white rounded-full" src="https://cdn-icons-png.flaticon.com/512/3410/3410476.png"></img>
                </div>
                <div className="mt-3 p-2">Creer vos produits 
                  <img className="w-48 mt-2 shadow-md shadow-white rounded-full" src="https://cdn-icons-png.flaticon.com/512/8031/8031979.png"></img>
                </div>
                <div className="mt-3 p-2">Creer vos produits 
                  <img className="w-48 mt-2 shadow-md shadow-white rounded-full" src="https://cdn-icons-png.flaticon.com/512/10795/10795096.png"></img>
                </div>
              </div>
            </div> */}


            
        </div>
            
   
      </div>



    </main>
  )
}
