import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Custom website development with modern technologies and responsive design.',
      gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)'
    },
    {
      icon: '📱',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #2dd4bf 100%)'
    },
    {
      icon: '🔍',
      title: 'SEO Services',
      description: 'Search engine optimization to improve your online visibility.',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)'
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Creative and user-friendly interface designs for better user experience.',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)'
    },
    {
      icon: '📊',
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to grow your business.',
      gradient: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)'
    },
    {
      icon: '🛡️',
      title: 'IT Consulting',
      description: 'Expert IT consulting services to optimize your business processes.',
      gradient: 'linear-gradient(135deg, #6366f1 0%, #3b82f6 100%)'
    }
  ];

  return (
    <section 
      className="py-5 position-relative overflow-hidden" 
      id="services"
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {/* Background Elements */}
      <div className="position-absolute w-100 h-100" style={{ zIndex: 0 }}>
        <div className="position-absolute" style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(99, 102, 241, 0) 70%)',
          top: '-200px',
          right: '-200px',
          borderRadius: '50%',
          animation: 'pulse 8s infinite'
        }}></div>
        <div className="position-absolute" style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(139, 92, 246, 0) 70%)',
          bottom: '-100px',
          left: '-100px',
          borderRadius: '50%',
          animation: 'pulse 6s infinite'
        }}></div>
      </div>

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="text-center mb-5" data-aos="fade-down">
          <h2 className="fw-bold gradient-text" style={{
            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            marginBottom: '1rem'
          }}>
            Our Services
          </h2>
          <p className="text-white-50" style={{ fontSize: '1.1rem' }}>
            Comprehensive IT solutions to meet your business needs
          </p>
        </div>

        <div className="row g-4">
          {services.map((service, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div
                className="col-md-6 col-lg-4"
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className="card h-100 border-0"
                  style={{
                    background: 'rgba(30, 41, 59, 0.5)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '20px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transform: isHovered ? 'translateY(-10px)' : 'none',
                    transition: 'all 0.3s ease',
                    boxShadow: isHovered 
                      ? '0 20px 40px rgba(0, 0, 0, 0.3)' 
                      : '0 4px 12px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <div className="card-body text-center p-4">
                    <div
                      className="service-icon mb-4"
                      style={{
                        width: '80px',
                        height: '80px',
                        margin: '0 auto',
                        background: service.gradient,
                        borderRadius: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'none',
                        transition: 'all 0.3s ease',
                        boxShadow: isHovered 
                          ? '0 10px 20px rgba(0, 0, 0, 0.2)' 
                          : '0 4px 12px rgba(0, 0, 0, 0.1)',
                      }}
                    >
                      <span style={{ fontSize: '2rem' }}>{service.icon}</span>
                    </div>
                    <h5 className="card-title text-white mb-3" style={{ fontSize: '1.25rem' }}>
                      {service.title}
                    </h5>
                    <p className="card-text text-white-50 mb-4" style={{ fontSize: '1rem' }}>
                      {service.description}
                    </p>
                    <a
                      href="#contact"
                      className="learn-more-link"
                      style={{
                        color: '#6366f1',
                        textDecoration: 'none',
                        fontWeight: '600',
                        display: 'inline-flex',
                        alignItems: 'center',
                        transition: 'all 0.3s ease',
                        opacity: isHovered ? 1 : 0.7,
                      }}
                    >
                      Learn More
                      <span 
                        className="ms-2"
                        style={{
                          transform: isHovered ? 'translateX(5px)' : 'none',
                          transition: 'transform 0.3s ease',
                        }}
                      >
                        &#8594;
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 0.3; }
          100% { transform: scale(1); opacity: 0.5; }
        }

        .gradient-text {
          background-size: 200% 200%;
          animation: gradientFlow 5s ease infinite;
        }

        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .learn-more-link:hover {
          color: #8b5cf6 !important;
        }
      `}</style>
    </section>
  );
};

export default Services;