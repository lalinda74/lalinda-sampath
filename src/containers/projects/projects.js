import React from 'react';
import PropTypes from 'prop-types';
import withTransitions from '../../HOCs/withTransitions';
import SectionHeader from '../../components/section-header/section-header';
import { ProjectsConfig } from '../../configs/Projects.config';
import NextImage from '../../assets/images/view.svg';

function Projects (props) {
  const setRef = props.transition;
  const visible = props.visible;

  const ProjectsList = ProjectsConfig;

  const showProjects = (projects) => {
    return projects.map((project, i) => (
      <article key={i} className={`p-banner mb-3 ${
        visible ? 'p-slideup' : ''
      }`}>
        <a
          href={project.link}
          aria-label={project.title}
          target="_blank"
          rel="noopener noreferrer"
        >
            <img
              srcSet={`${project.srcSet1} 622w, ${project.srcSet2} 962w`}
              sizes="(min-width: 768px) 481px, 311px"
              src={project.srcSet2}
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
      </article>
    ));
  };

  const showList = (list) => {
    return list.map((item, i) => (
      <li className="p-list__item" key={i}>{item.name}</li>
    ));
  };

  return (
    <section id="projects" className="wrapper wrapper--slim" ref={setRef}>
      <SectionHeader secondaryTxt="Some work I have done" primaryTxt="Case Studies"></SectionHeader>
      <div className="p-slider">{ showProjects(ProjectsList) }</div>
    </section>
  );
}

Projects.propTypes = {
  transition: PropTypes.func,
  visible: PropTypes.bool
};

export default withTransitions(Projects);
