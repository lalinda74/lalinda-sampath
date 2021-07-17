import './footer.scss';

function Footer() {

  return (
    <footer className="wrapper wrapper--slim p-footer">
      <div>
        <h6 className="p-label-emp">Don't be a stranger</h6>
        <h2 className="p-title">Let's Connect</h2>
      </div>
      <div>
        <h3 className="p-subtitle p-footer__email">diaslalinda@gmail.com</h3>
        <ul className="p-row">
          <li>
            <a className="p-link p-link--plain p-link--medium" href="https://dribbble.com/lalinda" target="_blank" rel="noreferrer">Dribble</a>
          </li>
          <li>
            <a className="p-link p-link--plain p-link--medium" href="https://twitter.com/laliyaD" target="_blank" rel="noreferrer">Twitter</a>
          </li>
          <li>
            <a className="p-link p-link--plain p-link--medium" href="https://medium.com/@diaslalinda" target="_blank" rel="noreferrer">Medium</a>
          </li>
          <li>
            <a className="p-link p-link--plain p-link--medium" href="https://www.linkedin.com/in/lalindasampath/" target="_blank" rel="noreferrer">LinkedIn</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
