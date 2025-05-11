import { Link, Outlet } from "react-router-dom";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Layout() {
  return (
    <>
      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm"
        style={{ backgroundColor: "#f4f6fa" }}
      >
        <div className="container-fluid">
          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img
              src="/Images/apexion_logo.png"
              alt="Logo"
              style={{ height: "50px", width: "100px", padding: "5px" }}
            />
          </Link>

          {/* Toggler for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/home">HOME</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/product">PROJECT</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">ABOUT</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">CONTACT</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="container-fluid mt-5 pt-4">
        <Outlet />
      </div>

      {/* Optional Footer */}
      <footer className="bg-light pt-5 mt-5 pb-4 text-center">
        <h5>© 2025 APEXION TECH SOLUTION</h5>
      </footer>
    </>
  );
}

export default Layout;
