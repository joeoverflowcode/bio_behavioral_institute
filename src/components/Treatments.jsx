import React from 'react'
import treatmentsbee from '../assets/treatmentsbee.png'
import styles, {layout} from '../styles'
import Button from './Button'
import GetStarted from './GetStarted'

const Treatments = () => (
    <section id='treatments' className={layout.sectionReverse}>
        <div className={layout.sectionImgReverse}>
            <img src={treatmentsbee} alt='treatments' className='w-[100%] h-[100%] relative z-[5]'/>

            <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full orange__gradient'/>
            <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
        </div>

        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>Comprehensive Treatment <br className='sm:block hidden'/>Approach</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}> Our team recognizes that each person enters treatment with a unique life history. We will customize a treatment plan for your needs that provids dedicated and compassionate support as you reach your potential.</p>
            <div className='flex w-full justify-center sm:mt-10 mt-6'>
<Button />
            </div>
        </div>
    </section>
  )


export default Treatments