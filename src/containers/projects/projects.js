import React from 'react';
import './projects.scss';
import PosterOne1x from  '../../assets/images/poster1-1x.png';
import PosterOne2x from  '../../assets/images/poster1-2x.png';
import PosterTwo2x from  '../../assets/images/poster2-2x.png';
// import Poster3 from  '../../assets/images/poster3.jpeg';

function useOnScreen(options) {
  const [ref, setRef] = React.useState(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    }, options);

    if (ref) {
      observer.observe(ref);
    }

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref, options])

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
            <img src= {PosterOne1x} srcSet={`${PosterOne1x} 1x, ${PosterOne2x} 2x`} loading = "lazy" alt = "banner 1" />
          </div>
          <div className="p-banner">
            <img src= {PosterTwo2x} srcSet={`${PosterTwo2x} 1x, ${PosterTwo2x} 2x`} loading = "lazy" alt = "banner 2" />
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
