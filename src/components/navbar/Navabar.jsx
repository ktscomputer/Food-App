import React, {useContext, useState}from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import App from '../../App'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navabar = ({setShowLogin}) => {
    const [menu , setMenu] = useState('menu');
    const{getTotalCartValue}=useContext(StoreContext)

  return (
    <div className='navbar'>
      <Link to='/'><img src= {assets.logo2} alt="" className="logo" /></Link> 
       <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
        <a href="#explore-menu"onClick={()=>setMenu("Menu")} className={menu ==="Menu"?"active":""}>Menu</a>
        <a href="#app-download"onClick={()=>setMenu("Mobile App")} className={menu==="Mobile App"?"active":""}>Mobile App</a>
        <a href="#footer"onClick={()=>setMenu("Contact us")} className={menu ==="Contact us" ?"active":""}>Contact us</a>
       </ul>
       <div className='navbar-right'>
        <img src={assets.search_icon} alt="" className="seach-icon" />
        <div className="navar-search-icon">
           <Link to='/cart'><img src={assets.basket_icon} alt="" className='basket-icon' /></Link> 
            <div className={getTotalCartValue()=== 0?" ":"dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign In</button>
       </div>
            </div>
  )
}

export default Navabar