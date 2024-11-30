// src/pages/ProductPage.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import p1 from '../assets/p1.jpeg'; // Rhyno SE03 Lite
import p2 from '../assets/p2.jpeg'; // Rhyno SE03
import p3 from '../assets/p3.jpeg'; // Rhyno SE03 Max

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
