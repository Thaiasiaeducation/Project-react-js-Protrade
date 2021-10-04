import React from "react";
import Nav from "./Homepage/Nav";
import Header from "./Homepage/Header";
import Popular from "./Homepage/Popular";
import Ratedlocations from "./Homepage/Ratedlocations";
import Customerssays from "./Homepage/Customerssays";
import Features from "./Homepage/Features";
import BlogNews from "./Homepage/BlogNews";
import Mobileapp from "./Homepage/Mobileapp";
import Footer from "./Homepage/Footer";

function Homepage() {
  return (
    <>
      <Nav />
      <Header />
      <Popular />
      <Ratedlocations />
      <Customerssays />
      <Features />
      <BlogNews />
      <Mobileapp />
      <Footer />
    </>
  );
}

export default Homepage;
