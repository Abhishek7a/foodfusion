import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { remove, increaseItemQuantity, decreaseItemQuantity } from '../Redux/Reduser/Reducer';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function Checkout() {
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  var cost = 0;
  cart.cart.map((item) => {
    cost += parseInt(item.idMeal.slice(2, 4) * item.quantity);
  })

  const isLogin = () => {
    const cookieValue = Cookies.get('jwt');
    if (cookieValue === undefined) {
      navigate('/signUp');
    }
    else {
      navigate('/orderPage');
    }
  }
  return (
    <body className="bg-gray-100 pt-24 ">
      <div className=" mx-auto ">
        <div className="lg:flex shadow-md ">
          <div className="lg:w-3/4 bg-white  lg:p-10 p-5 relative">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold  text-gray-600 text-xs uppercase md:w-2/5 w-3/5">Product Details</h3>
              <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
              <h3 className="font-semibold  text-gray-600 text-xs uppercase md:w-1/5 text-center md:block hidden">Price</h3>
              <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
            </div>
            {cart.cart.length === 0 ? <h1 className='text-red-600 text-center text-xl pb-10'>Your Cart is Empty</h1> : cart.cart.map((item) => {
              return (
                <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5" key={item.idMeal}>
                  <div className="flex md:w-2/5 w-3/5">
                    <div className="w-20">
                      <img className="h-24 " src={item.strMealThumb} alt="" />
                    </div>
                    <div className="flex flex-col justify-between ml-4 flex-grow">
                      <span className="font-bold md:text-sm text-xs">{item.strMeal}</span>

                      <span className="text-green-500 text-xs">{item.strCategory}</span>
                      <button onClick={() => dispatch(remove(item.idMeal))} className="font-semibold hover:text-red-600 text-red-500 text-xs">Remove</button>
                    </div>
                  </div>
                  <div className="flex justify-center w-1/5">
                    <svg className="fill-current cursor-pointer text-gray-600 w-3" onClick={() => dispatch(decreaseItemQuantity(item))} viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>

                    <input className="mx-2 border text-center w-8" type="text" value={item.quantity} />

                    <svg className="fill-current cursor-pointer text-gray-600 w-3" onClick={() => dispatch(increaseItemQuantity(item))} viewBox="0 0 448 512">
                      <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>
                  </div>
                  <span className="text-center w-1/5 md:block hidden font-semibold text-sm">₹{item.idMeal.slice(2, 4)}.00</span>
                  <span className="text-center w-1/5 font-semibold text-sm">₹{item.idMeal.slice(2, 4) * item.quantity}.00</span>
                </div>
              )
            })}
            <Link to='/' className="flex font-semibold text-indigo-600 text-sm mt-10 absolute bottom-0  lg:bottom-5 ">
              <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
              Add more Items
            </Link>
          </div>
          <div className="lg:w-1/4 px-8 lg:py-10 py-14">
            <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">{cart.cart.length > 1 ? "Items" : "Item"} {cart.cart.length}</span>
              <span className="font-semibold text-sm">₹{cost}</span>
            </div>
            <div>
              <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
              <select className="block p-2 text-gray-600 w-full text-sm outline-none">
                <option>Standard shipping - ₹20.00</option>
              </select>
            </div>
            <div className="py-10">
              <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
              <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full outline-none" />
            </div>
            <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>₹{cost > 0 ? cost + 20 : 0}</span>
              </div>
              <button onClick={() => isLogin()} className="bg-green-500 font-semibold hover:bg-green-600 py-3 text-sm text-white uppercase w-full">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </body>

  )
}
