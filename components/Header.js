import React from 'react';
import Image from 'next/image';
import titleice from "../public/titleicebox.jpeg"
import SearchBar from './SearchBar';

function Header() {
  return (
    <section className=' sticky top-0 z-50 grid grid-cols-3  shadow-sm ' >
      {/* left */}
      <div className='ml-40 p-4 mt-2 flex items-center space-x-2 cursor-pointer'>
          <Image
              src={titleice} alt='icebox'
              objectFit=''
              height={50}
              width={50}
              className="rounded-full h-10 w-10 "
              />
               <h2 className='font font-semibold text-[#E98074] text-2xl '><span className='text-5xl'>H</span>ome</h2>      
      </div>
      <div></div>
      <div className='mr-20 mt-2 p-2 pt-2'>
        <SearchBar />
      </div>
       
        
        
    </section>
  )
}

export default Header;