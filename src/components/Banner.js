import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa"
import { HiLocationMarker } from "react-icons/hi";
import { useSelector } from 'react-redux';
import { Popover } from '@headlessui/react'
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import { FaUserCircle } from "react-icons/fa"

export default function Navbar() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const [selectedOption, setSelectedOption] = useState('');
  const [item, setItem] = useState([]);

  const URL = `https://www.themealdb.com/api/json/v1/1/list.php?a=list`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(URL);
        const food = response.data;
        setItem(food.meals);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const handleSelect = (event) => {
    setSelectedOption(event.target.value);
  };
  const Logout = async () => {
    toast.success('Successfully logged out')
    Cookies.remove('jwt');
    navigate('/login');
  }
  return (
    <>
      <header className='h-full' style={{ backgroundImage: "url(background.avif)" }}>
        <div className='h-full bg-cover bg-center' style={{ background: "rgba(0,0,0,0.5" }}>
          <div className='flex justify-between '>
            <div className='w-28'>
              <img src="logo1.png" alt="" />
            </div>
            <div className="text-gray-600 body-font ">
              <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                {Cookies.get('jwt') ?
                  <div className='text-white text-3xl m-auto md:px-4 pointer '>
                    <Popover className="relative mt-1 outline-none">
                      <Popover.Button><FaUserCircle /></Popover.Button>
                      <Popover.Panel className=" absolute  px-5 pb-7 right-0  text-black z-10">
                        <div className="max-w-2xl mx-auto">
                          <aside className="md:w-64" aria-label="Sidebar">
                            <div className="px-3 py-4 overflow-y-auto rounded bg-gray-50 dark:bg-gray-800">
                              <ul className="space-y-2">
                                <li>
                                  <Link to='/userProfile' className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <svg
                                      className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                                      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                                    </svg>
                                    <span className="ml-3">Dashboard</span>
                                  </Link>
                                </li>
                                <li>
                                  <Link to='/orderTrack'className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <svg
                                      className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                                    </svg>
                                    <span className="flex-1 ml-3 whitespace-nowrap">Track Order</span>
                                  </Link>
                                </li>
                                <li>
                                  <Link to='/checkout'  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" >
                                    <svg
                                      className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                                      <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                                    </svg>
                                    <span className="flex-1 ml-3 whitespace-nowrap">Cart</span>
                                    {cart.cart.length > 1 && <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-red-700 dark:text-red-200">
                                      {cart.cart.length}
                                    </span>}
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    to="/"
                                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                  >
                                    <svg
                                      className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                    <span className="flex-1 ml-3 whitespace-nowrap">Products</span>
                                  </Link>
                                </li>
                                <li>
                                  <div onClick={Logout}
                                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                  >
                                    <svg
                                      className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                    <span className="flex-1 ml-3 whitespace-nowrap">Logout</span>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </aside>
                        </div>
                      </Popover.Panel>
                    </Popover>
                  </div> :
                  <div className='flex'>
                    <nav className="md:ml-auto flex mt-5 text-white flex-wrap items-center text-base justify-center">
                      <Link to="signUp" className="mr-5  hover:text-red-500 md:py-2 md:px-3 p-2 bg-red-700 rounded hover:bg-gray-200">Sign Up</Link>
                    </nav>
                    <nav className="md:ml-auto flex mt-4 text-white flex-wrap items-center text-base justify-center">
                      <Link to="/login" className="inline-flex items-center hover:bg-gray-200 hover:text-green-500 bg-green-500  text-white border-0 md:py-2 md:px-3 p-2 focus:outline-none  rounded text-base  md:mt-0">Log In
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </Link>
                    </nav>
                  </div>
                }
              </div>
            </div>
          </div>
          <div className='md:p-10'>
            <div className='text-white text-center mt-10'>
              <h1 className=' text-6xl  font-bold'><span className='text-red-600'>F</span>ood <span className='text-green-600'>F</span>usion</h1>
              <p className='text-4xl mt-5 '>Find the best restaurants, cafés and bars in India</p>
            </div>
            
            <div className='lg:bg-white lg:flex  mx-auto mt-5 w-3/4 md:w-1/2 justify-around rounded md:pb-0 pb-5'>
              <div className='flex border-gray-500 bg-white p-3 rounded'>
                <div className='text-red-500 mt-1 text-xl'>
                  <HiLocationMarker />
                </div>
                <select value={selectedOption} className='outline-none md:pr-52 pr-24 lg:pr-5 ps-3' onChange={handleSelect}>
                  {item.map((area) => {
                    return (<option value={area.strArea}>{area.strArea}</option>)
                  })
                  }
                </select>
              </div>

              <div className='flex  bg-white  p-3 rounded lg:mt-0 mt-3'>
                <div className='text-green-500  mt-1 text-xl'>
                  <FaSearch />
                </div>
                <input type="text" className='outline-none ps-3 bg-transparent' placeholder='Search' />
              </div>
            </div>
          </div>
        </div>
      </header>
      <ToastContainer />
    </>
  )
}
