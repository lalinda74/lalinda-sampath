import './footer.scss';

function Footer() {

  return (
    <footer className="wrapper wrapper--slim p-footer">
      <div>
        <h6 className="p-label-emp">Don't be a stranger</h6>
        <h2 className="mb-3 p-title">Let's Connect</h2>
      </div>
      <div>
        <h5 className="pb-2">diaslalinda@gmail.com</h5>
        <ul className="p-row">
          <li>
            <a className="p-link p-link--plain p-link--medium" href="https://dribbble.com/lalinda" target="_blank">Dribble</a>
          </li>
          <li>
            <a className="p-link p-link--plain p-link--medium" href="https://twitter.com/laliyaD" target="_blank">Twitter</a>
          </li>
          <li>
            <a className="p-link p-link--plain p-link--medium" href="https://medium.com/@diaslalinda" target="_blank">Medium</a>
          </li>
          <li>
            <a className="p-link p-link--plain p-link--medium" href="https://www.linkedin.com/in/lalindasampath/" target="_blank">LinkedIn</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
