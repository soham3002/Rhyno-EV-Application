import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import BannerImage from '../assets/banner-1.jpg';
import USPImage1 from '../assets/LFP.jpeg';
import USPImage2 from '../assets/Tyres.jpeg';
import USPImage3 from '../assets/Range.png';
import ProductImage1 from '../assets/p1.jpeg';
import ProductImage2 from '../assets/p2.jpeg';
import ProductImage3 from '../assets/p3.jpeg';

// Import slick-carousel styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Container for the whole page
const HomeContainer = styled.div`
  text-align: center;
  background-color: #f2f2f2;
  position: relative;
  padding-bottom: 80px; /* Ensure enough space for the floating button */
`;

// Banner section
const Banner = styled.div`
  background-image: url(${BannerImage});
  background-size: cover;
  background-position: center;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  position: relative;
  overflow: hidden;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.3); /* Dark overlay for text readability */

  @media (max-width: 768px) {
    height: 50vh;
  }
`;

const BannerTextContainer = styled.div`
  position: relative;
  max-width: 80%;
  padding: 20px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
`;

const BannerText = styled.h1`
  margin: 0;
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.4;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

// USP container
const USPContainer = styled.div`
  padding: 40px 20px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

// Carousel styling
const Carousel = styled(Slider)`
  width: 100%;
  height: 90vh; /* Match the height of the banner */

  .slick-track {
    display: flex;
    height: 100%; /* Ensure slick-track takes up full height */
  }

  .slick-slide {
    padding: 0 10px;
    box-sizing: border-box;
  }

  .slick-slide > div {
    max-width: 100%;
    margin: 0 auto;
    height: 100%; /* Ensure slides take full height */
  }

  .slick-dots {
    bottom: 20px; /* Adjust dots positioning */
  }
  
  .slick-dots li {
    margin: 0 5px;
  }

  .slick-dots li button:before {
    font-size: 18px;
    color: #333;
  }

  .slick-prev, .slick-next {
    z-index: 1;
    width: 40px;
    height: 40px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 30px;
  }

  .slick-prev {
    left: 10px;
  }

  .slick-next {
    right: 10px;
  }

  .slick-prev:before, .slick-next:before {
    color: #333;
  }
`;

// USP Card styling
const USPCard = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 100%;
  max-width: 600px; /* Adjusted max-width */
  height: 100%; /* Ensure card takes full height */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const USPImage = styled.img`
  width: 100%;
  height: 300px; /* Fixed height for images */
  object-fit: cover; /* Maintain aspect ratio */
  border-radius: 8px;
  margin-bottom: 15px; /* Spacing between image and text */
`;

const USPTitle = styled.h2`
  margin: 15px 0;
  color: #333;
  font-size: 1.5rem;
  font-weight: bold;
`;

const USPDescription = styled.p`
  color: #555;
  font-size: 1rem;
  line-height: 1.6;
  padding: 0 10px;
  text-align: center;
`;

// Product container
const ProductContainer = styled.div`
  padding: 20px;
  background-color: #ffffff;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  overflow: hidden;
`;

// ProductCard styling
const ProductCard = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 100%;
  max-width: 250px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  box-sizing: border-box;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 150px; /* Fixed height for images */
  object-fit: cover; /* Maintain aspect ratio */
  border-radius: 8px;
  margin-bottom: 10px; /* Spacing between image and text */
`;

const ProductTitle = styled.h2`
  margin: 10px 0;
  color: #333;
  font-size: 1.2rem;
  font-weight: bold;
`;

const ProductButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  margin-top: 10px;
  background-color: #f9ed32;
  color: #000;
  text-decoration: none;
  border-radius: 6px;
  font-weight: bold;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #fff225;
    transform: scale(1.05);
  }
`;

const PreBookButton = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #f9ed32;
  color: #000;
  padding: 15px 30px;
  border-radius: 8px;
  font-weight: bold;
  text-decoration: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #fff225;
    transform: scale(1.05);
  }
