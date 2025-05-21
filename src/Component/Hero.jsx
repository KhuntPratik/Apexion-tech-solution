import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="hero-section position-relative overflow-hidden"
      id="home"
      style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
      }}
    >
      {/* Animated Background Elements */}
      <div className="animated-bg">
        <div className="gradient-sphere" style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(99, 102, 241, 0) 70%)',
          top: '-200px',
          right: '-200px',
          borderRadius: '50%',
          animation: 'pulse 8s infinite'
        }}></div>
        <div className="gradient-sphere" style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(139, 92, 246, 0) 70%)',
          bottom: '-100px',
          left: '-100px',
          borderRadius: '50%',
          animation: 'pulse 6s infinite'
        }}></div>
      </div>

      <div className="container-fluid py-5">
        <div className="row align-items-center">
          {/* Text Content */}
          <div className="col-lg-6" data-aos="fade-right">
            <div className="hero-content px-4">
              <span className="badge-custom mb-4" style={{
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                color: 'white',
                padding: '0.5rem 1.5rem',
                borderRadius: '50px',
                fontSize: '0.9rem',
                fontWeight: '600',
                display: 'inline-block',
                boxShadow: '0 4px 15px rgba(99, 102, 241, 0.3)'
              }}>
                Welcome to Apexion
              </span>
              <h1 className="hero-title mb-4" style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: '800',
                color: 'white',
                lineHeight: '1.2',
                marginBottom: '1.5rem'
              }}>
                Transforming Ideas into{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  Digital Success
                </span>
              </h1>
              <p className="hero-description mb-5" style={{
                fontSize: '1.1rem',
                color: '#94a3b8',
                maxWidth: '600px',
                lineHeight: '1.8'
              }}>
                We craft innovative IT solutions to streamline your operations, amplify your reach, and accelerate your growth.
              </p>
              <div className="d-flex gap-4">
                <button className="btn-custom-primary" style={{
                  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                  color: 'white',
                  padding: '1rem 2rem',
                  borderRadius: '12px',
                  border: 'none',
                  fontWeight: '600',
                  fontSize: '1.1rem',
                  boxShadow: '0 4px 15px rgba(99, 102, 241, 0.3)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}>
                  Get Started
                </button>
                <button className="btn-custom-outline" style={{
                  background: 'transparent',
                  color: 'white',
                  padding: '1rem 2rem',
                  borderRadius: '12px',
                  border: '2px solid rgba(99, 102, 241, 0.5)',
                  fontWeight: '600',
                  fontSize: '1.1rem',
                  transition: 'all 0.3s ease'
                }}>
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="col-lg-6 position-relative text-center mt-5 mt-lg-0" data-aos="zoom-in">
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
                alt="IT Solutions"
                className="hero-image"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '20px',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                  position: 'relative',
                  zIndex: '1'
                }}
              />
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
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }

        .btn-custom-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(99, 102, 241, 0.4);
        }

        .btn-custom-outline:hover {
          background: rgba(99, 102, 241, 0.1);
          border-color: #6366f1;
          transform: translateY(-3px);
        }

        .hero-image {
          transition: transform 0.3s ease;
        }

        .hero-image:hover {
          transform: scale(1.02);
        }
      `}</style>
    </section>
  );
};

export default Hero;
