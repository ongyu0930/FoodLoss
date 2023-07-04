import React, { useState } from 'react';
import { Data } from '../data/Data';

const Foods = () => {

  const [foods, setFoods] = useState(Data);

  const filterType = (category) => {
    setFoods(
      Data.filter((item) => {
        return item.category === category;
      })
    );
  };

  const filterPrice = (price) => {
    setFoods(
      Data.filter((item) => {
        return item.price === price;
      })
    );
  };


  return (
    <>
      <div className='max-w-[1640px] m-auto px-4 py-12'>
        <h1 className='text-orange-600 font-bold text-4xl text-center'>
           Menu Items
        </h1>

        <div className='flex flex-col lg:flex-row justify-between'>
          <div>
            <p className='font-bold text-gray-700'>Filter Type</p>
            <div className='flex justfiy-between flex-wrap'>
              <button
                onClick={() => setFoods(Data)}
                className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
              >
                All
              </button>
              <button
                onClick={() => filterType('bread')}
                className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
              >
                Bread
              </button>
              <button
                onClick={() => filterType('vegtable')}
                className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
              >
                Vegtable
              </button>
              <button
                onClick={() => filterType('snack')}
                className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
              >
                Snack
              </button>
              
            </div>
          </div>

          {/* Filter Price */}
          <div>
            <p className='font-bold text-gray-700'>Filter Price</p>
            <div className='flex justify-between max-w-[390px] w-full'>
              <button
                onClick={() => filterPrice('1000円')}
                className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
              >
                1000
              </button>
              <button
                onClick={() => filterPrice('1000円')}
                className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
              >
                1000
              </button>
              <button
                onClick={() => filterPrice('1000円')}
                className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
              >
                1000
              </button>
              <button
                onClick={() => filterPrice('1000円')}
                className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
              >
                1000
              </button>
            </div>
          </div>
        </div>

        {/* Display foods */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
          {foods.map((item, index) => (
            <div
              key={index}
              className='border shadow-lg rounded-lg hover:scale-105 duration-300'
            >
              <img
                src={item.image}
                alt={item.name}
                className='w-full h-[200px] object-cover rounded-t-lg'
              />
              <div className='flex justify-between px-2 py-4'>
                <p className='font-bold'>{item.name}</p>
                <p>
                  <span className='bg-orange-500 text-white p-1 rounded-full'>
                    {item.price}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
};

export default Foods;