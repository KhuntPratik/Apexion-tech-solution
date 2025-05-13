import { useEffect } from "react";

function Home() {
    useEffect(() => {
        const cards = document.querySelectorAll('.service-card');
        const observer = new window.IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('scroll-fade-in-up');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );
        cards.forEach(card => observer.observe(card));
        // About section animation
        const aboutSection = document.querySelector('.about-fade-in');
        if (aboutSection) {
            const aboutObserver = new window.IntersectionObserver(
                entries => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('scroll-fade-in');
                            aboutObserver.unobserve(entry.target);
                        }
                    });
                },
                { threshold: 0.15 }
            );
            aboutObserver.observe(aboutSection);
        }
        return () => observer.disconnect();
    }, []);

    return (
        <>
            {/* Animation Styles */}
            <style>{`
                @keyframes fadeInUp {
                    0% { opacity: 0; transform: translateY(40px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                .fade-in-up {
                    opacity: 0;
                    animation: fadeInUp 1s ease-out forwards;
                }
                .fade-in-up.delay-1 {
                    animation-delay: 0.3s;
                }
                .fade-in-up.delay-2 {
                    animation-delay: 0.6s;
                }
                .service-img {
                    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .service-card {
                    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    opacity: 0;
                    transform: translateY(40px);
                }
                .service-card:hover {
                    transform: scale(1.10);
                    box-shadow: 0 8px 32px rgba(0,0,0,0.18);
                    z-index: 2;
                }
                .scroll-fade-in-up {
                    animation: fadeInUp 0.8s cubic-bezier(0.5, 0, 0.2, 1) forwards;
                }
                @keyframes fadeIn {
                    0% { opacity: 0; transform: translateY(40px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                .scroll-fade-in {
                    animation: fadeIn 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                }
            `}</style>

            {/* Hero Section */}
            <div 
                className="hero-section d-flex align-items-center justify-content-center text-center"
                style={{
                    backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/Images/hero-image.jpeg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    minHeight: '80vh',
                }}
            >
                <div className="container">
                    <h1 className="display-2 fw-bold text-white mb-3 fade-in-up">Apexion Web Solution</h1>
                    <p className="lead text-white mb-4 fs-3 fade-in-up delay-1">
                        Transforming ideas into digital excellence.<br />Your trusted partner in innovative web solutions.
                    </p>
                    <button className="btn btn-primary btn-lg px-5 py-3 shadow fade-in-up delay-2">
                        Get Started
                    </button>
                </div>
            </div>

            {/* About the Company */}
            <div className="container py-5 about-fade-in" style={{ opacity: 0 }}>
              <div className="row align-items-center">
                <div className="col-md-6 mb-4 mb-md-0">
                  <h2 className="fw-bold mb-3">Who We Are</h2>
                  <p style={{fontSize: '1.1rem'}}>
                    <strong>Apexion Web Solution</strong> is a forward-thinking technology company dedicated to empowering businesses through innovative digital solutions. Founded by a team of passionate tech enthusiasts, we have grown into a trusted partner for organizations seeking to transform their digital presence and drive sustainable growth.
                  </p>
                  <p style={{fontSize: '1.1rem'}}>
                    Our expertise spans web and mobile development, digital marketing, and IT consulting. We pride ourselves on our client-centric approach, commitment to quality, and relentless pursuit of excellence. At AN Infoway, we believe in building long-term relationships and delivering solutions that make a real difference.
                  </p>
                </div>
                <div className="col-md-6 text-center">
                  <img
                    src="/Images/hero-image.jpeg"
                    alt="Apexion Web Solution Team"
                    className="img-fluid rounded shadow"
                    style={{maxHeight: '320px', objectFit: 'cover'}}
                  />
                </div>
              </div>
            </div>

            {/* Features Section */}
            <div className="features-section py-5">
                <div className="container">
                    <h2 className="text-center mb-5">Our Services</h2>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="card h-100 shadow-sm service-card">
                                <img src="/Images/service1.jpeg" alt="Web Development" className="card-img-top service-img" style={{height: '180px', objectFit: 'cover'}} />
                                <div className="card-body text-center">
                                    <i className="fas fa-laptop-code fa-3x mb-3 text-primary"></i>
                                    <h3 className="card-title h5">Web Development</h3>
                                    <p className="card-text">
                                        Custom websites built with the latest technologies
                                        and best practices.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 shadow-sm service-card">
                                <img src="/Images/service2.jpeg" alt="Mobile Solutions" className="card-img-top service-img" style={{height: '180px', objectFit: 'cover'}} />
                                <div className="card-body text-center">
                                    <i className="fas fa-mobile-alt fa-3x mb-3 text-primary"></i>
                                    <h3 className="card-title h5">Mobile Solutions</h3>
                                    <p className="card-text">
                                        Responsive designs that work perfectly on all devices
                                        and screen sizes.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 shadow-sm service-card">
                                <img src="/Images/hero-image.jpeg" alt="Digital Marketing" className="card-img-top service-img" style={{height: '180px', objectFit: 'cover'}} />
                                <div className="card-body text-center">
                                    <i className="fas fa-chart-line fa-3x mb-3 text-primary"></i>
                                    <h3 className="card-title h5">Digital Marketing</h3>
                                    <p className="card-text">
                                        Strategic marketing solutions to grow your online
                                        presence.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action Section */}
            <div className="cta-section py-5 bg-primary text-white">
                <div className="container text-center">
                    <h2 className="mb-4">Ready to Start Your Project?</h2>
                    <p className="lead mb-4">
                        Let's work together to bring your vision to life.
                    </p>
                    <button className="btn btn-light btn-lg">Contact Us</button>
                </div>
            </div>
        </>
    );
}

export default Home;
