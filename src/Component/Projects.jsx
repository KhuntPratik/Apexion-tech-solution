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
      description: 'A full-featured e-commerce platform with advanced search and payment integration.'
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'mobile',
      image: 'https://imgs.search.brave.com/5GHgU8ETtpOnsJnDQMWvwcUmpsj3PTELbaH8x9-hN-o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9tb2JpbGUtb25s/aW5lLWJhbmtpbmct/Y29uY2VwdF8xMjg5/Mi02Mi5qcGc_c2Vt/dD1haXNfaHlicmlk',
      description: 'Secure and user-friendly mobile banking application with biometric authentication.'
    },
    {
      id: 3,
      title: 'CRM System',
      category: 'software',
      image: 'https://imgs.search.brave.com/m5mvCXmUNIcIsbbDb3VZv3XKUMtuaXUvKcAKuOtQDkc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTY0/MjM4MTE5OC9waG90/by9jdXN0b21lci1y/ZWxhdGlvbnNoaXAt/bWFuYWdlbWVudC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/aGV3b3VINzhJenV5/U1NTcTZRYXdOQ0JR/Q01QZmFJZkV2VFlJ/ZGhUWllKcz0',
      description: 'Comprehensive customer relationship management system for businesses.'
    },
    {
      id: 4,
      title: 'Travel Website',
      category: 'web',
      image: 'https://imgs.search.brave.com/_VKIGBN6MScDYQp-A5aXGN0qlRuJMdMPSUNmVHVKFBA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtcGxhdGZvcm0u/OTlzdGF0aWMuY29t/Ly9seHpNbV9GeVBu/enpCWEdobUx1am1w/bTh4aVk9LzB4MDox/NDM5eDE0MzkvZml0/LWluLzUwMHg1MDAv/cHJvamVjdHMtZmls/ZXMvNTUvNTUwMC81/NTAwNzQvZjAwNTNk/OGMtNDUxYi00YTI4/LThiYzQtY2JjNjUw/YTE0MTIzLnBuZw',
      description: 'Modern travel booking website with real-time availability and booking system.'
    },
    {
      id: 5,
      title: 'Fitness Tracking App',
      category: 'mobile',
      image: 'https://imgs.search.brave.com/VansYKLVvkVcUSk46NQSGloH7Rw3LF1moEf-yJM9Jt4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1wc2Qv/Zml0bmVzcy13b3Jr/b3V0LW1vYmlsZS1h/cHAtdWkta2l0XzU1/MzQxMy0xMzExLmpw/Zz9zZW10PWFpc19o/eWJyaWQmdz03NDA',
      description: 'Mobile app for tracking workouts, nutrition, and health metrics.'
    },
    {
      id: 6,
      title: 'Inventory Management',
      category: 'software',
      image: 'https://imgs.search.brave.com/Eg4pEfT7z3PWrB2jmPmP19NaubmIZSL7jTdlY5CsDv0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbGVh/cmx5aW52ZW50b3J5/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxOS8wNS9pbWFn/ZWxpYnJhcnktMS0x/MDAweDU2OS5wbmc',
      description: 'Enterprise-level inventory management system with real-time tracking.'
    }
  ];

  return (
    <section className="py-5 bg-white" id="projects">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-down">
          <h2 className="fw-bold">Our Projects</h2>
          <p className="text-muted">Explore our latest work and success stories</p>
        </div>

        <div className="row g-4">
          {projects.map(project => {
            const isHovered = hoveredCard === project.id;

            return (
              <div
                className="col-md-6 col-lg-4"
                key={project.id}
                data-aos="fade-up"
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className="card border-0 shadow-sm h-100"
                  style={{
                    transform: isHovered ? 'translateY(-5px) scale(1.02)' : 'none',
                    transition: 'transform 0.3s ease',
                  }}
                >
                  <div
                    className="position-relative overflow-hidden"
                    style={{ aspectRatio: '16/9' }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-100 h-100 object-fit-cover"
                      style={{
                        transition: 'transform 0.4s ease',
                        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                      }}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text text-muted">{project.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
