import React from "react";
import { Carousel } from "react-responsive-carousel";
import Product from "../../Components/Product/Product";
import LayOut from "../../Components/LayOut/LayOut";
import Category from "../../Components/Category/Category";
import CarouselEffect from "../../Components/Carousel/CarouselEffect";

function Landing() {
  return (
    <LayOut>
      <CarouselEffect/>
      <Category/>
      <Product />
    </LayOut> 
  );
}

export default Landing;
