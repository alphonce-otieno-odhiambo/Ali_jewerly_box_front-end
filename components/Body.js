import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import gold from "../public/img/gold-watch.JPG";
import icetwo from "../public/img/ice-two-w.JPG";
import icecross from "../public/img/icecross.jpg"
import slimw from "../public/img/iced-slim-watch.JPG"
import teeth from "../public/img/icedteeth.jpg"
import Info from './Info';
// import icevideo from "../public/assets/icebox.mp4"




function Body() {
  return (
    <section className='ml-20 h-3/4 pt-5 mr-20 relative bg-gradient-to-br from-[#EAE7DC] to-[#E98074] overflow-hidden'>
       {/* Avatars scrolling arround showing images */}
      <div className='absolute bg-gradient-to-br  h-full rounded-full bg-white/30 blur-2xl circle-left '> </div>
      <div className='absolute bg-gradient-to-br  h-full rounded-full bg-white/30 blur-2xl circle-right '> </div>
      <div className='absolute w-96 h-96  backdrop-blur-sm bg-[#8E8D8A]/30 rounded-full z-9 top-1/2 right-1/2  '> </div>
      <div className='absolute w-72 h-72  backdrop-blur-sm bg-[#8E8D8A]/30 rounded-full z-9 bottom-1/2 left-1/2  '> </div>
      <div className='absolute w-16 h-16  backdrop-blur-sm bg-[#8E8D8A]/30 rounded-full z-9 inset-y-2/4 inset-x-3/4 '> </div>
      <div className='absolute top-0 h-screen w-full backdrop-blur-smbg-gradient-to-br  from-[#EAE7DC]/30 to-[#D8C3A5]/40  '> </div>

      <div className='ml-2 flex items-center scroll-bar scroll-bar-hide '>
        <motion.div
         initial="hidden" animate="visible" variants={{
           hidden:{
             scale:.8,
             opacity:0,
           },
           visible:{
             scale:1,
             opacity:1,
             transition:{
               delay:.8,
             }
           }
         }}
        >
        <Image 
        src={gold}
        height={200}
        width={200}
        className="images"
        />
        </motion.div>
      
      </div>
      <div className='pl-20 mt-8'>
        <Info/>
      </div>
    </section>
  )
}

export default Body