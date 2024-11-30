import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarouselContainer = styled.div`
  .slick-slide {
    text-align: center;
  }
  .slick-prev, .slick-next {
    color: #F9ED32;
  }
  .slick-prev {
    left: 10px;
  }
  .slick-next {
    right: 10px;
  }
`;

const HeroCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>
        <div>
          <h2>Experience the Future of Mobility</h2>
          <p>Rhyno EV offers cutting-edge technology and design for a superior ride experience.</p>
        </div>
        <div>
          <h2>Innovative Battery Technology</h2>
          <p>Our LFP batteries ensure safety and longevity, making your ride reliable and worry-free.</p>
        </div>
        <div>
          <h2>Stylish and Robust Design</h2>
          <p>Engineered for both performance and aesthetics, Rhyno EV stands out on the road.</p>
        </div>
      </Slider>
    </CarouselContainer>
  );
};

export default HeroCarousel;
