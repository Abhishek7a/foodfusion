import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { add } from '../Redux/Reduser/Reducer';

export default function ItemCard(props) {
    const [item, setItem] = useState([]);
    const [like, setLike] = useState(false);
    const { id } = useParams();
    const URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

    const dispatch = useDispatch();
    const handleAdd = (product) => {
        dispatch(add(product));
    }
    const handleCart = (product) => {
        dispatch(add(product));
        props.openCart()
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(URL);
                const food = response.data;
                const modifiedData = food.meals.map((item) => ({
                    ...item,
                    quantity: 1, // Set the initial quantity value
                }));
                setItem(modifiedData);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);

    const favourite = () => {
        setLike(!like);
    }
    return (
        <section className="text-gray-600 body-font overflow-hidden pt-20" >
            <div className="container px-5 py-8 mx-auto">
                {item.length == 0 ? <h4>Loading...</h4> : item.map((item) =>
                    <div className="lg:w-4/5 mx-auto flex flex-wrap" key={item.idMeal} >
                        <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-56 object-cover object-center rounded" src={item.strMealThumb} />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">{item.strCategory}</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{item.strMeal}</h1>
                            <div className="flex mb-4">
                                <span className="flex items-center">
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-green-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-green-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-green-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-green-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <span className="text-gray-600 ml-3">4 Reviews</span>
                                </span>
                                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                    <a className="text-gray-500">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a className="text-gray-500">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </a>
                                    <a className="text-gray-500">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>
                                    </a>
                                </span>
                            </div>
                            <p className="leading-relaxed">{item.strInstructions.slice(0, 800)}...</p>
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                                <div className="flex">
                                    <span className="mr-2 font-bold text-black">Ingredients:</span>
                                    <span className="mr-2">{item.strIngredient1}, {item.strIngredient2}, {item.strIngredient3}, {item.strIngredient4}, {item.strIngredient5}.</span>
                                </div>
                            </div>
                            <div className="flex justify-between gap-2">
                                <span className="title-font font-medium text-2xl text-gray-900">₹{item.idMeal.slice(2, 4)}.00</span>
                                <div className='flex gap-2 '>
                                    <Link to='/checkout' onClick={() => handleAdd(item)} className="flex ml-auto text-white hover:bg-red-600 bg-red-500 border-0 md:py-2 md:px-6 sm:p-2 p-1 py-2 focus:outline-none  rounded">Check out</Link>
                                    <button onClick={() => handleCart(item)} className="flex ml-auto text-white hover:bf-green-600 bg-green-500 border-0 md:py-2 md:px-6 sm:p-2 p-1 py-2 focus:outline-none  rounded">Add to cart</button>
                                    <button className="rounded-full w-10 h-10 bg-gray-200 hover:bg-pink-300  p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                        <svg onClick={favourite} fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className={like === false ? "w-5 h-5 hover:text-pink-500" : "w-5 h-5 text-pink-500"} viewBox="0 0 24 24">
                                            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}
