function About() {
    return (
        <>
            {/* Hero Section */}
            <div className="bg-primary text-white py-5 text-center">
                <div className="container">
                    <h1 className="display-4 fw-bold mb-3">About Apexion Tech Solution</h1>
                    <p className="lead mb-0">
                        Empowering businesses with innovative, reliable, and scalable technology solutions.
                    </p>
                </div>
            </div>

            {/* Mission & Vision */}
            <div className="container py-5">
                <div className="row g-5 align-items-center">
                    <div className="col-md-6">
                        <img
                            src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5"
                            alt="About Apexion"
                            className="img-fluid rounded shadow"
                        />
                    </div>
                    <div className="col-md-6">
                        <h2 className="fw-bold mb-3">Our Mission</h2>
                        <p>
                            To deliver cutting-edge digital solutions that drive business growth and create lasting value for our clients.
                        </p>
                        <h2 className="fw-bold mb-3 mt-4">Our Vision</h2>
                        <p>
                            To be a global leader in technology innovation, recognized for our commitment to quality, integrity, and customer success.
                        </p>
                    </div>
                </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-light py-5">
                <div className="container">
                    <h2 className="text-center fw-bold mb-5">Why Choose Apexion?</h2>
                    <div className="row g-4 justify-content-center">
                        <div className="col-md-4">
                            <div className="p-4 shadow-sm rounded bg-white h-100 d-flex flex-column align-items-center">
                                <img
                                    src="https://images.unsplash.com/photo-1503676382389-4809596d5290"
                                    alt="Expert Team"
                                    className="mb-3"
                                    style={{
                                        width: '60px',
                                        height: '60px',
                                        objectFit: 'cover',
                                        borderRadius: '50%',
                                        border: '3px solid #0d6efd',
                                        boxShadow: '0 2px 12px rgba(13,110,253,0.08)'
                                    }}
                                />
                                <h5 className="fw-bold mt-2 mb-2">Expert Team</h5>
                                <p className="text-secondary mb-0" style={{fontSize: '1rem'}}>
                                    Our experienced professionals are passionate about delivering the best results for your business.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="p-4 shadow-sm rounded bg-white h-100 d-flex flex-column align-items-center">
                                <img
                                    src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca"
                                    alt="Innovative Solutions"
                                    className="mb-3"
                                    style={{
                                        width: '60px',
                                        height: '60px',
                                        objectFit: 'cover',
                                        borderRadius: '50%',
                                        border: '3px solid #0d6efd',
                                        boxShadow: '0 2px 12px rgba(13,110,253,0.08)'
                                    }}
                                />
                                <h5 className="fw-bold mt-2 mb-2">Innovative Solutions</h5>
                                <p className="text-secondary mb-0" style={{fontSize: '1rem'}}>
                                    We leverage the latest technologies to create solutions that keep you ahead of the competition.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="p-4 shadow-sm rounded bg-white h-100 d-flex flex-column align-items-center">
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                                    alt="Client-Centric Approach"
                                    className="mb-3"
                                    style={{
                                        width: '60px',
                                        height: '60px',
                                        objectFit: 'cover',
                                        borderRadius: '50%',
                                        border: '3px solid #0d6efd',
                                        boxShadow: '0 2px 12px rgba(13,110,253,0.08)'
                                    }}
                                />
                                <h5 className="fw-bold mt-2 mb-2">Client-Centric Approach</h5>
                                <p className="text-secondary mb-0" style={{fontSize: '1rem'}}>
                                    Your success is our priority. We work closely with you to understand your needs and deliver beyond expectations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Optional: Values or Team Section */}
            {/* <div className="container py-5">
                <h2 className="text-center fw-bold mb-5">Our Values</h2>
                <div className="row g-4 text-center">
                    <div className="col-md-3">
                        <div className="p-4 shadow-sm rounded bg-white h-100">
                            <h6 className="fw-bold">Integrity</h6>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="p-4 shadow-sm rounded bg-white h-100">
                            <h6 className="fw-bold">Innovation</h6>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="p-4 shadow-sm rounded bg-white h-100">
                            <h6 className="fw-bold">Excellence</h6>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="p-4 shadow-sm rounded bg-white h-100">
                            <h6 className="fw-bold">Collaboration</h6>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
}

export default About;