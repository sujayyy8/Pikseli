import React from 'react'
import pikseli from '../assets/pikseli-removebg-preview.png'

function Logo({className = ''}) {
  return (
    <div>
      <img src={pikseli} alt="Logo" className={className} />
    </div>
  )
}

export default Logo