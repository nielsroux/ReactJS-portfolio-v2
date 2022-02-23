import React from "react";
import "./services.scss";
import { HiOutlineCheck } from "react-icons/hi";

const Services = () => {
    return (
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>UI/UX Design</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <HiOutlineCheck className="service__list-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <HiOutlineCheck className="service__list-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <HiOutlineCheck className="service__list-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <HiOutlineCheck className="service__list-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <HiOutlineCheck className="service__list-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <HiOutlineCheck className="service__list-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                    </ul>
                </article>
                {/* END OF UI UX */}

                <article className="service">
                    <div className="service__head">
                        <h3>FullStack Developer</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <HiOutlineCheck className="service__list-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <HiOutlineCheck className="service__list-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <HiOutlineCheck className="service__list-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <HiOutlineCheck className="service__list-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <HiOutlineCheck className="service__list-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <HiOutlineCheck className="service__list-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <HiOutlineCheck className="service__list-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                    </ul>
                </article>
                {/* END OF UI UX */}

                <article className="service">
                    <div className="service__head">
                        <h3>Integration</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <HiOutlineCheck className="service__list-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <HiOutlineCheck className="service__list-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <HiOutlineCheck className="service__list-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <HiOutlineCheck className="service__list-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <HiOutlineCheck className="service__list-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <HiOutlineCheck className="service__list-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                    </ul>
                </article>
                {/* Integration */}
            </div>
        </section>
    );
};

export default Services;
