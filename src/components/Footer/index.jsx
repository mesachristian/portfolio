import React from 'react';

import './styles.css';

const Footer = () => {
    return(
        <div className="page-footer">
            <div className="social-network-container">
                <i className="fab fa-facebook"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-linkedin"></i>
                <i class="fab fa-github"></i>
            </div>

            <div className="footer-navbar-container">
                <ul className="footer-navbar">
                    <li className="footer-navbar-item">Home</li>
                    <li className="footer-navbar-item">About</li>
                    <li className="footer-navbar-item">Projects</li>
                    <li className="footer-navbar-item">Contact</li>
                </ul>
            </div>

            <div className="footer-end">
                <p className="footer-description">WEBDEVELOPER PORTFOLIO</p>
                <p className="footer-cr">&copy; 2021 Christian Mesa</p>
            </div>
        </div>
    );
}

export default Footer;