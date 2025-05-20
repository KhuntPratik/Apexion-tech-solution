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
            <style>{`
                @keyframes fadeInUp {
                    0% { opacity: 0; transform: translateY(40px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                .fade-in-up {
                    opacity: 0;
                    animation: fadeInUp 1s ease-out forwards;
                }
                .fade-in-up.delay-1 { animation-delay: 0.3s; }
                .fade-in-up.delay-2 { animation-delay: 0.6s; }

                .service-img {
                    transition: transform 0.4s;
                }
                .service-card {
                    transition: transform 0.4s, box-shadow 0.4s;
                    opacity: 0;
                    transform: translateY(40px);
                }
                .service-card:hover {
                    transform: scale(1.05);
                    box-shadow: 0 8px 32px rgba(0,0,0,0.18);
                    z-index: 2;
                }
                .scroll-fade-in-up {
                    animation: fadeInUp 0.8s ease-out forwards;
                }
                @keyframes fadeIn {
                    0% { opacity: 0; transform: translateY(40px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                .scroll-fade-in {
                    animation: fadeIn 1s ease-out forwards;
                }
                @media (max-width: 576px) {
                    h1.display-2 { font-size: 2rem; }
                    p.fs-3 { font-size: 1rem; }
                    .btn-lg { padding: 0.75rem 1.5rem; font-size: 1rem; }
                }
            `}</style>

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
                <div className="container px-3">
                    <h1 className="display-2 fw-bold text-white mb-3 fade-in-up">Apexion Web Solution</h1>
                    <p className="lead text-white mb-4 fs-3 fade-in-up delay-1">
                        Transforming ideas into digital excellence.<br />Your trusted partner in innovative web solutions.
                    </p>
                    <button className="btn btn-primary btn-lg shadow fade-in-up delay-2">
                        Get Started
                    </button>
                </div>
            </div>

            <div className="container py-5 about-fade-in" style={{ opacity: 0 }}>
                <div className="row align-items-center">
                    <div className="col-12 col-md-6 mb-4 mb-md-0">
                        <h2 className="fw-bold mb-3">Who We Are</h2>
                        <p style={{ fontSize: '1.05rem' }}>
                            <strong>Apexion Web Solution</strong> is a forward-thinking technology company dedicated to empowering businesses through innovative digital solutions.
                        </p>
                        <p style={{ fontSize: '1.05rem' }}>
                            We offer web and mobile development, digital marketing, and IT consulting. We're committed to quality and client success.
                        </p>
                    </div>
                    <div className="col-12 col-md-6 text-center">
                        <img
                            src="/Images/hero-image.jpeg"
                            alt="Apexion Web Solution Team"
                            className="img-fluid rounded shadow"
                            style={{ maxHeight: '320px', objectFit: 'cover' }}
                        />
                    </div>
                </div>
            </div>

            <div className="features-section py-5">
                <div className="container">
                    <h2 className="text-center mb-5">Our Services</h2>
                    <div className="row g-4">
                        {[1, 2, 3].map((_, i) => (
                            <div className="col-12 col-sm-6 col-md-4" key={i}>
                                <div className="card h-100 shadow-sm service-card p-3 text-center">
                                    <img src={`/Images/service${i + 1}.jpeg`} alt={`Service ${i + 1}`} className="img-fluid rounded mb-3 service-img" style={{ maxHeight: '180px', objectFit: 'cover' }} />
                                    <h3 className="h5">Service Title {i + 1}</h3>
                                    <p className="card-text">Service description goes here. Clear, concise, and responsive.</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="cta-section py-5 bg-primary text-white text-center">
                <div className="container">
                    <h2 className="mb-4">Ready to Start Your Project?</h2>
                    <p className="lead mb-4">Let's work together to bring your vision to life.</p>
                    <button className="btn btn-light btn-lg">Contact Us</button>
                </div>
            </div>
        </>
    );
}

export default Home;
