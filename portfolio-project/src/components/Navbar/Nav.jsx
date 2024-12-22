import "./Nav.css";
// import { Navbar, Nav, Container } from 'react-bootstrap';
function Navigation() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand fs-4" href="#">Ubai</a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#Projects">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Education">
              Education
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Skills">
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Intrest">
              Intrest
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}
export default Navigation;
