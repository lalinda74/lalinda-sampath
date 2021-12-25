import React, { Suspense } from 'react';

import './App.scss';
import LandingPage from './containers/landing-page/landing-page';

const Projects = React.lazy(() => import('./containers/projects/projects'));
const Experience = React.lazy(() => import('./containers/experience/experience'));
const Stories = React.lazy(() => import('./containers/stories/stories'));
const Footer = React.lazy(() => import('./containers/footer/footer'));
const More = React.lazy(() => import('./containers/more/more'));

function App () {
  return (
    <div className="parent-wrapper">
      <LandingPage />
      <Suspense fallback={<div></div>}>
        <Projects />
        <Experience />
        <Stories />
        <More />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
