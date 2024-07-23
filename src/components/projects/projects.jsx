import React from 'react';
import './projects.css';
import projects from './projects.json';

export const Projects = () => {
    return (
        <>
            <section className="projectsSection">
                <p>Projects</p>                
                {Array.isArray(projects) && projects.map((project, index) => (
                    <div key={id}>
                        <h2>{project.name}</h2>
                        <p>{project.descricao}</p>
                    </div>
                ))}
            </section>
        </>
    )
}