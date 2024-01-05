import React from 'react'
import styles from '../styles'

import { GoArrowUpRight } from "react-icons/go";

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-green-gradient p-[2px] hover:p-[3px] cursor-pointer hover:translate-y-2 hover:scale-105`}>
        <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
                <div className={`${styles.flexStart} flex-row]`}>
                    <p className='font-poppins  text-[20px] leading-[23px]'>
                        <span className='text-[#86ad0f] '>Contact</span>
                    </p>
                </div>
<div className={`${styles.flexStart} flex-row`}>

                    <p className='font-poppins text-[20px] leading-[23px] mr-1'> 
                        <span className='text-[#86ad0f]'>Us
                        </span>
                    </p>
                                      {/* <img src={arrowUp} alt='' className='w-[23px] object-contain'/>    */}
                                      <GoArrowUpRight
                                      size={26}
                                      style={{color:'#86ad0f'}}/>


</div>

        </div>

        </div>
  )
}

export default GetStarted