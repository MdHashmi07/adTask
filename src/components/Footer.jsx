import React from 'react'
import email from '../assets/contact-us/mdi_email-outline.png'
import address from '../assets/contact-us/mdi_address-marker-outline.png'

const Footer = () => {
    return (
        <div>
            <div className="flex flex-col-reverse md:flex-row justify-evenly items-center w-screen mt-40 mb-20 border-t border-[#333B4F]">
                <div className='flex flex-col justify-center items-center md:items-start gap-3 '>
                    <div className='text-7xl mt-[4rem] text-[#C5CDE3] mb-3'>ad<span className='font-semibold'>Task</span>.ai</div>
                    <div className='flex gap-4 items-center'>
                        <img src={email} alt="email icon" className='w-6 h-6' />
                        <span className='font-normal text-xs cursor-pointer underline text-[#788199]'>contact@adtask.ai</span>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <img src={address} alt="address icon" className='w-6 h-6' />
                        <span className='font-normal text-xs cursor-pointer text-[#788199]'>San Francisco Bay Area</span>
                    </div>
                </div>
                <div className='flex gap-16 lg:gap-52 justify-between items-center'>
                    <div className='flex flex-col justify-center items-center'>
                        <span className='text-xl mb-5 mt-14'>Utilities</span>
                        <ul className='flex flex-col justify-center items-center gap-3'>
                            <li className='text-[#FFFFFF94] text-base font-normal'><a href="./Main.js">Home</a></li>
                            <li className='text-[#FFFFFF94] text-base font-normal'><a href="#">Products</a></li>
                            <li className='text-[#FFFFFF94] text-base font-normal'><a href="#">Tools</a></li>
                            <li className='text-[#FFFFFF94] text-base font-normal'><a href="./ContactSUs.js">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <span className='text-xl mb-5 mt-14'>Socials</span>
                        <ul className='flex flex-col justify-center items-center gap-3'>
                            <li className='text-[#FFFFFF94] text-base font-normal'><a href="https://x.com/home">X</a></li>
                            <li className='text-[#FFFFFF94] text-base font-normal'><a href="https://in.linkedin.com/">LinkedIn</a></li>
                            <li className='text-[#FFFFFF94] text-base font-normal'><a href="https://www.instagram.com/">Instagram</a></li>
                            <li className='text-[#FFFFFF94] text-base font-normal'><a href="https://www.facebook.com">Facebook</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <p className='text-[#788199] text-sm font-normal text-center pb-4'>All rights reserved © 2025 adTask</p>
        </div>
    )
}

export default Footer
