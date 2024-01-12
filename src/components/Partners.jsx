import React from 'react'
import styles from '../styles'
import { partners } from '../constants'
import butterfly from '../assets/butterfly.svg'

const Partners = () => (
    <section className={`${styles.flexCenter} my-4 relative`}>
        <div className={`${styles.flexCenter} flex flex-col text-center`}>
        <h1 className={`${styles.heading2}`}>
            Member <br className='ss:block hidden'/>
            Associations
        </h1>
        <div className={`${styles.flexCenter} grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-6 mt-4`}>
            {partners.map((partner) => (
                <div key={partner.id} className={`flex-1 ${styles.flexCenter} rounded-2xl hover:bg-gradient-to-b from-white to-slate-200 hover:cursor-pointer duration-500`}>
                    <div className={`${styles.paragraph} font-semibold text-[22px] text-gray-500 hover:cursor-pointer m-1 font-amiri tracking-wide`}>
                        {partner.name}
                    </div>


                    {/* <img src={partner.logo} alt='partner' className='max-w-[280px] m-3' /> */}

                    </div>
            ))}
        </div>
            <img src={butterfly} alt='butterfly' className='z-[10] w-[100px] sm:w-[140px] absolute -top-20 right-0 sm:right-20'/>
            </div>

    </section>
)

export default Partners