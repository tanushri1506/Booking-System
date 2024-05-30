import React from 'react'
import './Main.css'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div className='main container'>
      <div className="main-heading">
        <h1>We Fight</h1>
        <p>For Your Right</p>
      </div>
      <a href='/appointment'>
      <button  className='btn free-btn'>FREE CONSULTATION</button>
      </a>
    </div>
  )
}

export default Main
