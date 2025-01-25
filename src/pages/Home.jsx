import React from "react";
import HeroSection from "../Components/heroSection/HeroSection";
import Featured from "../Components/featured/Featured";
import Recent from "../Components/Recent_Property_Listed/Recent";
import Awards from "../Components/awards/Awards";
import Location from "../Components/location/Location";
import Package from "../Components/packageSection/Package";
import Price from "../Components/price/Price";
import FooterContact from "../Components/common/footer-contact/FooterContact";

function Home() {
  return (
    <>
      <HeroSection />
      <Featured />
      <Recent />
      <Awards />
      <Location />
      <Package />
      <Price />
     
    </>
  );
}

export default Home;
