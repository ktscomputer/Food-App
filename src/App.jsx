import React, { useState } from 'react'
import Navabar from './components/navbar/Navabar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import Placeorder from './pages/placeorder/Placeorder'
import Footer from './components/footer/Footer'
import LogInPopUp from './components/loginpopup/LogInPopUp'


const App = () => {
  const [showLogin, setShowLogin]= useState(false)

  return (
    <> 
    {showLogin?<LogInPopUp setShowLogin={setShowLogin}/>:<></>}
    <div className='App'>
      <Navabar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<Placeorder/>} />
      </Routes>
    </div>
    
    <Footer />
    </>
  )
}

export default App