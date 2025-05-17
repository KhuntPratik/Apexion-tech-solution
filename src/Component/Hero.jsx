import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="bg-white position-relative overflow-hidden"
      id="home"
      style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}
    >
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Text Content */}
          <div className="col-lg-6" data-aos="fade-right">
            <span className="badge bg-primary text-uppercase mb-3 px-3 py-2 fs-6 rounded-pill">
              Welcome to Apexion
            </span>
            <h1 className="display-3 fw-bold text-dark mb-4">
              Transforming Ideas into <span className="text-primary">Digital Success</span>
            </h1>
            <p className="lead text-secondary mb-4">
              We craft innovative IT solutions to streamline your operations, amplify your reach, and accelerate your growth.
            </p>
            <div className="d-flex gap-3">
              <button className="btn btn-primary btn-lg px-4 shadow-sm">Get Started</button>
              <button className="btn btn-outline-primary btn-lg px-4">Learn More</button>
            </div>
          </div>

          {/* Image Content */}
          <div className="col-lg-6 position-relative text-center mt-5 mt-lg-0" data-aos="zoom-in">
            <div
              className="position-absolute bg-primary rounded-circle"
              style={{
                width: '400px',
                height: '400px',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                opacity: 0.1,
                zIndex: 0,
              }}
            ></div>
            <img
              src="/Images/hero-image.jpeg"
              alt="IT Solutions"
              className="img-fluid position-relative rounded-4 shadow-lg"
              style={{ zIndex: 1, maxHeight: '450px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
