import React, { useState, useEffect, useRef } from 'react'
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
import logo from '../assets/2.png';

declare global {
  interface Window {
    google: any;
  }
}

type SignUpForm = { name: string; password: string; email: string };
export default function SignUp() {
  const client_id = '430485206941-gd8lr3fhh08ars372i29t3j7sss81v2h.apps.googleusercontent.com';
  const navigate = useNavigate();
  const [form, setform] = useState<SignUpForm>({ name: '', password: '', email: '' });
  const URL = `http://localhost:5001/signUp`;
  const googleButtonRef = useRef<HTMLDivElement>(null);


  const goBack = () => {
    navigate('/');
  };

  // Handle Google Sign-In response
  const handleCredentialResponse = async (response: any) => {
    try {
      const result = await fetch('http://localhost:5001/googleAuth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ credential: response.credential }),
        credentials: 'include'
      });

      const data = await result.json();
      
      if (result.status === 200) {
        toast.success(data.message);
        Cookies.set('jwt', data.token);
        setTimeout(() => {
          goBack();
        }, 1000);
      } else {
        toast.error(data.error || 'Google authentication failed');
      }
    } catch (error) {
      console.error('Google auth error:', error);
      toast.error('Failed to authenticate with Google. Please try again.');
    }
  };

  // Initialize Google Sign-In
  useEffect(() => {
    const initializeGoogleSignIn = () => {
      if (window.google && googleButtonRef.current) {
        window.google.accounts.id.initialize({
          client_id: client_id,
          callback: handleCredentialResponse,
        });

        window.google.accounts.id.renderButton(
          googleButtonRef.current,
          {
            theme: 'outline',
            size: 'large',
            width: '100%',
            text: 'signup_with',
            locale: 'en'
          }
        );
      }
    };

    // Check if Google script is loaded
    if (window.google) {
      initializeGoogleSignIn();
    } else {
      // Wait for Google script to load
      const checkGoogle = setInterval(() => {
        if (window.google) {
          clearInterval(checkGoogle);
          initializeGoogleSignIn();
        }
      }, 100);

      // Cleanup interval after 10 seconds
      setTimeout(() => clearInterval(checkGoogle), 10000);
    }
  }, []);

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
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setform({ ...form, [e.target.id as keyof SignUpForm]: e.target.value });

  const onSubmit = () => {
    fetchData();
  }
  const sendForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

  }
  return (
    <div className="flex flex-wrap min-h-screen w-full content-center justify-center  bg-gray-200 md:py-10">
      <div className=" lg:flex-row shadow-md md:flex-col sm:flex flex-col ">
        <div className="flex flex-wrap content-center  justify-center lg:rounded-l-md  rounded-t-md   bg-white md:object-none">
          <img className="bg-center bg-no-repeat bg-cover lg:w-96 w-24" src={logo} alt='logo'/>
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
                <div ref={googleButtonRef} className="mt-3 flex justify-center"></div>
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
