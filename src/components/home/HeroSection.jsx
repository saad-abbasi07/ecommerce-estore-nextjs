'use client';
import React from 'react'
import Slider from './Slider'
import Container from './Container'


export default function HeroSection() {
  return (
    <section 
      className="w-full bg-white py-10 md:py-16"
      aria-labelledby="hero-heading"
    >
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4 md:px-6">
        
        {/* Left Side Content */}
        <div className="space-y-5 text-center md:text-left">
          <h1 id="hero-heading" className="text-3xl md:text-5xl font-extrabold leading-tight">
            One stop solution <span className="text-pink-500">E-Store</span>
          </h1>
          <p className="text-gray-700 text-base md:text-lg max-w-lg mx-auto md:mx-0">
            Discover the latest <strong>headphones, earphones, mobiles, tablets</strong> and more.
          </p>
          <p className="text-gray-500 text-sm md:text-base max-w-md mx-auto md:mx-0">
            Exclusive deals just for you — shop smarter today!
          </p>
          <div>
            <a 
              href="/shop"
              className="inline-block px-6 py-3 rounded-2xl text-pink-500 bg-gray-200 font-semibold hover:bg-pink-600 hover:text-white transition shadow-lg"
            >
              Shop Now
            </a>
          </div>
        </div>

        {/* Right Side Slider */}
        <div className="w-full flex justify-center">
          <div className="w-full max-w-md md:max-w-lg">
            <Slider />
          </div>
        </div>

      </Container>
    </section>
  )
}
