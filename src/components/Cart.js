import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../Redux/Reduser/Reducer';

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  // const [meal, setMeal] = useState([])
  // const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
 
  const handleRemove = (productId) => {
    // console.log(productId);
    dispatch(remove(productId));
  };
 
  // useEffect(() => {
  //   dispatch((remove()));
  // }, [cart]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(URL);
  //       const food = response.data.categories;
  //       setMeal(food);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   fetchData();
  // }, [])
  let cost = 0;
  // items.map((item) => {
    // cost += parseInt(item.idMeal.slice(2, 4));
  // })
  // console.log(items);
  return (
    <div className="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <div className="pointer-events-auto w-screen max-w-md">
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                    <div className="ml-3 flex h-7 items-center">
                      <button onClick={goBack} type="button" className="-m-2 p-2 text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Close panel</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  {cart.map((item) => {
                    return (<div className="mt-8" key={item.idMeal}>
                      <div className="flow-root">
                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                          <li className="flex py-6">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img src={item.strMealThumb} alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="h-full w-full object-cover object-center" />
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    <a href="#">{item.strMeal}</a>
                                  </h3>
                                  <p className="ml-4">₹{item.idMeal.slice(2, 4)}.00</p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">{item.strCategory}</p>
                              </div>
                              <div className="flex flex-1 items-end justify-between text-sm">
                                <p className="text-gray-500">Qty 1</p>

                                <div className="flex">
                                  <button
                                    onClick={() =>handleRemove(item.idMeal
                                    )}
                                    type="button" className="font-medium text-red-600 hover:text-red-500">Remove</button>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    )
                  })}

                </div>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>₹{cost}</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                  <div className="mt-6">
                    <Link to='/checkout' className="flex items-center justify-center rounded-md border border-transparent bg-green-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-700">Checkout</Link>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p >
                      <div>
                        or
                      </div>
                      <Link to="/" type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Continue Shopping
                        <span aria-hidden="true"> &rarr;</span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
