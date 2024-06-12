import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <Carousel />
      </div>
      <Footer />
    </div>
  );
}
