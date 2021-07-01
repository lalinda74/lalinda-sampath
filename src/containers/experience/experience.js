import './experience.scss';
import Tile from '../../components/tile/tile';

function Experience() {

  const commonProps = {company: 'Shopify',position: 'UI/UX Engineer', duration: 'July, 2019'};

  return (
    <section className="d-flex align-items-center wrapper wrapper--fh">
      <div>
        <h4>I have 6 years of experience working in tech both in <br/>local and international level.</h4>
        <div className="row mt-3">
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

export default Experience;
