import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const features = [
    {
      icon: '🎯',
      title: 'Our Mission',
      description: 'To provide innovative IT solutions that empower businesses to achieve their goals.'
    },
    {
      icon: '👀',
      title: 'Our Vision',
      description: 'To be the leading IT solutions provider, recognized for excellence and innovation.'
    },
    {
      icon: '💡',
      title: 'Our Values',
      description: 'Integrity, innovation, excellence, and customer satisfaction drive everything we do.'
    }
  ];

  return (
    <section className="py-5 bg-white" id="about">
      <div className="container py-5">
        <div className="row align-items-center g-5">
          {/* Image Section */}
          <div className="col-lg-6 position-relative text-center" data-aos="fade-right">
            <div
              className="position-absolute bg-primary rounded-circle"
              style={{
                width: '350px',
                height: '350px',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                opacity: 0.1,
                zIndex: 0
              }}
            ></div>
            <img
              src="/Images/hero-image.jpeg"
              alt="About Apexion Tech Solution"
              className="img-fluid rounded-4 shadow-lg position-relative"
              style={{ maxHeight: '450px', objectFit: 'cover', zIndex: 1 }}
            />
            <div
              className="position-absolute bg-primary text-white d-flex flex-column align-items-center justify-content-center rounded-circle shadow"
              style={{
                bottom: '-20px',
                right: '-20px',
                width: '120px',
                height: '120px',
                zIndex: 2
              }}
            >
              <span className="fs-3 fw-bold">10+</span>
              <span className="small">Years Experience</span>
            </div>
          </div>

          {/* Content Section */}
          <div className="col-lg-6" data-aos="fade-left">
            <div className="mb-4">
              <h2 className="fw-bold display-5">About Apexion</h2>
              <p className="text-muted fs-5">Your trusted partner in digital transformation</p>
            </div>
            <p className="text-secondary mb-4">
              At Apexion Tech Solution, we specialize in helping businesses evolve in today’s fast-paced digital landscape.
              With over a decade of experience, we deliver solutions that are smart, scalable, and customer-focused.
            </p>

            {/* Feature Cards */}
            <div className="row">
              {features.map((feature, index) => (
                <div
                  className="col-sm-6 col-md-4 mb-4"
                  key={index}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <div className="bg-light p-4 rounded-4 h-100 shadow-sm text-center">
                    <div className="fs-1 mb-3">{feature.icon}</div>
                    <h5 className="fw-semibold mb-2">{feature.title}</h5>
                    <p className="text-muted small mb-0">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
