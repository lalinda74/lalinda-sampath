import './projects.scss';
import Poster1 from  '../../assets/images/poster1.png';

function Projects() {

  const commonProps = {company: 'Shopify',position: 'UI/UX Engineer', duration: 'July, 2019'};

  return (
    <section className="">
      <div className="wrapper">
        <h6 className="p-label-emp">some work I have done</h6>
        <h2 className="mb-3 p-title">Case Studies</h2>
      </div>
      <div className="d-flex">
        <div className="mx-3 p-banner">
          <img src= {Poster1} alt = "banner 1" />
        </div>
        <div className="mx-3 p-banner"></div>
        <div className="mx-3 p-banner"></div>
      </div>
    </section>
  );
}

export default Projects;
