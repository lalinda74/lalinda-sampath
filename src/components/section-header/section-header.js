import React from 'react';
import PropTypes from 'prop-types';
import withTransitions from '../../HOCs/withTransitions';

function SectionHeader (props) {
  const setRef = props.transition;
  const visible = props.visible;

  return (
    <div ref={setRef}>
      <div className={`text-wrapper ${visible ? 'p-zoom-out__animation' : ''}`}>
        <h6>{props.secondaryTxt}</h6>
        <h2 className="mb-3 p-title">{props.primaryTxt}</h2>
      </div>
    </div>
  );
}

SectionHeader.propTypes = {
  secondaryTxt: PropTypes.string.isRequired,
  primaryTxt: PropTypes.string.isRequired,
  transition: PropTypes.func,
  visible: PropTypes.bool
};

export default withTransitions(SectionHeader);
