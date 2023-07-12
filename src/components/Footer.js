import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Footer() {
  const [rows, setRows] = useState([]);

  const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(URL);
        const food = response.data.meals;
        setRows(food);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const createTableRows = () => {
    // Create rows with four elements each
    const tableRows = [];
    let currentRow = [];

    rows.forEach((row, index) => {
      currentRow.push(row.strCategory);

      if ((index + 1) % 4 === 0) {
        tableRows.push(currentRow);
        currentRow = [];
      }
    });

    if (currentRow.length > 0) {
      tableRows.push(currentRow);
    }
    return tableRows;
  };
  return (
    <footer className="text-gray-600 body-font  bg-gray-100" >
      <div className="container flex justify-around md:p-5  mx-auto  md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-40 flex-shrink-0  md:mx-0 mx-auto text-center md:text-left ">
          <img src="../../main_logo.png" alt="" />
        </div>
        <div className="flex-grow mx-auto flex lg:pt-5 flex-wrap -mb-10 md:mt-0 sm:mt-0 mt-10 md:text-left text-center ">
          <nav className="list-none mb-10 ">
            <table>
              <tbody className='mt-5'>
                <h2 className="title-font  font-medium  text-center text-gray-900 tracking-widest text-sm mb-3 md:ml-10">CATEGORIES</h2>
                {createTableRows().map((row, index) => (
                  <tr key={index}  >
                    {row.map((data, dataIndex) => (
                      <td className='md:px-4 text-center hover:text-red-700 cursor-pointer' key={dataIndex}> <Link to={`/productList/${data}`}>{data}</Link></td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </nav>
        </div>

        <div className="lg:w-1/4 md:w-1/2 w-full p-4  mt-10">
          <div className="flex items-center rounded px-4 py-2 w-52 mx-auto  border-2 border-solid border-gray-500">
            <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" className="w-7 md:w-8" />
            <div className="text-left ml-3">
              <p className='text-xs '>Download on </p>
              <p className="text-sm md:text-base"> Google Play Store </p>
            </div>
          </div>
          <div className="flex items-center  border-2 border-solid border-gray-500 mt-4  rounded px-4 py-2 w-52 mx-auto">
            <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" className="w-7 md:w-8" />
            <div className="text-left ml-3">
              <p className='text-xs '>Download on </p>
              <p className="text-sm md:text-base"> Apple Store </p>
            </div>
          </div>
        </div>

      </div>
      <div className="bg-gray-200">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">© 2023 Food Fusion —
            <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">foodfusion@gmail.com</a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
