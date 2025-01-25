import React from "react";
import contact from '../../assets/images/pricing.jpg'
import Banner from "../banner/Banner";
import ContactCard from "./ContactCard";


function ContactUs() {
  return (
    <section className="contact-us">
      <Banner
        img={contact}
        desc="Contact Us"
        head="Get Helps & Friendly Support"
      />
      <div className="container p-5"> 
        <ContactCard />
      </div>
    </section>
  );
}

export default ContactUs;
