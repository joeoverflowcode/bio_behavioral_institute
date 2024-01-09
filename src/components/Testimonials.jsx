import React from 'react'
import styles from '../styles'
import FeedBack from './Feedback'
import { feedback } from '../constants'


const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    {/* TODO */}
    <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full orange__gradient'/>

    <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>

      <h1 className={styles.heading2}>
      Meet Our <br className='sm:block hidden'/>  
      Clinical and <br className='sm:block hidden'/> Institution Leaders
      </h1>

      <div className='w-full md:mt-0 mt-6'>
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
        Our staff has specialized training for many conditions, including obsessive compulsive disorder,  body dysmorphic disorder, and hoarding disorder. Our pioneering intensive program was established in 1978 and has continued to expand and improve over the years.
        </p>  
      </div>
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