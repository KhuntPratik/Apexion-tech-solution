import { useState } from 'react'
import '../styles/Testimonials.css'

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'John Smith',
      position: 'CEO, Tech Solutions',
      image: '/testimonial1.jpg',
      text: "AN Infoway has been instrumental in transforming our business. Their team's expertise and dedication have helped us achieve remarkable results."
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      position: 'Marketing Director, Global Brands',
      image: '/testimonial2.jpg',
      text: 'Working with AN Infoway has been a game-changer for our digital presence. Their innovative solutions have significantly improved our online performance.'
    },
    {
      id: 3,
      name: 'Michael Brown',
      position: 'CTO, Innovation Labs',
      image: '/testimonial3.jpg',
      text: 'The team at AN Infoway consistently delivers high-quality solutions. Their technical expertise and attention to detail are truly impressive.'
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-container">
        <div className="section-header">
          <h2>Client Testimonials</h2>
          <p>What our clients say about us</p>
        </div>

        <div className="testimonials-slider">
          <div 
            className="testimonials-track"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div className="testimonial-card" key={testimonial.id}>
                <div className="testimonial-content">
                  <div className="quote-icon">"</div>
                  <p>{testimonial.text}</p>
                </div>
                <div className="testimonial-author">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="slider-controls">
            <button className="slider-btn prev" onClick={prevSlide}>
              <span>←</span>
            </button>
            <div className="slider-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${currentSlide === index ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
            <button className="slider-btn next" onClick={nextSlide}>
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials 