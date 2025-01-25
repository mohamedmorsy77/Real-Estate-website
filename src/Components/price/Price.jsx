import React from "react";
import SectionHead from "../SectionHead/SectionHead";
import PriceCard from "./PriceCard";
import './Price.css'

function Price() {
  return (
    <section className="price p-5">
      <div className="container">
        <div className="row text-center heading p-2">
          <SectionHead
            head="Select Your Package"
            desc="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores"
          />
        </div>
        <PriceCard />
      </div>
    </section>
  );
}

export default Price;
