import React from 'react';
import {motion, Variant}  from "framer-motion";
import Image from 'next/image';
import icetwo from "../public/img/ice-two-w.JPG";
function Info() {

    const imageAnim = {
        intitial:{x:-100},
        animate:{
            x:0,
            rotate:[0,45,90,90,45,0],
            transition: {
                type:"spring",
                bounce:0.4,
                duration:4}
        }
    }
    const titleAnim = {
        intitial:{y:100},
        animate:{
            y:0,
            
            transition: {
                type:"spring",
                bounce:0.4,
                duration:2}
        }
    }

  return (
    <div>
        <motion.div className='card'
            intitial={"intitial"}
            animate={"animate"}
            transition={{staggerChildren:0.5}}
        >
           <motion.div
         
            variants={imageAnim}
           >
            <Image 
            src={icetwo}
            height={200}
            width={300}
            className="w-full"
            />
           
           </motion.div>
            
            <motion.div className='p-5 '
            intitial={"intitial"}
            animate={"animate"}
            variants={titleAnim}
            >
                <span className="text-2xl bg-[#D8C3A5] rounded-full p-2"
                 
                >QUALITY PRODUCTS</span>
            </motion.div>
            <span><h5 className='text-lg items-center font-semibold ml-1'>Its a two set package that come full reloaded at a fair price</h5> </span>
        </motion.div>
    </div>
  )
}

export default Info