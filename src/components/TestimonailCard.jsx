import React from 'react'

const TestimonailCard = ({dets}) => {
    const {statement, speaker} = dets;
  return (
    <div className='w-[20rem] h-[12.25rem] border border-[#333B4F] bg-gradient-to-t from-[#0B0B0B] to-[#131313] rounded-2xl py-5 px-6 flex flex-col justify-center items-start'>
      <p className='w-[17rem] text-sm pb-2 text-[#C5CDE3]'>{statement}</p>
      <h5 className='font-medium text-sm pt-5'>{speaker}</h5>
    </div>
  )
}

export default TestimonailCard
