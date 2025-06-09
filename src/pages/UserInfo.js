import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa"

export default function UserInfo() {
  const URL = `http://ec2-3-27-44-195.ap-southeast-2.compute.amazonaws.com:5000/isLogin`;
  const URL_fetchUser = `http://ec2-3-27-44-195.ap-southeast-2.compute.amazonaws.com:5000/fetchUserDetails`;

  // const URL = `http://localhost:5000/isLogin`;
  // const URL_fetchUser = `http://localhost:5000/fetchUserDetails`;

  const navigate = useNavigate();
  const token = Cookies.get('jwt');
  const [data, setData] = useState([]);
  const [userdata, setUserData] = useState([]);

  const fetchData = async () => {
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
    }
    catch (error) {
      console.log(error);
    }
  }
  const fetchData2 = async () => {
    try {
      const response = await fetch(URL_fetchUser, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${token}`
        },
      });
      const result = await response.json();
      if (result.message === 'Unauthorized')
        navigate('/login')
      setUserData(result);
    }
    catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {

    fetchData();
    fetchData2();
  }, []);

  if (token === undefined)
    navigate('/login')

  return (
    <section>
      <div className="h-full bg-gray-200 p-8 pt-28">
        <div className="bg-white rounded-lg shadow-xl pb-8">
          <div className="w-full md:h-60 h-48">
            <img
              src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg"
              className="w-full h-full rounded-tl-lg rounded-tr-lg"
            />
          </div>
          <div className="flex flex-col items-center -mt-20">
            <div className="text-9xl border-4 bg-white text-gray-900 border-white rounded-full" ><FaUserCircle /></div>
            <div className="flex items-center space-x-2 mt-2">
              <p className="text-2xl">{data.name}</p>
              <span className="bg-blue-500 rounded-full p-1" title="Verified">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-100 h-2.5 w-2.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={4}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
            </div>
            <p className="text-gray-700">{data.email}
            </p>
            <p className="text-sm text-gray-500">{userdata.state},{userdata.region}</p>
          </div>
          <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
            <div className="flex items-center space-x-4 mt-2">
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
        <div className="w-full flex flex-col 2xl:w-1/3">
          <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
            <h4 className="text-xl text-gray-900 font-bold">Personal Info</h4>
            <ul className="mt-2 text-gray-700">
              <li className="flex border-y py-2">
                <span className="font-bold w-24">Full name:</span>
                <span className="text-gray-700">{data.name}</span>
              </li>
              <li className="flex border-b py-2">
                <span className="font-bold w-24">Last Name:</span>
                <span className="text-gray-700">{userdata.lastName}</span>
              </li>
              <li className="flex border-b py-2">
                <span className="font-bold w-24">Email:</span>
                <span className="text-gray-700">{data.email}</span>
              </li>
              <li className="flex border-b py-2">
                <span className="font-bold w-24">Region:</span>
                <span className="text-gray-700">{userdata.region}</span>
              </li>
              <li className="flex border-b py-2">
                <span className="font-bold w-24">Address:</span>
                <span className="text-gray-700">{userdata.address}</span>
              </li>
              <li className="flex border-b py-2">
                <span className="font-bold w-24">City:</span>
                <span className="text-gray-700">{userdata.city}</span>
              </li>
              <li className="flex border-b py-2">
                <span className="font-bold w-24">State:</span>
                <span className="text-gray-700">{userdata.state}</span>
              </li>
              <li className="flex items-center border-b py-2 space-x-2">
                <span className="font-bold w-24">Pin Code:</span>
                <span className="text-gray-700">{userdata.pinCode}</span>

              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col w-full 2xl:w-2/3">
          <div className="flex-1 bg-white rounded-lg shadow-xl mt-4 p-8 ">
            <h4 className="text-xl text-gray-900 font-bold">Statistics</h4>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4">
              <div className="px-6 py-6 bg-gray-100 border border-gray-300 rounded-lg shadow-xl">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-red-600">
                    Total Revenue
                  </span>
                  <span className="text-xs bg-gray-200 hover:bg-gray-500 text-gray-500 hover:text-gray-200 px-2 py-1 rounded-lg transition duration-200 cursor-default">
                    0 days
                  </span>
                </div>
                <div className="flex items-center justify-between mt-6">
                  <div>
                    <svg
                      className="w-12 h-12 p-2.5 bg-indigo-400 bg-opacity-20 rounded-full text-red-600 border border-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-end">
                      <span className="text-2xl 2xl:text-3xl font-bold">
                        ₹0.00
                      </span>
                      <div className="flex items-center ml-2 mb-1">
                        <svg
                          className="w-5 h-5 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                          />
                        </svg>
                        <span className="font-bold text-sm text-gray-500 ml-0.5">
                          0%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-6 py-6 bg-gray-100 border border-gray-300 rounded-lg shadow-xl">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-green-600">
                    New Orders
                  </span>
                  <span className="text-xs bg-gray-200 hover:bg-gray-500 text-gray-500 hover:text-gray-200 px-2 py-1 rounded-lg transition duration-200 cursor-default">
                    0 days
                  </span>
                </div>
                <div className="flex items-center justify-between mt-6">
                  <div>
                    <svg
                      className="w-12 h-12 p-2.5 bg-green-400 bg-opacity-20 rounded-full text-green-600 border border-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-end">
                      <span className="text-2xl 2xl:text-3xl font-bold">0</span>
                      <div className="flex items-center ml-2 mb-1">
                        <svg
                          className="w-5 h-5 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                          />
                        </svg>
                        <span className="font-bold text-sm text-gray-500 ml-0.5">
                          0%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