`;

// Main Home component
const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    centerMode: true, // Center the current slide
  };

  return (
    <HomeContainer>
      <Banner>
        <BannerTextContainer>
          <BannerText>Let's Elevate Your Ride Experience With Rhyno – Where Superiority Meets Style.</BannerText>
        </BannerTextContainer>
      </Banner>
      <USPContainer>
        <Carousel {...settings}>
          <USPCard>
            <USPImage src={USPImage1} alt="LFP Battery" />
            <USPTitle>LFP Battery</USPTitle>
            <USPDescription>
              Rhyno is equipped with Lithium Iron Phosphate (LFP) batteries, renowned for their safety features—eliminating the risk of fire associated with other Lithium batteries. These batteries boast a broader temperature range, ideal for the diverse Indian climate. Our technology enhances Rhyno's longevity, complemented by an Active Balancing Smart Battery Management System (BMS) for extended life and reduced maintenance. Each battery undergoes rigorous waterproofing tests according to IP76 standards. But it doesn't stop there—our technology goes the extra mile in ensuring the battery's lasting durability. Connect with us to discover the thoughtful engineering behind our batteries!
            </USPDescription>
          </USPCard>
          <USPCard>
            <USPImage src={USPImage2} alt="Wider Tyres" />
            <USPTitle>Wider Tyres</USPTitle>
            <USPDescription>
              Now, say goodbye to skidding and embrace the leaning turns! Featuring first-of-its-kind, 9.5-inch wider tyres that make this machine an enormous beast that ensures stability on different terrains such as wet roads, mud, and sand.
            </USPDescription>
          </USPCard>
          <USPCard>
            <USPImage src={USPImage3} alt="Range Prediction" />
            <USPTitle>Range Prediction</USPTitle>
            <USPDescription>
              Many budget-friendly electric scooters overlook this crucial feature, causing riders to experience range anxiety. With Rhyno, you can ride with peace of mind, thanks to the scooter providing precise information about the remaining battery.
            </USPDescription>
          </USPCard>
          <USPCard>
            <USPImage src={USPImage1} alt="Extraordinary Experience" />
            <USPTitle>Extraordinary Experience</USPTitle>
            <USPDescription>
              Rhyno is more than just a mode of transportation. It is an experience of sheer comfort and style! A seamless fusion of minimalism, sophistication, and a touch of masculinity!
            </USPDescription>
          </USPCard>
          <USPCard>
            <USPImage src={USPImage2} alt="Rugged and Simple Design" />
            <USPTitle>Rugged and Simple Design</USPTitle>
            <USPDescription>
              We’ve had enough of the EVs looking and feeling like fragile plastic toys. Often fading out and shamelessly breaking in minor accidents, ending up spending weeks and months at service stations for complex repairs. We took a bold step of making something raw, rugged, and practical. We kept it so simple that even your trusted local mechanic can understand and repair most of it. If you have reached this far, why not take a test ride? Click here to locate your nearest dealership or book a test ride at your home.
            </USPDescription>
          </USPCard>
        </Carousel>
      </USPContainer>
      <ProductContainer>
        <ProductCard>
          <ProductImage src={ProductImage1} alt="Electric Scooter X1" />
          <ProductTitle>RhynoSE03 Lite</ProductTitle>
          <ProductButton href="/products/se03lite">Check Out</ProductButton>
        </ProductCard>
        <ProductCard>
          <ProductImage src={ProductImage2} alt="Electric Scooter Y2" />
          <ProductTitle>RhynoSE03</ProductTitle>
          <ProductButton href="/products/se03">Check Out</ProductButton>
        </ProductCard>
        <ProductCard>
          <ProductImage src={ProductImage3} alt="Electric Scooter Z3" />
          <ProductTitle>RhynoSE03 Max</ProductTitle>
          <ProductButton href="/products/se03max">Check Out</ProductButton>
        </ProductCard>
      </ProductContainer>
      <PreBookButton href="/pre-book">Pre-Book Now</PreBookButton>
    </HomeContainer>
  );
};

export default Home;
