import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import SignUp from '../pages/SignUp';
import logo from '../assets/logo.jpg';

export default function OrderForm() {
    const cart = useSelector((state) => state.cart);
    const [data, setData] = useState([]);
    const [edit, setEdit] = useState(0);
    const [form, setform] = useState({ name: undefined, lastName: undefined, email: undefined, region: 'India', address: undefined, city: undefined, state: undefined, pinCode: undefined });
    const URL = `http://ec2-3-27-44-195.ap-southeast-2.compute.amazonaws.com:5000/isLogin`;
    const URL2 = `http://ec2-3-27-44-195.ap-southeast-2.compute.amazonaws.com:5000/orderDetails`;
    const URL_updateUser = `http://ec2-3-27-44-195.ap-southeast-2.compute.amazonaws.com:5000/updateOrderDetails`;
    const URL_fetchUser = `http://ec2-3-27-44-195.ap-southeast-2.compute.amazonaws.com:5000/fetchUserDetails`;
    const navigate = useNavigate();
    const token = Cookies.get('jwt');

    var cost = 0;
    cart.cart.map((item) => {
        cost += parseInt(item.idMeal.slice(2, 4) * item.quantity);
    })

    const isLogin = () => {
        if (cart.cart.length === 0) {
            toast.error('Your cart is empty')
        }
        else {
            cost = (cost + 20) * 100;
            let options = {
                key: "rzp_test_GqNfAUZIfyB3nc",
                amount: cost,
                currency: "INR",
                name: "Food Fusion",
                description: "Food Item Purchase ",
                image: 'https://raw.githubusercontent.com/Abhishek7a/food_fusion/master/src/assets/logo.jpg',
                handler: () => {
                    alert("Payment Done")
                },
                theme: { color: "#FD4228" }
            }
            let rzp = new window.Razorpay(options);
            rzp.open();
        }
    }

    const fetchData = async () => {
        try {
            const response = await fetch(edit ? URL_updateUser : URL2, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${token}`
                },
                body: JSON.stringify(form)
            });
            const result = await response.json();
            if (result.message === 'Unauthorized')
                navigate('/login')
            if (response.status === 400)
                toast.warn(result.error);
            if (response.status === 500)
                toast.error(result.error);
            if (response.status === 200) {
                toast.success(result.message);
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    const User_data = async () => {
        try {
            const response = await fetch(URL_fetchUser, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${token}`
                },
            });
            const result = await response.json();
            if (result.lastName)
                setEdit(1);
            if (result.message === 'Unauthorized')
                navigate('/ login')

            setform(result);
        }
        catch (error) {
            console.log(error);
        }
    }
    const handleOnChange = (e) =>
        setform({ ...form, [e.target.id]: e.target.value });

    const onSubmit = () => {
        fetchData();
    }
    const sendForm = (e) => {
        e.preventDefault();

    }

    const fetchData2 = async () => {
        try {
            const response = await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${token}`
                },
            });
            const result = await response.json();
            if (result.message === 'Unauthorized')
                navigate('/login')
            setData(result);
            setform({ ...form, name: result.name, email: result.email });
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData2();
        User_data();
    }, []);

    if (Cookies.get('jwt') === undefined) {
        return <SignUp />
    }
    return (
        <body className="bg-gray-100 pt-24">
            <div className=" mx-auto ">
                <div className="lg:flex shadow-md  ">
                    <div className="lg:w-3/4 bg-white lg:p-10 md:p-5  relative">
                        <div className=" sm:mt-0">
                            <div className="mt-5 md:mt-0 md:col-span-2">
                                <div className="md:col-span-1 ml-7">
                                    <div className="md:px-4 sm:px-0">
                                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                                            Personal Information
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-600">
                                            Use a permanent address where you can receive mail.
                                        </p>
                                    </div>
                                </div>
                                <form onSubmit={sendForm} method="POST" className='mt-10'>
                                    <div className="shadow overflow-hidden sm:rounded-md">
                                        <div className="px-4 md:py-5 bg-white sm:p-6">
                                            <div className="grid grid-cols-6 gap-6">
                                                <div className="col-span-6 sm:col-span-3">
                                                    <label
                                                        htmlFor="name"
                                                        className="block text-sm font-medium text-gray-700"
                                                    >
                                                        First name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id='name' value={form.name} disabled
                                                        autoComplete="given-name"
                                                        className="mt-1  outline-green-500 block w-full shadow-sm sm:text-sm  rounded-md border-gray-300 border border-solid p-1"
                                                    />
                                                </div>
                                                <div className="col-span-6 sm:col-span-3">
                                                    <label
                                                        htmlFor="lastName"
                                                        className="block text-sm font-medium text-gray-700"
                                                    >
                                                        Last name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id='lastName' onChange={handleOnChange} value={form.lastName}
                                                        autoComplete="family-name"
                                                        className="mt-1 outline-green-500 block w-full shadow-sm sm:text-sm  rounded-md border-gray-300 border border-solid p-1"
                                                    />
                                                </div>
                                                <div className="col-span-6 sm:col-span-4">
                                                    <label
                                                        htmlFor="email"
                                                        className="block text-sm font-medium text-gray-700"
                                                    >
                                                        Email address
                                                    </label>
                                                    <input
                                                        type="email"
                                                        id='email' value={form.email} disabled
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
                                                        id='region' onChange={handleOnChange} value={form.region}
                                                        name="country"
                                                        autoComplete="country"
                                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm  outline-green-500  sm:text-sm"
                                                    >
                                                        <option>India</option>
                                                        <option>US</option>
                                                        <option>America</option>
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
                                                        name="address"
                                                        id="address" onChange={handleOnChange} value={form.address}
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
                                                        id="city" onChange={handleOnChange} value={form.city}
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
                                                        id="state" onChange={handleOnChange} value={form.state}
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
                                                        name="pinCode"
                                                        id="pinCode" onChange={handleOnChange} value={form.pinCode}

                                                        autoComplete="postal-code"
                                                        className="mt-1 outline-green-500  block w-full shadow-sm sm:text-sm border-gray-300 border border-solid p-1 rounded-md"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                            <button onClick={onSubmit}
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
                    <div className="lg:w-1/4 md:px-8 px-4 lg:py-10 py-10">
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
                            <ToastContainer
                                style={{ width: "100%" }}
                                className="max-w-md"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </body >
    )
}
