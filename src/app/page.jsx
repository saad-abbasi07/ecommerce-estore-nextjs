import React from 'react'
import HeroSection from '../components/home/HeroSection'
import RecentlyAdded from '@/components/home/RecentlyAdded'
import FeaturedProducts from '@/components/home/FeaturedProducts'


export default function Home() {
  return (
    <div>
      <HeroSection/>
      <RecentlyAdded/>
      <FeaturedProducts/>
    </div>
  )
}
