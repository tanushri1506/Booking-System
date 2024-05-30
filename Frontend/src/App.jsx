import React from 'react'
import Home from './components/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Free from './components/Free/Free'
import Booked from './components/Booked/Booked'
import Practise2 from './components/Practise2/Practise2'



const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/appointment' element={<Free/>}/>
        <Route path='/booked' element={<Booked/>}/>
        <Route path='/practise' element={<Practise2/>}/>
      </Routes>
      

    </div>
  )
}

export default App
