import React from 'react'
import TestimonailCard from './TestimonailCard'

const Testimonials = () => {
    const testimonialArray = [
        {
            statement: '“We used to struggle with consistent branding across platforms. adTask’s unified dashboard ensures our message stays on point every single time.”',
            speaker: '-Brand Director at a Tech Startup'
        },
        {
            statement: '“adTask turned our complicated campaigns into a breeze. The built-in AI agents helped us reach exactly the customers we wanted—without guesswork!”',
            speaker: '–Head of Growth at Tech Startup'
        },
        {
            statement: '“We’ve tried other platforms before, but none delivered the depth of insights adTask offers. Our conversion rates are up by 35% since we signed on!”',
            speaker: '–Ecommerce Manager at Home Décor Brand'
        },
        {
            statement: '“What impressed me most was the real-time optimization. adTask’s intelligent agents just keep refining our campaigns—our ad spend has never worked harder!”',
            speaker: '–Digital Strategist at SaaS Company'
        },
        {
            statement: '““adTask made everything from campaign setup to performance tracking simple. Our team can now focus on creating great content rather than crunching numbers.”',
            speaker: '–Social Media Lead at Non-Profit Organization'
        },
        {
            statement: '“We’ve seen a 50% boost in engagement across our social channels since switching to adTask. Its AI-driven insights are game-changing!”',
            speaker: '–Social Media Manager at a Fitness Brand'
        },
    ]
    return (
        <div className='w-screen h-screen flex flex-col justify-center items-center mt-[40rem] md:mt-52 mb-10'>
            <h4 className='py-2 px-7 text-xs md:text-base border border-[#FFFFFF0D] bg-gradient-to-br from-[#282828] rounded-full'>TESTINOMIALS</h4>
            <div className='w-[60%] mt-14 mb-16 flex justify-center items-center'>
                <p className='absolute z-10 text-[1.8rem] md:text-[2rem] lg:text-[2.25rem] w-[25rem] md:w-[28rem] lg:w-[30.813rem] text-[#D9D9D9] font-medium leading-10 text-center py-5 md:bg-black'>Trusted by 
                    <br />
                    <span className='gradient-text2'>satisfied clients</span> </p>
                <div className='w-[42%] md:w-full relative flex justify-center items-center mt-5'>
                    <div className='absolute -left-40 h-[1px] w-[70%] md:w-[40%] bg-gradient-to-l to-black from-[#5C73AE]'></div>
                    <div className='absolute -right-40 h-[1px] w-[70%] md:w-[40%] bg-gradient-to-r to-black from-[#5C73AE]'></div>
                </div>
            </div>
            <p className='text-[#E2E8F8] text-xs md:text-sm font-normal'>Discover how we’ve driven growth and innovation.</p>
            <div className='md:w-[48rem] lg:w-[70rem] flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-8 mt-20'>
                {testimonialArray.map((dets, index) => (
                        <TestimonailCard key={index} dets={dets}/>
                )) 
                }
            </div>
        </div >
    )
}

export default Testimonials
