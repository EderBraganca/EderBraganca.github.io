import React from 'react';
import './projects.css';
import projects from './projects.json';

const projectsList = projects.projects;

export const Projects = () => {
    return (
        <section className="projectsSection">
            <p>Projects</p>
            <div className="projectsList">
                {projectsList.map((project) => (
                    <div key={project.id} className="projectCard">
                        <a href={project.link} target="_blank" rel="noreferrer">
                            <section className="textProject">
                                <h3>{project.name}</h3>
                                <p>{project.description}</p>
                            </section>
                            <img src={project.image} alt={project.name} className='projectImage' />
                        </a>
                    </div>
                ))}
            </div>
        </section>
    )
}