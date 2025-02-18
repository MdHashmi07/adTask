import React from 'react'
import angle from '../assets/angle.png';
import tiktok from '../assets/ic_twotone-tiktok.png';
import meta from '../assets/ri_meta-fill.png';
import linkedin from '../assets/mdi_linkedin.png';
import amazon from '../assets/bi_amazon.png';
import x from '../assets/bi_twitter-x.png';
import WorksWithLogo from './WorksWithLogo';


const AddTaskWorksWith = () => {
    const companyLogo = [angle, tiktok, meta, linkedin, amazon, x];
    return (
        <div className='flex flex-col justify-center items-center'>
            <h3 className='text-base text-[#E2E8F8]'>Adtask AI works with :</h3>
            <div className='flex gap-8 justify-center items-center py-8 flex-wrap'>
               {companyLogo.map((logo, index) => (
                <WorksWithLogo key={index} logo={logo}/>
                ))} 
            </div>
        </div>
    )
}

export default AddTaskWorksWith
