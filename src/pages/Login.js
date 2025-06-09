import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { gapi } from "gapi-script"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import {  GoogleLogin } from 'react-google-login';
import Cookies from 'js-cookie';
import logo from '../assets/2.png';

export default function Login() {
  // const client_id = '430485206941-gd8lr3fhh08ars372i29t3j7sss81v2h.apps.googleusercontent.com';
  const navigate = useNavigate();
  const [form, setform] = useState({ password: undefined, email: undefined });
  const URL = 'http://ec2-3-27-44-195.ap-southeast-2.compute.amazonaws.com:5000/login';
  // const URL = `http://localhost:5000/login`;


  // function handleGoogleLoginSuccess(response) {
  //   // Handle the successful login response
  //   console.log('Google login successful:', response);
  // }

  // function onSuccess() {
  //   // Handle the successful login response
  //   console.log('logout successful');
  // }

  // function handleGoogleLoginFailure(error) {
  //   // Handle the failed login response
  //   console.log('Google login failed:', error);
  // }
  const goBack = () => {
    navigate('/');
  };
  // useEffect(() => {
    // function start() {
    //   gapi.client.init({
    //     clientId: client_id,
    //     scope: ""
    //   })
    // }
    // gapi.load('client:auth2', start);
    // google.accounts.id.prompt();
  // });
  // var accessToken=gapi.auth.getToken().acess_token;
  // }
  // function startGoogleSignIn() {
  //   const { credential } = google.accounts.id.initialize({
  //     callback: handleCredentialResponse,
  //   });

  //   google.accounts.id.prompt(credential);
  // }

  const fetchData = async () => {
    try {
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });
      const result = await response.json();
      if (response.status === 400)
        toast.error(result.error);
      if (response.status === 500)
        toast.error(result.error);
      if (response.status === 200) {
        toast.success(result.message);
        setform({ password: "", email: "" });
        Cookies.set('jwt', result.token);
        setTimeout(() => {
          goBack()
        }, 1000);
      }
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
  return (
    <>
      {/* <GoogleLogout
        clientId="430485206941-gd8lr3fhh08ars372i29t3j7sss81v2h.apps.googleusercontent.com"
        buttonText="log out"
        onSuccess={onSuccess}
      /> */}
      <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 md:py-10">
        <div className=" lg:flex-row shadow-md md:flex-col sm:flex flex-col ">
          <div className="flex flex-wrap content-center  justify-center lg:rounded-l-md  rounded-t-md   bg-white md:object-none">
            {/* <img className="bg-center bg-no-repeat bg-cover lg:w-96 w-24" src='https://raw.githubusercontent.com/Abhishek7a/food_fusion/master/src/assets/2.png' alt='logo' /> */}
          </div>
          <div className="flex flex-wrap content-center justify-center lg:rounded-r-md rounded-b-md bg-white  lg:p-10 pt-0 p-10 ">
            <div className="w-72">
              <h1 className="text-xl font-semibold">Welcome back</h1>
              <small className="text-gray-400">Welcome back! Please enter your details</small>

              <form onSubmit={sendForm} className="mt-4">
                <div className="mb-3">
                  <label className="mb-2 block text-xs font-semibold">Email</label>
                  <input type="email" id='email' onChange={handleOnChange} value={form.email} placeholder="Enter your email" className="block w-full rounded-md border border-gray-300 focus:border-red-700 focus:outline-none focus:ring-1 focus:ring-red-700 py-1 px-1.5 text-gray-500" />
                </div>

                <div className="mb-3">
                  <label className="mb-2 block text-xs font-semibold">Password</label>
                  <input type="password" id='password' onChange={handleOnChange} value={form.password} placeholder="*****" className="block w-full rounded-md border border-gray-300 focus:border-red-700 focus:outline-none focus:ring-1 focus:ring-red-700 py-1 px-1.5 text-gray-500" />
                </div>

                <div className="mb-3 flex flex-wrap content-center ">
                  <input id="remember" type="checkbox" className="mr-1 checked:bg-red-700  " /> <label htmlFor="remember" className="mr-auto text-xs font-semibold">Remember for 30 days</label>
                  <Link to="#" className="text-xs font-semibold text-red-700">Forgot password?</Link>
                </div>

                <div className="mb-3">
                  <button onClick={onSubmit} className="mb-1.5 block w-full text-center text-white bg-red-600 hover:bg-red-700 px-2 py-1.5 rounded-md">Sign in</button>
                  <ToastContainer
                    style={{ width: "100%" }}
                    className="max-w-md"
                  />
                  {/* <button className="flex flex-wrap justify-center w-full border border-gray-300 hover:border-gray-500 text-gray-500 px-2 py-1.5 rounded-md">
                  <img className="w-5 mr-2" src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA" />
                  Log in with Google
                </button> */}
                  {/* <GoogleLogin className="flex flex-wrap justify-center  mt-3 w-full  px-2 py-1.5 rounded-md"
                    clientId="430485206941-gd8lr3fhh08ars372i29t3j7sss81v2h.apps.googleusercontent.com"
                    buttonText="Sign in with Google"
                    onSuccess={handleGoogleLoginSuccess}
                    onFailure={handleGoogleLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    uxMode="popup"
                    isSignedIn={true}
                  /> */}
                </div>
              </form>
              <div className="text-center">
                <span className="text-xs text-gray-400 font-semibold">Don't have account?</span>
                <Link to="/signUp" className="text-xs font-semibold text-green-700"> Sign up</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
