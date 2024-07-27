import React from 'react'
import './FooterN.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const FooterN = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">© 2024 Brijesh Singh. All rights reserved.</p>
        <div className="social-media">
          <a href="https://www.linkedin.com/in/brijesh-singh-358a5125a/" className="social-icon linkedin" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/brijeshsingh181204" className="social-icon github" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://x.com/brijeshsingh_20" className="social-icon twitter" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default FooterN