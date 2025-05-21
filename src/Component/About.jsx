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
      description: 'To provide innovative IT solutions that empower businesses to achieve their goals.',
      gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)'
    },
    {
      icon: '👀',
      title: 'Our Vision',
      description: 'To be the leading IT solutions provider, recognized for excellence and innovation.',
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #2dd4bf 100%)'
    },
    {
      icon: '💡',
      title: 'Our Values',
      description: 'Integrity, innovation, excellence, and customer satisfaction drive everything we do.',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)'
    }
  ];

  return (
    <section 
      className="py-5 position-relative overflow-hidden" 
      id="about"
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

      <div className="container py-5 position-relative" style={{ zIndex: 1 }}>
        <div className="row align-items-center g-5">
          {/* Image Section */}
          <div className="col-lg-6 position-relative text-center" data-aos="fade-right">
            <div className="image-container position-relative">
              <div className="floating-shapes">
                <div className="shape" style={{
                  position: 'absolute',
                  width: '100px',
                  height: '100px',
                  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                  borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                  top: '20%',
                  right: '10%',
                  animation: 'float 6s ease-in-out infinite',
                  opacity: '0.2'
                }}></div>
                <div className="shape" style={{
                  position: 'absolute',
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #3b82f6 0%, #2dd4bf 100%)',
                  borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                  bottom: '20%',
                  left: '10%',
                  animation: 'float 8s ease-in-out infinite',
                  opacity: '0.2'
                }}></div>
              </div>
              <img
                src="/Images/hero-image.jpeg"
                alt="About Apexion Tech Solution"
                className="img-fluid rounded-4 shadow-lg position-relative"
                style={{ 
                  maxHeight: '450px', 
                  objectFit: 'cover', 
                  zIndex: 1,
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'transform 0.3s ease'
                }}
              />
              <div
                className="experience-badge position-absolute d-flex flex-column align-items-center justify-content-center rounded-4 shadow-lg"
                style={{
                  bottom: '-20px',
                  right: '-20px',
                  width: '120px',
                  height: '120px',
                  zIndex: 2,
                  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  animation: 'float 6s ease-in-out infinite'
                }}
              >
                <span className="fs-3 fw-bold text-white">10+</span>
                <span className="small text-white-50">Years Experience</span>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="col-lg-6" data-aos="fade-left">
            <div className="mb-4">
              <h2 className="fw-bold gradient-text" style={{
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                marginBottom: '1rem'
              }}>
                About Apexion
              </h2>
              <p className="text-white-50 fs-5">Your trusted partner in digital transformation</p>
            </div>
            <p className="text-white-50 mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              At Apexion Tech Solution, we specialize in helping businesses evolve in today's fast-paced digital landscape.
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
                  <div 
                    className="feature-card p-4 rounded-4 h-100"
                    style={{
                      background: 'rgba(30, 41, 59, 0.5)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-5px)';
                      e.target.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    <div 
                      className="feature-icon mb-3"
                      style={{
                        width: '60px',
                        height: '60px',
                        background: feature.gradient,
                        borderRadius: '15px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto'
                      }}
                    >
                      <span className="fs-1">{feature.icon}</span>
                    </div>
                    <h5 className="fw-semibold mb-2 text-white text-center">{feature.title}</h5>
                    <p className="text-white-50 small mb-0 text-center">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 0.3; }
          100% { transform: scale(1); opacity: 0.5; }
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
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

        .feature-card:hover .feature-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .feature-icon {
          transition: all 0.3s ease;
        }
      `}</style>
    </section>
  );
};

export default About;
