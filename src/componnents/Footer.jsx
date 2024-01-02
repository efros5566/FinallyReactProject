import React from 'react';
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
<footer className="footer">
      <div className="app-icons">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        {/* הוסף יותר אייקונים של אפליקציות כפי שאת רוצה */}
      </div>

      <div className="feedback-section">
        <h3>Give Feedback</h3>
        {/* טופס המשוב או קישור לעמוד משוב */}
      </div>
    </footer>
  );
};

export default Footer;
