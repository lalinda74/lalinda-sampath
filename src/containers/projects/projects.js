import './projects.scss';
import Tile from '../../components/tile/tile';

function Projects() {

  const commonProps = {company: 'Shopify',position: 'UI/UX Engineer', duration: 'July, 2019'};

  return (
    <section className="d-flex align-items-center wrapper wrapper--fh">
      <div>
        <p className="p-txt-lg">I have 6 years of experience working in <br/>tech companies both in local and international level.</p>
        <div className="row mt-5">
          <div className="col-4 mt-5">
            <Tile {...commonProps} />
          </div>
          <div className="col-4 mt-5">
            <Tile {...commonProps} />
          </div>
          <div className="col-4 mt-5">
            <Tile {...commonProps} />
          </div>
          <div className="col-4 mt-5">
            <Tile {...commonProps} />
          </div>
          <div className="col-4 mt-5">
            <Tile {...commonProps} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
