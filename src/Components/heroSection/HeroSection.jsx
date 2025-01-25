import React from "react";
import "./HeroSection.css";
function HeroSection() {
  return (
    <section className="hero d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="hero-info text-center">
          <h2 className="text-white   fw-bold">Search Your Next Home</h2>
          <p className="mt-2 fw-medium">
            Find new & featured property located in your local city.
          </p>
        </div>

        <form
          action=""
          className=" d-flex align-items-center flex-lg-row flex-column  hero-form mt-5   rounded-2   px-3  m-0"
        >
          <div className="box w-100 w-lg-auto  mx-2 d-flex flex-column gap-2  px-2 py-2">
            <label>City/Street</label>
            <input className="px-2 py-2 w-100" type="text" placeholder="Location" />
          </div>
          <div className="box w-100 w-lg-auto mx-3 d-flex flex-column gap-2  px-2 py-2">
            <label>property type</label>
            <input
              className="px-2 py-2 w-100"
              type="text"
              placeholder="property type"
            />
          </div>

          <div className="box w-100 w-lg-auto  mx-3 d-flex flex-column gap-2  px-2 py-3">
            <label>Price Range</label>
            <input
              className="px-2 py-2 w-100"
              type="text"
              placeholder="Price Range"
            />
          </div>

          <div className="box w-100 w-lg-auto mx-3 px-2 py-2">
            <h4>Advance Filter</h4>
          </div>

          <div className="box w-100 w-lg-auto  mx-3  px-2 py-2">
            <button aria-label="Search" className="btn d-block mx-3 btn-success px-4 py-3 text-center ">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default HeroSection;
