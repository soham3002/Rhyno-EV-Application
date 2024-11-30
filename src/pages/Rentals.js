import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  background-color: #f2f2f2;
  font-family: 'Lato', sans-serif;
`;

const Title = styled.h1`
  color: #333;
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  color: #555;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const Rentals = () => {
  return (
    <Container>
      <Title>Rentals</Title>
      <Paragraph>
        At Rhyno EV, we offer rental options for our electric scooters. Whether you need a vehicle for a short-term period or for extended use, we have flexible rental plans to meet your needs.
      </Paragraph>
      <Paragraph>
        For more information on our rental services, please contact us at info@rhyno.in or call +91-9023987528. We are here to assist you with all your rental inquiries and provide you with the best solution for your transportation needs.
      </Paragraph>
    </Container>
  );
};

export default Rentals;
