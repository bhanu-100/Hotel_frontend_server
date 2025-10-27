import React from "react";
import Hero from "../../components/Hero/Hero";
import NearbyCities from "../../components/NearbyCities/NearbyCities";
import Features from "../../components/Features/Features";
import Offers from "../../components/Offers/Offers";
import Gallery from "../../components/Gallery/Gallery";
import Testimonials from "../../components/Testimonials/Testimonials";
import Blogs from "../../components/Blogs/Blogs";
import Newsletter from "../../components/Newsletter/Newsletter";

const Home = () => {
  return (
    <div className="flex flex-col items-center overflow-x-hidden bg-gray-50">
      <Hero />
      <NearbyCities />
      <Features />
      <Offers />
      <Gallery />
      <Testimonials />
      <Blogs />
      <Newsletter />
    </div>
  );
};

export default Home;
