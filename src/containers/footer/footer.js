import React from 'react';
import SectionHeader from '../../components/section-header/section-header';

function Footer () {
  return (
    <footer className="wrapper wrapper--slim p-footer">
      <SectionHeader secondaryTxt="Don't be a stranger" primaryTxt="Let's Connect"></SectionHeader>
      <div className="p-footer__contacts">
        <h4 className="p-footer__email-addr mb-2">diaslalinda@gmail.com</h4>
        <ul className="p-row">
          <li>
            <a className="p-link p-link--small p-link--plain p-link--medium" aria-label="Dribble" href="https://dribbble.com/lalinda" target="_blank" rel="noopener noreferrer">Dribble</a>
          </li>
          <li>
            <a className="p-link p-link--small p-link--plain p-link--medium" aria-label="Twitter" href="https://twitter.com/laliyaD" target="_blank" rel="noopener noreferrer">Twitter</a>
          </li>
          <li>
            <a className="p-link p-link--small p-link--plain p-link--medium" aria-label="Medium" href="https://medium.com/@diaslalinda" target="_blank" rel="noopener noreferrer">Medium</a>
          </li>
          <li>
            <a className="p-link p-link--small p-link--plain p-link--medium" aria-label="LinkedIn" href="https://www.linkedin.com/in/lalindasampath/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
