// src/components/ProductsDropdown.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const DropdownContainer = styled.div`
  position: absolute;
  background-color: #333;
  color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 10px;
  display: ${props => (props.isOpen ? 'block' : 'none')};
  transition: opacity 0.3s ease;
  z-index: 1000;
  top: 100%;
  left: 0;
  width: 200px;
`;

const DropdownItem = styled(Link)`
  display: block;
  padding: 10px;
  color: #fff;
  text-decoration: none;
  &:hover {
    background-color: #444;
  }
`;

const ProductsDropdown = ({ isOpen, onClose }) => {
  return (
    <DropdownContainer isOpen={isOpen}>
      <DropdownItem to="/products/se03lite" onClick={onClose}>Rhyno SE03 Lite</DropdownItem>
      <DropdownItem to="/products/se03" onClick={onClose}>Rhyno SE03</DropdownItem>
      <DropdownItem to="/products/se03max" onClick={onClose}>Rhyno SE03 Max</DropdownItem>
      <DropdownItem to="/compareall" onClick={onClose}>Compare All</DropdownItem>
    </DropdownContainer>
  );
};

export default ProductsDropdown;
