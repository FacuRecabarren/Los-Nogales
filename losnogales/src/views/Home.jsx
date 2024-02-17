import About from '@/components/About/About'
import Beer from '@/components/Beer/Beer'
import Contact from '@/components/Contact/Contact'
import FoodDrinks from '@/components/FoodDrinks/FoodDrinks'
import Footer from '@/components/Footer/Footer'
import Hours from '@/components/Hours/Hours'
import Main from '@/components/Main/Main'
import Menu from '@/components/Menu/Menu'
import Navbar from '@/components/Navbar/Navbar'
import Services from '@/components/Services/Services'
import React from 'react'

const Home = () => {
  return (
    <>
        <Navbar/>
        <Main/>
        <Services/>
        <About/>
        <Menu/>
        <Hours/>
        <Beer/>
        <FoodDrinks/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default Home