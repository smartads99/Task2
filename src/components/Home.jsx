import React from 'react'
import PhoneIcon from '../assets/phone.png'
import Workimg from '../assets/Rectangle-2.png'
import tplogo1 from '../assets/Google.png'
import tplogo2 from '../assets/Canva.png'
import tplogo3 from '../assets/Amazon.png'
import tplogo4 from '../assets/Sketch.png'
import ourser1 from '../assets/PaintBrush.png'
import ourser2 from '../assets/GlobeHemisphereWest.png'
import ourser3 from '../assets/DeviceMobile.png'
import ourser4 from '../assets/CreditCard.png'
import viewd from '../assets/viewD.png'
import arrowR from '../assets/ArrowRight.png'
import frameimg from '../assets/Frame1.png'
import frameimg1 from '../assets/Frame2.png'
import Eye from '../assets/Eye.png'
import targetimg from '../assets/Target.png'
import quotes from '../assets/Quotes.png'
import dp1 from '../assets/dp1.png'
import dp2 from '../assets/dp2.png'
import dpS from '../assets/dpS.png'
import dps1 from '../assets/dps1.png'
import blogimg1 from '../assets/blogimg1.png'
import blogimg2 from '../assets/blogimg2.png'
import blogimg3 from '../assets/blogimg3.png'
import userimg from '../assets/User.png'
import calendar from '../assets/CalendarBlank.png'

