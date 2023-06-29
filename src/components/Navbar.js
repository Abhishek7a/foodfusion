import React from 'react';
import { FaSearch, FaUserCircle } from "react-icons/fa"
import { HiLocationMarker } from "react-icons/hi"
import { Link } from "react-router-dom";
export default function Navbar() {
    return (
        <div className='flex justify-between'>
            <div className='w-28 mx-auto'>
                <img src="main_logo.png" alt="" />
            </div>
            <div className='bg-white flex mx-auto mt-5 py-3 w-1/2 justify-evenly  rounded'>
                <div className=' border-gray-500'>
                    <div className=' text-red-500 text-xl'>
                        <HiLocationMarker />
                    </div>
                    <input className='outline-none ' type="text" placeholder='chandigarh' />
                </div>

                <div className=' '>
                    <div className='text-red-500 mt-1 text-xl'>
                        <FaSearch />
                    </div>
                    <input type="text" className='outline-none px-5' placeholder='Search' />
                </div>
            </div>
            <Link to='/cart' className='text-3xl m-auto px-5 pointer '>
                <FaUserCircle />
            </Link>

        </div>
    )
}
