import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import UserDetails from './Components/UserDetails'
import Userlist from './Components/Userlist'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Userlist />} />
        <Route path='/user/:id' element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
