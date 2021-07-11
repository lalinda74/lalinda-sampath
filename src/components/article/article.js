import './article.scss';
import Image from '../../assets/images/profile-image.jpeg';

function Article(props) {
  return (
    <a className="article" href={props.src} target="_blank">
        <div>
          <h5 className="article__title">{props.title}</h5>
          <p className="p-txt-md article__desc">{props.desc}</p>
        </div>
        <aside>
            <picture>
                <img src = {props.img} className="article__image"/>
            </picture>
        </aside>
    </a>
  );
}

export default Article;
