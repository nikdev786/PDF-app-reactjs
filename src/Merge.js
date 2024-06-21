import React from 'react';
import { motion } from 'framer-motion';
import MergePDF from './PdfMerge'; // Assuming you have a component for merging PDFs

const Merge = () => {
  return (
    <div className="container">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-center mb-4">Merge PDF Files</h1>
        <div className="row">
          <div >
            <p className="lead">
              Combine multiple PDF files into a single document using our PDF Merge tool. Follow these steps to merge your PDFs:
            </p>
            <p>
               1: Drag and drop PDF files into the designated area or click to select files.</p>
              
              <p>
                2: Click the "Merge PDFs and Download" button to initiate the merging process.</p>
             <p>
                3: Once merged, download the combined PDF file.</p>
             
          </div>
          <div className="col-md-6">
            {/* Optional: You can add any visual elements or components here */}
          </div>
        </div>
      </motion.div>
      <hr />
      <MergePDF /> {/* Include your MergePDF component here */}
      <div className="mt-4">
        <p>
          Our PDF Merge tool allows you to combine multiple PDF documents into one cohesive file.
        </p>
        <p>
          For example, if you have several PDF reports or chapters that you want to merge into a single document,
          our tool simplifies the process by handling the merging and providing you with a downloadable file.
        </p>
      </div>
    </div>
  );
};

export default Merge;
