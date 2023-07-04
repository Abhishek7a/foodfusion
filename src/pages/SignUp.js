import React from 'react'
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="flex flex-wrap min-h-screen w-full content-center justify-center  bg-gray-200 py-10">
      <div className=" lg:flex-row shadow-md md:flex-col sm:flex flex-col ">
          <div className="flex flex-wrap content-center  justify-center lg:rounded-l-md  rounded-t-md   bg-white md:object-none">
            <img className="bg-center bg-no-repeat bg-cover lg:w-96 w-24" src="2.png" />
          </div>
        <div className="flex flex-wrap content-center justify-center lg:rounded-r-md rounded-b-md bg-white  lg:p-10 pt-0 p-10 ">
          <div className="w-72">
            <h1 className="text-xl font-semibold">Sign Up</h1>
            <small className="text-gray-400">Please enter your details</small>
            <form className="mt-4">
              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">Name</label>
                <input type="text" placeholder="Enter your name" className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
              </div>
              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">Email</label>
                <input type="email" placeholder="Enter your email" className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
              </div>

              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">Password</label>
                <input type="password" placeholder="*****" className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
              </div>


              <div className="mb-3">
                <button className="mb-1.5 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md">Sign Up</button>
                <button className="flex flex-wrap justify-center w-full border border-gray-300 hover:border-gray-500 px-2 py-1.5 rounded-md">
                  <img className="w-5 mr-2" src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA" />
                  Sign up with Google
                </button>
              </div>
            </form>

            <div className="text-center">
              <div className="text-xs text-gray-400 font-semibold">Or</div>
              <Link to="/login" className="text-xs font-semibold text-purple-700">Log In</Link>
            </div>
          </div>
        </div>



      </div>

    </div>
  )
}
