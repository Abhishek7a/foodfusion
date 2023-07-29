import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { GoogleLogin } from 'react-google-login';
import { gapi } from "gapi-script"
import Cookies from 'js-cookie';
import logo from '../assets/2.png';

export default function SignUp() {
  // const client_id = '430485206941-gd8lr3fhh08ars372i29t3j7sss81v2h.apps.googleusercontent.com';
  const navigate = useNavigate();
  const [form, setform] = useState({ name: undefined, password: undefined, email: undefined });
  const URL = 'http://ec2-3-27-44-195.ap-southeast-2.compute.amazonaws.com:5000/signUp';


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

  useEffect(() => {
    // function start() {
    //   gapi.client.init({
    //     clientId: client_id,
    //     scope: ""
    //   })
    // }
    // gapi.load('client:auth2', start);
    // google.accounts.id.prompt();
  });
  const goBack = () => {
    navigate('/');
  };

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
        toast.warn(result.error);
      if (response.status === 409)
        toast.error(result.error);
      if (response.status === 500)
        toast.error(result.error);
      if (response.status === 200) {
        toast.success(result.message);
        setform({ name: "", password: "", email: "" });
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
    <div className="flex flex-wrap min-h-screen w-full content-center justify-center  bg-gray-200 md:py-10">
      <div className=" lg:flex-row shadow-md md:flex-col sm:flex flex-col ">
        <div className="flex flex-wrap content-center  justify-center lg:rounded-l-md  rounded-t-md   bg-white md:object-none">
          <img className="bg-center bg-no-repeat bg-cover lg:w-96 w-24" src='https://raw.githubusercontent.com/Abhishek7a/food_fusion/master/src/assets/2.png' alt='logo'/>
        </div>
        <div className="flex flex-wrap content-center justify-center lg:rounded-r-md rounded-b-md bg-white  lg:p-10 pt-0 p-10 ">
          <div className="w-72">
            <h1 className="text-xl font-semibold">Sign Up</h1>
            <small className="text-gray-400">Please enter your details</small>
            <form onSubmit={sendForm} className="mt-4">
              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">Name</label>
                <input type="text" placeholder="Enter your name" id='name' name='name' onChange={handleOnChange} value={form.name} className="block w-full rounded-md border border-gray-300 focus:border-green-700  focus:outline-none focus:ring-1 focus:ring-green-700 py-1 px-1.5 text-gray-500" />
              </div>
              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">Email</label>
                <input type="email" placeholder="Enter your email" id='email' onChange={handleOnChange} value={form.email} className="block w-full rounded-md border border-gray-300 focus:border-green-700 focus:outline-none focus:ring-1 focus:ring-green-700 py-1 px-1.5 text-gray-500" />
              </div>

              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">Password</label>
                <input type="password" placeholder="*****" id='password' onChange={handleOnChange} value={form.password} className="block w-full rounded-md border border-gray-300 focus:border-green-700 focus:outline-none focus:ring-1 focus:ring-green-700 py-1 px-1.5 text-gray-500" />
              </div>
              <div className="mb-3">
                <button onClick={onSubmit} className="mb-1.5 block w-full text-center text-white bg-green-600 hover:bg-green-700 px-2 py-1.5 rounded-md">Sign Up</button>
                <ToastContainer
                  style={{ width: "100%" }}
                  className="max-w-md"
                />
                   <button className="flex flex-wrap justify-center w-full border border-gray-300  text-gray-500 hover:border-gray-500 px-2 py-1.5 rounded-md">
                  <img className="w-5 mr-2" src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA" />
                  Sign up with Google
                </button>
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
              <div className="text-xs text-gray-400 font-semibold">Or</div>
              <Link to="/login" className="text-xs font-semibold text-red-700">Log In</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
