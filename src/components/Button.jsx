import React from 'react'

const Button = ({styles}) => {
  return (
    <button type='button' className={`py-4 px-6 bg-green-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-2xl hover:translate-y-1 hover:scale-105 ${styles}`}>
Get Started
    </button>
  )
}

export default Button