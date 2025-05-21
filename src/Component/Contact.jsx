import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    { 
      icon: '📍', 
      title: 'Our Location', 
      text: 'Rajkot, Gujarat, India - 3604005',
      gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)'
    },
    { 
      icon: '📞', 
      title: 'Phone Number', 
      text: '+91 8780777688',
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #2dd4bf 100%)'
    },
    { 
      icon: '✉️', 
      title: 'Email Address', 
      text: 'apexiontechsolutions@gmail.com',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)'
    },
    { 
      icon: '⏰', 
      title: 'Working Hours', 
      text: 'Mon - Sat: 8.00 am - 7.00 pm',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)'
    }
  ];

  return (
    <section 
      className="py-5 position-relative overflow-hidden" 
      id="contact"
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
            Contact Us
          </h2>
          <p className="text-white-50" style={{ fontSize: '1.1rem' }}>
            Get in touch with us for your IT solutions
          </p>
        </div>

        <div className="row g-5">
          <div className="col-lg-5" data-aos="fade-right">
            {contactInfo.map((item, index) => (
              <div 
                className="contact-info-card mb-4"
                key={index}
                style={{
                  background: 'rgba(30, 41, 59, 0.5)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  padding: '1.5rem',
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
                <div className="d-flex align-items-center">
                  <div
                    className="icon-container rounded-4 d-flex align-items-center justify-content-center"
                    style={{
                      width: '36px',
                      height: '36px',
                      fontSize: '1.1rem',
                      background: item.gradient,
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {item.icon}
                  </div>
                  <div className="ms-3">
                    <h5 className="text-white mb-1">{item.title}</h5>
                    <p className="text-white-50 mb-0">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="col-lg-7" data-aos="fade-left">
            <form 
              onSubmit={handleSubmit} 
              className="contact-form p-4 p-md-5 rounded-4"
              style={{
                background: 'rgba(30, 41, 59, 0.5)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)'
              }}
            >
              {['name', 'email', 'phone', 'subject'].map((field, idx) => (
                <div className="mb-4" key={idx}>
                  <input
                    type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                    className="form-control form-control-lg"
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    onFocus={() => setFocusedField(field)}
                    onBlur={() => setFocusedField(null)}
                    placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                    required
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '12px',
                      color: '#fff',
                      padding: '1rem',
                      transition: 'all 0.3s ease',
                      ...(focusedField === field && {
                        borderColor: '#6366f1',
                        boxShadow: '0 0 0 2px rgba(99, 102, 241, 0.2)'
                      })
                    }}
                  />
                </div>
              ))}

              <div className="mb-4">
                <textarea
                  className="form-control form-control-lg"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Your Message"
                  rows="5"
                  required
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    color: '#fff',
                    padding: '1rem',
                    transition: 'all 0.3s ease',
                    ...(focusedField === 'message' && {
                      borderColor: '#6366f1',
                      boxShadow: '0 0 0 2px rgba(99, 102, 241, 0.2)'
                    })
                  }}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn w-100 submit-btn"
                style={{
                  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '0.65rem 1rem',
                  fontSize: '0.95rem',
                  color: '#fff',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 10px 20px rgba(99, 102, 241, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                Send Message
              </button>
            </form>
          </div>
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

        .form-control:focus {
          background: rgba(255, 255, 255, 0.1) !important;
          color: #fff !important;
        }

        .form-control::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        .contact-info-card:hover .icon-container {
          transform: scale(1.1) rotate(5deg);
        }

        .icon-container {
          transition: all 0.3s ease;
        }
      `}</style>
    </section>
  );
};

export default Contact;
