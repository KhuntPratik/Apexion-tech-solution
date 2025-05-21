import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top transition-all duration-300 ${
        isScrolled ? "navbar-scrolled" : "navbar-transparent"
      }`}
      style={{
        background: isScrolled
          ? "rgba(15, 23, 42, 0.8)"
          : "transparent",
        backdropFilter: "blur(10px)",
        borderBottom: isScrolled
          ? "1px solid rgba(255, 255, 255, 0.1)"
          : "none",
      }}
    >
      <div className="container-fluid px-4">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src="/Images/apexion_logo.png"
            alt="Logo"
            style={{
              height: "50px",
              width: "auto",
              filter: "brightness(0) invert(1)",
              transition: "all 0.3s ease"
            }}
          />
        </Link>

        {/* Toggle button */}
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation"
          style={{
            background: "transparent",
            padding: "0.5rem",
          }}
        >
          <div className="hamburger-menu" style={{
            width: "30px",
            height: "20px",
            position: "relative",
            transform: "rotate(0deg)",
            transition: ".5s ease-in-out",
            cursor: "pointer"
          }}>
            <span style={{
              display: "block",
              position: "absolute",
              height: "2px",
              width: "100%",
              background: "white",
              borderRadius: "9px",
              opacity: "1",
              left: "0",
              transform: isMobileMenuOpen ? "rotate(45deg)" : "rotate(0deg)",
              top: isMobileMenuOpen ? "9px" : "0px",
              transition: ".25s ease-in-out"
            }}></span>
            <span style={{
              display: "block",
              position: "absolute",
              height: "2px",
              width: "100%",
              background: "white",
              borderRadius: "9px",
              opacity: isMobileMenuOpen ? "0" : "1",
              left: "0",
              transform: isMobileMenuOpen ? "rotate(0deg)" : "rotate(0deg)",
              top: "9px",
              transition: ".25s ease-in-out"
            }}></span>
            <span style={{
              display: "block",
              position: "absolute",
              height: "2px",
              width: "100%",
              background: "white",
              borderRadius: "9px",
              opacity: "1",
              left: "0",
              transform: isMobileMenuOpen ? "rotate(-45deg)" : "rotate(0deg)",
              top: isMobileMenuOpen ? "9px" : "18px",
              transition: ".25s ease-in-out"
            }}></span>
          </div>
        </button>

        {/* Nav Links */}
        <div
          className={`collapse navbar-collapse justify-content-end ${
            isMobileMenuOpen ? "show" : ""
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
              <li className="nav-item me-3" key={item}>
                <a
                  className="nav-link"
                  href={`#${item.toLowerCase()}`}
                  style={{
                    color: "white",
                    fontSize: "1rem",
                    fontWeight: "500",
                    padding: "0.5rem 1rem",
                    position: "relative",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#6366f1";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "white";
                  }}
                >
                  {item}
                  <span
                    className="nav-link-underline"
                    style={{
                      position: "absolute",
                      bottom: "0",
                      left: "50%",
                      width: "0",
                      height: "2px",
                      background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                      transition: "all 0.3s ease",
                      transform: "translateX(-50%)"
                    }}
                  ></span>
                </a>
              </li>
            ))}
            <li className="nav-item">
              <button
                className="btn-custom-primary"
                style={{
                  background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                  color: "white",
                  padding: "0.5rem 1.5rem",
                  borderRadius: "12px",
                  border: "none",
                  fontWeight: "600",
                  fontSize: "1rem",
                  boxShadow: "0 4px 15px rgba(99, 102, 241, 0.3)",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow = "0 8px 25px rgba(99, 102, 241, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 4px 15px rgba(99, 102, 241, 0.3)";
                }}
              >
                Get Started
              </button>
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          transition: all 0.3s ease;
        }

        .navbar-transparent {
          background: transparent;
        }

        .navbar-scrolled {
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(10px);
        }

        .nav-link:hover .nav-link-underline {
          width: 100%;
        }

        @media (max-width: 991px) {
          .navbar-collapse {
            background: rgba(15, 23, 42, 0.95);
            backdrop-filter: blur(10px);
            padding: 1rem;
            border-radius: 12px;
            margin-top: 1rem;
            border: 1px solid rgba(255, 255, 255, 0.1);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
