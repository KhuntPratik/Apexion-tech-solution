import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [hoveredCard, setHoveredCard] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'web',
      image: 'https://imgs.search.brave.com/94SIdy3y75ur10jSgtG3ADu247sA08E7HBLUxC5b9_Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mcmFt/ZXJ1c2VyY29udGVu/dC5jb20vaW1hZ2Vz/L2tWSWhPZjgyM0JE/M1gxOHF3WUNQZEoy/bENNLnBuZw',
      description: 'A full-featured e-commerce platform with advanced search and payment integration.',
      gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)'
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'mobile',
      image: 'https://imgs.search.brave.com/5GHgU8ETtpOnsJnDQMWvwcUmpsj3PTELbaH8x9-hN-o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9tb2JpbGUtb25s/aW5lLWJhbmtpbmct/Y29uY2VwdF8xMjg5/Mi02Mi5qcGc_c2Vt/dD1haXNfaHlicmlk',
      description: 'Secure and user-friendly mobile banking application with biometric authentication.',
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #2dd4bf 100%)'
    },
    {
      id: 3,
      title: 'CRM System',
      category: 'software',
      image: 'https://imgs.search.brave.com/m5mvCXmUNIcIsbbDb3VZv3XKUMtuaXUvKcAKuOtQDkc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTY0/MjM4MTE5OC9waG90/by9jdXN0b21lci1y/ZWxhdGlvbnNoaXAt/bWFuYWdlbWVudC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/aGV3b3VINzhJenV5/U1NTcTZRYXdOQ0JR/Q01QZmFJZkV2VFlJ/ZGhUWllKcz0',
      description: 'Comprehensive customer relationship management system for businesses.',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)'
    },
    {
      id: 4,
      title: 'Travel Website',
      category: 'web',
      image: 'https://imgs.search.brave.com/_VKIGBN6MScDYQp-A5aXGN0qlRuJMdMPSUNmVHVKFBA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtcGxhdGZvcm0u/OTlzdGF0aWMuY29t/Ly9seHpNbV9GeVBu/enpCWEdobUx1am1w/bTh4aVk9LzB4MDox/NDM5eDE0MzkvZml0/LWluLzUwMHg1MDAv/cHJvamVjdHMtZmls/ZXMvNTUvNTUwMC81/NTAwNzQvZjAwNTNk/OGMtNDUxYi00YTI4/LThiYzQtY2JjNjUw/YTE0MTIzLnBuZw',
      description: 'Modern travel booking website with real-time availability and booking system.',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)'
    },
    {
      id: 5,
      title: 'Fitness Tracking App',
      category: 'mobile',
      image: 'https://imgs.search.brave.com/VansYKLVvkVcUSk46NQSGloH7Rw3LF1moEf-yJM9Jt4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1wc2Qv/Zml0bmVzcy13b3Jr/b3V0LW1vYmlsZS1h/cHAtdWkta2l0XzU1/MzQxMy0xMzExLmpw/Zz9zZW10PWFpc19o/eWJyaWQmdw03NDA',
      description: 'Mobile app for tracking workouts, nutrition, and health metrics.',
      gradient: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)'
    },
    {
      id: 6,
      title: 'Inventory Management',
      category: 'software',
      image: 'https://imgs.search.brave.com/Eg4pEfT7z3PWrB2jmPmP19NaubmIZSL7jTdlY5CsDv0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbGVh/cmx5aW52ZW50b3J5/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxOS8wNS9pbWFn/ZWxpYnJhcnktMS0x/MDAweDU2OS5wbmc',
      description: 'Enterprise-level inventory management system with real-time tracking.',
      gradient: 'linear-gradient(135deg, #6366f1 0%, #3b82f6 100%)'
    }
  ];

  return (
    <section 
      className="py-5 position-relative overflow-hidden" 
      id="projects"
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
            Our Projects
          </h2>
          <p className="text-white-50" style={{ fontSize: '1.1rem' }}>
            Explore our latest work and success stories
          </p>
        </div>

        <div className="row g-4">
          {projects.map(project => {
            const isHovered = hoveredCard === project.id;

            return (
              <div
                className="col-md-6 col-lg-4"
                key={project.id}
                data-aos="fade-up"
                data-aos-delay={project.id * 100}
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className="card border-0 h-100"
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
                  <div
                    className="position-relative overflow-hidden"
                    style={{ 
                      aspectRatio: '16/9',
                      borderRadius: '20px 20px 0 0'
                    }}
                  >
                    <div
                      className="position-absolute w-100 h-100"
                      style={{
                        background: project.gradient,
                        opacity: isHovered ? 0.2 : 0,
                        transition: 'opacity 0.3s ease',
                        zIndex: 1
                      }}
                    ></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-100 h-100 object-fit-cover"
                      style={{
                        transition: 'all 0.4s ease',
                        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                      }}
                    />
                    <div
                      className="position-absolute top-0 end-0 m-3"
                      style={{
                        background: project.gradient,
                        padding: '0.5rem 1rem',
                        borderRadius: '10px',
                        color: 'white',
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        opacity: isHovered ? 1 : 0.8,
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {project.category}
                    </div>
                  </div>
                  <div className="card-body p-4">
                    <h5 className="card-title text-white mb-3" style={{ fontSize: '1.25rem' }}>
                      {project.title}
                    </h5>
                    <p className="card-text text-white-50 mb-4" style={{ fontSize: '1rem' }}>
                      {project.description}
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
                      View Project
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

export default Projects;
