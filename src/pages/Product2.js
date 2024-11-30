import React from 'react';
import styled from 'styled-components';
import ProductImage from '../assets/p2.jpeg'; // Import the product image for Product2

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

const Product2 = () => {
  return (
    <ProductContainer>
      <h1>Rhyno SE03</h1>
      <ProductImageStyled src={ProductImage} alt="Rhyno SE03" />
      <ProductDetails>
        <h2>Reliable and Stylish</h2>
        <p>The Rhyno SE03 is designed for those who value both performance and style. With a sleek design and advanced features, it provides a superior riding experience.</p>
        <h3>Specifications:</h3>
        <ul>
          <li>Battery: 2.7Kwh</li>
          <li>Motor: 1500W</li>
          <li>Max Speed: 55km/h</li>
          <li>Range: 150km</li>
        </ul>
        <BuyButton href="/pre-book">Buy Now</BuyButton>
      </ProductDetails>
    </ProductContainer>
  );
};

export default Product2;
