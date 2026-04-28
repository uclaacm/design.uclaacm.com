import './Whatis.css';

function AboutUs() {
  return (
    <section className="whatis">

      {/* Top row: title + body | fox */}
      <div className="whatis__top">
        <div className="whatis__intro">
          <h2 className="whatis__title">
            <span className="whatis__title--dark">What is </span>
            <span className="whatis__title--gradient">ACM Design?</span>
          </h2>
          <p className="whatis__body">
            Our mission is to design, manage, and support the visual identity of ACM at
            UCLA. We create the club's branding, event banners, and more elements,
            while also doing workshops to teach UI/UX to the UCLA community.
          </p>
        </div>
        <img src="/images/Sleepy-Fox.svg" className="whatis__fox" alt="ACM Design Fox" />
      </div>

      {/* Three cards */}
      <div className="whatis__cards">

        <div className="whatis__card">
          <img src="/images/Visual-Core.svg" className="whatis__card-img" alt="ACM's visual core" />
          <h3 className="whatis__card-title">ACM's visual core</h3>
          <p className="whatis__card-body">
            We create and manage ACM at UCLA's visual identity, including the logos,
            wordmarks, motifs, banners, and complete visual identities of each committee.
          </p>
        </div>

        <div className="whatis__card">
          <img src="/images/Accessible-Design.svg" className="whatis__card-img" alt="Accessible design education" />
          <h3 className="whatis__card-title">Accessible design education</h3>
          <p className="whatis__card-body">
            We host a multitude of workshops and events to teach UI/UX design to the
            UCLA community— no prior experience required!
          </p>
        </div>

        <div className="whatis__card">
          <img src="/images/Client-Project.svg" className="whatis__card-img" alt="Client projects" />
          <h3 className="whatis__card-title">Client projects</h3>
          <p className="whatis__card-body">
            We work with startups, UCLA student organizations, and small businesses to
            create beautifully designed and scalable interfaces.
          </p>
        </div>

      </div>
    </section>
  );
}

export default AboutUs;
