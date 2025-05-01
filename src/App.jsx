import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Starting from './pages/Starting'
import Timer from './pages/Timer'

const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Starting /> } />
    <Route path='/countdown' element={<Timer /> } />
  

   </Routes>
   </BrowserRouter>
  )
}

export default App