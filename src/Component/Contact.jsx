import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <section className="py-5 bg-white" id="contact">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Contact Us</h2>
          <p className="text-muted">Get in touch with us for your IT solutions</p>
        </div>

        <div className="row g-5">
          <div className="col-lg-5">
            <div className="d-flex mb-4">
              <div className="bg-light rounded-circle d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', fontSize: '1.5rem' }}>
                📍
              </div>
              <div className="ms-3">
                <h5>Our Location</h5>
                <p className="text-muted mb-0">Rajkot, Gujarat, India - 3604005</p>
              </div>
            </div>

            <div className="d-flex mb-4">
              <div className="bg-light rounded-circle d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', fontSize: '1.5rem' }}>
                📞
              </div>
              <div className="ms-5">
                <h5>Phone Number</h5>
                <p className="text-muted mb-0">+91 8780777688</p>
              </div>
            </div>

            <div className="d-flex mb-4">
              <div className="bg-light rounded-circle d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', fontSize: '1.5rem' }}>
                ✉️
              </div>
              <div className="ms-3">
                <h5>Email Address</h5>
                <p className="text-muted mb-0">apexiontechsolutions@gmail.com</p>
              </div>
            </div>

            <div className="d-flex mb-4">
              <div className="bg-light rounded-circle d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', fontSize: '1.5rem' }}>
                ⏰
              </div>
              <div className="ms-3">
                <h5>Working Hours</h5>
                <p className="text-muted mb-0">Mon - Sat: 8.00 am - 7.00 pm</p>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <form onSubmit={handleSubmit} className="bg-light p-4 p-md-5 rounded shadow-sm">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="tel"
                  className="form-control"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone"
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                />
              </div>

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
  )
}

export default Contact
