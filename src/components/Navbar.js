import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FaSearch, FaUserCircle, FaShoppingCart } from "react-icons/fa"
import { HiLocationMarker } from "react-icons/hi"
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { Popover } from '@headlessui/react'
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Navbar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cart = useSelector((state) => state.cart);
    const [item, setItem] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');
    const URL = `https://www.themealdb.com/api/json/v1/1/list.php?a=list`;
    const URL2 = `https://www.themealdb.com/api/json/v1/1/search.php?f=a`;

    const handleSelect = (event) => {
        setSelectedOption(event.target.value);
    };

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
    // console.log(selectedOption);
    const Logout = async () => {
        toast.success('Successfully logged out')
        Cookies.remove('jwt');
        navigate('/login');
    }
    return (
        <div className='flex justify-between bg-gray-900 fixed w-full z-10'>
            <div className='w-24 mx-auto'>
                <img src="../logo1.png" alt="" />
            </div>
            <div className='bg-gray-900 flex mx-auto mt-2 p-5 w-1/2 justify-evenly  rounded'>
                <div className='flex border-gray-500 pb-3'>
                    <div className='mt-3 text-red-500 text-lg'>
                        <HiLocationMarker />
                    </div>
                    {/* <input className='outline-none ' type="text" placeholder='chandigarh' /> */}
                    <select className='outline-none  bg-gray-900 text-white pl-1' value={selectedOption} onChange={handleSelect}>
                        {item.map((area) => {
                            return (<option key={area.strArea} value={area.strArea}>{area.strArea}</option>)
                        })
                        }
                    </select>
                </div>

                <div className='pb-3 flex'>
                    <div className='text-green-500 mt-2 text-lg'>
                        <FaSearch />
                    </div>
                    <input type="text" className='outline-none pl-3 bg-gray-900 text-white' placeholder='Search' />
                </div>
            </div>
            <div className='flex'>
                {Cookies.get('jwt') ?
                    <div className='text-white text-3xl m-auto px-5 pointer '>
                        <Popover className="relative mt-1">
                            <Popover.Button><FaUserCircle /></Popover.Button>
                            <Popover.Panel className=" bg-gray-300 border-2 border-gray-900 border-solid absolute  px-10 pb-10 right-0  text-black z-10">
                                <div className='relative text-center mt-4'>
                                    <div className='text-5xl ml-10'><FaUserCircle /></div>
                                    <div className=' text-sm  mt-5' >Xyz</div>
                                    <div className=' text-sm ' >spam@123gmail.com</div>
                                    <div onClick={Logout} className=' text-sm cursor-pointer' >Logout</div>
                                </div>

                                <img src="/solutions.jpg" alt="" />
                            </Popover.Panel>
                        </Popover>
                    </div> :
                    <>
                        <nav className="md:ml-auto flex mt-2 text-white flex-wrap items-center text-base justify-center">
                            <Link to="/signUp" className="mr-5  py-2 px-3 bg-red-600 rounded hover:bg-red-700">Sign Up</Link>
                        </nav>
                        <nav className="md:ml-auto flex mt-2 text-white flex-wrap items-center text-base justify-center">
                            <Link to="/login" className="inline-flex items-center hover:bg-green-600  bg-green-500   border-0 py-2 px-3 focus:outline-none  rounded text-base  md:mt-0">Log In
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                        </nav>
                    </>
                }

                <Link to='/cart' className=' text-white relative text-3xl m-auto px-5 pointer '>
                    {cart.cart.length > 0 ? <span className='bg-green-600 absolute rounded-full text-sm right-3 px-1'> {cart.cart.length}</span> : ""}
                    <FaShoppingCart />
                </Link>
            </div>

        </div >
    )
}
