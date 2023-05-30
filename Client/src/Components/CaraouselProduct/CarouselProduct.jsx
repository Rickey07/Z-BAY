import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CarouselWrapper = ({ items, options,responsiveOptions,showDots,itemClass,autoPlay,showArrows }) => {
  const responsive = responsiveOptions && responsiveOptions
  return (
    <div>
      <Carousel
        swipeable={false}
        showDots={showDots}
        renderDotsOutside={true}
        arrows={showArrows}
        autoPlay={autoPlay}
        itemClass={itemClass}
        infinite={true}
        responsive={responsive}
        
      >
        {items}
      </Carousel>
    </div>
  );
};

export default CarouselWrapper;
