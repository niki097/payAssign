import './App.css'
import React from 'react'
import Register from './components/Register/Register'

import { Route, Router, Routes } from 'react-router-dom'

import '.././src/assets/media.css'

import Landing from './pages/LandingPage/Landing'

import { Suspense } from 'react'


function App() {

  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path='/' element={ <Landing/>} />
      <Route path='/signup' element={ <Register/>} />
    </Routes>
    </Suspense>
   
    </>
  )
}

export default App
