import React from "react";
import Header from "../shared/header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../shared/footer/Footer";
import FooterContact from "../Components/common/footer-contact/FooterContact";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
       <FooterContact />
      <Footer />
    </>
  );
}

export default Layout;
