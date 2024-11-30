import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Logo from '../assets/ev.logo.png'; // Import the logo image
import ProductsDropdown from './ProductsDropdown'; // Import the ProductsDropdown component

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  position: relative;
`;

const LogoImage = styled.img`
  height: 50px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  position: relative; /* To position the dropdown menu correctly */

  a {
    color: #fff;
    text-decoration: none;
    margin-left: 30px; /* General margin for all links */
    position: relative;

    &:hover {
      color: #F9ED32;
    }

    &:hover .dropdown-arrow {
      transform: rotate(180deg);
    }
  }

  .dropdown-arrow {
    display: inline-block;
    margin-left: 5px;
    font-size: 12px;
    transition: transform 0.3s ease;
  }

  .nav-item {
    margin-left: 30px; /* Adjusted spacing between items */
  }

  .nav-item-products {
    margin-left: 40px; /* Extra space for Products link */
  }
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;

  a {
    color: #fff;
    margin-left: 10px;

    &:hover {
      color: #F9ED32;
    }
  }
`;

const DropdownTrigger = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;

  &:hover {
    .dropdown-arrow {
      transform: rotate(180deg);
    }
  }
`;

const Header = () => {
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);

  const handleProductDropdownToggle = () => {
    setIsProductDropdownOpen(!isProductDropdownOpen);
  };

  const handleCloseDropdowns = () => {
    setIsProductDropdownOpen(false);
  };

  return (
    <HeaderContainer>
      <LogoImage src={Logo} alt="RHINO EV Logo" />
      <Nav>
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/aboutus" className="nav-item">About Us</Link>
        <DropdownTrigger
          onClick={handleProductDropdownToggle}
          onMouseEnter={handleProductDropdownToggle}
          onMouseLeave={handleCloseDropdowns}
          className="nav-item nav-item-products"
        >
          <span>Products</span>
          <span className="dropdown-arrow">&#9662;</span> {/* Down arrow */}
          <ProductsDropdown isOpen={isProductDropdownOpen} onClose={handleCloseDropdowns} />
        </DropdownTrigger>
        <Link to="/contactus" className="nav-item">Contact Us</Link>
        <Link to="/pre-book" className="nav-item">Pre-Book Now</Link>
      </Nav>
      <SocialIcons>
        <a href="https://www.linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://www.instagram.com/yourcompany" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </SocialIcons>
    </HeaderContainer>
  );
};

export default Header;
