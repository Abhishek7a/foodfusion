import React from 'react'
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
<div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 py-10">
  
  <div className="flex shadow-md">
    <div className="flex flex-wrap content-center justify-center rounded-l-md bg-white" style={{width: "24rem", height: "32rem"}}>
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

          {/* <div className="mb-3 flex flex-wrap content-center">
            <input id="remember" type="checkbox" className="mr-1 checked:bg-purple-700" /> <label for="remember" className="mr-auto text-xs font-semibold">Remember for 30 days</label>
            <a href="#" className="text-xs font-semibold text-purple-700">Forgot password?</a>
          </div> */}

          <div className="mb-3">
            <button className="mb-1.5 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md">Sign Up</button>
            <button className="flex flex-wrap justify-center w-full border border-gray-300 hover:border-gray-500 px-2 py-1.5 rounded-md">
              <img className="w-5 mr-2" src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"/>
              Sign in with Google
            </button>
          </div>
        </form>

        <div className="text-center">
          {/* <span className="text-xs text-gray-400 font-semibold">Don't have account?</span> */}
          <Link to="/login" className="text-xs font-semibold text-purple-700">Log In</Link>
        </div>
      </div>
    </div>

    <div className="flex flex-wrap content-center justify-center rounded-r-md bg-white" style={{width: "24rem", height: "32rem"}}>
      <img className="bg-center bg-no-repeat bg-cover rounded-r-md" src="2.png"/>
    </div>

  </div>

  {/* <div className="mt-3 w-full"> */}
      {/* <p className="text-center">Made by <a target="_blank" href="https://www.instagram.com/_inubayuaji/" className="text-purple-700">Inu Bayu Aji</a> and ispired by <a target="_blank" href="https://dribbble.com/shots/17564792-Log-in-page-Untitled-UI" className="text-purple-700">this</a>.</p> */}
  {/* </div> */}
</div>
  )
}
