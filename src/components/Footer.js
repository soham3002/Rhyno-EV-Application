import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const FooterContainer = styled.footer`
  padding: 20px;
  background-color: #333;
  color: #fff;
  text-align: center;
  a {
    color: #F9ED32;
    text-decoration: none;
    margin: 0 10px;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const SocialIcons = styled.div`
  font-size: 24px;
  margin-top: 10px;
  a {
    margin: 0 10px;
    color: #F9ED32;
    &:hover {
      color: #FFF225;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>
        <a href="/privacy-policy">Privacy Policy</a> | 
        <a href="/refund-policy">Refund Policy</a> | 
        <a href="/website-policy">Website Policy</a> | 
        <a href="/contactus">Contact Us</a>
        <br />
        <a href="/compareall">Compare All Products</a> | 
        <a href="https://www.linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer">Career</a> | 
        <a href="/rentals">Rentals</a>
      </p>
      <SocialIcons>
        <a href="https://www.instagram.com/yourcompany" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </SocialIcons>
    </FooterContainer>
  );
};

export default Footer;

