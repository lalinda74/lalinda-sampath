import './App.scss';
import LandingPage from './containers/landing-page/landing-page';
import Experience from './containers/experience/experience';
import Projects from './containers/projects/projects';
import Stories from  './containers/stories/stories';
import Footer from './containers/footer/footer';
import More from './containers/more/more';

function App() {
  return (
    <div className="container-fluid no-gutters parent-wrapper">
      <LandingPage />
      <Projects />
      <Experience />
      <Stories />
      <More />
      <Footer />
    </div>
  );
}

export default App;
