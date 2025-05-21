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
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                    100% { transform: translateY(0px); }
                }
                @keyframes gradientFlow {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
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
                    transition: all 0.4s ease;
                    opacity: 0;
                    transform: translateY(40px);
                    background: rgba(30, 41, 59, 0.5);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }
                .service-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
                    border-color: rgba(99, 102, 241, 0.5);
                }
                .service-card:hover .service-img {
                    transform: scale(1.05);
                }
                .scroll-fade-in-up {
                    animation: fadeInUp 0.8s ease-out forwards;
                }
                .scroll-fade-in {
                    animation: fadeIn 1s ease-out forwards;
                }
                .gradient-text {
                    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-size: 200% 200%;
                    animation: gradientFlow 5s ease infinite;
                }
                .floating {
                    animation: float 6s ease-in-out infinite;
                }
                .btn-gradient {
                    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
                    border: none;
                    color: white;
                    padding: 1rem 2rem;
                    border-radius: 12px;
                    font-weight: 600;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
                }
                .btn-gradient:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 25px rgba(99, 102, 241, 0.4);
                }
                @media (max-width: 576px) {
                    h1.display-2 { font-size: 2rem; }
                    p.fs-3 { font-size: 1rem; }
                    .btn-lg { padding: 0.75rem 1.5rem; font-size: 1rem; }
                }
            `}</style>

            <div 
                className="hero-section d-flex align-items-center justify-content-center text-center position-relative overflow-hidden"
                style={{
                    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                    minHeight: '100vh',
                }}
            >
                {/* Animated Background Elements */}
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

                <div className="container px-3 position-relative" style={{ zIndex: 1 }}>
                    <h1 className="display-2 fw-bold text-white mb-3 fade-in-up">
                        Apexion <span className="gradient-text">Web Solution</span>
                    </h1>
                    <p className="lead text-white mb-4 fs-3 fade-in-up delay-1">
                        Transforming ideas into digital excellence.<br />Your trusted partner in innovative web solutions.
                    </p>
                    <button className="btn btn-gradient btn-lg shadow fade-in-up delay-2">
                        Get Started
                    </button>
                </div>
            </div>

            <div className="container py-5 about-fade-in" style={{ opacity: 0 }}>
                <div className="row align-items-center">
                    <div className="col-12 col-md-6 mb-4 mb-md-0">
                        <h2 className="fw-bold mb-3 gradient-text">Who We Are</h2>
                        <p className="text-white" style={{ fontSize: '1.05rem' }}>
                            <strong>Apexion Web Solution</strong> is a forward-thinking technology company dedicated to empowering businesses through innovative digital solutions.
                        </p>
                        <p className="text-white" style={{ fontSize: '1.05rem' }}>
                            We offer web and mobile development, digital marketing, and IT consulting. We're committed to quality and client success.
                        </p>
                    </div>
                    <div className="col-12 col-md-6 text-center">
                        <div className="position-relative floating">
                            <img
                                src="/Images/hero-image.jpeg"
                                alt="Apexion Web Solution Team"
                                className="img-fluid rounded shadow-lg"
                                style={{ 
                                    maxHeight: '320px', 
                                    objectFit: 'cover',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    borderRadius: '20px'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="features-section py-5" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}>
                <div className="container">
                    <h2 className="text-center mb-5 gradient-text">Our Services</h2>
                    <div className="row g-4">
                        {[1, 2, 3].map((_, i) => (
                            <div className="col-12 col-sm-6 col-md-4" key={i}>
                                <div className="card h-100 service-card p-3 text-center">
                                    <div className="overflow-hidden rounded mb-3">
                                        <img 
                                            src={`/Images/service${i + 1}.jpeg`} 
                                            alt={`Service ${i + 1}`} 
                                            className="img-fluid service-img" 
                                            style={{ 
                                                maxHeight: '180px', 
                                                objectFit: 'cover',
                                                width: '100%'
                                            }} 
                                        />
                                    </div>
                                    <h3 className="h5 text-white">Service Title {i + 1}</h3>
                                    <p className="card-text text-white-50">Service description goes here. Clear, concise, and responsive.</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="cta-section py-5 text-center position-relative overflow-hidden" style={{ 
                background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
                <div className="container position-relative" style={{ zIndex: 1 }}>
                    <h2 className="mb-4 gradient-text">Ready to Start Your Project?</h2>
                    <p className="lead mb-4 text-white">Let's work together to bring your vision to life.</p>
                    <button className="btn btn-gradient">Contact Us</button>
                </div>
                {/* Background Gradient */}
                <div className="position-absolute" style={{
                    width: '100%',
                    height: '100%',
                    top: 0,
                    left: 0,
                    background: 'radial-gradient(circle at center, rgba(99, 102, 241, 0.1) 0%, rgba(99, 102, 241, 0) 70%)',
                    animation: 'pulse 8s infinite'
                }}></div>
            </div>
        </>
    );
}

export default Home;
