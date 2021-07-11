import './footer.scss';

function Footer() {

  const commonProps = { company: 'Shopify', position: 'UI/UX Engineer', duration: 'July, 2019' };

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
            <a className="p-link p-link--plain p-link--medium">Dribble</a>
          </li>
          <li>
            <a className="p-link p-link--plain p-link--medium">Spotify</a>
          </li>
          <li>
            <a className="p-link p-link--plain p-link--medium">Medium</a>
          </li>
          <li>
            <a className="p-link p-link--plain p-link--medium">LinkedIn</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
