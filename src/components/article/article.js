import './article.scss';
import Image from '../../assets/images/profile-image.jpeg';

function Article(props) {
  return (
    <section className="article">
        <div>
          <a className="article__title">Disabled buttons don't have to suck</a>
          <p className="p-txt-md article__desc">Three alternative solutions other than disabling buttons</p>
        </div>
        <aside>
            <picture>
                <img src = {Image} className="article__image"/>
            </picture>
        </aside>
    </section>
  );
}

export default Article;
