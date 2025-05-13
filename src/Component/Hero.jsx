
const Hero = () => {
  return (
    <section className="py-5 bg-light" id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Text Content */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h1 className="display-5 fw-bold text-dark mb-4">
              Your Trusted Partner for IT Solutions & Services
            </h1>
            <p className="lead text-secondary mb-4">
              We provide cutting-edge technology solutions to help businesses grow and succeed in the digital world.
            </p>
            <div className="d-flex gap-3 mb-4">
              <button className="btn btn-primary btn-lg">Get Started</button>
              <button className="btn btn-outline-primary btn-lg">Learn More</button>
            </div>
            <div className="row text-center">
              <div className="col-4">
                <h3 className="text-primary fw-bold">500+</h3>
                <p className="text-muted mb-0">Projects Completed</p>
              </div>
              <div className="col-4">
                <h3 className="text-primary fw-bold">300+</h3>
                <p className="text-muted mb-0">Happy Clients</p>
              </div>
              <div className="col-4">
                <h3 className="text-primary fw-bold">10+</h3>
                <p className="text-muted mb-0">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="col-lg-6 text-center">
            <img
              src="/Images/hero-image.jpeg"
              alt="IT Solutions"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

