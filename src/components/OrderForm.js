import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { remove, increaseItemQuantity, decreaseItemQuantity } from '../Redux/Reduser/Reducer';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';


export default function OrderForm() {
    const navigate = useNavigate();

    const cart = useSelector((state) => state.cart);
    // const [itemQuantity, setItemQuantity] = useState(1)
    const dispatch = useDispatch();
    // const handleRemove = (productId) => {
    // dispatch(remove(productId));
    // };
    // useEffect(() => {
    //   handleRemove();
    // },[])
    var cost = 0;
    cart.cart.map((item) => {
        cost += parseInt(item.idMeal.slice(2, 4)* item.quantity);
    })
    // const quantityInc = (itemQuantity) => {
    // setItemQuantity(++itemQuantity)
    // }
    // const quantityDec = (itemQuantity) => {
    // itemQuantity > 1 ? setItemQuantity(--itemQuantity) : setItemQuantity(itemQuantity)
    // }
    // console.log(cart.quantity);
    const isLogin = () => {
        const cookieValue = Cookies.get('jwt');
        // console.log(cookieValue);
        if (cookieValue === undefined) {
            // window.location.href = '/login';
            navigate('/signUp');
        }
        else {
            // cart.cart.map((item) => {
            //     cost += parseInt(item.idMeal.slice(2, 4));
            // })
            // const RozerPay = (cost) => {
            let options = {
                key: "rzp_test_GqNfAUZIfyB3nc",
                amount: { cost } * 100,
                currency: "INR",
                name: "Food Fusion",
                description: "Food Item Purchase ",
                image: "logo.jpg",
                handler: () => {
                    alert("Payment Done")
                },
                theme: { color: "#FD4228" }
            };
            let rzp = new window.Razorpay(options);
            rzp.open();
            // }
        }
    }
    return (
        <body className="bg-gray-100 pt-24">
            <div className="container mx-auto ">
                <div className="flex shadow-md  ">
                    <div className="w-3/4 bg-white px-10  relative">

                        <div className="mt-10 pt-10 sm:mt-0">
                            {/* <div className="md:grid md:grid-cols-3 md:gap-6"> */}

                            <div className="mt-5 md:mt-0 md:col-span-2">
                                <div className="md:col-span-1 ml-7">
                                    <div className="px-4 sm:px-0">
                                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                                            Personal Information
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-600">
                                            Use a permanent address where you can receive mail.
                                        </p>
                                    </div>
                                </div>
                                <form action="#" method="POST" className='mt-10'>
                                    <div className="shadow overflow-hidden sm:rounded-md">
                                        <div className="px-4 py-5 bg-white sm:p-6">
                                            <div className="grid grid-cols-6 gap-6">
                                                <div className="col-span-6 sm:col-span-3">
                                                    <label
                                                        htmlFor="first_name"
                                                        className="block text-sm font-medium text-gray-700"
                                                    >
                                                        First name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="first_name"
                                                        id="first_name"
                                                        autoComplete="given-name"
                                                        className="mt-1  outline-green-500 block w-full shadow-sm sm:text-sm  rounded-md border-gray-300 border border-solid p-1"
                                                    />
                                                </div>
                                                <div className="col-span-6 sm:col-span-3">
                                                    <label
                                                        htmlFor="last_name"
                                                        className="block text-sm font-medium text-gray-700"
                                                    >
                                                        Last name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="last_name"
                                                        id="last_name"
                                                        autoComplete="family-name"
                                                        className="mt-1 outline-green-500 block w-full shadow-sm sm:text-sm  rounded-md border-gray-300 border border-solid p-1"
                                                    />
                                                </div>
                                                <div className="col-span-6 sm:col-span-4">
                                                    <label
                                                        htmlFor="email_address"
                                                        className="block text-sm font-medium text-gray-700"
                                                    >
                                                        Email address
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="email_address"
                                                        id="email_address"
                                                        autoComplete="email"
                                                        className="mt-1 outline-green-500  block w-full shadow-sm sm:text-sm border-gray-300 border border-solid p-1 rounded-md"
                                                    />
                                                </div>
                                                <div className="col-span-6 sm:col-span-3">
                                                    <label
                                                        htmlFor="country"
                                                        className="block text-sm font-medium text-gray-700"
                                                    >
                                                        Country / Region
                                                    </label>
                                                    <select
                                                        id="country"
                                                        name="country"
                                                        autoComplete="country"
                                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm  outline-green-500  sm:text-sm"
                                                    >
                                                        <option>Punjab</option>
                                                        <option>Delhi</option>
                                                        <option>Banglore</option>
                                                    </select>
                                                </div>
                                                <div className="col-span-6">
                                                    <label
                                                        htmlFor="street_address"
                                                        className="block text-sm font-medium text-gray-700"
                                                    >
                                                        Street address
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="street_address"
                                                        id="street_address"
                                                        autoComplete="street-address"
                                                        className="mt-1 outline-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md  border border-solid p-1"
                                                    />
                                                </div>
                                                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                                    <label
                                                        htmlFor="city"
                                                        className="block text-sm font-medium text-gray-700"
                                                    >
                                                        City
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="city"
                                                        id="city"
                                                        className="mt-1 outline-green-500  block w-full shadow-sm sm:text-sm border-gray-300 border border-solid p-1 rounded-md"
                                                    />
                                                </div>
                                                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                    <label
                                                        htmlFor="state"
                                                        className="block text-sm font-medium text-gray-700"
                                                    >
                                                        State / Province
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="state"
                                                        id="state"
                                                        className="mt-1 outline-green-500  block w-full shadow-sm sm:text-sm border-gray-300 border border-solid p-1 rounded-md"
                                                    />
                                                </div>
                                                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                    <label
                                                        htmlFor="postal_code"
                                                        className="block text-sm font-medium text-gray-700"
                                                    >
                                                        ZIP / Postal
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="postal_code"
                                                        id="postal_code"
                                                        autoComplete="postal-code"
                                                        className="mt-1 outline-green-500  block w-full shadow-sm sm:text-sm border-gray-300 border border-solid p-1 rounded-md"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                            <button
                                                type="submit"
                                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:green-500"
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* <div className="flex justify-center w-1/5"> */}
                        <div className="w-1/4 px-8 py-10">
                            <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                            <div className="flex justify-between mt-10 mb-5">
                                <span className="font-semibold text-sm uppercase">{cart.cart.length > 1 ? "Items" : "Item"} {cart.cart.length}</span>
                                <span className="font-semibold text-sm">₹{cost}</span>
                            </div>
                            <div>
                                <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                                <select className="block p-2 text-gray-600 w-full text-sm">
                                    <option>Standard shipping - ₹20.00</option>
                                </select>
                            </div>
                            <div className="py-10">
                                <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
                                <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full" />
                            </div>
                            <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
                            <div className="border-t mt-8">
                                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                    <span>Total cost</span>
                                    <span>₹{cost > 0 ? cost + 20 : 0}</span>
                                </div>
                                <button onClick={() => isLogin()} className="bg-green-500 font-semibold hover:bg-green-600 py-3 text-sm text-white uppercase w-full">Pay Now</button>
                            </div>
                        </div>
                    {/* </div> */}

                </div>

            </div>


            {/* </div > */}
            {/* </div > */}
        </body >






    )
}
