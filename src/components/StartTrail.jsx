import React from 'react';
import triangle from '../assets/Group 12.png'
import whiteParticle from "../assets/partical-white.gif"

const StartTrail = () => {
    return (
        <div className='flex flex-col justify-center items-center w-screen'>
            <div className='text-7xl md:text-8xl opacity-10 mt-[10rem] lg:mt-[4rem]'>ad<span className='font-semibold'>Task</span>.ai</div>

            <div className='relative w-[20rem] md:w-[40.875rem] flex flex-col justify-center items-center mt-40'>
                <div className='w-[26rem] md:w-[40rem] h-[38rem] absolute -top-44 md:-top-36'>
                    <img src={triangle} alt="traingle" className='w-[100%] h-[100%]' />
                </div>
                <p className='z-10 text-[2rem] md:text-[2.25rem] w-[25rem] md:w-[35.063rem] text-[#D9D9D9] font-medium leading-10 md:py-5 text-center'>Are you ready to boost
                    <br />
                    <span className='gradient-text2'>your Digital Presence?</span> </p>

                <div className='flex flex-col justify-center items-center '>
                    <div className='relative overflow-hidden mt-10'>
                        <img src={whiteParticle} alt="particles" className='absolute' />
                        <button className='py-2 px-8 border text-sm  md:text-base border-[#7687B5] rounded-full  font-normal z-10 bg-gradient-to-b from-[#333B4F] to-[#7687B5]'>Start Free Trail</button>
                    </div>
                    <button className='absolute py-2 px-6 mt-40 z-10 text-sm  md:text-base border border-[#7687B5] rounded-full text-[#E2E8F8] hover:bg-[#7687B54A]'>Schedule a Call</button>

                </div>
            </div>
        </div>
    )
}

export default StartTrail
