import Tile from '../../components/tile/tile';

function Experience () {
  // Array object of experience list
  const List = [
    { company: 'Axiata Digital Labs', position: 'Senior UI/UX Engineer', duration: 'May, 2019 - Present' },
    { company: 'CodeGen', position: 'Senior UI/UX Engineer', duration: 'February, 2017 - April, 2019' },
    { company: 'Virtusa', position: 'Associate UI/UX Engineer', duration: 'December, 2015 - January, 2017' }
  ];

  /**
   * Construct experience blocks
   * @param {Object} props
   * @returns HTML block
   */
  function ShowExp (props) {
    const ExpList = props.list;
    const ListItems = ExpList.map((item, i) =>
      <li key= {i}>
        <Tile {...item} />
      </li>
    );
    return (
      <ul className="blocks">{ListItems}</ul>
    );
  }

  return (
    <section className="wrapper wrapper--col-1 wrapper--slim" id="experience">
      <p className="p-txt-lg">I have 6 years of experience working in tech both in <br />local and international level.</p>
      <ShowExp list={List} />
    </section>
  );
}

export default Experience;
