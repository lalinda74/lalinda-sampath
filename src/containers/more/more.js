import React from 'react';
import PropTypes from 'prop-types';
import withTransitions from '../../HOCs/withTransitions';
import SectionHeader from '../../components/section-header/section-header';

function More (props) {
  const setRef = props.transition;
  const visible = props.visible;

  return (
    <section className="wrapper wrapper--slim" id="moreSection" ref={setRef}>
        <SectionHeader secondaryTxt="BUT WAIT -" primaryTxt="There's more"></SectionHeader>
        <div className={`${visible ? 'p-slideup' : ''}`}>
          <p className="p-txt-md mt-3">Other than my passion towards tech and design, I have strong interests in fitness, travel.
            <br />Oh, wanna know about my <span role="img" aria-label="Kangaroo">🦘</span> story ?</p>
          <br />
          <p className="p-txt-md">I am a front-end developer and UI designer. I{"'"}m working with talented folks at ADL and currently
          based in Colombo <span role="img" aria-label="Sri Lanka">🇱🇰</span>. I like designing for impact and empowering clients in all sizes.</p>
          <br />
          <p className="p-txt-md">I started my career 5 years ago as a UI/UX Engineer where I was able to work with world leading
          businesses.</p>
          <br />
          <p className="p-txt-md">From time to time all through out my career, I worked on design gigs from industries like
          finance, travel and telecommunication. The exposure made me a better developer and designer who loves to
          collaborate and learn from all kinds of people.</p>
          <br />
          <p className="mb-3 p-txt-md">Nice to meet you. <span role="img" aria-label="Hi">👋</span></p>
        </div>
    </section>
  );
}

More.propTypes = {
  transition: PropTypes.func,
  visible: PropTypes.bool
};

export default withTransitions(More);
