import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className='navi'>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/home" className="navbar-brand">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="button"
            className="btn btn-primary"
          >
            Home
          </motion.button>
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/Merge" className="nav-link">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  type="button"
                  className="btn btn-primary"
                >
                  Merge PDF
                </motion.button>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/Split" className="nav-link">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  type="button"
                  className="btn btn-primary"
                >
                  Split PDF
                </motion.button>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  type="button"
                  className="btn btn-primary"
                >
                  About
                </motion.button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
