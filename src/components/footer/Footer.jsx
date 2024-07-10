import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id = 'footer'>
        <div className="foot-content">
            <div className="footer-content-left">
                <img src={assets.logo2} alt="img" />
                <p>Sample testSample testSample testSample test Sample testSample testSample testSample test Sample testSample testSample testSample test</p>
                <div className="footer-social-icon">
                    <img src={assets.facebook_icon} alt="img" />
                    <img src={assets.linkedin_icon} alt="img" />
                    <img src={assets.twitter_icon} alt="img" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>NeOne</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>

            </div>
            <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91 8547835782</li>
                        <li>contact@neone.com</li>
                    </ul>
            </div>

        </div>
        <hr />
        <p className="foot-copyright">Copyright 2024 &copy; neone.com - All RIght Reserved. </p>
        </div>
  )
}

export default Footer