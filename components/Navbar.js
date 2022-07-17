import React from 'react';
import Image from 'next/image';
import titleice from "../public/titleicebox.jpeg"
import {
  HomeIcon,
  ShoppingCartIcon,
  
} from "@heroicons/react/outline"
import {
  UserGroupIcon,
} from "@heroicons/react/solid"

function Navbar() {
  return (
    <section className='top-0 z-40 bg-[#D8C3A5] h-screen max-w-[3cm]  items-center space-y-4'>
        <Image
                    src={titleice} alt='icebox'
                    
                    objectFit='contain'
                    height={50}
                    width={50}
                    className=" mt-2 p-2 rounded-full ml-4"
                    />
        <div className='items-center ml-2 space-y-8'>
          <div className='flex items-center space-x-1'>
          <HomeIcon className='icon' />
          <h3 className='text-lg font-semibold mt-2'>Home</h3>
          </div>
            
            <ShoppingCartIcon className='icon'/>
            <UserGroupIcon className='icon'/>
        </div>
    </section>
  )
}

export default Navbar