import React from 'react';
import Hero from '../components/Hero';
import Cards from '../components/Cards';
import Foods from '../components/Foods';
import SlideAd from '../components/SlideAd';
import Category from '../components/Category';

const Home = () => {
  return (
    <>
      <SlideAd />
      <Hero />
      <Cards />
      <Foods />
      <Category />
    </>
  )
}

export default Home;