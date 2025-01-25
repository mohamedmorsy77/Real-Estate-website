import React from "react";
import { awards } from "../../Data/data";
import "./Awards.css";

function Awards() {
  return (
    <section className="awards p-5">
      <div className="container">
        <div className="row text-center  p-4 ">
          <div className="col-12 d-flex flex-column-reverse awards-heading">
            <h3 className="fw-bold">
              Over 1,24,000+ Happy User Bieng With Us Still They Love Our
              Services
            </h3>
            <p>Our Awards</p>
          </div>
        </div>
        <div className="row mt-5">
          {awards.map(({ icon, num, name }, index) => (
            <div key={index + 1} className="col-12 col-sm-6 col-lg-4 col-xl-3 p-0 mt-3">
              <div className="awards-box text-center">
                <div className="icon mb-3 p-5 fs-2 fw-bold">{icon}</div>
                <h3 className="fs-1 fw-bold">{num}</h3>
                <p>{name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Awards;
