import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: #FFFFFF;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  img {
    width: 100%;
    height: auto;
  }
  .content {
    padding: 20px;
    text-align: center;
  }
  h3 {
    font-size: 1.5rem;
    color: #373737;
  }
  p {
    color: #424242;
  }
  .btn {
    background-color: #F9ED32;
    color: #202020;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    text-decoration: none;
    margin-top: 10px;
    display: inline-block;
  }
`;

const ProductCard = ({ product }) => {
  return (
    <Card>
      <img src={product.image} alt={product.name} />
      <div className="content">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <a href={`/product${product.id}`} className="btn">Learn More</a>
      </div>
    </Card>
  );
};

export default ProductCard;
