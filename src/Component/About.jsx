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
    <section className="py-5 bg-light" id="about">
      <div className="container py-5">
        <div className="row align-items-center g-5">
          {/* Content */}
          <div className="col-lg-6" data-aos="fade-right">
            <div className="mb-4">
              <h2 className="fw-bold">About Us</h2>
              <p className="text-muted">Your trusted partner in digital transformation</p>
            </div>
            <div className="mb-4">
              <p>
                Apexion Web Solution is a leading IT solutions provider, dedicated to helping businesses thrive in the digital age.
                With over 10 years of experience, we've successfully delivered innovative solutions to clients across various industries.
              </p>
              <p>
                Our team of expert professionals combines technical expertise with creative thinking to deliver
                customized solutions that meet your unique business needs.
              </p>
            </div>

            {/* Features */}
            <div className="row">
              {features.map((feature, index) => (
                <div
                  className="col-md-4 mb-4"
                  key={index}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <div className="p-3 bg-white rounded shadow-sm h-100 text-center">
                    <div className="fs-2 mb-2">{feature.icon}</div>
                    <h5 className="fw-semibold">{feature.title}</h5>
                    <p className="text-muted small">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image with Badge */}
          <div className="col-lg-6 position-relative text-center" data-aos="fade-left">
            <img
              src="/Images/hero-image.jpeg"
              alt="About Apexion Web Solution"
              className="img-fluid rounded shadow"
            />
            <div
              className="position-absolute bg-primary text-white d-flex flex-column align-items-center justify-content-center rounded-circle shadow"
              style={{
                bottom: '-20px',
                right: '-20px',
                width: '120px',
                height: '120px'
              }}
            >
              <span className="fs-3 fw-bold">10+</span>
              <span className="lrge">Years of Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
