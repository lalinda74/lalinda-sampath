import './App.scss';
import LandingPage from './containers/landing-page/landing-page';
import Experience from './containers/experience/experience';
import Projects from './containers/projects/projects';
import Stories from  './containers/stories/stories';

function App() {
  return (
    <div className="container-fluid no-gutters parent-wrapper">
      <LandingPage />
      <Experience />
      {/* <Projects /> */}
      <Stories />
    </div>
  );
}

export default App;
