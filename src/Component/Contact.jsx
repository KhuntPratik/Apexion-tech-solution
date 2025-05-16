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

  return (
    <section className="py-5 bg-white" id="contact">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold">Contact Us</h2>
          <p className="text-muted">Get in touch with us for your IT solutions</p>
        </div>

        <div className="row g-5">
          <div className="col-lg-5" data-aos="fade-right">
            {[
              { icon: '📍', title: 'Our Location', text: 'Rajkot, Gujarat, India - 3604005' },
              { icon: '📞', title: 'Phone Number', text: '+91 8780777688' },
              { icon: '✉️', title: 'Email Address', text: 'apexiontechsolutions@gmail.com' },
              { icon: '⏰', title: 'Working Hours', text: 'Mon - Sat: 8.00 am - 7.00 pm' }
            ].map((item, index) => (
              <div className="d-flex mb-4" key={index}>
                <div
                  className="bg-light rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: '60px', height: '60px', fontSize: '1.5rem' }}
                >
                  {item.icon}
                </div>
                <div className="ms-3">
                  <h5>{item.title}</h5>
                  <p className="text-muted mb-0">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="col-lg-7" data-aos="fade-left">
            <form onSubmit={handleSubmit} className="bg-light p-4 p-md-5 rounded shadow-sm">
              {['name', 'email', 'phone', 'subject'].map((field, idx) => (
                <div className="mb-3" key={idx}>
                  <input
                    type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                    className="form-control"
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                    required
                  />
                </div>
              ))}

              <div className="mb-3">
                <textarea
                  className="form-control"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
