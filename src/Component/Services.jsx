import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Custom website development with modern technologies and responsive design.'
    },
    {
      icon: '📱',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android.'
    },
    {
      icon: '🔍',
      title: 'SEO Services',
      description: 'Search engine optimization to improve your online visibility.'
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Creative and user-friendly interface designs for better user experience.'
    },
    {
      icon: '📊',
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to grow your business.'
    },
    {
      icon: '🛡️',
      title: 'IT Consulting',
      description: 'Expert IT consulting services to optimize your business processes.'
    }
  ];

  return (
    <section className="py-5 bg-white" id="services">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-down">
          <h2 className="fw-bold">Our Services</h2>
          <p className="text-muted">Comprehensive IT solutions to meet your business needs</p>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div
              className="col-md-6 col-lg-4"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100} // Staggered animation
            >
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body text-center">
                  <div className="display-4 mb-3">{service.icon}</div>
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text text-muted">{service.description}</p>
                  <a
                    href="#contact"
                    className="text-primary fw-medium text-decoration-none d-inline-flex align-items-center"
                  >
                    Learn More <span className="ms-2">&#8594;</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
