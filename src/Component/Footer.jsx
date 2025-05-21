import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  const socialLinks = [
    { icon: 'fab fa-facebook-f', url: '#', gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)' },
    { icon: 'fab fa-twitter', url: '#', gradient: 'linear-gradient(135deg, #3b82f6 0%, #2dd4bf 100%)' },
    { icon: 'fab fa-linkedin-in', url: '#', gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)' },
    { icon: 'fab fa-instagram', url: '#', gradient: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)' }
  ];

  const quickLinks = [
    { name: 'Home', url: '#home' },
    { name: 'About', url: '#about' },
    { name: 'Services', url: '#services' },
    { name: 'Projects', url: '#projects' },
    { name: 'Contact', url: '#contact' }
  ];

  const services = [
    { name: 'Web Development', url: '#services' },
    { name: 'Mobile Apps', url: '#services' },
    { name: 'SEO Services', url: '#services' },
    { name: 'UI/UX Design', url: '#services' },
    { name: 'Digital Marketing', url: '#services' }
  ];

  const contactInfo = [
    { 
      icon: 'fas fa-map-marker-alt', 
      text: 'Rajkot, Gujarat, India - 3604005', 
      gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
      iconSize: '1.2rem'
    },
    { 
      icon: 'fas fa-phone-alt', 
      text: '+91 8780777688', 
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #2dd4bf 100%)',
      iconSize: '1.2rem'
    },
    { 
      icon: 'fas fa-envelope', 
      text: 'apexiontechsolutions@gmail.com', 
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
      iconSize: '1.2rem'
    },
    { 
      icon: 'far fa-clock', 
      text: 'Mon - Sat: 8.00 am - 7.00 pm', 
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
      iconSize: '1.2rem'
    }
  ];

  return (
    <footer 
      className="position-relative overflow-hidden" 
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        padding: '5rem 0 2rem'
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
        <div className="row g-4">
          {/* Company Info */}
          <div className="col-md-4 mb-4">
            <h4 
              className="gradient-text mb-3" 
              style={{
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: '1.5rem',
                fontWeight: '700'
              }}
            >
              Apexion Tech Solution
            </h4>
            <p className="text-white-50 mb-4" style={{ fontSize: '1rem', lineHeight: '1.8' }}>
              Your trusted partner for IT solutions and services. We help businesses
              grow and succeed in the digital world.
            </p>
            <div className="d-flex gap-3">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  className="social-icon"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '12px',
                    background: social.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    fontSize: '1.2rem'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-5px)';
                    e.target.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h5 className="text-white mb-3" style={{ fontSize: '1.1rem', fontWeight: '600' }}>Quick Links</h5>
            <ul className="list-unstyled">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url} 
                    className="footer-link d-block mb-2"
                    style={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      fontSize: '0.95rem'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#6366f1';
                      e.target.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = 'rgba(255, 255, 255, 0.7)';
                      e.target.style.transform = 'translateX(0)';
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-md-3 mb-4">
            <h5 className="text-white mb-3" style={{ fontSize: '1.1rem', fontWeight: '600' }}>Our Services</h5>
            <ul className="list-unstyled">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.url} 
                    className="footer-link d-block mb-2"
                    style={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      fontSize: '0.95rem'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#6366f1';
                      e.target.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = 'rgba(255, 255, 255, 0.7)';
                      e.target.style.transform = 'translateX(0)';
                    }}
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 mb-4">
            <h5 className="text-white mb-3" style={{ fontSize: '1.1rem', fontWeight: '600' }}>Contact Info</h5>
            <ul className="list-unstyled">
              {contactInfo.map((info, index) => (
                <li key={index} className="mb-3 d-flex align-items-center">
                  <div
                    className="icon-container me-3"
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '12px',
                      background: info.gradient,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      transition: 'all 0.3s ease',
                      fontSize: info.iconSize
                    }}
                  >
                    <i className={info.icon}></i>
                  </div>
                  <span className="text-white-50" style={{ fontSize: '0.95rem' }}>{info.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div 
          className="text-center pt-4 mt-4"
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <p className="text-white-50 mb-0" style={{ fontSize: '0.9rem' }}>
            &copy; {new Date().getFullYear()} Apexion Tech Solution. All rights reserved.
          </p>
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

        .social-icon:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .footer-link:hover {
          color: #6366f1 !important;
          transform: translateX(5px);
        }

        .icon-container:hover {
          transform: scale(1.1);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
