import React from 'react';
import PropTypes from 'prop-types';

function Tile (props) {
  return (
    <section className="p-tile">
      <h4 className="p-tile__header">{props.company}</h4>
      <p className="p-txt-md">{props.position}</p>
      <label className="p-txt-label">{props.duration}</label>
    </section>
  );
}

Tile.propTypes = {
  company: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired
};

export default Tile;
