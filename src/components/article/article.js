import './article.scss';
import Image from '../../assets/images/profile-image.jpeg';

function Article(props) {
  return (
    <a className="article">
        <div>
          <h5 className="article__title">Disabled buttons don't have to suck</h5>
          <p className="p-txt-md article__desc">Three alternative solutions other than disabling buttons</p>
        </div>
        <aside>
            <picture>
                <img src = {Image} className="article__image"/>
            </picture>
        </aside>
    </a>
  );
}

export default Article;
