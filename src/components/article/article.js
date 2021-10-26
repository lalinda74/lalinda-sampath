import React from 'react';
import PropTypes from 'prop-types';

function Article (props) {
  return (
    <a className="article" aria-label="article" href={props.src} target="_blank" rel="noreferrer">
      <div>
        <h4>{props.title}</h4>
        <p className="p-txt-md article__desc">{props.desc}</p>
        <label className="p-txt-label">Read the whole story</label>
      </div>
      <aside>
        <picture>
          <img src={props.img} loading = "lazy" className="article__image" alt={props.title} />
        </picture>
      </aside>
    </a>
  );
}

Article.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
};

export default Article;
