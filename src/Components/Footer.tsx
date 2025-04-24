import React from 'react';
import '../Styles/Footer.css';

import { IoIosLink } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
          <h2 className="footer-title">Contact Information</h2>
          <p className="footer-subtitle">Do not hesitate to contact me</p>
    
          <div className="footer-content">
            <div className="footer-left">
              <p>
                <BsTelephone /> Telephone: <span>+1 (709) 730-1033</span>
              </p>
              <p>
                <MdAlternateEmail /> Email: <span>angelisha3838@gmail.com</span>
              </p>
            </div>
    
            <div className="footer-right">
              <p>
                <IoIosLink /> LinkedIn:{" "}
                <a href="https://github.com/AnhelinaRom" target="_blank" rel="noopener noreferrer">
                  https://github.com/AnhelinaRom
                </a>
              </p>
              <p>
                <IoIosLink /> GitHub:{" "}
                <a href="https://github.com/angellisha" target="_blank" rel="noopener noreferrer">
                    https://github.com/angellisha
                </a>
              </p>
            </div>
          </div>
        </footer>
    );
};

export default Footer;