import React from 'react'
import { useState } from 'react'
import { PiButterflyDuotone } from "react-icons/pi";

import {close, logo, menu,} from '../assets'
import BioLogoGreen from '../assets/BioLogoGreen.png'

import {navLinks} from '../constants'
import { PiListBold } from "react-icons/pi";

const Navbar = () => {

    const [toggle, settoggle] = useState(false)

  return (
    <nav className='w-full flex py-6 justify-between items-center'>
<span className='flex items-center justify-center'>
      
      <img src={BioLogoGreen} className='w-[90px]' alt='BioLogo'/>

      <div className='flex flex-col justify-center text-[30px]'>
      <div className='flex'>

      <p className='text-[#86ad0f]'>B<span className='text-[#86ad0f] font-thin tracking-widest pl-0.5'>io</span></p> 
      <p className=''>B<span className='text-black font-thin'>ehavioral.</span></p>
      </div>

      </div>
      </span>

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
            <li 
            key={nav.id}
            className={`font-poppins cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-2 text-[#86ad0f] font-bold' : 'mr-8'} mr-10 `}
            >
<a href={`#${nav.id}`}>
    {nav.title}
</a>
            </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center '>
        <div className='border-2 border-[#86ad0f] p-1 rounded-lg'>
        <img src={toggle ? close : menu } 
        alt='menu'
        className='w-[28px] h-[28px] object-contain'
        onClick={() => settoggle((prev) => !prev)}
        />
        </div>

<div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>

<ul className='list-none flex flex-col justify-end items-center flex-1 text-white'>
        {navLinks.map((nav, index) => (
            <li 
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0 text-lime-600 text-[18px] font-semibold tracking-wider' : 'mb-5'} mr-10 `}
            >
<a href={`#${nav.id}`}>
    {nav.title}
</a>
            </li>
        ))}
      </ul>
</div>

      </div>

    </nav>
  )
}

export default Navbar