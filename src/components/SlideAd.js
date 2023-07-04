import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const SlideAd = () => {

  const slides = [
    {
      url: "https://cdn.pixabay.com/photo/2017/01/28/19/06/label-2016248_640.png",
      title: 'sale',
    },
    {
      url: 'https://pixabay.com/get/gf866c0267ff390be4b17ea0c8c15a8a00a52cc94dbed4763bc4546a567e4184d057fba36e6133e0788419f311fea0b428e7c8b492fc6999d5c4208064297127b_640.jpg',
      title: 'foods',
    },
    {
      url: 'https://cdn.pixabay.com/photo/2016/06/06/06/14/limited-time-offer-1438906_640.png',
      title: 'limited',
    },
    {
      url: 'https://cdn.pixabay.com/photo/2014/11/14/03/38/news-530220_640.jpg',
      title: 'news',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };


  return (
    <>
      <div className='max-w-[1400px] h-[580px] w-full m-auto py-16 px-4 relative group'>
        <div
          className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        ></div>
        {/* Left Arrow */}
        <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>

        <div className='flex top-4 justify-center py-2'>
          {slides.map((slide, slideIndex) => (
            <div
              className='text-2xl cursor-pointer'
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default SlideAd;