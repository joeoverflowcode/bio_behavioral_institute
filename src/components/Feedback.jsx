import React from 'react'
import { quotes } from '../assets'

const Feedback = ({content, name, title, img}) => {
  return (
    <div className='flex  flex-col justify-between px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card hover:text-white'>
        <img src={quotes} alt='double_quotes' className='w-[50px] h-[50px] object-contain' />
        <p className='font-poppins font-normal text-[18px] leading-[32px] my-10'>{content}</p>

        <div className='flex flex-row'>
            <img src={img} alt={name} className='w-[72px] h-[72px] rounded-full' />

                <div className='flex flex-col ml-4'>
                    <h4 className='font-poppins font-semibold text-[20px] leading-[32px]'>{name}</h4>
                    <p className='font-poppins font-normal text-[16px] leading-[24px]'>{title}</p>
                </div>

        </div>
        </div>
  )
}

export default Feedback