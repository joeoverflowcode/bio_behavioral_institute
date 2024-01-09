import React from 'react'
import styles from '../styles'
import FeedBack from './Feedback'
import { feedback } from '../constants'
import beefloat from '../assets/beefloat.svg'


const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    {/* TODO */}
    <div className='absolute z-[0] w-[60%] h-[60%] -right-[65%] rounded-full orange__gradient'/>

    <div className='w-full flex md:justify-center md:flex-row  sm:mb-16 mb-6 relative z-[1] text-center'>
      <img src={beefloat} alt='beefloat' className='w-[200px] left-0 md:w-[250px] h-[100px] md:absolute md:left-10 md:bottom-0' />

      <h1 className={`${styles.heading2} w-[400px]`}   >
      Messages From <br className=''/> 
      Our Leaders:  
      {/* <img src={beefloat} alt='beefloat' className='sm:hidden block w-[250px] h-[100px] ' /> */}
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