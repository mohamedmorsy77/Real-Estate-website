import React from "react";
import { footer } from "../../Data/data";
import footer_logo from "../../assets/images/logo-light.png";
import "./footer.css";
function Footer() {
  return (
    <footer className="footer position-relative p-5">
      <div className="container">
        <div className="row m-0">
          <div className="col-12 col-sm-12 col-xl-6 mt-5">
            <div className="image">
              <img
                src={footer_logo}
                className="text-white w-100"
                alt="footer-logo"
              />
            </div>
            <h3 className="mt-3">Do You Need Help With Anything?</h3>
            <p>
              Receive updates, hot deals, tutorials, discounts sent straignt in
              your inbox every month
            </p>
            <div className="subscribe mt-4 d-flex flex-wrap ">
              <input
                type="email"
                placeholder="Email"
                className=" px-4 py-2 border-none "
              />
              <button className="btn-subscribe  px-4 py-2 ">subscribe</button>
            </div>
          </div>
          {footer.map(({ title, text }, index) => (
            <div key={index + 1} className=" col-12 col-sm-6 col-md-4 col-xl-2 mt-5 ">
              <h5>{title}</h5>
              <ul className="list-unstyled mt-4">
                {text.map(({ list }, index) => (
                  <li className="mt-3"  key={index + 1}>{list}</li>
                ))}
              </ul>
            </div>
          ))}
          <div className="col-2"></div>
          <div className="col-2"></div>
        </div>
      </div>
      <div className="legal mt-5 text-center py-4"><span>© 2021 RentUP. Designd By GorkCoder.</span></div>
    </footer>
  );
}

export default Footer;
