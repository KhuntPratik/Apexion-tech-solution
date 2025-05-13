import 'bootstrap/dist/css/bootstrap.min.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'web',
      image: '/Images/hero-image.jpeg',
      description: 'A full-featured e-commerce platform with advanced search and payment integration.'
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'mobile',
      image: '/Images/hero-image.jpeg',
      description: 'Secure and user-friendly mobile banking application with biometric authentication.'
    },
    {
      id: 3,
      title: 'CRM System',
      category: 'software',
      image: '/Images/hero-image.jpeg',
      description: 'Comprehensive customer relationship management system for businesses.'
    },
    {
      id: 4,
      title: 'Travel Website',
      category: 'web',
      image: '/Images/hero-image.jpeg',
      description: 'Modern travel booking website with real-time availability and booking system.'
    },
    {
      id: 5,
      title: 'Fitness Tracking App',
      category: 'mobile',
      image: '/Images/hero-image.jpeg',
      description: 'Mobile app for tracking workouts, nutrition, and health metrics.'
    },
    {
      id: 6,
      title: 'Inventory Management',
      category: 'software',
      image: '/Images/hero-image.jpeg',
      description: 'Enterprise-level inventory management system with real-time tracking.'
    }
  ];

  return (
    <section className="py-5 bg-white" id="projects">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Our Projects</h2>
          <p className="text-muted">Explore our latest work and success stories</p>
        </div>

        <div className="row g-4">
          {projects.map(project => (
            <div className="col-md-6 col-lg-4" key={project.id}>
              <div className="card border-0 shadow-sm h-100">
                <div className="position-relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-100 h-100 object-fit-cover"
                    style={{ transition: 'transform 0.3s ease' }}
                    onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseOut={e => e.currentTarget.style.transform = 'scale(1)' }
                  />
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-primary bg-opacity-75"
                    style={{ opacity: 0, transition: 'opacity 0.3s ease' }}
                    onMouseOver={e => e.currentTarget.style.opacity = '1'}
                    onMouseOut={e => e.currentTarget.style.opacity = '0'}
                  >
                    <a href="#" className="btn btn-outline-light fw-medium">View Project</a>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text text-muted">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
