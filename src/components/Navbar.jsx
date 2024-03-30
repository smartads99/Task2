import React from 'react';
import logo from '../assets/Logo.png'
import SearchIcon from '../assets/Icon_Search.png'
import PhoneIcon from '../assets/phone.png'

const NavBar = () => {
  return (
    <nav className="bg-[#000816] py-3">
      <div className="max-w-7xl mx-auto px-3 pt-3ś">
        <div className="flex justify-between">
        <img src={logo} alt="" />
          <div className="flex space-x-9 pt-3">
          
            <a href="#" className="text-white hover:text-gray-300">Services</a>
            <a href="#" className="text-white hover:text-gray-300">Porftfolio</a>
            <a href="#" className="text-white hover:text-gray-300">About us</a>
            <a href="#" className="text-white hover:text-gray-300">Testimonial</a>
            <img src={SearchIcon} alt=""   className="size-8"/>
          </div>
          
          <div className="flex">
          {/* <button className=" text-white border p-2 rounded items-center"> <img src={PhoneIcon} alt="" />Talk to us</button> */}
          <button className="text-white border rounded flex items-center px-2 space-x-4">

        <img src={PhoneIcon}  className="h-6 w-6" />
      <span className='p-3'>Talk to us</span>
           </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
