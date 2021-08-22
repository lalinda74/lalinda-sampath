import PropTypes from 'prop-types';

function Tile (props) {
  return (
    <section className="tile">
      <div className="p-subtitle">{props.company}</div>
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
