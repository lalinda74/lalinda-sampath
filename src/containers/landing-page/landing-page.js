import profileImage from '../../assets/images/profile-image.jpeg';

function LandingPage() {
  return (
    <section className="wrapper wrapper--col-2 wrapper--fh wrapper--slim" id = "landingPage">
      <span>
        <h1 className="p-title mb-1">Lalinda Sampath Dias</h1>
        <p className="p-txt-body mb-1">Front-End developer, UI/UX Engineer, and team player. I'm passionate about giving back so I share my learnings on <a className="p-link p-link--md p-link--medium" href="https://medium.com/@diaslalinda" target="_blank" rel="noreferrer">Medium</a>, and play on <a className="p-link p-link--md p-link--dribble" href="https://dribbble.com/lalinda" target="_blank" rel="noreferrer">Dribbble</a>. Currently in Sri Lanka.</p>
        <a className="scroll-btn" href="#case-study">
          <div className="scroll-down">
            <div className="mouse">
              <div className="scroller"></div>
            </div>
          </div>
        </a>
      </span>
      <span className="profile-image">
        <picture>
          <source media="(min-width: 800px)" data-srcset={profileImage} type="image/webp" srcSet={profileImage} />
          <img src={profileImage} alt="profile" className="profile-image" />
        </picture>
      </span>
    </section>
  );
}

export default LandingPage;
