import React from 'react';
import './projects.css';
import projects from './projects.json';
import { Thin } from '../utils/Thin';

const projectsList = projects.projects;

export const Projects = () => {
    return (
        <section className="projectsSection">
            <p>Projects</p>
            <div className="projectsList">
                {projectsList.map((project) => (
                    <Thin key={project.id} 
                        projectName={project.name} 
                        imageSrc={project.image}
                        projectLink={project.link}/>
                ))}
            </div>
        </section>
    )
}