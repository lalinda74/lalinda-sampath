import React from 'react';
import PropTypes from 'prop-types';
import withTransitions from '../../HOCs/withTransitions';
import { ArticlesConfig } from '../../configs/Articles.config';
import Article from '../../components/article/article';

function Stories (props) {
  const setRef = props.transition;
  const visible = props.visible;
  const articlesList = ArticlesConfig;

  const showArticles = (articles) => {
    const listItems = articles.map((item, i) =>
            <li key={i}>
                <Article {...item} />
            </li>
    );
    return (
            <ul className="mt-2">{listItems}</ul>
    );
  };

  return (
        <section className="wrapper" ref={setRef}>
            <div className={`p-parallax-img ${visible ? 'p-zoom-out__animation' : 'p-zoom-out__initial'}`}></div>
            <div className="content wrapper--slim">
                <div className="content__inner-wrapper">
                    <h6>I SHARE</h6>
                    <h2 className="mb-2 p-title">Stories and Learnings</h2>
                </div>
                { showArticles(articlesList) }
            </div>
        </section>
  );
}

Stories.propTypes = {
  transition: PropTypes.func,
  visible: PropTypes.bool
};

export default withTransitions(Stories, { threshold: '0.2' });
