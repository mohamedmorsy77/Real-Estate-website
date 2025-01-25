import React from "react";
import { team } from "../../Data/data";
function PackageCard() {
  return (
    <div className="row mt-3">
      {team.map(({ list, cover, address, name, icons }, index) => (
        <div key={index + 1} className="col-12 col-sm-6 col-lg-4 mt-4">
          <div className="package-details p-4">
            <button className="btn btn-list text-white fw-bold rounded-5 px-3">{list} Listings</button>
            <div className="package-content text-center">
              <div className="image mb-4 mt-5 m-auto position-relative z-2">
                <img className="w-100 h-100  rounded-circle " src={cover} alt="team" />
                <i className="fa-solid fa-circle-check position-absolute z-1 "></i>
              </div>
              <i className="fa fa-location-dot"></i>
              <span className="ms-2">{address}</span>
              <h6 className="mt-3">{name}</h6>

              <ul className="list-unstyled mt-3 d-flex justify-content-center align-items-center gap-2">
                {icons.map((icon,index) => (
                  <li key={index + 1} className="d-flex align-items-center justify-content-center rounded-circle">
                    <a aria-label="go to social media" className="text-decoration-none fw-bold" href="#">{icon}</a>
                  </li>
                ))}
              </ul>

              <div className="message-call mt-4 d-flex justify-content-between align-items-center">
                <button className="btn btn-success fw-bold">message</button>
                <button className="btn btn-dark fw-bold">call</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PackageCard;
