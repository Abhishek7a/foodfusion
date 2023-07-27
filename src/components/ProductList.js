import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link } from "react-router-dom";

export default function ProductList() {
  
  const { id } = useParams();
  const [item, setItem] = useState([]);
  useEffect(() => {
    const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`;
    const fetchData = async () => {
      try {
        const response = await axios.get(URL);
        const food = response.data;
        setItem(food.meals);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [id]);
  return (
    <div className="bg-white t-10">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 ">{id}</h2>
        <div className="mt-6  flex flex-wrap grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {item.length === 0 ?<h4 className='mx-auto'>Loading...</h4>: item.map((item) =>
            <Link to={`/item/${item.idMeal}`} className="group relative" key={item.idMeal}>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img src={item.strMealThumb} alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link to={`/item/${item.idMeal}`} className=' '>
                      <span aria-hidden="true" className=" absolute inset-0"></span>
                      {item.strMeal.slice(0, 40)}
                    </Link>
                  </h3>
                </div>
                <p className="text-sm font-bold text-gray-900">₹{item.idMeal.slice(2, 4)}.00</p>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
