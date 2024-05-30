import React, { useEffect, useState } from 'react'
import './Navbar.css'


const Navbar = () => {

  const [sticky,setSticky] =useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 150 ? setSticky(true) : setSticky(false);
    })
  })


  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <div className="logo">
        
        <h1>Justice.</h1>
      </div>
      <ul>
        <a href='/'><li>Home</li></a>
        <a href='/practise'><li>Practise Areas</li></a>
        <a href='#expertise'><li>Services</li></a>
        <a href='#clients'><li>Attorneys</li></a>
        <a href='#contact'><li>Contact Us</li></a>
      </ul>
    </nav>
  )
}

export default Navbar

