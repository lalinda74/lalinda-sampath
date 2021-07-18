import './tile.scss';

function Tile(props) {
  return (
    <section className="tile">
      <div className="p-subtitle">{props.company}</div>
      <p className="p-txt-md">{props.position}</p>
      <label className="p-txt-label">{props.duration}</label>
    </section>
  );
}

export default Tile;
