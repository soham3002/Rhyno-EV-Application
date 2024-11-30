import React from 'react';
import styled from 'styled-components';
import TeamImage from '../assets/teamwork.jpg'; // Import team image
import OfficeImage from '../assets/office.jpeg'; // Import office image
import DevelopmentImage from '../assets/development.png'; // Import development image

const AboutContainer = styled.div`
  padding: 40px;
  background-color: #F2F2F2;
  color: #333;
`;

const Section = styled.section`
  margin-bottom: 40px;
  text-align: center;
`;

const SectionTitle = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
`;

const SectionText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
`;

const ImageContainer = styled.div`
  margin: 20px 0;
`;

const Image = styled.img`
  width: 100%;
  max-width: 800px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const AboutUs = () => {
  return (
    <AboutContainer>
      <Section>
        <SectionTitle>About Us</SectionTitle>
        <SectionText>
          Established in 2019 by an automotive engineer with a vision for sustainable and robust mobility solutions, Rhyno EV is not just a company; it's a collective effort of a dynamic team of young individuals passionately driving innovation in the electric vehicle industry. We believe in engineering solutions that solve problems.
        </SectionText>
        <ImageContainer>
          <Image src={OfficeImage} alt="Our Office" />
        </ImageContainer>
        <SectionText>
          With our first product, we've taken a bold step to create something more than just a vehicle; it's a unique experience of elegance, comfort, and style, addressing the pitfalls of conventional electric scooters. Our design prioritizes safety, eliminating concerns of fires and ensuring a longer battery lifespan with our battery technology.
        </SectionText>
      </Section>
      
      <Section>
        <SectionTitle>Our Team</SectionTitle>
        <ImageContainer>
          <Image src={TeamImage} alt="Our Team" />
        </ImageContainer>
        <SectionText>
          Perfectly suited for fleet operators, especially in tourist-centric locations like Goa, our rugged yet aesthetically appealing scooters are engineered for longevity and reliability. Join us as we pioneer a new era in sustainable and dependable electric transportation.
        </SectionText>
      </Section>

      <Section>
        <SectionTitle>Our Journey</SectionTitle>
        <ImageContainer>
          <Image src={DevelopmentImage} alt="Product Development" />
        </ImageContainer>
        <SectionText>
          From our humble beginnings to becoming a significant player in the electric vehicle market, our journey has been one of dedication and innovation. We continue to push the boundaries of what’s possible, aiming to deliver the best in electric mobility solutions.
        </SectionText>
      </Section>
    </AboutContainer>
  );
};

export default AboutUs;
