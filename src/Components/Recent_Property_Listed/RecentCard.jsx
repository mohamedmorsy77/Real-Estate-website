import React from "react";
import { list } from "../../Data/data";
function RecentCard() {
  return (
    <div className="row mt-5 m-0">
      {list.map(({ id, cover, name, location, category, price, type }) => (
        <a className="recent-card text-decoration-none col-12 col-md-6  col-lg-4  mt-4" key={id} >
          <div className="card border-0">
            <img src={cover} className="card-img-top" alt="recentImg" />
            <div class="card-body">
              <div className="category mt-2 d-flex align-items-center justify-content-between">
                <span
                  className={`rounded-2 px-3 py-1  fw-bold ${
                    category == "For Rent" ? "for-rent" : "for-sale"
                  }`}
                >
                  {category}
                </span>
                <i className="fa fa-heart"></i>
              </div>
              <p className="card-text mt-3 m-0">{name}</p>
              <p className="mb-4 location">
                <i className="fa fa-location-dot"></i>
                <span className="ms-2">{location}</span>
              </p>
              <div className="recent-buy ">
                <div className="price d-flex justify-content-between align-items-center">
                  <div >
                    <button className="btn btn-success">{price}</button>
                    <span className="ms-2">/sqft</span>
                  </div>
                  <p className="m-0">{type}</p>
                </div>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

export default RecentCard;
