import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FaSearch, FaUserCircle } from "react-icons/fa"
import { HiLocationMarker } from "react-icons/hi"
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';

export default function Navbar() {
    const dispatch=useDispatch();
    const [item, setItem] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');
    const [SearchByName, setSearchByName] = useState([]);
    const URL = `https://www.themealdb.com/api/json/v1/1/list.php?a=list`;
    const URL2 = `https://www.themealdb.com/api/json/v1/1/search.php?f=a`;

    const handleSelect = (event) => {
        setSelectedOption(event.target.value);
        dispatch(event.target.value);
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
        const fetchDataByName = async () => {
            try {
                const response = await axios.get(URL2);
                const food = response.data;
                setSearchByName(food.meals);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
        fetchDataByName();
    }, []);
    console.log(selectedOption);
    return (
        <div className='flex justify-between bg-gray-900 '>
            <div className='w-28 mx-auto'>
                <img src="FFood.png" alt="" />
            </div>
            <div className='bg-gray-900 flex mx-auto mt-5 p-5 w-1/2 justify-evenly  rounded'>
                <div className='flex border-gray-500 pb-3'>
                    <div className='mt-1 text-red-500 text-xl'>
                        <HiLocationMarker />
                    </div>
                    {/* <input className='outline-none ' type="text" placeholder='chandigarh' /> */}
                    <select className='outline-none ps-3 bg-gray-900 text-white' value={selectedOption} onChange={handleSelect}>
                        {item.map((area) => {
                            return(<option value={area.strArea}>{area.strArea}</option>)
                        })
                        }
                    </select>
                </div>

                <div className='pb-3 flex'>
                    <div className='text-green-500 mt-1 text-xl'>
                        <FaSearch />
                    </div>
                    <input type="text" className='outline-none px-5 bg-gray-900 text-white' placeholder='Search' />
                </div>
            </div>
            <Link to='/cart' className=' text-white text-3xl m-auto px-5 pointer '>
                <FaUserCircle />
            </Link>

        </div >
    )
}
