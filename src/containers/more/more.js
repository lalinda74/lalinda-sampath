import './more.scss';
import Gallery1 from '../../assets/images/gallery1.jpeg';
import Gallery1x from '../../assets/images/gallery1-1x.jpg';
import Gallery2 from '../../assets/images/gallery2.jpeg';
import Gallery3 from '../../assets/images/gallery3.jpeg';
import Gallery4 from '../../assets/images/gallery4.jpeg';

function More() {

  return (
    <section className="">
      <div className="wrapper wrapper--slim">
        <h6>BUT WAIT - </h6>
        <h2 className="mb-3 p-title">There's more</h2>
        <p className="p-txt-md mt-3">Other than my passion towards tech and design, I have strong interests in fitness, travel. <br/>Oh, wanna know about my 🦄 story ?</p>
      </div>
      {/* <div className="gallery">
        <picture>
          <img src = {`${Gallery1}?tr=w-1,h-1:w-400,h-300`} srcSet={`${Gallery1x} 1x, ${Gallery1} 2x`} loading = "lazy" className="gallery__img" alt="banner 1"/>
        </picture>
        <picture>
          <img src = {Gallery2} loading = "lazy" className="gallery__img" alt="banner 1"/>
        </picture>
        <picture>
          <img src = {Gallery3} loading = "lazy" className="gallery__img" alt="banner 1"/>
        </picture>
        <picture>
          <img src = {Gallery4} loading = "lazy" className="gallery__img" alt="banner 1"/>
        </picture>
      </div> */}
    </section>
  );
}

export default More;
