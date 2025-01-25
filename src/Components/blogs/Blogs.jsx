import React from "react";
import blog from "../../assets/images/pricing.jpg";
import Banner from "../banner/Banner";
import RecentCard from "../Recent_Property_Listed/RecentCard";
function blogs() {
  return (
    <section className="blogs">
      <Banner img={blog} desc="Blog" head="Blog Grid - Our Blogs" />
      <div className="container recent mb-5">
        <RecentCard />
      </div>
    </section>
  );
}

export default blogs;
