import React from 'react';
import Bread from "../images/bread.jpeg"

const Hero = () => {
  return (
    <>
      <div className='max-w-[1640px] mx-auto p-4'>
          <div className='max-h-[500px] relative'>
              {/* Overlay */}
              <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                  <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Minimizing <span className='text-orange-500'>Foods</span></h1>
                  <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> <span className='text-orange-500'>Loss</span> and <span className='text-orange-500'>Waste</span></h1>
              </div>
              <img className='w-full max-h-[500px] object-cover' src={Bread} alt="/" />
          </div>
      </div>
    </>
  )
}

export default Hero