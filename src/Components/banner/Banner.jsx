import React from 'react'
import './Banner.css'
function Banner({img, desc, head}) {
  return (
    <section className='banner p-5 position-relative '>
    
       <div className='container position-relative z-2 py-5'>
          <span>{desc}</span>
          <h1 className='mt-2'>{head}</h1>
       </div>
       <img className='position-absolute h-100 w-100 object-fit-cover' src={img} alt='banner-image'/>
    </section>
  )
}

export default Banner
