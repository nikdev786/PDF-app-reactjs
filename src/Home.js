import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-md-12">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="app-intro"
          >
            <h1>Welcome to PDF Merge and Split App</h1>
            <p className="lead">
              Easily merge multiple PDF files into a single document and split a big pdf file into small by defining page range with our intuitive and secure application.
            </p>
            <ul>
              <motion.li 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Drag-and-Drop interface for effortless file uploading.
              </motion.li>
              <motion.li 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Fast and secure merging using PDF-lib.
              </motion.li>
              <motion.li 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                User-friendly design for seamless navigation.
              </motion.li>
              <motion.li 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Cross-platform compatibility for desktop and mobile devices.
              </motion.li>
            </ul>
            <Link to="/merge" className="btn btn-primary">
              Get Started
            </Link>
          </motion.div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="additional-content"
          >
            <h2>Additional Features</h2>
            <p>
              Our app also includes:
            </p>
            <ul>
              <motion.li 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                Secure file handling with PDF encryption options.
              </motion.li>
              <motion.li 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                Customizable PDF metadata editing.
              </motion.li>
              <motion.li 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.6 }}
              >
                Batch processing for merging multiple files simultaneously.
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
