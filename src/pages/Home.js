import React from "react";
import Customerssays from "../Component/Customerssays/Customerssays";
import Homepage from "../Component/index";
import Popular from "../Component/Popular/Popular";
import Ratedlocations from "../Component/Ratelocations/Ratedlocations";
import BlogNews from "../Component/BlogNews/BlogNews";
import Header from "../Component/Hero/Header";
import Mobaileapp from "../Component/Mobileapp/Mobileapp";
import Categories from "../Component/Categories/Categories";
import OurNewsletter from "../Component/Ournewsletter/OurNewsletter";
function Home() {
  return (
    <div>
      <Header />
      <Categories />
      <Popular />
      <Customerssays />
      <Ratedlocations />
      <BlogNews />
      <Mobaileapp />
      <OurNewsletter />
    </div>
  );
}

export default Home;
