import React from "react";
import price from "../../assets/images/pricing.jpg";
import Banner from "../banner/Banner";
import PriceCard from "./PriceCard";

function Pricing() {
  return (
    <section className="price">
      <Banner
        img={price}
        desc="30 days money back guarantee"
        head="No Extra Fees. Friendly Support"
      />
      <div className="container mb-5 ">
        <PriceCard />
      </div>
    </section>
  );
}

export default Pricing;
