import React from 'react'

const WorksWithLogo = ({ logo }) => {
    return (
        <div className='w-24 md:w-24 lg:w-28 h-24 border border-[#333B4F] flex justify-center items-center rounded-xl bg-[#78819936]'>
            <div className='w-[2.5rem] h-[2.5rem] lg:w-[3rem] lg:h-[3rem]'>
                <img src={logo} alt="logo" className='w-[100%] h-[100%] object-contain' />
            </div>
        </div>
    )
}

export default WorksWithLogo
