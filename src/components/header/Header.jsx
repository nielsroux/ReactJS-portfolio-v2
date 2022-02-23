import React from 'react';
import CTA from './CTA';
import './header.scss';
import ME from '../../assets/img/nielsroux.png'
import SocialNetworks from './../socialnetworks/SocialNetworks';

const Header = () => {
    return (
        <header id="home">
            <div className="container header__container">
                <h5>Salut, Moi c'est</h5>
                <h1>Niels Roux</h1>
                <h5 className="text-light">Fullstack Developer</h5>
                
                <CTA />
                
                <div className="header__socials">
                    <SocialNetworks />
                </div>

                <div className="me">
                    <img src={ME} alt="Niels Roux" />
                </div>

                <a href="#contact" className="scroll__down">Scroll Down</a>                
            </div>
        </header>
    );
};

export default Header;