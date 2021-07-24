import './projects.scss';
import Poster1x from  '../../assets/images/poster1-1x.png';
import Poster2x from  '../../assets/images/poster1-2x.png';
import Poster2 from  '../../assets/images/poster2.jpeg';
import Poster3 from  '../../assets/images/poster3.jpeg';

function Projects() {

  return (
    <section id = "projects">
      <div>
        <div className="text-wrapper">
          <h6 className="p-subtitle">some work I have done</h6>
          <h2 className="mb-3 p-title">Case Studies</h2>
        </div>
        <div className="p-slider">
          <div className="p-banner">
            <img src= {Poster1x} srcSet={`${Poster1x} 1x, ${Poster2x} 2x`} alt = "banner 1" />
          </div>
          <div className="p-banner">
            <img src= {Poster2} srcSet={`${Poster2} 1x, ${Poster2} 2x`} alt = "banner 2" />
          </div>
          {/* <div className="p-banner">
            <img src= {Poster3} srcSet={`${Poster3} 1x, ${Poster3} 2x`} alt = "banner 3" />
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Projects;
