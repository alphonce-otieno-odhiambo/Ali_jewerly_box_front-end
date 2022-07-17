import React from 'react';
import {
  SearchIcon
} from "@heroicons/react/outline"

function SearchBar() {
  return (
    <div className='max-w-screen-md' >
        <div className='flex items-center mt-4  rounded-full  ' >
            <SearchIcon className='h-6 w-6 rounded-full text-[#E98074]'/>
            <input type="text" placeholder='Search for product'
            className='text-[#E85A4F] h-10 flex-grow rounded-full pl-6  
            bg-transparent outline-none text-lg font-mono '
            />
           
        </div>
    </div>
  )
}

export default SearchBar