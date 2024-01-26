import React from 'react'
import blogpng from "../assets/blogpng.png"
function Logo({width='100px'}) {
  return (
    <div className='w-12 p-1 '><img src={blogpng} alt="img" /></div>
    
  )
}

export default Logo