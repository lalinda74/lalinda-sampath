import './landing-page.scss';
import logo from '../../assets/images/profile-image.jpeg';

function LandingPage() {
  return (
    <section className="d-flex align-items-center mx-5 wrapper wrapper--fh wrapper-plain">
      <span className="mr-5">
        <h1 className="mb-3 p-title">Lalinda Sampath Dias</h1>
        <p className="p-txt-body">Product designer, UI developer, and team player. I design for impact, give design talks, share learnings on Medium, and play on Dribbble. Currently at Shopify</p>
      </span>
      <span>
        <img src={logo} alt="profile" className="profile-image" />
      </span>
    </section>
  );
}

export default LandingPage;
