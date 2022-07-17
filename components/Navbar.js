import React from 'react';
import Image from 'next/image';
import titleice from "../public/titleicebox.jpeg"

function Navbar() {
  return (
    <section className='bg-[#D8C3A5] h-screen max-w-[5cm] fixed top-0 '>
        <Image
                    src={titleice} alt='icebox'
                    
                    objectFit='contain'
                    height={100}
                    width={200}
                    className="rounded-2xl mt-2 p-5"
                    />
        <div>
            
        </div>
    </section>
  )
}

export default Navbar