// src/pages/ProductPage.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import p1 from '../assets/p1.jpeg'; // Ensure this path is correct
import p2 from '../assets/p2.jpeg'; // Ensure this path is correct
import p3 from '../assets/p3.jpeg'; // Ensure this path is correct

const products = {
  se03lite: {
    name: 'Rhyno SE03 Lite',
    image: p1,
    description: 'The Rhyno SE03 Lite offers a perfect blend of efficiency and style...',
    colors: ['#ff0000', '#00ff00', '#0000ff'], // Red, Green, Blue
    specs: {
      battery: '1.8Kwh',
      batteryFeatures: 'LFP with 1500 cycles, Active Balancing, Waterproof (IP67)',
      batteryWarranty: '3 years',
      chargingTime: '3 hours (12A)',
      motor: '1500W',
      maxSpeed: '55km/h',
      warrantyOnElectronics: '1 year',
      maxRange30kmh: '100km',
      maxRange45kmh: '90km',
      maxRangeFullSpeed: '60km'
    }
  },
  se03: {
    name: 'Rhyno SE03',
    image: p2,
    description: 'The Rhyno SE03 delivers an enhanced performance with increased battery capacity...',
    colors: ['#ff00ff', '#00ffff', '#ffff00'], // Magenta, Cyan, Yellow
    specs: {
      battery: '2.7Kwh',
      batteryFeatures: 'LFP with 1500 cycles, Active Balancing, Waterproof (IP67)',
      batteryWarranty: '3 years',
      chargingTime: '4 hours (12A)',
      motor: '1500W',
      maxSpeed: '55km/h',
      warrantyOnElectronics: '1 year',
      maxRange30kmh: '150km',
      maxRange45kmh: '110km',
      maxRangeFullSpeed: '90km'
    }
  },
  se03max: {
    name: 'Rhyno SE03 Max',
    image: p3,
    description: 'The Rhyno SE03 Max provides top-tier performance with a larger battery and higher speed...',
    colors: ['#000000', '#ffffff', '#888888'], // Black, White, Grey
    specs: {
      battery: '2.7Kwh',
      batteryFeatures: 'LFP with 1500 cycles, Active Balancing, Waterproof (IP67)',
      batteryWarranty: '3 years',
      chargingTime: '4 hours (12A)',
      motor: '2000W',
      maxSpeed: '65km/h',
      warrantyOnElectronics: '1 year',
      maxRange30kmh: '120km',
      maxRange45kmh: '100km',
      maxRangeFullSpeed: '80km'
    }
  }
};

const Container = styled.div`
  text-align: center;
  padding: 40px;
  background-color: #f9ed32;
`;

const Image = styled.img`
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Details = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SpecsTable = styled.div`
  margin-top: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  table {
    width: 100%;
    border-collapse: collapse;
    td, th {
      padding: 10px;
      border-bottom: 1px solid #ddd;
    }
    th {
      text-align: left;
    }
    td {
      text-align: center;
    }
    tbody tr:hover {
      background-color: #f1f1f1;
    }
  }
`;

const BuyButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  margin-top: 20px;
  background-color: #f9ed32;
  color: #000;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #fff225;
  }
`;

const ColorButton = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  margin: 5px;
  cursor: pointer;
  background-color: ${props => props.color};
  box-shadow: ${props => props.selected ? '0 0 0 2px #000' : 'none'};
  
  &:hover {
    box-shadow: 0 0 0 2px #000;
  }
`;

const ProductPage = () => {
  const { productId } = useParams();
  const product = products[productId];
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Container>
      <h1>{product.name}</h1>
      <Image src={product.image} alt={product.name} />
      <Details>
        <p>{product.description}</p>
        <h2>Color Options:</h2>
        <div>
          {product.colors.map(color => (
            <ColorButton
              key={color}
              color={color}
              selected={color === selectedColor}
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </div>
        <h2>Specifications:</h2>
        <SpecsTable>
          <table>
            <thead>
              <tr>
                <th>Specification</th>
                <th>{product.name}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Battery</td>
                <td>{product.specs.battery}</td>
              </tr>
              <tr>
                <td>Battery Features</td>
                <td>{product.specs.batteryFeatures}</td>
              </tr>
              <tr>
                <td>Battery Warranty</td>
                <td>{product.specs.batteryWarranty}</td>
              </tr>
              <tr>
                <td>Charging Time</td>
                <td>{product.specs.chargingTime}</td>
              </tr>
              <tr>
                <td>Motor</td>
                <td>{product.specs.motor}</td>
              </tr>
              <tr>
                <td>Max Speed</td>
                <td>{product.specs.maxSpeed}</td>
              </tr>
              <tr>
                <td>Warranty on Electronics</td>
                <td>{product.specs.warrantyOnElectronics}</td>
              </tr>
              <tr>
                <td>Max Range (@30km/h)</td>
                <td>{product.specs.maxRange30kmh}</td>
              </tr>
              <tr>
                <td>Max Range (@45km/h)</td>
                <td>{product.specs.maxRange45kmh}</td>
              </tr>
              <tr>
                <td>Max Range (@Full Speed)</td>
                <td>{product.specs.maxRangeFullSpeed}</td>
              </tr>
            </tbody>
          </table>
        </SpecsTable>
        <BuyButton href="/pre-book">Buy Now</BuyButton>
      </Details>
    </Container>
  );
};

export default ProductPage;
