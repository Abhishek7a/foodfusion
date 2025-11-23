import React, { useEffect, useState } from 'react'
import { useSearchParams, Link } from "react-router-dom";
import axios from 'axios';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Cart from '../components/Cart'

type Product = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [cart, setcart] = useState<boolean>(false)
  const [item, setItem] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const openCart = () => {
    setcart(!cart);
  }

  useEffect(() => {
    if (query) {
      setLoading(true);
      const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`;
      const fetchData = async () => {
        try {
          const response = await axios.get(URL);
          const food = response.data;
          // TheMealDB returns null when no results found, not an empty array
          const meals = food.meals ? (food.meals as Product[]) : [];
          setItem(Array.isArray(meals) ? meals : []);
          setLoading(false);
        } catch (error) {
          console.error(error);
          setItem([]);
          setLoading(false);
        }
      }
      fetchData();
    } else {
      setItem([]);
      setLoading(false);
    }
  }, [query]);

  return (
    <>
      <Navbar openCart={openCart} />
      <div className="bg-white pt-24">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Search Results for: "{query}"
          </h2>
          {loading ? (
            <h4 className='mx-auto mt-6'>Loading...</h4>
          ) : item.length === 0 ? (
            <div className="mt-6 text-center">
              <p className="text-gray-500">No results found for "{query}"</p>
              <p className="text-gray-400 mt-2">Try searching for a different meal</p>
            </div>
          ) : (
            <div className="mt-6 flex flex-wrap grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {item.map((item) =>
                <Link to={`/item/${item.idMeal}`} className="group relative" key={item.idMeal}>
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img src={item.strMealThumb} alt={item.strMeal} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
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
                    <p className="text-sm font-bold text-gray-900">${item.idMeal.slice(2, 4)}.00</p>
                  </div>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
      <Footer />
      {cart === true ? <Cart openCart={openCart} /> : ""}
    </>
  )
}

