import React from 'react'
import './FooterContact.css'
function FooterContact() {
  return (
    <section className='footer-contact  p-5'>
      <div className='container'>
        <div className="row m-0">
            <div className='col-12 col-lg-8 mt-3 text-lg-start text-center'>
                <h3 className='fw-bold fs-2 fs-sm-1'>Do You Have Questions ?</h3>
                <p>We'll help you to grow your career and growth.</p>
            </div>
            <div className='col-12 col-lg-4 mt-3 '>
                <button className='btn-contact fw-medium px-3 py-2  w-100 px-sm-5 py-sm-3 bg-white  rounded-5'>Contact Us Today</button>
            </div>
        </div>
      </div>
    </section>
  )
}

export default FooterContact
