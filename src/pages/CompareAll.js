// src/pages/CompareAll.js
import React from 'react';
import styled from 'styled-components';
import p1 from '../assets/p1.jpeg'; // Rhyno SE03 Lite
import p2 from '../assets/p2.jpeg'; // Rhyno SE03
import p3 from '../assets/p3.jpeg'; // Rhyno SE03 Max

const Container = styled.div`
  text-align: center;
  padding: 40px;
  background-color: #f9ed32;
`;

const Image = styled.img`
  width: 100%;
  max-width: 300px;
  border-radius: 10px;
  margin: 10px;
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

const BuyNowButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #ffcc00; /* Yellow color */
  color: #000000;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  margin-top: 20px;
  border: 2px solid #000000;
  transition: background-color 0.3s, color 0.3s;
  
  &:hover {
    background-color: #e6b800; /* Darker yellow */
    color: #000000;
  }
`;

const CompareAll = () => {
  return (
    <Container>
      <h1>Compare All Products</h1>
      <SpecsTable>
        <table>
          <thead>
            <tr>
              <th>Specification</th>
              <th>SE03 Lite</th>
              <th>SE03</th>
              <th>SE03 Max</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Image</td>
              <td><Image src={p1} alt="Rhyno SE03 Lite" style={{ maxWidth: '150px' }} /></td>
              <td><Image src={p2} alt="Rhyno SE03" style={{ maxWidth: '150px' }} /></td>
              <td><Image src={p3} alt="Rhyno SE03 Max" style={{ maxWidth: '150px' }} /></td>
            </tr>
            <tr>
              <td>Battery</td>
              <td>1.8Kwh</td>
              <td>2.7Kwh</td>
              <td>2.7Kwh</td>
            </tr>
            <tr>
              <td>Battery Features</td>
              <td>LFP with 1500 cycles, Active Balancing, Waterproof (IP67)</td>
              <td>LFP with 1500 cycles, Active Balancing, Waterproof (IP67)</td>
              <td>LFP with 1500 cycles, Active Balancing, Waterproof (IP67)</td>
            </tr>
            <tr>
              <td>Battery Warranty</td>
              <td>3 years</td>
              <td>3 years</td>
              <td>3 years</td>
            </tr>
            <tr>
              <td>Charging Time</td>
              <td>3 hours (12A)</td>
              <td>4 hours (12A)</td>
              <td>4 hours (12A)</td>
            </tr>
            <tr>
              <td>Motor</td>
              <td>1500W</td>
              <td>1500W</td>
              <td>2000W</td>
            </tr>
            <tr>
              <td>Max Speed</td>
              <td>55km/h</td>
              <td>55km/h</td>
              <td>65km/h</td>
            </tr>
            <tr>
              <td>Warranty on Electronics</td>
              <td>1 year</td>
              <td>1 year</td>
              <td>1 year</td>
            </tr>
            <tr>
              <td>Max Range (@30km/h)</td>
              <td>100km</td>
              <td>150km</td>
              <td>120km</td>
            </tr>
            <tr>
              <td>Max Range (@45km/h)</td>
              <td>90km</td>
              <td>110km</td>
              <td>100km</td>
            </tr>
            <tr>
              <td>Max Range (@Full Speed)</td>
              <td>60km</td>
              <td>90km</td>
              <td>80km</td>
            </tr>
          </tbody>
        </table>
      </SpecsTable>
      <BuyNowButton href="/pre-book">Buy Now</BuyNowButton>
    </Container>
  );
};

export default CompareAll;

