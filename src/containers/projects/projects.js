import React from 'react';
import PropTypes from 'prop-types';
import withTransitions from '../../HOCs/withTransitions';
import { ProjectsConfig } from '../../configs/Projects.config';
import NextImage from '../../assets/images/view.svg';

function Projects (props) {
  const setRef = props.transition;
  const visible = props.visible;

  const ProjectsList = ProjectsConfig;

  const showProjects = (projects) => {
    return projects.map((project, i) => (
      <section className="p-banner mb-3" key={i}>
        <a
          href={project.link}
          aria-label={project.title}
          target="_blank"
          rel="noopener noreferrer"
        >
            {/* <source srcSet={project.srcSet1} media="(max-width: 768px)" />
            <source srcSet={project.srcSet2} media="(min-width: 768px)" /> */}
            <img
              src={project.srcSet2}
              srcSet={`${project.srcSet1} 311w, ${project.srcSet2} 481w`}
              sizes="(min-width: 768px) 500px, 311px"
              className={`${
                visible ? 'p-zoom-out__animation' : 'p-zoom-out__initial'
              }`}
              loading="lazy"
              alt="banner 1"
            />
        </a>
        <aside className="p-banner-content">
          <section>
            <h3 className="mb-1">{project.title}</h3>
            <p className="p-banner-content__desc">{project.desc}</p>
            <a className="p-banner-content__link">View Project
              <img
                src={NextImage}
                loading="lazy"
                alt="Next"
              />
            </a>
          </section>
          <section className="p-banner-content__tools">
            <div>
              <h6>Roles</h6>
              <ul className="p-list">{showList(project.roles)}</ul>
            </div>
            <div>
              <h6>Tools</h6>
              <ul className="p-list">{showList(project.tools)}</ul>
            </div>
          </section>
        </aside>
      </section>
    ));
  };

  const showList = (list) => {
    return list.map((item, i) => (
      <li className="p-list__item" key={i}>{item.name}</li>
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
