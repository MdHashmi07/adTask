import React from 'react'
import logo from "../assets/adTask.ai.png";
import menu from '../assets/menu.png';
import call from '../assets/Frame 1341.png'

const Navbar = () => {
  return (
    <div class="header w-[90%] lg:w-full max-w-6xl mx-auto flex flex-wrap justify-between items-center mt-1 md:mt-8 bg-[#5C60691A] border border-[#FFFFFF1A] py-3 px-6 md:rounded-2xl">
      <div class="w-[6rem] h-[1.25rem]">
        <img src={logo} alt="logo" class="w-full h-full" />
      </div>
      <ul class="hidden md:flex justify-center items-center gap-10 text-sm lg:ps-32 ps-0">
        <li>Products <i class="ri-arrow-down-s-fill text-base"></i></li>
        <li>Tools <i class="ri-arrow-down-s-fill text-base"></i></li>
        <li>Contact Us</li>
      </ul>
      <div class="hidden md:flex gap-4 mt-4 md:mt-0">
        <button class="py-2 px-5 lg:px-8 border border-[#7687B5] rounded-full text-[#E2E8F8] hover:bg-[#7687B54A] lg:text-base">Log in</button>
        <button class="py-2 px-6 border border-[#7687B5] rounded-full text-[#E2E8F8] hover:bg-[#7687B54A] text-base hidden lg:block">Schedule a Call</button>
        <button className='hidden md:block lg:hidden '>
          <img src={call} alt="call image" />
        </button>
      </div>

      <div class="block md:hidden">
        <img src={menu} alt="menu" />
      </div>
    </div>

  )
}

export default Navbar
