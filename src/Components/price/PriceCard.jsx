import React from "react";
import { price } from "../../Data/data";
function PriceCard() {
  return <div className="row price-card mt-5">
  {
    price.map((val, index) => (
        <div key={index + 1} className="col-12 col-md-6 col-lg-4 mt-5">
            <div className="price-details p-4 text-center">
                <button className="btn best m-auto mb-2 fw-bold rounded-5" style={{display: val.best ? "block": "none"}}>{val.best}</button>
                <h3 className="fw-bold">{val.plan}</h3>
                <h4 className="fw-bold mt-3 fs-1"><sub>$</sub>{val.price}</h4>
                <p className="mt-3">{val.ptext}</p>

                <ul className="list-unstyled mt-5 ">
                    {
                        val.list.map(({change,icon,text}, index) => {
                            return <li key={index + 1} className="d-flex mt-4 align-items-center gap-4">
                                <span className={`package-existing d-flex align-items-center justify-content-center rounded-circle ${change? "change-color": "not-change"}`}>{icon}</span>
                                <p className="m-0">{text}</p>
                            </li>
                        })
                    }
                </ul>

                <button className={`p-3 rounded-5 w-100 mt-4 ${val.plan === "Basic" || val.plan === "Platinum" ? "Basic-or-Platinum" : "standard"}`}>Start {val.plan}</button>
            </div>
        </div>
    ))
  }
  </div>;
}

export default PriceCard;
