import React from 'react'

const Cards = () => {
  return (
    <>
      <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* Card */}
        <div className='rounded-xl relative'>
          {/* Overlay */}
          <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>おすすめのクロワッサンはこちら</p>
            <p className='px-2'> ～9/26</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
          </div>
          <img
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src='https://pixabay.com/get/g31b5844b71f0d000502dd19c9d96c4b95855ab7c32f239df227478d04e947585b44fed3372eecb5533ee193358174344_640.jpg'
            alt='/'
          />
        </div>
        {/* Card */}
        <div className='rounded-xl relative'>
          {/* Overlay */}
          <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>今が旬の野菜がいっぱい</p>
            <p className='px-2'>～9/26</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
          </div>
          <img
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src='https://pixabay.com/get/g98faa9df58b1528dbad62b8f98700876c0c4793e51707fe48345da4d397daec7709697b6cd69ac6363222af42359643f_640.jpg'
            alt='/'
          />
        </div>
        {/* Card */}
        <div className='rounded-xl relative'>
          {/* Overlay */}
          <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>大量のお菓子が手に入る！</p>
            <p className='px-2'>～9/26</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
          </div>
          <img
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src='https://pixabay.com/get/g7752a15c8dc2336c23260a96f8dcd4f7ed130ae7bb6f99277b6d98b7d70bc0d5d84aece7788e7000f063e5acdd7eb7b72a908cfb72727039fb12711ca4f256eb_640.jpg'
            alt='/'
          />
        </div>
      </div>
    </>
  )
}

export default Cards