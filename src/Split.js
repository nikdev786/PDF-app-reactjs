import React from 'react';
import { motion } from 'framer-motion';
import SplitPDF from './SplitPDF'; // Assuming you have a component for splitting PDFs

const Split = () => {
  return (
    <div className="container">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-center mb-4">Split PDF Files</h1>
        <div className="row">
          <div >
            <p className="lead">
              Split large PDF documents into smaller segments with ease using our PDF Split tool. Follow these steps to split your PDF:
            </p>
            <p>
               1: Upload a PDF file by dragging it into the designated area or clicking to select it. </p>
              
              <p>
               2: Specify the page range or individual pages you want to extract.
              </p>
              <p>
               3: Click the "Split PDF and Download" button to start the splitting process.
              </p>
              <p>
                4: Download the segmented PDF files instantly.
              </p>
            
          </div>
          <div className="col-md-6">
         
          </div>
        </div>
       
      </motion.div>
      <hr />
      <SplitPDF /> {/* Include your SplitPDF component here */}
      <div className="mt-4">
          <p>
            Our PDF Split tool allows you to extract specific pages or ranges from a PDF document. 
            Whether you need to separate chapters, sections, or individual pages, this tool provides 
            a straightforward solution to manage your PDF files effectively.
          </p>
          <p>
            For example, if you have a 10-page PDF and want to extract pages 1-5, our tool will split 
            the document and provide you with a new PDF containing only those pages.
          </p>
        </div>
    </div>
  );
};

export default Split;
