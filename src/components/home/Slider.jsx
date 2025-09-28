'use client';
import React from 'react'
import SliderLib from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Slider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true
  };

  const images = [
    {
      url: "https://m.media-amazon.com/images/I/61jDdgmJrgL._AC_UL320_.jpg",
      alt: "Wireless Sony Headphones - Black"
    },
    {
      url: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg",
      alt: "Premium Wireless Earbuds with Charging Case"
    },
    {
      url: "https://m.media-amazon.com/images/I/81QpkIctqPL._AC_SL1500_.jpg",
      alt: "Smartphone with AMOLED Display"
    }
  ];

  return (
    <div className="w-full">
      <SliderLib {...settings}>
        {images.map((item, idx) => (
          <div key={idx} className="flex justify-center">
            <img
              src={item.url}
              alt={item.alt}
              loading="lazy"
              className="w-full max-h-[400px] object-contain sm:max-h-[300px] md:max-h-[350px]"
            />
          </div>
        ))}
      </SliderLib>
    </div>
  )
}
