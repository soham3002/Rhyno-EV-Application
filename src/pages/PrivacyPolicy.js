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

const PrivacyPolicy = () => {
  return (
    <Container>
      <Title>Privacy Policy</Title>
      <Paragraph>
        Your privacy is important to us. This privacy statement explains what personal data we collect from you, how we use it, and how we protect it. We are committed to safeguarding your privacy while providing you with a customized experience.
      </Paragraph>
      <Paragraph>
        We collect personal data such as your name, email address, and contact information when you interact with our website. This information is used to improve our services, respond to your inquiries, and provide you with updates.
      </Paragraph>
      <Paragraph>
        We implement appropriate security measures to protect your personal data. However, please be aware that no method of transmission over the Internet is completely secure.
      </Paragraph>
      <Paragraph>
        By using our website, you consent to the collection and use of your personal data as described in this privacy policy. We may update this policy from time to time, and we encourage you to review it periodically.
      </Paragraph>
    </Container>
  );
};

export default PrivacyPolicy;
