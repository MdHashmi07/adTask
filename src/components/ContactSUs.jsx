import React from 'react'
import email from '../assets/contact-us/mdi_email-outline.png'
import phone from '../assets/contact-us/mdi_phone-outline.png'
import address from '../assets/contact-us/mdi_address-marker-outline.png'

const ContactSUs = () => {
    return (
        <div className='w-screen h-screen flex flex-col justify-center items-center mt-[50rem] md:mt-60 lg:mt-10 mb-10'>
            <h4 className='py-2 px-7 text-xs md:text-base border border-[#FFFFFF0D] bg-gradient-to-br from-[#282828] rounded-full'>CONTACT US</h4>
            <div className='flex flex-col lg:flex-row justify-center items-center mt-10'>
                <div className='w-[24rem] md:w-[32.5rem] px-4 md:px-5 lg:px-0'>
                    <p className='text-[2rem] md:text-[2.25rem] w-[24rem] md:w-[30.813rem] text-[#D9D9D9] font-medium leading-10 py-5'>Ask whatever you have
                        <br />
                        <span className='gradient-text2'>in your mind now</span> </p>
                    <p className='font-normal text-xs md:text-sm w-[20rem] md:w-[25rem] py-4'>Whether you have questions or are ready to discuss your business, we’re here to help. Reach out today.</p>
                    <div className='flex flex-col gap-4 mt-5'>
                       <div className='flex gap-4 items-center'>
                            <img src={email} alt="email icon" className='w-6 h-6' />
                            <span className='font-normal text-xs cursor-pointer underline'>contact@adtask.ai</span>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <img src={phone} alt="email icon" className='w-6 h-6' />
                            <span className='font-normal text-xs cursor-pointer'>(969) 819-8061</span>
                        </div>
                        
                        <div className='flex gap-4 items-center'>
                            <img src={address} alt="address icon" className='w-6 h-6' />
                            <span className='font-normal text-xs cursor-pointer'>San Francisco Bay Area</span>
                        </div>
                    </div>

                </div>
                <div className='flex flex-col justify-center items-center gap-3 mt-8'>
                    <form className=' w-[20rem] md:w-[30.25rem]'>
                        <div className='my-6'>
                            <label htmlFor="" className='text-sm font-normal'>Name</label>
                            <input type="text" className='bg-transparent border border-[#333B4F] w-full rounded-sm mt-2 py-1 px-2' />
                        </div>
                        <div className='my-6'>
                            <label htmlFor="" className='text-sm font-normal'>Email</label>
                            <input type="email" className='bg-transparent border border-[#333B4F] w-full rounded-sm mt-2 py-1 px-2' />
                        </div>
                        <div className='my-6'>
                            <label htmlFor="" className='text-sm font-normal'>Message</label>
                            <input type="text" className='bg-transparent border border-[#333B4F] w-full rounded-sm mt-2 size-24 py-1 px-2' />
                        </div>
                    </form>
                    <button className='py-1 px-10 border border-[#7687B5] rounded-full text-[#E2E8F8] bg-[#7687B54A] text-sm md:text-base '>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default ContactSUs
