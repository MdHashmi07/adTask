import React from 'react';
import image1 from '../assets/Workday.png'
import image2 from '../assets/Google.png'
import image3 from '../assets/Salesforce.png'
import image4 from '../assets/Amazon.png'
import image5 from '../assets/Sony.png'
import image6 from '../assets/Cocacola.png'
import image7 from '../assets/intel.png'
import BrandLogo from './BrandLogo';


const TickerScroll = () => {
  const logo = [image1, image2, image3, image4, image5, image6, image7, image1];
  return (
    <div className='flex gap-5 md:gap-16 lg:gap-24 justify-center items-center py-10 md:py-20 '>
        {logo.map((elem , index) => (
            <BrandLogo key={index} image={elem}/>
        ))}
    </div>
  )
}

export default TickerScroll
