import React from "react";
import SectionHead from "../SectionHead/SectionHead";
import LocationCard from "./LocationCard";
import './Location.css'

function Location() {
  return (
    <section className="location p-5">
      <div className="container">
        <div className="row text-center heading p-2">
          <SectionHead
            head="Explore By Location"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          />
        </div>
        <LocationCard />
      </div>
    </section>
  );
}

export default Location;
