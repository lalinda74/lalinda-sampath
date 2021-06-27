import './tile.scss';

function Tile(props) {
  return (
    <section className="tile">
      <h3 className="p-subtitle">{props.company}</h3>
      <p className="p-txt-md">{props.position}</p>
      <label className="p-txt-label">{props.duration}</label>
    </section>
  );
}

export default Tile;
