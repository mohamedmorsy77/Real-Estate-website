import React from "react";
import SectionHead from "../SectionHead/SectionHead";
import "./Recent.css";
import RecentCard from "./RecentCard";
function Recent() {
  return (
    <section className="recent p-5">
      <div className="container">
        <div className="row text-center heading p-2">
          <SectionHead
            head="Recent Property Listed"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          />
        </div>
        <RecentCard />
      </div>
    </section>
  );
}

export default Recent;
