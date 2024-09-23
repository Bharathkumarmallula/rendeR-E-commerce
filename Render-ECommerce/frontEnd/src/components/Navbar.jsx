// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import {assets} from '../assets/frontend_assets/assets';
import { NavLink,Link} from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
    const {setShowSearch,getCartCount}=useContext(ShopContext);
    

const [visible,setVisible]=useState(false);

  return (
    <div className='flex item-center text-lg justify-between px-4 py-5 font-medium'>
     <Link to='/'><p className='jersey-10-regular text-6xl font-bold'>RendeR.</p></Link>
        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
    <NavLink to='/' className='flex flex-col items-center gap-1 text-lg sm:text-sm sm:pt-2'>
        <p>HOME</p>
        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
    </NavLink>
    <NavLink to='/collection' className='flex flex-col items-center gap-1 text-lg sm:text-sm sm:pt-2'>
        <p>COLLECTION</p>
        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
    </NavLink>
    <NavLink to='/about' className='flex flex-col items-center gap-1 text-lg sm:text-sm sm:pt-2'>
        <p>ABOUT</p>
        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
    </NavLink>
    <NavLink to='/contact' className='flex flex-col items-center gap-1 text-lg sm:text-sm sm:pt-2'>
        <p>CONTACT</p>
        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
    </NavLink>
   
        </ul>
        <div className='flex items-center gap-6'>
            <img onClick={()=>setShowSearch(true)} src={assets.search_icon} alt="" className='w-5 cursor-pointer' />
            <div className='group relative'>
             <Link to='/login'><img src={assets.profile_icon} alt="" className='w-5 cursor-pointer' /></Link>
                <div className=' group-hover:block hidden absolute dropdowm-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 py-4 px-4 bg-slate-100 text-gray-500 rounded'>
                       <p className='cursor-pointer hover:text-black'>My Profile</p>
                       <p className='cursor-pointer hover:text-black'>Orders</p>
                       <p className='cursor-pointer hover:text-black'>Logout</p>
                    </div>
                </div>
            </div>
            <Link to='/cart' className='relative'>
            <img src={assets.cart_icon} alt="" className='w-5 min-w-5' />
            <p className='absolute right-[-8px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
            </Link>
            <img src={assets.menu_icon} alt="" onClick={()=>setVisible(true)} className='cursor-pointer w-5 sm:hidden' />
        </div>
        {/* Sidebar menu for the small screens */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full':'w-0'}`}>
            <div className='flex flex-col text-gray-600'>
             <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 curosor-pointer'>
                <img src={assets.dropdown_icon} alt="" className='h-5 rotate-180 cursor-pointer'/>
              <p>Back</p>
                </div> 
                <NavLink className='py-2 pl-4 border' to='/' onClick={()=>setVisible(false)}>Home</NavLink>  
                <NavLink className='py-2 pl-4 border' to='/collection' onClick={()=>setVisible(false)}>Collection</NavLink>  
                <NavLink className='py-2 pl-4 border' to='/about' onClick={()=>setVisible(false)}>About</NavLink>  
                <NavLink className='py-2 pl-4 border' to='/contact' onClick={()=>setVisible(false)}>Contact</NavLink>  
            </div>

        </div>
    </div>
  )
}

export default Navbar