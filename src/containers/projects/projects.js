import React from 'react';
import './projects.scss';
// import PosterOne1x from  '../../assets/images/poster1-1x.png';
import PosterOne2x from  '../../assets/images/poster1-2x.png';
import PosterTwo2x from  '../../assets/images/poster2-2x.png';
// import Poster3 from  '../../assets/images/poster3.jpeg';

function useOnScreen(options) {
  const [ref, setRef] = React.useState(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (visible === false) {
          setVisible(entry.isIntersecting);
      }
    }, options);

    if (ref) {
      observer.observe(ref);
    }

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref, options, visible])

  return [setRef, visible];
}

function Projects() {

  const [setRef, visible] = useOnScreen({threshold: '0.2'});

  return (
    <section id = "projects" ref={setRef}>
      <div>
        <div className="text-wrapper">
          <h6>some work I have done</h6>
          <h2 className="mb-3 p-title">Case Studies</h2>
        </div>
        <div className="p-slider">
          <div className="p-banner">
            <a href = "https://www.behance.net/gallery/121582261/Camp-Search-mobile-app" target="_blank" rel="noreferrer">
              <img src= {PosterOne2x} srcSet={`${PosterOne2x} 1x, ${PosterOne2x} 2x`} className={`${visible ? "p-zoom-out__animation" : "p-zoom-out__initial"}`} loading = "lazy" alt = "banner 1" />
            </a>
          </div>
          <div className="p-banner">
            <a href = "https://www.behance.net/gallery/75218035/B2B-Travel-Itinerary" target="_blank" rel="noreferrer">
              <img className={`${visible ? "p-zoom-out__animation" : "p-zoom-out__initial"}`} src= {PosterTwo2x} srcSet={`${PosterTwo2x} 1x, ${PosterTwo2x} 2x`} loading = "lazy" alt = "banner 2" />
            </a>
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
