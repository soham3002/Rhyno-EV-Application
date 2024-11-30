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

const RefundPolicy = () => {
  return (
    <Container>
      <Title>Refund Policy</Title>
      <Paragraph>
        We aim to provide the best service to our customers. If you are not satisfied with your purchase, you may request a refund under certain conditions.
      </Paragraph>
      <Paragraph>
        Refund requests must be submitted within 30 days of purchase. To be eligible for a refund, the product must be returned in its original condition and packaging.
      </Paragraph>
      <Paragraph>
        Please contact our customer service team to initiate a refund request. We will review your request and notify you of the approval or rejection. If approved, the refund will be processed and a credit will automatically be applied to your original method of payment.
      </Paragraph>
      <Paragraph>
        For more information, please contact us at info@rhyno.in.
      </Paragraph>
    </Container>
  );
};

export default RefundPolicy;
