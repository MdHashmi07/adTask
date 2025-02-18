import React from 'react'
import logo from "../assets/Amazon.png"

const BrandLogo = ({ image }) => {
  console.log(image)
  return (
    <div className= 'w-16 h-auto lg:w-20 lg:h-16'>
      <img src={image} alt="" className='w-[100%] h-[100%] object-contain object-center'/>
    </div>
    

  )
}

export default BrandLogo
