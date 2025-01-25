import React from "react";
import about from "../../assets/images/about.jpg";
import about_image from '../../assets/images/immio.jpg'
import Banner from "../banner/Banner";

import "./About.css";
function About() {
  return (
    <section className="about">
      <Banner img={about} desc="About Us" head="About Us - Who We Are?" />
      <div className="container py-5">
        <div className="row mt-4">
          <div className="col-12 col-lg-6 px-4 mt-5">
            <div className="heading">
              <h2 className="fw-bold fs-1">Our Agency Story</h2>
              <p>Check out our company story and work process</p>
            </div>

            <p className="mt-4 lh-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <p className="mt-4 lh-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <button className="mt-4 btn btn-success rounded-5 px-5 py-3 fs-4">More About Us</button>
          </div>
          <div className="col-12 col-lg-6 mt-5">
            <img className="img-fluid" src={about_image} alt="about_image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
