import './footer.scss';

function Footer() {

  const commonProps = {company: 'Shopify',position: 'UI/UX Engineer', duration: 'July, 2019'};

  return (
    <footer className="container d-flex justify-content-between align-items-center py-4 p-footer">
      <div>
        <h6 className="p-label-emp">Don't be a stranger</h6>
        <h2 className="mb-3 p-title">Let's Connect</h2>
      </div>
      <div>
          <h5 className="pb-2">diaslalinda@gmail.com</h5>
          <h6>Dribble &nbsp; &nbsp; Spotify &nbsp; &nbsp; Medium &nbsp; &nbsp; LinkedIn</h6>
      </div>
    </footer>
  );
}

export default Footer;
