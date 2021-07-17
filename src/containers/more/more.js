import './more.scss';
import Gallery1 from '../../assets/images/gallery1.jpeg';
import Gallery2 from '../../assets/images/gallery2.jpeg';
import Gallery3 from '../../assets/images/gallery3.jpeg';
import Gallery4 from '../../assets/images/gallery4.jpeg';

function More() {

  return (
    <section className="">
      <div className="wrapper wrapper--slim">
        <h6 className="p-label-emp">BUT WAIT - </h6>
        <h2 className="mb-3 p-title">There's more</h2>
      </div>
      <div className="gallery">
        <picture>
          <img src = {Gallery1} className="gallery__img" alt="banner 1"/>
        </picture>
        <picture>
          <img src = {Gallery2} className="gallery__img" alt="banner 1"/>
        </picture>
        <picture>
          <img src = {Gallery3} className="gallery__img" alt="banner 1"/>
        </picture>
        <picture>
          <img src = {Gallery4} className="gallery__img" alt="banner 1"/>
        </picture>
      </div>
    </section>
  );
}

export default More;
