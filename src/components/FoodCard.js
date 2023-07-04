import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSelector } from 'react-redux'

export default function FoodCard() {
  const [meal, setMeal] = useState([])
  const [hasMore, sethasMore] = useState(true)
  const filter = useSelector((state) => state.filter);
  
  const URL = `https://www.themealdb.com/api/json/v1/1/categories.php`;
  const fetchMoreData = () => {
    setTimeout(() => {
      if (meal.length > 6)
        setMeal(meal.concat(Array.from({ length: 6 })))
      else
        sethasMore(false);
    }, 500);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(URL);
        const food = response.data.categories;
        setMeal(food);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
  console.log(meal);
  if (!meal)
    return <h1>Loading...</h1>

  return (
    <InfiniteScroll
      dataLength={meal.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<div style={{
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        background: "radial-gradient(farthest - side, #F40526 94 %,#0000) top/ 8px 8px no - repeat,conic-gradient(#0000 30 %, #F40526)",
        // -webkitMask:"radial-gradient(farthest - side,#0000 calc(100 % - 8px),#000 0)",
        animation: "s3 1s infinite linear",

        // @keyframes s3{
        //   100 % { transform: rotate(1turn) }
        // }
      }}>
      </div >}
    // }
    >

      {/* // <div classNameName="flex text-gray-600 flex-wrap px-5 w-5/6 py-24 mx-auto mb-10  mt-4"> */}
      {/* <h1 className='mx-auto text-3xl w-3/4 mt- font-bold'>Catogory</h1> */}
      <section className="text-gray-600 body-font" >
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 w-5/6 mx-auto">
            {meal.map((item) =>
              <Link to={`/productList/${item.strCategory}`} className="p-4 md:w-1/3" key={item.idCategory}>
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-gray-100">
                  <img className="lg:h-48 md:h-36 object-cover m-auto object-center" src={item.strCategoryThumb} alt="blog" />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Category</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{item.strCategory}</h1>
                    <p className="leading-relaxed mb-3">{item.strCategoryDescription.slice(0, 150)}...</p>
                    <div className="flex items-center flex-wrap ">
                      <div className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </div>
                      <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>1.2K
                      </span>
                      <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            )}
          </div>
        </div>
      </section>
    </InfiniteScroll >
  )
}