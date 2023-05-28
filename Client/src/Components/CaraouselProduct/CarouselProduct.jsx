import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CarouselWrapper = ({ items, options,responsiveOptions }) => {
  const responsive = responsiveOptions && responsiveOptions
  return (
    <div>
      <Carousel
        swipeable={true}
        showDots={true}
        renderDotsOutside={true}
        arrows={true}
        itemClass="carousel-item-padding-40-px"
        infinite={true}
        responsive={responsive}
      >
        {items}
      </Carousel>
    </div>
  );
};

export default CarouselWrapper;
