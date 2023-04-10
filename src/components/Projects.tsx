import './Projects.scss';
import { Fragment } from 'react';
import { PROJECTS, IProject } from '../data/projects';
import { GithubIcon } from './shared/GithubIcon';

export const Projects = () => {
  return (
    <section className="section-container projects">
      <h1 className="section-heading projects">PROJECTS</h1>
      <ul className="section-list projects">
        {PROJECTS.map((project) => (
          <Fragment key={project.id}>
            <ProjectCard project={project} />
          </Fragment>
        ))}
      </ul>
    </section>
  );
};

const ProjectCard = ({ project }: { project: IProject }) => {
  return (
    <li className="section-card-container projects">
      <aside className="section-card-left project">
        <div className="project-name-container">
          <h2 className="project-name">{project.name}</h2>
          <div
            onClick={() => {
              window.open(project.github, '_blank');
            }}
            className="github-icon-container"
          >
            <GithubIcon />
          </div>
        </div>
        <div className="project-divider" />
        <ul className="project-stacks-container">
          {project.stacks.map((stack) => (
            <li key={stack}>{stack}</li>
          ))}
        </ul>
      </aside>
      <div className="section-card-right projects">
        {project.imageLinks.map((imageLink, index) => (
          <img key={index} src={imageLink} />
        ))}
        {project.description}
      </div>
    </li>
  );
};
