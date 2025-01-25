import React from "react";
import { location } from "../../Data/data";
function LocationCard() {
  return (
    <div className="row mt-4 m-0">
      {location.map(({ id, name, Villas, Apartments, Offices, cover }) => (
        <div key={id} className="col-12 col-sm-6 col-lg-4 mt-4 rounded-2">
          <div className="location-details  position-relative rounded-2">
            <img className="img-fluid " src={cover} alt="city" />
            <div className="location-content position-absolute text-center w-100 h-100 px-3 py-4  d-flex justify-content-center align-items-center flex-column">
              <h5>{name}</h5>
              <ul className="d-flex align-items-center gap-3 list-unstyled">
                <li>{Villas}</li>
                <li>{Apartments}</li>
                <li>{Offices}</li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LocationCard;
