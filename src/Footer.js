import React from 'react';
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className='footer'>
  <motion.p style={{textAlign: 'center', margin: 0, color:'white'}}
    whileHover={{ rotate: 360 }}
    transition={{ duration: 1 }}
  >
    © 2023 NIKHIL DUBEY. All rights reserved.
  </motion.p>
</footer>
  );
};

export default Footer;