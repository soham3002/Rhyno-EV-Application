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

const WebsitePolicy = () => {
  return (
    <Container>
      <Title>Website Policy</Title>
      <Paragraph>
        Welcome to Rhyno EV's website. By accessing and using our website, you agree to comply with and be bound by the following terms and conditions.
      </Paragraph>
      <Paragraph>
        All content on this website is the property of Rhyno EV and is protected by intellectual property laws. You may not reproduce, distribute, or modify any content without our prior written consent.
      </Paragraph>
      <Paragraph>
        We make every effort to ensure the accuracy of the information on our website. However, we do not warrant the accuracy or completeness of any information provided.
      </Paragraph>
      <Paragraph>
        We reserve the right to make changes to our website and its content at any time without notice. Your continued use of the website constitutes your acceptance of any changes.
      </Paragraph>
    </Container>
  );
};

export default WebsitePolicy;
