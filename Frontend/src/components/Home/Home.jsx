import React from 'react'
import Navbar from '../Navbar/Navbar'
import Main from '../Mains/Main'

import Practise from '../Practise/Practise'
import Experience from '../Experience/Experience'
import Clients from '../Clients/Clients'
import Expertise from '../Expertise/Expertise'
import Consult from '../Consult/Consult'
import Index from '../Index/Index'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
      <Main/>
      <Practise/>
      <Experience/>
      <Clients/>
      <Expertise/>
      <Consult/>
      <Index/>
      <Footer/>
      
    </div>
  )
}

export default Home
