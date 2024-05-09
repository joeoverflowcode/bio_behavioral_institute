import React from 'react'
import styles from './styles'
import {Navbar,
  Contact,
  About,
  Facility,
  Testimonials,
  Hero,
  Footer,
  Stats,
  Treatments,
  Partners,
  Business} from './components'



const App = () => 
  (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        
        <div className={`${styles.boxWidth}`}>
      <Navbar/>
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
      <Hero/>
        </div>
      </div>

<div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
    <div className={`${styles.boxWidth}`}>
      {/* <About/> */}
      <Stats /> 
      <Business />
      <Treatments />
      <Facility /> 
      <Testimonials /> 
      <Partners />
      <Contact />
      <Footer />
    </div>
</div>

    </div>
  )


export default App