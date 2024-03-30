import React from 'react'
import Logof from '../assets/Logof.png'
import emailicon from '../assets/emailIcon.png'
import Fackbook from '../assets/Facebook.png'
import Twitter from '../assets/Twitter.png'
import Instagram from '../assets/Instagram.png'
import Linkedin from '../assets/Linkedin.png'
import Youtube from '../assets/Youtube.png'
function Footer() {
  return (
         <div className="bg-[#000816] text-white mt-16">
            <div className='flex flex-row space-x-20 py-10 pl-32'>
            <div className='w-52 space-y-7 pl-4'>
                <img src={Logof} alt="" />
               <h1 className='text-3xl font-bold'>Navytech</h1>
               <div className='text-xl'>
               <p>hello@navytech.com</p>
               <p>Phone : +01 23456789</p>
               </div>
               <div className='flex'>
                <img src={Fackbook} alt="" />
                <img src={Twitter} alt="" />
                <img src={Instagram} alt="" />
                <img src={Linkedin} alt="" />
                <img src={Youtube} alt="" />
               </div>
            </div>
            <div className='w-52'>
               <h1 className='text-2xl'>Quick Links</h1>
               <div className='space-y-4 pt-5'>
               <p>Services</p>
               <p>Portfolio</p>
               <p>About us</p>
               <p>Testimonial</p>
               </div>
            </div>
            <div className='w-52'>
               <h1 className='text-2xl'>Resources</h1>
               <div className='space-y-4 pt-5'>
               <p>Support</p>
               <p>Privacy Policy</p>
               <p>Terms & Conditions</p>
               </div>
            </div>

            <div className='w-1/4 space-y-8'>
               <h1 className='text-2xl'>Subscribe</h1>
            <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
           <img src={emailicon} alt="" />
                <button className="bg-[#003BA4] ml-52 text-white border-none rounded-lg flex items-center h-7 p-6">
                <span className='p-5'>Send</span>
                </button>
           </div>
          <input  class="block p-5 w-96 ps-10 bg-[#19202d] rounded-lg" placeholder="  name@domain.com"/>
       </div>
           </div>
          </div>
            </div>
    
  )
}

export default Footer