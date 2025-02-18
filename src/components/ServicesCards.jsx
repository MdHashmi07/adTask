import React from 'react'
import frame from '../assets/services-image/Frame 1361.png'


const ServicesCards = ({ dets }) => {
  return (
    <div className='relative'>
      <div className='w-[21.125rem] h-[18.25rem] flex flex-col justify-center items-center gap-4'>
        <div className='w-[3.875rem] h-[3.875rem] py-2 my-10'>
          <img src={dets.image} alt="services icon" className='w-[100%] h-[100%] object-contain' />
        </div>
        <h4 className='text-xl font-medium mb-1'>{dets.title}</h4>
        <p className='text-sm font-light text-center w-80 mb-5'>{dets.description}</p>
      </div> 
      <div className='absolute top-0 left-[5%] w-[90%] h-[1px] border-gradient'></div>
      <div className='absolute bottom-0 left-[5%] w-[90%] h-[1px] border-gradient'></div>
      <div className='absolute left-0 top-[5%] w-[1px] h-[90%] border-gradient2'></div>
      <div className='absolute right-0 top-[5%] w-[1px] h-[90%] border-gradient2'></div>
      <div className='absolute top-0 left-1/2 w-[10%] h-[2px] bg-white -translate-x-1/2'></div>
      <div className='absolute top-[-8px] left-[-8px] w-[15px] h-[15px] bg-[#65749B] rounded-full'><img src={frame} alt="frame" /></div>
      <div className='absolute top-[-8px] right-[-8px] w-[15px] h-[15px] bg-[#65749B] rounded-full'><img src={frame} alt="frame" /></div>
      <div className='absolute bottom-[-8px] right-[-8px] w-[15px] h-[15px] bg-[#65749B] rounded-full'><img src={frame} alt="frame" /></div>
      <div className='absolute bottom-[-8px] left-[-8px] w-[15px] h-[15px] bg-[#65749B] rounded-full'><img src={frame} alt="frame" /></div>
    </div>

  )
}

export default ServicesCards
