import './App.css'
import React from 'react'

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
    </Routes>
    </Suspense>
   
    </>
  )
}

export default App
