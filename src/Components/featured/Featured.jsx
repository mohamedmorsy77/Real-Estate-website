import React from "react";
import { featured } from "../../Data/data";
import "../../App.css";
import "./Featured.css";
import SectionHead from "../SectionHead/SectionHead";
import FeaturedCard from "./FeaturedCard";
function Featured() {
  return (
    <section className="featured py-5">
      <div className="container">
        <div className="row text-center heading p-2">
         <SectionHead head="Featured Property Types"  desc="Find All Type of Property."/> 
        </div>
        <FeaturedCard />
      </div>
    </section>
  );
}

export default Featured;
