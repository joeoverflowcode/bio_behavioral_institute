import React from 'react'
import styles from '../styles'
import FeedBack from './Feedback'
import { feedback } from '../constants'
import bee from '../assets/bee.svg'


const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    {/* TODO */}
    <div className='absolute z-[0] w-[60%] h-[60%] -right-[65%] rounded-full orange__gradient'/>

      <img src={bee} alt='beefloat' className='absolute z-10 top-28 -left-12 sm:top-20 md:left-20 w-[100px] sm:w-[160px]' />
    <div className='flex flex-col items-center justify-center  sm:mb-16 mb-6 relative z-[1] text-center'>
      {/* <img src={beefloat} alt='beefloat' className='min-w-[250px] left-0 md:absolute md:left-10 bottom-0' /> */}

      <h1 className={`${styles.heading2} w-[400px] ss:text-[64px]`}   >
      Hear From <br className=''/> 
      Our Leaders:  
      </h1>

      {/* <div className='w-full md:mt-0 mt-6'>
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
        Our staff has specialized training for many conditions. - Our pioneering intensive program was established in 1978 and has continued to expand and improve over the years.
        </p>  
      </div> */}
    </div>

    <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
      {feedback.map((card) =>(
      <FeedBack
      key={card.id} {...card} />
      ))}

    </div>

  </section>
)
export default Testimonials