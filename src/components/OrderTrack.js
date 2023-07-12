import React from 'react'

export default function OrderTrack() {
  return (
    <div className='w-1/2 mx-auto pt-28'>
      <h3 className="text-2xl text-gray-700 font-bold mb-6 ml-3"> Order Track</h3>
      <ol>
        <li className="border-l-2 border-green-600">
          <div className="flex flex-start">
            <div className="bg-green-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                className="text-white w-3 h-3"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
                />
              </svg>
            </div>
            <div className="block px-10 md:pt-4 py-2 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 md:mb-10">
              <div className="flex justify-between md:mb-4">
                <div className="font-medium text-green-600 hover:text-green-700 focus:text-green-800 duration-300 transition ease-in-out md:text-xl">
                  Ordered
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="border-l-2 border-red-600 mt-1">
          <div className="flex flex-start">
            <div className="bg-red-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                className="text-white w-3 h-3"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
                />
              </svg>
            </div>
            <div className="block px-10 pt-4 md:py-2  rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 md:mb-10">
              <div className="flex justify-between mb-4">
                <div className="font-medium text-red-600 hover:text-red-700 focus:text-red-800 duration-300 transition ease-in-out md:text-xl">
                  Shipped
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="border-l-2 border-red-600 mt-1">
          <div className="flex flex-start">
            <div className="bg-red-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                className="text-white w-3 h-3"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
                />
              </svg>
            </div>
            <div className="block px-6 md:px-10 pt-4 md:py-2  rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 md:mb-10">
              <div className="flex justify-between mb-4">
                <div className="font-medium text-red-600   hover:text-red-700 focus:text-red-800 duration-300 transition ease-in-out md:text-xl">
                  Out of dilivary
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className=" border-red-600 mt-1">
          <div className="flex flex-start">
            <div className="bg-red-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                className="text-white w-3 h-3"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
                />
              </svg>
            </div>
            <div className="block px-10 pt-4 md:py-2  rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10">
              <div className="flex justify-between mb-4">
                <div className="font-medium text-red-600 hover:text-red-700 focus:text-red-800 duration-300 transition ease-in-out ,md:text-xl">
                  Arriving
                </div>
              </div>
            </div>
          </div>
        </li>
      </ol>
    </div>

  )
}
