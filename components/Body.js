import React from 'react';
// import icevideo from "../public/assets/icebox.mp4"


function Body() {
  return (
    <section className=''>
       {/* Avatars scrolling arround showing images */}
      <div>
       
        {/* burna video at the background */}
        <video 
          src={"../public/assets/icebox.mp4"}
          autoPlay
          loop
          muted
          height='100px'
          width='200px'
        />
       
      </div>
    </section>
  )
}

export default Body