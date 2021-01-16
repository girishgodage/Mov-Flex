import React from 'react'
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="grid-footer">
                    <div className="copyright">
                        <a className="copyright-name" href="https://girishgodage.in">Portfolio</a>
                        <p className="copyright-para">Developed by Girish Godage</p>
                    </div>
                    <img
                        className="footer-img"
                        src="https://www.themoviedb.org/assets/1/v4/logos/408x161-powered-by-rectangle-green-bb4301c10ddc749b4e79463811a68afebeae66ef43d17bcfd8ff0e60ded7ce99.png"
                        alt="powered by themoviedb"
                    />
                </div>
            </div>
        </div>
    );
}

export default Footer;  
