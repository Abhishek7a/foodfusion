import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { gapi } from "gapi-script"
import { GoogleLogin } from 'react-google-login';
import { GoogleLogout } from 'react-google-login';

const client_id = '430485206941-gd8lr3fhh08ars372i29t3j7sss81v2h.apps.googleusercontent.com';
export default function Login() {
  function handleGoogleLoginSuccess(response) {
    // Handle the successful login response
    console.log('Google login successful:', response);
  }

  function onSuccess() {
    // Handle the successful login response
    console.log('logout successful');
  }

  function handleGoogleLoginFailure(error) {
    // Handle the failed login response
    console.log('Google login failed:', error);
  }
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: client_id,
        scope: ""
      })
    }
    gapi.load('client:auth2', start);
    // google.accounts.id.prompt();
  });
  // var accessToken=gapi.auth.getToken().acess_token;
  // }
  // function startGoogleSignIn() {
  //   const { credential } = google.accounts.id.initialize({
  //     callback: handleCredentialResponse,
  //   });

  //   google.accounts.id.prompt(credential);
  // }

  return (
    <>
      {/* return ( */}

      {/* <GoogleLogout
        clientId="430485206941-gd8lr3fhh08ars372i29t3j7sss81v2h.apps.googleusercontent.com"
        buttonText="log out"
        onSuccess={onSuccess}
      /> */}
      {/* // ); */}
      <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 py-10">
      <div className=" lg:flex-row shadow-md md:flex-col sm:flex flex-col ">
          <div className="flex flex-wrap content-center  justify-center lg:rounded-l-md  rounded-t-md   bg-white md:object-none">
            <img className="bg-center bg-no-repeat bg-cover lg:w-96 w-24" src="2.png" />
          </div>
        <div className="flex flex-wrap content-center justify-center lg:rounded-r-md rounded-b-md bg-white  lg:p-10 pt-0 p-10 ">
          <div className="w-72">
              <h1 className="text-xl font-semibold">Welcome back</h1>
              <small className="text-gray-400">Welcome back! Please enter your details</small>

              <form className="mt-4">
                <div className="mb-3">
                  <label className="mb-2 block text-xs font-semibold">Email</label>
                  <input type="email" placeholder="Enter your email" className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
                </div>

                <div className="mb-3">
                  <label className="mb-2 block text-xs font-semibold">Password</label>
                  <input type="password" placeholder="*****" className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
                </div>

                <div className="mb-3 flex flex-wrap content-center">
                  <input id="remember" type="checkbox" className="mr-1 checked:bg-purple-700" /> <label for="remember" className="mr-auto text-xs font-semibold">Remember for 30 days</label>
                  <a href="#" className="text-xs font-semibold text-purple-700">Forgot password?</a>
                </div>

                <div className="mb-3">
                  <button className="mb-1.5 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md">Sign in</button>
                  {/* <button> */}
                    {/* <img className="w-5 mr-2" src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA" /> */}
                    {/* Sign in with Google */}
                  <GoogleLogin  className="flex flex-wrap justify-center  mt-3 w-full  px-2 py-1.5 rounded-md"
                    clientId="430485206941-gd8lr3fhh08ars372i29t3j7sss81v2h.apps.googleusercontent.com"
                    buttonText="Sign in with Google"
                    onSuccess={handleGoogleLoginSuccess}
                    onFailure={handleGoogleLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    uxMode="popup"
                    isSignedIn={true}
                    />
                    {/* </button> */}
                </div>
              </form>
              <div className="text-center">
                <span className="text-xs text-gray-400 font-semibold">Don't have account?</span>
                <Link to="/signUp" className="text-xs font-semibold text-purple-700"> Sign up</Link>
              </div>
            </div>
          </div>

      
        </div>
      </div>
    </>

  )
}
