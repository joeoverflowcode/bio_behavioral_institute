import React from 'react'
import Polaroids from '../assets/Polaroids.png'
import styles, {layout} from '../styles'
import Button from '../components/Button'

const Facility = () => (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          State of the Art Facility<br className='sm:block hidden'/>
          and Award Winning Staff
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our staff has conducted pioneering research and published over 300 scientific articles, book chapters, and numerous books in our area of expertise. We provide state of the art treatment for obsessive compulsive related, anxiety, and mood disorders. 
           </p>
          <Button styles='mt-10'/>
      </div>
<div className={layout.sectionImg}>

      <img className='' src={Polaroids} alt='Facility' />
</div>
    </section >
  )

export default Facility