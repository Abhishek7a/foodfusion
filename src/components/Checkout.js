import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { remove,increaseItemQuantity,decreaseItemQuantity } from '../Redux/Reduser/Reducer';
import { Link } from 'react-router-dom';
export default function Checkout() {
  const cart = useSelector((state) => state.cart);
  // const [itemQuantity, setItemQuantity] = useState(1)
  const dispatch = useDispatch();
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };
  // useEffect(() => {
  //   handleRemove();
  // },[])
  var cost = 0;
  cart.cart.map((item) => {
    cost += parseInt(item.idMeal.slice(2, 4));
  })
  // const quantityInc = (itemQuantity) => {
    // setItemQuantity(++itemQuantity)
  // }
  // const quantityDec = (itemQuantity) => {
    // itemQuantity > 1 ? setItemQuantity(--itemQuantity) : setItemQuantity(itemQuantity)
  // }
  console.log(cart.quantity);

  const RozerPay = (cost) => {
    let options = {
      key: "rzp_test_GqNfAUZIfyB3nc",
      amount: 80 * 100,
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
  }
  // console.log(cart.length());
  return (
    <body className="bg-gray-100">
      <div className="container mx-auto mt-10">
        <div className="flex shadow-md my-10">
          <div className="w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
              {/* <h2 className="font-semibold text-2xl">{cart.length} {cart.length > 1 ? "Items" : "Item"}</h2> */}
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
              <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
              <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
              <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
            </div>
            {cart.cart.length === 0 ? <h1 className='text-red-600 text-center text-xl '>Your Cart is Empty</h1> : cart.cart.map((item) => {
              return (
                <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5" key={item.idMeal}>
                  <div className="flex w-2/5">
                    <div className="w-20">
                      <img className="h-24" src={item.strMealThumb} alt="" />
                    </div>
                    <div className="flex flex-col justify-between ml-4 flex-grow">
                      <span className="font-bold text-sm">{item.strMeal}</span>

                      <span className="text-red-500 text-xs">{item.strCategory}</span>
                      <button onClick={() => dispatch(remove(item.idMeal))} className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</button>
                    </div>
                  </div>
                  <div className="flex justify-center w-1/5">
                    <svg className="fill-current cursor-pointer text-gray-600 w-3" onClick={() => dispatch(decreaseItemQuantity(item))} viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>

                    <input className="mx-2 border text-center w-8" type="text" value={cart.quantity} />

                    <svg className="fill-current cursor-pointer text-gray-600 w-3" onClick={() => dispatch(increaseItemQuantity(item))} viewBox="0 0 448 512">
                      <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>
                  </div>
                  <span className="text-center w-1/5 font-semibold text-sm">₹{item.idMeal.slice(2, 4)}.00</span>
                  <span className="text-center w-1/5 font-semibold text-sm">₹{item.idMeal.slice(2, 4)*cart.quantity}.00</span>
                </div>
              )
            })}
            <Link to='/' className="flex font-semibold text-indigo-600 text-sm mt-10">
              <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
              Add more Items
            </Link>
          </div>
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
              <button onClick={() => RozerPay(cost)} className="bg-green-500 font-semibold hover:bg-green-600 py-3 text-sm text-white uppercase w-full">Pay Now</button>
            </div>
          </div>

        </div>
      </div>
    </body>

  )
}
