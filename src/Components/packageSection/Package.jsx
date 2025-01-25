import React from "react";
import "./Package.css";
import SectionHead from "../SectionHead/SectionHead";
import PackageCard from "./PackageCard";
function Package() {
  return (
    <section className="package p-5">
      <div className="container">
        <div className="row text-center heading p-2">
          <SectionHead
            head="Select Your Package"
            desc="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores"
          />
        </div>

        <PackageCard />
      </div>
    </section>
  );
}

export default Package;
