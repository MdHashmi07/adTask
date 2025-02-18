import React from 'react';
import icon from "../assets/Vector.png"
import whiteParticle from "../assets/partical-white.gif"
import Video from './Video';


const Main = () => {
  return (
    <div className='flex flex-col justify-center items-center w-screen'>
      <div className='flex border w-[18rem] lg:w-[24rem] mx-auto border-[#FFFFFF0D] rounded-full py-2 lg:py-3 lg:px-2 mt-20 lg:mt-24 justify-center items-center bg-gradient-to-r from-[#282828]'>
        <div className='w-4 h-4 lg:w-6 lg:h-6'><img src={icon} alt="icon" className='w-[100%] h-[100%]' /></div>
        <h2 className='text-[12px]'>Transform Your Digital Presence with AI Agents</h2>
      </div>
      <h1 className='text-8xl md:text-9xl opacity-10 mt-[4rem]'>ad<span className='font-semibold'>Task</span>.ai</h1>
      <p className='w-[18.563rem] md:w-[45rem] text-center text-sm md:text-base text-[#E2E8F8] text-base leading-5 mt-14'>Stop struggling with marketing decisions. Our AI assistant analyzes your business, creates personalized strategies, and helps you execute them - all in real-time.</p>

      <div className='relative overflow-hidden mt-10'>
        <img src={whiteParticle} alt="particles" className='absolute' />
        <button className='py-2 px-8 border border-[#7687B5] rounded-full font-normal z-10 bg-gradient-to-b from-[#333B4F] to-[#7687B5]'>Start Free Trail</button>
      </div>
      <p className='text-[10px] pt-3 text-[#C5CDE3]'>Try AdTask AI free for 30 days</p>
      <Video/>
    </div>
  )
}

export default Main
