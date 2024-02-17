import About from '@/components/About/About'
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
    </>
  )
}

export default Home