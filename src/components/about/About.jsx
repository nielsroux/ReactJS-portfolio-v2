import React from 'react';
import './about.scss';
import ME from '../../assets/img/nielsroux.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
    return (
        <section id="about">
            <h5>Faire Connaissance</h5>
            <h2>Avec Moi</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="Niels Roux" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className='about__icon'/>
                            <h5>Experience</h5>
                            <small>8+ Years Working</small>
                        </article>

                        <article className="about__card">
                            <FiUsers className='about__icon'/>
                            <h5>Clients</h5>
                            <small>50+ Worldwide</small>
                        </article>

                        <article className="about__card">
                            <VscFolderLibrary className='about__icon'/>
                            <h5>Projects</h5>
                            <small>70+ WebSites</small>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;