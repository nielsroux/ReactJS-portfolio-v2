import React from "react";
import { projectsData } from "../../data/ProjectsData";
import "./portfolio.scss";

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My recent work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {projectsData.map(({ id, image, imageAlt, title, text, github, demo }) => {
                    return (
                        <article key={id} id={'project-'+id} className="portfolio__item">
                            <div className="portfolio__item-image">
                                <img src={image} alt={imageAlt} />
                            </div>
                            <h3>{title}</h3>
                            <div className="portfolio__item-cta">
                                <a href={github} className="btn">
                                    Github
                                </a>
                                <a href={demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                                    Live demo
                                </a>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Portfolio;
