import Tile from '../../components/tile/tile';

function Experience() {

  const list = [
    { company: 'Axiata Digital Labs', position: 'Senior UI/UX Engineer', duration: 'May, 2019 - Present' },
    { company: 'CodeGen', position: 'Senior UI/UX Engineer', duration: 'February, 2017 - April, 2019' },
    { company: 'Virtusa', position: 'Associate UI/UX Engineer', duration: 'December, 2015 - January, 2017' }
  ];

  function Test(props) {
    const expList = props.list;
    const listItems = expList.map((item, i) =>
      <li key= {i}>
        <Tile {...item} />
      </li>
    );
    return (
      <ul className="blocks">{listItems}</ul>
    );
  }

  return (
    <section className="wrapper wrapper--col-1 wrapper--slim" id="experience">
      <p className="p-txt-lg">I have 6 years of experience working in tech both in <br />local and international level.</p>
      <Test list={list} />
    </section>
  );
}

export default Experience;
