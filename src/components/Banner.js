import React from 'react';
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa"
import { HiLocationMarker } from "react-icons/hi"
export default function Navbar() {
  return (
    <>
      <header className='h-96' style={{ backgroundImage: "url(background.avif)" }}>
        <div className='h-full bg-cover bg-center' style={{ background: "rgba(0,0,0,0.5" }}>
          <div className='flex justify-between'>
            <div className='w-44'>
              <img src="main_logo.png" alt="" />
            </div>
            {/* <header>
          {/* <Link to='/'>Raustraunt</Link> */}
            {/* <Link to='/'>Log In</Link> */}
            {/* <Link to='/'>Sign Up</Link> */}

            {/* </div> */}
            {/* </div> */}
            <div className="text-gray-600 body-font">
              <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                {/* <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"> */}
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24"> */}
                {/* <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path> */}
                {/* </svg> */}
                {/* <span className="ml-3 text-xl">Tailblocks</span> */}
                {/* </a> */}
                <nav className="md:ml-auto flex text-white flex-wrap items-center text-base justify-center">
                  {/* <a className="mr-5  hover:text-gray-900">First Link</a> */}
                  <Link to="signUp" className="mr-5   hover:text-red-500 py-2 px-3 bg-red-700 rounded hover:bg-gray-200">Sign Up</Link>
                  {/* <a className="mr-5 hover:text-gray-900">Third Link</a>
              <a className="mr-5 hover:text-gray-900">Fourth Link</a> */}
                </nav>
                <Link to="/login" className="inline-flex items-center hover:bg-gray-200 hover:text-green-500 bg-green-500  text-white border-0 py-2 px-3 focus:outline-none  rounded text-base mt-4 md:mt-0">Log In
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className='text-white text-center '>
            <h1 className=' text-6xl  font-bold'>Food Fusion</h1>
            <p className='text-4xl mt-5 '>Find the best restaurants, cafés and bars in India</p>
          </div>
          <div className='bg-white flex mx-auto mt-5 py-3 w-1/2 justify-around rounded'>
            <div className='flex border-gray-500'>
              <div  className='text-red-500 mt-1 text-xl'>
                <HiLocationMarker />
              </div>
              <input className='outline-none px-5 ' type="text" placeholder='chandigarh' />
            </div>
            
            <div className='flex '>
              <div className='text-red-500 mt-1 text-xl'>
                <FaSearch />
              </div>
              <input type="text" className='outline-none px-5' placeholder='Search' />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