function Home() {
    return (
    <div>
        <div className='bg-[#000816] text-white relative'>
        <div className='space-y-10 p-40 w-8/12'>
        <div className='text-7xl'>#1 Worldwide Digital Solution Agency</div>
        <p className='text-xl tracking-wide'>
        Revolutionize your global digital strategy with the #1 Worldwide Digital Solution Agency, pioneering innovative solutions for unparalleled success.
        </p>
        <button className="bg-[#003BA4]  text-white border-none rounded-lg flex items-center px-2 space-x-4 h-7 p-7">
        <img src={PhoneIcon}  className="h-6 w-6" />
        <span className='p-3'>Book a call</span>
        </button>   
      
          <div className='absolute inset-y-0 right-0 mr-16'>
          <img src={Workimg} alt="" />  
          </div>
          <div className="flex flex-row pt-5 text-center text-[#a0a2a6]">
               <div className='bg-[#1a202d] p-3 mr-6 rounded border-y-2'>
                <h1 className='text-3xl text-white font-semibold'>75k+</h1>
                <p>Project Completed</p>
               </div>
               <div className='bg-[#1a202d] p-3 mr-6 rounded border-y-2'>
                <h1 className='text-3xl text-white font-semibold'>20+</h1>
                <p>Years of Experience</p>
               </div>
               <div className='bg-[#1a202d] p-3 mr-6 rounded border-y-2'>
                <h1 className='text-3xl text-white font-semibold'>400+</h1>
                <p>Clients Worldwide</p>
               </div>
          </div>
        </div>
     </div>

    
     <div className='bg-[#003BA4] h-36 p-12 flex'>
   <div className='ml-20'>
       <h2 className='text-[#b2c4e4] text-2xl'>Trusted by</h2>
       <h1 className='text-4xl text-white'>Top Companies</h1>
   </div>
   <div className='flex gap-x-4 h-16 ml-56'>
    <img src={tplogo1} alt="" />
    <img src={tplogo2} alt="" />
    <img src={tplogo3} alt="" />
    <img src={tplogo4} alt="" />
   </div>
     </div>

     <div className='text-center pt-16 space-y-3'>
         <h1 className='text-2xl opacity-70'>Our services</h1>
         <h2 className='text-4xl font-bold'>Growth based services</h2>
     </div>
     
      <div class="flex flex-row pt-20 pl-24">
      <div class="size-40 bg-[#F0F5FF] h-96 w-80 p-8 text-center space-y-5 pt-16">
         <img className='ml-20' src={ourser1} alt="" />
         <h1 className='text-2xl font-bold '>Branding and UI/UX</h1>
         <h2 className='text-base'>Lorem ipsum dolor sit amet consectetur. Quam diam augue lectus vivamus metus</h2>
         <h2>View details <img  className='inline-flex ml-1' src={viewd} alt="" /></h2>
      </div>
      <div class="size-40 bg-white h-96 w-80 p-8 text-center space-y-5 pt-16">
         <img className='ml-20' src={ourser2} alt="" />
         <h1 className='text-2xl font-bold '>Web Development</h1>
         <h2 className='text-base'>Lorem ipsum dolor sit amet consectetur. Quam diam augue lectus vivamus metus</h2>
         <h2>View details <img  className='inline-flex ml-1' src={viewd} alt="" /></h2>
      </div>
      <div class="size-40 bg-[#F0F5FF] h-96 w-80 p-8 text-center space-y-5 pt-16">
         <img className='ml-20' src={ourser3} alt="" />
         <h1 className='text-2xl font-bold '>Mobile Development</h1>
         <h2 className='text-base'>Lorem ipsum dolor sit amet consectetur. Quam diam augue lectus vivamus metus</h2>
         <h2>View details <img  className='inline-flex ml-1' src={viewd} alt="" /></h2>
      </div>
      <div class="size-40 bg-white h-96 w-80 p-8 text-center space-y-5 pt-16">
         <img className='ml-20' src={ourser4} alt="" />
         <h1 className='text-2xl font-bold '>Digital Marketing</h1>
         <h2 className='text-base'>Lorem ipsum dolor sit amet consectetur. Quam diam augue lectus vivamus metus</h2>
         <h2>View details <img  className='inline-flex ml-1' src={viewd} alt="" /></h2>
      </div>
      
      
      </div>

      <div className='bg-[#000816] text-white mt-14'>
      <div className='text-center pt-16 space-y-3'>
         <h1 className='text-2xl opacity-70'>Portfolio</h1>
         <h2 className='text-4xl font-bold'>Our previous works</h2>
     </div>
     <img  className='p-24'src={frameimg} alt="" />

    <div className='flex justify-center items-center pb-6'>
    <button className="bg-[#003BA4] text-white border-none rounded-lg flex justify-center items-center space-x-4 h-7 p-7">
        <span className='p-4'>View more</span>
        <img src={arrowR} className="h-6 w-6"/>
        </button>  
    </div>
      </div>


   <div>
         <div className='text-center pt-16 space-y-3'>
                  <h1 className='text-2xl opacity-70'>About us</h1>
                  <h2 className='text-4xl font-bold'>Why we are best</h2>
         </div>

         <div className='flex px-24 pt-5'>
            <div  className='p-10'>
            <img src={frameimg1} alt="" />
            </div>

            <div className='w-3/6 p-8 pt-10 space-y-6'>
               <p>Lorem ipsum dolor sit amet consectetur. Scelerisque urna
                  vel sit dolor fringilla volutpat lectus amet. Integer sed
                  pretium odio lectus at malesuada sed eget nunc. Viverra 
                  malesuada viverra id vel tortor dui adipiscing. Bibendum
                  cras fringilla amet suspendisse. Duis mattis hac urna fames in ante.</p>
            <div className='flex pt-9'>
               <img src={Eye} alt="" />
                  <div className='space-y-2 pl-5'>
                     <h1 className='text-2xl font-bold'>Our Vision</h1>
                     <h1>Lorem ipsum dolor sit amet consectetur. Ut elementum ac eget at. Id et at dui arcu risus.</h1>
               </div>
            </div>
            <div className='flex'>
               <img src={targetimg} alt="" />
                  <div className='space-y-2 pl-5'>
                     <h1 className='text-2xl font-bold'>Our Mission</h1>
                     <h1>Lorem ipsum dolor sit amet consectetur. Quam arcu habitasse fusce pharetra.</h1>
               </div>
            </div>  
            <div className='pt-10'>
            <button className="bg-[#003BA4] text-white border-none rounded-lg flex  items-center space-x-4 h-7 p-7">
         <span className='p-4'>Read more</span>
         <img src={arrowR} className="h-6 w-6"/>
         </button>  
            </div>     
            </div>

         
         </div>
   </div>
       
      <div className='bg-[#F0F5FF]'>
               <div className='text-center pt-16 space-y-3'>
                  <h1 className='text-2xl opacity-70'>Testimonial</h1>
                  <h2 className='text-4xl font-bold'>What our clients say</h2>
               </div>

            <div className='flex space-x-6 p-20'>
               <div className='bg-white w-2/3 rounded-2xl shadow-lg p-4'>
                     <div className='text-center space-y-3'>
                     <div className='flex pt-9 justify-center items-center '>
                        <img src={quotes} alt="" />
                     </div>
                     <p>Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor 
                        fringilla volutpat lectus amet. Integer sed pretium odio lectus at malesuada
                         sed eget nunc. Viverra malesuada viverra id vel tortor dui adipiscing.</p>
                     <div className='flex pt-9 justify-center items-center pb-3'>
                        <img src={dp1} alt="" />
                        <div className='space-y-2 pl-5'>
                        <h1 className='text-2xl font-bold'>Michael Wong</h1>
                        <img src={dpS} alt="" />
                        </div>
                     </div>
                     </div>
               </div>
               <div className='bg-white w-2/3 rounded-2xl shadow-lg p-4'>
                     <div className='text-center space-y-3'>
                     <div className='flex pt-9 justify-center items-center '>
                        <img src={quotes} alt="" />
                     </div>
                     <p>Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor 
                        fringilla volutpat lectus amet. Integer sed pretium odio lectus at malesuada
                         sed eget nunc. Viverra malesuada viverra id vel tortor dui adipiscing.</p>
                     <div className='flex pt-9 justify-center items-center pb-3'>
                        <img src={dp2} alt="" />
                        <div className='space-y-2 pl-5'>
                        <h1 className='text-2xl font-bold'>Avril Song</h1>
                        <img src={dps1} alt="" />
                        </div>
                     </div>
                     </div>
               </div>
            </div>

      </div>

         <div>
               <div className='text-center pt-16 space-y-2'>
                 <h1 className='text-2xl opacity-70'>Blog</h1>
                 <h2 className='text-4xl font-bold'>Browse articles</h2>
               </div>

               <div className='flex px-24 space-x-6 pt-10'>
                     <div className='w-1/3'>
                        <img src={blogimg1} alt="" />
                        <div className='flex space-x-36'>
                        <div className='flex p-2'>
                           <img className='pr-1'src={userimg} alt="" />
                           <h1>John Doe</h1>
                           </div>
                           <div className='flex p-2'>
                           <img className='pr-1' src={calendar} alt="" />
                           <h1>Feb 23, 2024</h1>
                           </div>
                        </div>
                        <h1 className='text-2xl p-5'>Lorem ipsum dolor sit amet consectetur.</h1>
                        <h2 className='text-[#003BA4] text-center'>View details <img  className='inline-flex ml-1' src={viewd} alt="" /></h2>
                     </div>

                     <div className='w-1/3'>
                        <img src={blogimg2} alt="" />
                        <div className='flex space-x-36'>
                        <div className='flex p-2'>
                           <img className='pr-1'src={userimg} alt="" />
                           <h1>John Doe</h1>
                           </div>
                           <div className='flex p-2'>
                           <img className='pr-1' src={calendar} alt="" />
                           <h1>Feb 23, 2024</h1>
                           </div>
                        </div>
                        <h1 className='text-2xl p-5'>Lorem ipsum dolor sit amet consectetur.</h1>
                        <h2 className='text-[#003BA4] text-center'>View details <img  className='inline-flex ml-1' src={viewd} alt="" /></h2>
                     </div>

                     <div className='w-1/3'>
                        <img src={blogimg3} alt="" />
                        <div className='flex space-x-36'>
                        <div className='flex p-2'>
                           <img className='pr-1'src={userimg} alt="" />
                           <h1>John Doe</h1>
                           </div>
                           <div className='flex p-2'>
                           <img className='pr-1' src={calendar} alt="" />
                           <h1>Feb 23, 2024</h1>
                           </div>
                        </div>
                        <h1 className='text-2xl p-5'>Lorem ipsum dolor sit amet consectetur.</h1>
                        <h2 className='text-[#003BA4] text-center'>View details <img  className='inline-flex ml-1' src={viewd} alt="" /></h2>
                     </div>
                     
               </div>
               <div className='flex justify-center items-center pt-16'>
               <button className="bg-[#003BA4] text-white border-none rounded-lg flex justify-center items-center space-x-4 h-7 p-7">
               <span className='p-4'>Read more</span>
               <img src={arrowR} className="h-6 w-6"/>
               </button>  
    </div>
         </div>

         <div>
            
         </div>
    </div>
    );
  }
  
  export default Home;
  