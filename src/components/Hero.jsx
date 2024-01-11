import React from 'react'
import styles from '../styles'
import biobees from '../assets2/biobees.png'
import biobees2 from '../assets/biobees2.png'
import biobees3 from '../assets/BioBees3.png'
import biobees4 from '../assets/BioBees4.png'
import { discount } from '../assets'
import GetStarted from './GetStarted'
import { FaPercentage } from "react-icons/fa";

const Hero = () =>  (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
        {/* <img src={discount} alt='discount' className='w-[32px] h-[32px]'/> */}
        <FaPercentage 
        size={18}
        style={{color:'#86ad0f'}}/>
          <p className={`${styles.paragraph} ml-2 text-slate-400`}>
          <span className='text-white'>Ask About </span>
          In-Network {" "}
          <span className='text-white'>Patient Discount</span>
          
          </p>
        </div>

        <div className='flex flex-row justify-between items-center w-full'>
            <h1 className='flex-1 font-poppins font-semibold ss:text-[64px] text-[52px] text-black ss:leading-[100px] leading-[75px] tracking-widest'> Proven <br className='sm:block hidden'/> {" "}
              <span
              className='tracking-tight font-bold text-gradient'>Scientific</span> {" "}
            </h1>
            <div className='ss:flex hidden md:mr-4 mr-0'>
                <GetStarted />
            </div>
        </div>

        <h1 className='font-poppins font-semibold ss:text-[58px] text-[52px] text-black ss:leading-[100px] leading-[75px]w-full tracking-tighter'> 
              Treatment Methods.
            </h1>
        <p className={`${styles.paragraph} max-w-[470px]`}>
        Our philosophy is to provide the best possible care for our patients. Every patient is evaluated thoroughly with attention given to the social, biological and psychological factors contributing to their current situation. 
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={biobees4} alt='' className='w-[100%] h-[100%] relative z-[5]'/>

        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'/>
        <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient'/>
        <div className='absolute z-[0] w-[50%] h-[50%] right-30 bottom-20 orange__gradient'/>

      </div>

  <div className={`ss:hidden ${styles.flexCenter}`}>
  <GetStarted />
  </div>


      </section>
  )


export default Hero