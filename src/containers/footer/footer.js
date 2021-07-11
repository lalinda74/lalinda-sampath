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
            <a>Dribble</a>
          </li>
          <li>
            <a>Spotify</a>
          </li>
          <li>
            <a>Medium</a>
          </li>
          <li>
            <a>LinkedIn</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
