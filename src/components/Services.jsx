import React from 'react'
import target from '../assets/services-image/material-symbols_drag-click.png';
import analytics from '../assets/services-image/eos-icons_performance.png';
import automation from '../assets/services-image/icon-park-solid_seo.png';
import marketing from '../assets/services-image/gis_network.png';
import optimazation from '../assets/services-image/game-icons_click.png';
import campaign from '../assets/services-image/ic_round-campaign.png';
import ServicesCards from './ServicesCards';
import whiteParticle from "../assets/partical-white.gif"


const Services = () => {
    const servicesArray = [
        {
            image: target,
            title: 'Smart Ad Targeting',
            description: 'AI-powered audience segmentation ensures your ads reach the right people, delivering higher ROI and maximum conversion rates.'
        },
        {
            image: analytics,
            title: 'Performance Analytics',
            description: 'Access real-time insights and track key metrics across all campaigns in one unified dashboard to quickly refine your strategies.'
        },
        {
            image: automation,
            title: 'SEO Automation',
            description: 'Automate keyword research and content optimization suggestions to improve your search engine rankings with less effort.'
        },
        {
            image: marketing,
            title: 'Social Media Marketing',
            description: 'AI agents craft personalized content, schedule posts, monitor engagement, and refine strategies in real time for maximum impact across all major social platforms.'
        },
        {
            image: optimazation,
            title: 'Conversion Optimization',
            description: 'AI-driven A/B testing and automated tweaks to landing pages and funnels help you consistently improve conversion rates.'
        },
        {
            image: campaign,
            title: 'Campaign Automation',
            description: 'Centralize and streamline your ad management. Our intelligent engine automatically adjusts bids, budgets, and targeting to maximize results.'
        },
    ]
    return (
        <div className='flex flex-col justify-center items-center mt-32'>
            <h4 className='py-2 px-7 text-xs md:text-base border border-[#FFFFFF0D] bg-gradient-to-br from-[#282828] rounded-full'>SERVICES</h4>
            <div className='w-[60%] mt-14 mb-20 flex justify-center items-center'>
                <p className='absolute z-10 text-3xl md:text-[2rem] lg:text-[2.25rem] w-[24rem] md:w-[28rem] lg:w-[30.813rem] text-[#D9D9D9] font-medium leading-8 md:leading-10 text-center py-5 md:bg-black'>Innovative Services
                    <br />
                    <span className='gradient-text2'>for Growth.</span> </p>
                <div className='w-[40%] md:w-full relative flex justify-center items-center mt-5'>
                    <div className='absolute -left-40 h-[1px] w-[20%] md:w-[40%] bg-gradient-to-l to-black from-[#5C73AE]'></div>
                    <div className='absolute -right-40 h-[1px] w-[20%] md:w-[40%] bg-gradient-to-r to-black from-[#5C73AE]'></div>
                </div>
            </div>
            <div className='w-[25rem] md:w-[48rem] lg:w-[72.063rem] flex flex-col md:flex-row md:flex-wrap mt-10 justify-center items-center'>
                {servicesArray.map((dets, index) => (
                    <ServicesCards key={index} dets={dets} />
                ))}
            </div>
            <div className='relative overflow-hidden mt-16'>
                <img src={whiteParticle} alt="particles" className='absolute' />
                <button className='py-2 px-8 border border-[#7687B5] rounded-full font-normal z-10 bg-gradient-to-b from-[#333B4F] text-[#E2E8F8]'>Contact Us</button>
            </div>
        </div>
    )
}

export default Services
