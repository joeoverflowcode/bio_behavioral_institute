import React from 'react'
import styles from '../styles'

import { GoArrowUpRight } from "react-icons/go";

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-gradient-to-b from-lime-100 to-lime-600 p-[6px] cursor-pointer`}>
        <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
                <div className={`${styles.flexStart} flex-row]`}>
                    <p className='font-poppins font-medium text-[18px] leading-[23px]'>
                        <span className='bg-gradient-to-b from-lime-200 to-lime-600 bg-clip-text text-transparent'>Contact</span>
                    </p>
                </div>
<div className={`${styles.flexStart} flex-row`}>

                    <p className='font-poppins font-medium text-[18px] leading-[23px] mr-1'> 
                        <span className='bg-gradient-to-b from-lime-200 to-lime-600 bg-clip-text text-transparent'>Us
                        </span>
                    </p>
                                      {/* <img src={arrowUp} alt='' className='w-[23px] object-contain'/>    */}
                                      <GoArrowUpRight
                                      size={25}
                                      style={{color:'#86ad0f'}}/>


</div>

        </div>

        </div>
  )
}

export default GetStarted