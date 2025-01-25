import React from "react";
import service from "../../assets/images/services.jpg";
import Banner from "../banner/Banner";

import FeaturedCard from "../featured/FeaturedCard";
import "./Services.css";

function Services() {
  return (
    <section className="services">
      <Banner img={service} desc="Services" head="Services -All Services" />
      <div className="container mb-5">
        <FeaturedCard />
      </div>
    </section>
  );
}

export default Services;
