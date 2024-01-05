import React from 'react'
import {features} from '../constants'
import styles, {layout} from '../styles'
import Button from './Button'


const FeatureCard = ({icon: Icon,title,content,index, className}) => (
<div className={`flex flex-row p-6 rounded-[20px] ${index!== features.length -1} ? "mb-6" : "mb-0" feature-card hover:text-white`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-[#86ad0f]`}>
        <Icon className={className} style={{fontSize:'34px', color:'white'}}/>
    </div>
    <div className='flex-1 flex flex-col ml-3'>
        <h4 className='font-poppins font-semibold text-[18px] leading-[23px] mb-1'>
            {title}
        </h4>
        <p>
            {content}
        </p>
    </div>
</div>
)

const Business = () => {
  return (
    <section id='features' className={layout.section}>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>Our Patient Promise</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-3`}> Our goal is to help you lead a fulfilling life based on your values and capabilities. We strive to enhance your quality of life beyond your psychological condition. We will support you every step of the way.</p>
            <Button styles='mt-10'/>
        </div>

        <div className={`${layout.sectionImg} flex-col`}>
            {features.map((feature, icon, index) => (
                <FeatureCard 
                key={feature.id} 
                {...feature} 
                icon={feature.icon} 
                index={index}
                className='object-contain'
                />
            ))}

        </div>

    </section>
  )
}

export default Business