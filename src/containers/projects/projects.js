import './projects.scss';
import Tile from '../../components/tile/tile';

function Projects() {

  const commonProps = {company: 'Shopify',position: 'UI/UX Engineer', duration: 'July, 2019'};

  return (
    <section className="">
      <div className="wrapper">
        <h6 className="p-label-emp">some work I have done</h6>
        <h2 className="mb-3 p-title">Case Studies</h2>
      </div>
      <div className="d-flex">
        <div className="mx-3 p-banner"></div>
        <div className="mx-3 p-banner"></div>
        <div className="mx-3 p-banner"></div>
      </div>
    </section>
  );
}

export default Projects;
