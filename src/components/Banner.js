import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa"
import { HiLocationMarker } from "react-icons/hi"
export default function Navbar() {
  const [selectedOption, setSelectedOption] = useState('');
  const [item, setItem] = useState([]);

  const URL = `https://www.themealdb.com/api/json/v1/1/list.php?a=list`;
  // const URL2 = `https://www.themealdb.com/api/json/v1/1/${filter}.php`;
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
  return (
    <>
      <header className='h-full' style={{ backgroundImage: "url(background.avif)" }}>
        <div className='h-full bg-cover bg-center' style={{ background: "rgba(0,0,0,0.5" }}>
          <div className='flex justify-between '>
            <div className='w-32'>
              <img src="logo1.png" alt="" />
            </div>
            {/* <header>
          {/* <Link to='/'>Raustraunt</Link> */}
            {/* <Link to='/'>Log In</Link> */}
            {/* <Link to='/'>Sign Up</Link> */}

            {/* </div> */}
            {/* </div> */}
            <div className="text-gray-600 body-font ">
              <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                {/* <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"> */}
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24"> */}
                {/* <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path> */}
                {/* </svg> */}
                {/* <span className="ml-3 text-xl">Tailblocks</span> */}
                {/* </a> */}
                <nav className="md:ml-auto flex mt-5 text-white flex-wrap items-center text-base justify-center">
                  <Link to="signUp" className="mr-5  hover:text-red-500 py-2 px-3 bg-red-700 rounded hover:bg-gray-200">Sign Up</Link>
                </nav>
                <nav className="md:ml-auto flex mt-4 text-white flex-wrap items-center text-base justify-center">
                <Link to="/login" className="inline-flex items-center hover:bg-gray-200 hover:text-green-500 bg-green-500  text-white border-0 py-2 px-3 focus:outline-none  rounded text-base  md:mt-0">Log In
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
                </nav>
              </div>
            </div>
          </div>
          <div className='p-10'>
            <div className='text-white text-center mt-10'>
              <h1 className=' text-6xl  font-bold'><span className='text-red-600'>F</span>ood <span className='text-green-600'>F</span>usion</h1>
              <p className='text-4xl mt-5 '>Find the best restaurants, cafés and bars in India</p>
            </div>
            <div className='bg-white flex mx-auto mt-5 py-3 w-1/2 justify-around rounded'>
              <div className='flex border-gray-500'>
                <div className='text-red-500 mt-1 text-xl'>
                  <HiLocationMarker />
                </div>
                <select value={selectedOption} className='outline-none ps-3' onChange={handleSelect}>
                  {item.map((area) => {
                    return (<option  value={area.strArea}>{area.strArea}</option>)
                  })
                  }
                </select>
              </div>

              <div className='flex '>
                <div className='text-green-500 mt-1 text-xl'>
                  <FaSearch />
                </div>
                <input type="text" className='outline-none px-5' placeholder='Search' />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
