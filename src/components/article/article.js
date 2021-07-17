import './article.scss';

function Article(props) {
  return (
    <a className="article" href={props.src} target="_blank" rel="noreferrer">
      <div>
        <h5 className="article__title">{props.title}</h5>
        <p className="p-txt-md article__desc">{props.desc}</p>
      </div>
      <aside>
        <picture>
          <img src={props.img} className="article__image" alt={props.title} />
        </picture>
      </aside>
    </a>
  );
}

export default Article;
