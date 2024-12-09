"use client"
import Footer from '@/app/component/Footer'
import FuniroFurniture from '@/app/component/FuniroFurniture'
import Hero from '@/app/component/Hero'
import Navbar from '@/app/component/Navbar'
import Products from '@/app/component/Products'
import Range from '@/app/component/Range'
import RoomIspirations from '@/app/component/RoomIspirations'
import React from 'react'

const page = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Range/>
    <Products/>
    <RoomIspirations/>
    <FuniroFurniture/>
    <Footer/>
    </>
  )
}

export default page