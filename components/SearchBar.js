import React from 'react';
import {
  SearchIcon
} from "@heroicons/react/outline"

function SearchBar() {
  return (
    <div className='max-w-screen-md' >
        <div className='flex items-center mt-4  rounded-full  ' >
            <SearchIcon className='h-6 w-6'/>
            <input type="text" placeholder='Search for product mr-5'
            className='text-[#8E8D8A] h-10 flex-grow rounded-full pl-2 bg-[#EAE7DC] border-none '
            />
           
        </div>
    </div>
  )
}

export default SearchBar