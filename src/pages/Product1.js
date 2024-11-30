import React from 'react';
import styled from 'styled-components';
import ProductImage from '../assets/p1.jpeg'; // Import the product image

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

const Product1 = () => {
  return (
    <ProductContainer>
      <h1>Rhyno SE03 Lite</h1>
      <ProductImageStyled src={ProductImage} alt="Rhyno SE03 Lite" />
      <ProductDetails>
        <h2>Elegant and Efficient</h2>
        <p>The Rhyno SE03 Lite offers a perfect blend of efficiency and style, ideal for everyday use with its compact design and powerful features.</p>
        <h3>Specifications:</h3>
        <ul>
          <li>Battery: 1.8Kwh</li>
          <li>Motor: 1500W</li>
          <li>Max Speed: 55km/h</li>
          <li>Range: 100km</li>
        </ul>
        <BuyButton href="/pre-book">Buy Now</BuyButton>
      </ProductDetails>
    </ProductContainer>
  );
};

export default Product1;
