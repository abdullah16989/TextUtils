import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className= {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.tittle}
        </a>
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
            <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
              {/* <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link> */}
            </li>
            {/* <li className="nav-item">
            <a className="nav-link" href="/about">
               {props.aboutText} About
              </a> */}
              {/* <Link className="nav-link" to="/about">
               {props.aboutText} About
              </Link> */}
            {/* </li> */}
            <li className="nav-item dropdown">
           
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" herf="/">
                    VideoConverter
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" herf="/">
                    AudioConverter
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" herf="/">
                    ImageConverter
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
            
            </li>
          </ul>
         
        
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input mx-2" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> Enable DarkMode </label>
</div>
        </div>
      </div>
    </nav>
  );
}
Navbar.prototype = { tittle: PropTypes.string, home: PropTypes.string };
Navbar.defaultProps = {tittle: 'WordConverter', home: 'Contact us'};
