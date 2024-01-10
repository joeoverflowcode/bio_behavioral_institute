import React from 'react'
import styles from '../styles'
import Button from './Button'
import GetStarted from './GetStarted'

const Contact = () => (
<section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
  <div className='flex-1 flex flex-col'>
    <h2 className={`${styles.heading2} text-white`}>Our staff is ready to help.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-white`}>
        If you are seeking treatment for yourself or a loved one, please contact us. Bio Behavorial is available to serve now. 
      </p>
  </div>
  <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
    <Button />
    {/* <GetStarted /> */}
  </div>
</section>
)

export default Contact