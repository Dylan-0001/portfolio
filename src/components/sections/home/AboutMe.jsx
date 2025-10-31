
export const AboutMe = () => {
  return (
    <section className="about-me">
      <img className="about-line" src="/lines/about-line.png" alt="about line" />
      <div className="about-me__container">
        <h2 className="about-me__title">ABOUT ME</h2>

        <div className="about-me__content">
          <p className="about-me__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut
            aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem.
            Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl. Donec vel
            porttitor libero. Donec sit amet interdum risus. Donec ut risus lectus.
          </p>

          <div className="about-me__profile">
            <img
              src="/images/bit-mojie.png"
              alt="Dylan Avatar"
              className="about-me__avatar"
            />
            <div className="about-me__info">
              <h3 className="about-me__name">Dylan</h3>
              <p className="about-me__role">Full Stack Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};