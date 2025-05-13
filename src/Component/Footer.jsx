import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-4">
      <div className="container text-md-start text-center">
        <div className="row">

          {/* Company Info */}
          <div className="col-md-4 mb-4">
            <h4 className="text-uppercase mb-3">Apexion Web Solution</h4>
            <p>
              Your trusted partner for IT solutions and services. We help businesses
              grow and succeed in the digital world.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-light fs-5"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-light fs-5"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-light fs-5"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="text-light fs-5"><i className="fab fa-instagram"></i></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h5 className="text-uppercase mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-light text-decoration-none d-block mb-2">Home</a></li>
              <li><a href="#about" className="text-light text-decoration-none d-block mb-2">About</a></li>
              <li><a href="#services" className="text-light text-decoration-none d-block mb-2">Services</a></li>
              <li><a href="#projects" className="text-light text-decoration-none d-block mb-2">Projects</a></li>
              <li><a href="#contact" className="text-light text-decoration-none d-block">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase mb-3">Our Services</h5>
            <ul className="list-unstyled">
              <li><a href="#services" className="text-light text-decoration-none d-block mb-2">Web Development</a></li>
              <li><a href="#services" className="text-light text-decoration-none d-block mb-2">Mobile Apps</a></li>
              <li><a href="#services" className="text-light text-decoration-none d-block mb-2">SEO Services</a></li>
              <li><a href="#services" className="text-light text-decoration-none d-block mb-2">UI/UX Design</a></li>
              <li><a href="#services" className="text-light text-decoration-none d-block">Digital Marketing</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase mb-3">Contact Info</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <i className="fas fa-map-marker-alt me-2 text-primary"></i>
                Rajkot, Gujarat, India - 3604005
              </li>
              <li className="mb-2">
                <i className="fas fa-phone me-2 text-primary"></i>
                +91 8780777688
              </li>
              <li className="mb-2">
                <i className="fas fa-envelope me-2 text-primary"></i>
                apexiontechsolutions@gmail.com
              </li>
              <li>
                <i className="fas fa-clock me-2 text-primary"></i>
                Mon - Sat: 8.00 am - 7.00 pm
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center pt-3 border-top border-light mt-4">
          <p className="mb-0">&copy; {new Date().getFullYear()} Apexion Web Solution. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
