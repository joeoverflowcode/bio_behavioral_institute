import styles from "../styles"
import {BioLogo} from "../assets"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-1 flex flex-col justify-start mr-10">


        <span className='flex'>
      
      <img src={BioLogo} className='w-[100px]' alt='BioLogo'/>

      <div className='flex flex-col justify-center text-[30px]'>
      <div className='flex'>

      <p className='text-[#86ad0f]'>B<span className='text-[#86ad0f] font-thin tracking-widest pl-0.5'>io</span></p> 
      <p className=''>B<span className='text-black font-thin'>ehavioral.</span></p>
      </div>

      </div>
      </span>


        <p className={`${styles.paragraph} mt-4 max-w-[310px] font-amiri text-[20px]`}>
        Our philosophy is to provide the best possible care for our patients. We will support you every step of the way.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerLink) => (
          <div key={footerLink.title} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
            <h4 className="font-poppins text-[18px] leading-[27px] font-semibold">
              {footerLink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerLink.links.map((Link, index) => (
                <li key={Link.id} className={`font-poppins font-normal text-[16px] leading-[24px] text-black hover:font-semibold hover:text-[#86ad0f] ${index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'}`}>
                    {Link.name}
                </li>
              ))}
            </ul>
            </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#86ad0f]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] ">
        2024 Joe Aguado Development. All Rights Reserved.
      </p>
      <div className="flex flex-row md:mt-0 mt-6 ">
          {socialMedia.map((social, index) => {
            const IconComponent = social.icon
            return (
              <div key={social.id} className={`cursor-pointer ${index !== socialMedia.length -1 ? 'mr-6' :'mr-0' } `}>
                  <IconComponent size={30} color="#86ad0f" />
                </div>
              )
            })
          }
      </div>
    </div>
  </section>
)

export default Footer