import React from 'react'
import thunder from "../assets/thunder.png"
import pieChart1 from "../assets/tabler_chart-pie-filled.png"
import pieChart2 from '../assets/Frame 1345.png'
import rim1 from '../assets/rim1.png';
import rim2 from '../assets/rim2.png';

const Features = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-32'>

            <h4 className='py-2 px-7 border border-[#FFFFFF0D] bg-gradient-to-br text-xs md:text-base from-[#282828] rounded-full'>FEATURES</h4>

            <div className='w-[10%] md:w-[58%] lg:w-[70%] mt-14 mb-16 flex justify-center items-center'>
                <p className='absolute z-10 text-3xl md:text-[1.71rem] lg:text-[2.25rem] w-[20.328rem] md:w-[31.25rem] lg:w-[47.938rem] text-[#D9D9D9] font-medium leading-8  md:leading-10 text-center py-5 lg:bg-black'>Feature packed to make <br />
                    <span className='gradient-text2'>Digital marketing easier and affordable.</span> </p>
                <div className='w-full relative flex justify-center items-center mt-5'>
                    <div className='absolute -left-40 h-[1px] w-[80%] md:w-[25%] lg:w-[30%] bg-gradient-to-l to-black from-[#5C73AE]'></div>
                    <div className='absolute -right-40 h-[1px]  w-[80%] md:w-[25%] lg:w-[30%] bg-gradient-to-r to-black from-[#5C73AE]'></div>
                </div>
            </div>
            <p className='text-[#E2E8F8] text-xs md:text-base font-normal'>Experience Intelligent Features to optimize your marketing efforts.</p>

            <div className='md:w-[70%] lg:w-screen mt-32 mb-10 flex flex-col md:flex-wrap justify-center items-center lg:flex-row gap-8'>
                <div className='w-[22rem] h-[37.063rem] border border-[#333B4F] flex flex-col justify-center items-center gap-10 overflow-hidden rounded-2xl bg-gradient-to-bl from-[#0B0B0B] to-[#1D2333]'>
                    <div className='w-[24.708rem] h-[24.708rem] border border-[#263048] rounded-full'></div>
                    <div className='w-[17rem]'>
                        <h4 className='font-semibold py-2 text-[14px]'>Reach Target Audience</h4>
                        <p className='text-[12px]'>Pinpoint the perfect audience with precision. Our<br /> AI-driven targeting ensures every message resonates where it matters most.</p>
                    </div>
                </div>

                <div className='flex flex-col gap-8'>
                    <div className='w-[22rem] h-[17.5rem] border border-[#333B4F] flex flex-col justify-center items-center gap-10 overflow-hidden rounded-2xl bg-gradient-to-bl from-[#0B0B0B] to-[#1D2333]'>
                        <div className='relative'>
                            <div className='w-[8rem] h-[7.688rem] border border-[#333B4F] flex justify-center items-center rounded-2xl mt-3'>
                                <div className='flex justify-center items-center relative border border-[#333B4F] w-[7rem]  h-[6.688rem] bg-[#78819936] rounded-2xl'>
                                    <div className='w-[4.313rem] h-[4.25rem]'>
                                        <img src={rim1} alt="rim" className='w-[100%] h-[100%]' />
                                    </div>
                                    <div className='w-[2.688rem] h-[2.5rem] absolute left-[4rem] top-[3.79rem]'>
                                        <img src={rim2} alt="rim" className='w-[100%] h-[100%]' />
                                    </div>
                                </div>
                            </div>
                            <div className='-mt-5 gradient-text3 text-[10px] absolute -right-[111px] top-1/2 border-b text-center border-white w-[7.39rem] shadow-xl'>GEN AI Powered</div>

                        </div>
                        <div className='w-[18.25rem]'>
                            <h4 className='font-semibold pb-2 text-[14px]'>Marketing made Easier</h4>
                            <p className='text-[12px]'>Save time and simplify campaign management. Let automated workflows handle the heavy lifting, so you can focus on creativity.</p>
                        </div>
                    </div>
                    <div className='w-[22rem] h-[17.5rem] border border-[#333B4F] flex flex-col justify-center items-center gap-10 overflow-hidden rounded-2xl bg-gradient-to-bl from-[#0B0B0B] to-[#1D2333]'>
                        <div className='flex justify-center items-end gap-2'>
                            <div className='w-[7.5rem] h-[7.188rem]'>
                                <img src={pieChart2} alt="pie chart" className='w-[100%] h-[100%]' />
                            </div>
                            <div className='w-[6.375rem] h-[6.375rem]'>
                                <img src={pieChart1} alt="pie chart" className='w-[100%] h-[100%]' />
                            </div>
                        </div>
                        <div className='w-[18.25rem]'>
                            <h4 className='font-semibold pb-2 text-[14px]'>Smart Marketing Insights</h4>
                            <p className='text-[12px]'>Unlock actionable data to guide every decision. Stay ahead of trends, refine your strategies, and make confident moves with powerful analytics.</p>
                        </div>
                    </div>
                </div>


                <div className='w-[22rem] h-[37.063rem] border border-[#333B4F] flex flex-col justify-center items-center gap-10 overflow-hidden rounded-2xl bg-gradient-to-bl from-[#0B0B0B] to-[#1D2333]'>
                    <div className='w-[24.708rem] h-[24.708rem] border border-[#263048] rounded-full flex flex-col justify-center items-center'>
                        <div className='w-[16.625rem] h-[16.625rem] border border-[#263048] rounded-full flex justify-center items-center'>
                            <div className='w-[8.739rem] h-[13.982rem]' ><img src={thunder} alt="thunder" className='w-[100%] h-[100%] object-contain' /></div>
                        </div>
                    </div>
                    <div className='w-[17rem]'>
                        <h4 className='font-semibold py-2 text-[14px]'>Intelligent Agents to Optimize your Reach</h4>
                        <p className='text-[12px]'>Scale and refine your marketing with AI-powered agents. They track performance in real-time to <br /> help you reach more customers efficiently.</p>
                    </div>
                </div>

            </div>
        </div>

      

    )
}

export default Features
