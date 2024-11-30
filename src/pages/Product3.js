import React from 'react';
import styled from 'styled-components';
import ProductImage from '../assets/p3.jpeg'; // Import the product image for Product3

const ProductContainer = styled.div`
  text-align: center;
  padding: 40px;
  background-color: #F9ED32;
`;

const ProductImageStyled = styled.img`
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProductDetails = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: #FFFFFF;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const BuyButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  margin-top: 20px;
  background-color: #F9ED32;
  color: #000;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #FFF225;
  }
`;

const Product3 = () => {
  return (
    <ProductContainer>
      <h1>Rhyno SE03 Max</h1>
      <ProductImageStyled src={ProductImage} alt="Rhyno SE03 Max" />
      <ProductDetails>
        <h2>Powerful and Robust</h2>
        <p>The Rhyno SE03 Max is built for those who demand high performance and durability. With an advanced battery and motor, it delivers an exceptional riding experience.</p>
        <h3>Specifications:</h3>
        <ul>
          <li>Battery: 2.7Kwh</li>
          <li>Motor: 2000W</li>
          <li>Max Speed: 65km/h</li>
          <li>Range: 120km</li>
        </ul>
        <BuyButton href="/pre-book">Buy Now</BuyButton>
      </ProductDetails>
    </ProductContainer>
  );
};

export default Product3;
