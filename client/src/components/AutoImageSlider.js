import React from 'react'
import Image03 from '../assets/img/Image03.jpg'
import Image04 from '../assets/img/Image04.jpg'
import Image05 from '../assets/img/Image05.jpg'

const AutoImageSlider = () => {
  return (
    <div className='auto-slider-container h-screen'>
        <div className='auto-slider-wrap h-full w-full'>
          <img src={Image05} alt="image05" className='w-full h-full object-cover'/>
          <img src={Image04} alt="image04" className='w-full h-full object-cover' />
          <img src={Image03} alt="image03" className='w-full h-full object-cover'/>
        </div>
    </div>
  )
}

export default AutoImageSlider