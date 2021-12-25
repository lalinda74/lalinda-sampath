import React from 'react';
import PropTypes from 'prop-types';
import withTransitions from '../../HOCs/withTransitions';
import SectionHeader from '../../components/section-header/section-header';
import { ArticlesConfig } from '../../configs/Articles.config';
import Article from '../../components/article/article';

function Stories (props) {
  const setRef = props.transition;
  const visible = props.visible;
  const articlesList = ArticlesConfig;

  const showArticles = (articles) => {
    const listItems = articles.map((item, i) =>
            <li key={i} className={`${visible ? 'p-slideup' : ''}`}>
                <Article {...item}/>
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
              <SectionHeader secondaryTxt="I SHARE" primaryTxt="Stories and Learnings"></SectionHeader>
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
