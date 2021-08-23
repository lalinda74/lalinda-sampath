import React from 'react';

function Footer () {
  return (
    <footer className="wrapper wrapper--slim p-footer">
      <div>
        <h6 className="p-subtitle">Don{"'"}t be a stranger</h6>
        <h2 className="p-title">Let{"'"}s Connect</h2>
      </div>
      <div>
        <div className="p-subtitle mb-1">diaslalinda@gmail.com</div>
        <ul className="p-row">
          <li>
            <a className="p-link p-link--small p-link--plain p-link--medium" href="https://dribbble.com/lalinda" target="_blank" rel="noopener noreferrer">Dribble</a>
          </li>
          <li>
            <a className="p-link p-link--small p-link--plain p-link--medium" href="https://twitter.com/laliyaD" target="_blank" rel="noopener noreferrer">Twitter</a>
          </li>
          <li>
            <a className="p-link p-link--small p-link--plain p-link--medium" href="https://medium.com/@diaslalinda" target="_blank" rel="noopener noreferrer">Medium</a>
          </li>
          <li>
            <a className="p-link p-link--small p-link--plain p-link--medium" href="https://www.linkedin.com/in/lalindasampath/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
