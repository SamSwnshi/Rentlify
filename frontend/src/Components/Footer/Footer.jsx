import React from 'react';
import "./Footer.css"
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-content">
      <div className="footer-section company-info">
        <h3>About Us</h3>
        <p>
          At Rentify, our mission is to connect you with the perfect rental properties.
          Our team is dedicated to providing exceptional service and a seamless rental experience.
        </p>
      </div>
      <div className="footer-section newsletter">
        <h3>Newsletter</h3>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <div className="footer-section social-media">
        <h3>Follow Us</h3>
        <ul className="social-media-links">
          <li><a href="#facebook" aria-label="Facebook"><FacebookIcon/></a></li>
          <li><a href="#twitter" aria-label="Twitter"><TwitterIcon/></a></li>
          <li><a href="#instagram" aria-label="Instagram"><InstagramIcon/></a></li>
          <li><a href="#linkedin" aria-label="LinkedIn"><LinkedInIcon/></a></li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      &copy; {new Date().getFullYear()} Rentify.com All Rights Reserved.
    </div>
  </footer>
  )
}

export default Footer
