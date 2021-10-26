import React from 'react';
import PropTypes from 'prop-types';
import withTransitions from '../../HOCs/withTransitions';
import { ProjectsConfig } from '../../configs/Projects.config';

function Projects (props) {
  const setRef = props.transition;
  const visible = props.visible;

  const ProjectsList = ProjectsConfig;

  const showProjects = (projects) => {
    return projects.map((project, i) => (
      <section className="p-banner" key={i}>
        <a
          href={project.link}
          aria-label={project.title}
          target="_blank"
          rel="noopener noreferrer"
        >
          <picture>
            <source srcSet={project.srcSet1} media="(max-width: 768px)" />
            <source srcSet={project.srcSet2} media="(min-width: 768px)" />
            <img
              src={project.srcSet2}
              className={`${
                visible ? 'p-zoom-out__animation' : 'p-zoom-out__initial'
              }`}
              loading="lazy"
              alt="banner 1"
            />
          </picture>
        </a>
      </section>
    ));
  };

  return (
    <section id="projects" ref={setRef}>
      <div className="text-wrapper">
        <h6>some work I have done</h6>
        <h2 className="mb-3 p-title">Case Studies</h2>
      </div>
      <div className="p-slider">{ showProjects(ProjectsList) }</div>
    </section>
  );
}

Projects.propTypes = {
  transition: PropTypes.func,
  visible: PropTypes.bool
};

export default withTransitions(Projects);
