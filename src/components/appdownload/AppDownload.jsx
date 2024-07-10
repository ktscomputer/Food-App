import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div  className='app-download' id='app-download' >
        <p>For Best Experience Download <br />NeOne App</p>
        <div className="app-download-platforms">
            <img src={assets.play_store} alt="Img" />
            <img src={assets.app_store} alt="Img" />
        </div>
        </div>
  )
}

export default AppDownload