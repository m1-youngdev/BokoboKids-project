import React from 'react';
import Logo from "../assets/bokoboLogo.png";
import { FiMenu } from "react-icons/fi";


function Navbar() {
  return (
    <>
        <nav className='navBar w-screen flex justify-between px-[40px] py-[10px] items-center align-middle shadow-sm fixed bg-white'>
            {/* <h1 className='text-[30px] font-bold '>BOKOBO KIDS</h1> */}
            <img src={Logo} alt='logoImg' className='logo w-[100px] h-[70px] '/>
            <div className='links flex items-center align-middle gap-[30px]'>
                <a href='#' className='link text-[15px] font-semibold'>HOME</a>
                <a href='#' className='link text-[15px] font-semibold'>STORYQUEST</a>
                <a href='#' className='link text-[15px] font-semibold'>LIBRARY</a>
                <a href='#' className='link text-[15px] font-semibold'>BOKOBO KIDS VILLAGE</a>
                <a href='#' className='link text-[15px] font-semibold'>GAMES</a>
                <a href='#' className='link text-[15px] font-semibold'>ABOUT US</a>
                <a href='#' className='link text-[15px] font-semibold'>CONTACTS</a>
                <button className='btn w-[100px] h-[40px] text-[15px] font-semibold bg-gradient-to-br from-blue-300 to-pink-300 rounded-lg'>Sign Up</button>
            </div>
            <div> <FiMenu className='text-[20px]'/></div>
        </nav>
    </>
  )
}

export default Navbar