import './article.scss';

function Article(props) {
  return (
    <a className="article" href={props.src} target="_blank" rel="noreferrer">
      <div>
        <p className="article__title">{props.title}</p>
        <p className="p-txt-md article__desc">{props.desc}</p>
        <label className="p-txt-label">Read the whole story</label>
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
