import React from 'react'
import youtubeIcon from "../assets/logos_youtube-icon.png"

const Video = () => {
  return (
    <div className='w-[24rem] h-[14rem] md:w-[45.46875rem] h-[27.28125rem] lg:w-[60.625rem] lg:h-[36.375rem] border-2 border-[#333B4F] rounded-xl md:rounded-3xl my-10 flex justify-center items-center relative'>
        <div className='w-10 h-7 md:w-16 md:h-12 lg:w-20 lg:h-14'>
            <img src={youtubeIcon} alt="youtube-icon" className='z-10 w-[100%] h-[100%] '/>
        </div>
        <h2 className=' text-4xl md:text-7xl lg:text-8xl mt-[-1.2rem] md:mt-[-2.7rem] absolute gradient-text opacity-25'>Ad<span className='font-semibold'>Task</span>.ai</h2>
    </div>
  )
}

export default Video
