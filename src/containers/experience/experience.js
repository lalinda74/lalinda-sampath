import React from 'react';
import PropTypes from 'prop-types';
import Tile from '../../components/tile/tile';
import { ExperienceConfig } from '../../configs/Work.config';
import withTransitions from '../../HOCs/withTransitions';

function Experience (props) {
  const setRef = props.transition;
  const visible = props.visible;

  // Array object of experience list
  const List = ExperienceConfig;

  /**
   * Construct experience blocks
   * @param {Object} props
   * @returns HTML block
   */
  const showExp = (data) => {
    const ListItems = data.map((item, i) => (
      <li key={i}>
        <Tile {...item} />
      </li>
    ));
    return <ul className="blocks">{ListItems}</ul>;
  };

  return (
    <section className="wrapper wrapper--col-1 wrapper--slim" id="experience" ref={setRef}>
      <div className={`${
        visible ? 'p-slideup' : ''
      }`}>
        <p className="p-txt-lg">
          I have 6 years of experience working in tech both in <br />
          local and international level.
        </p>
        {showExp(List)}
      </div>
    </section>
  );
}

Experience.propTypes = {
  transition: PropTypes.func,
  visible: PropTypes.bool
};

export default withTransitions(Experience);
