import React, { useState } from 'react';
import { PDFDocument, PDFPage } from 'pdf-lib';
import { useDropzone } from 'react-dropzone';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { color } from 'framer-motion';

const SplitPDF = () => {
  const [pdf, setPdf] = useState(null);
  const [fromPage, setFromPage] = useState(1);
  const [toPage, setToPage] = useState(1);

  const handleSplit = async () => {
    try {
      const pdfDoc = await PDFDocument.load(pdf.arrayBuffer);
      const pages = pdfDoc.getPages();

      if (toPage > pages.length) {
        toast.error(`The selected page range is invalid. Please select a range between 1 and ${pages.length}.`);
        return;
      }

      const splitPdf = await PDFDocument.create();

      for (let i = fromPage - 1; i < toPage; i++) {
        const page = pages[i];
        const copiedPage = await splitPdf.copyPages(pdfDoc, [i]);
        copiedPage.forEach((p) => splitPdf.addPage(p));
      }

      const splitPdfFile = await splitPdf.save();
      const blob = new Blob([splitPdfFile], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = 'split.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast.success('Split file downloaded successfully!');
    } catch (error) {
      console.error(error);
    }
  };

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = () => {
      const arrayBuffer = reader.result;
      setPdf({ file, arrayBuffer });
      toast.success('PDF file uploaded successfully!');
    };

    reader.readAsArrayBuffer(file);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      <h1 id="h1">drop a single pdf file and split pages you want</h1>
      <div {...getRootProps()} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '40px' }}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the file here ...</p>
        ) : (
          <button id="ms">Drag and drop a file here, or click to select a file</button>
        )}
      </div>
      {pdf && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '40px'  }}>
          <label htmlFor="fromPage">From Page:</label>
          <input
            id="fromPage"
            type="number"
            min="1"
            max={PDFDocument.load(pdf.arrayBuffer).then((pdfDoc) => pdfDoc.getPages().length)}
            value={fromPage}
            onChange={(e) => setFromPage(parseInt(e.target.value))}
          /> 
          <label htmlFor="toPage">To Page:</label>
          <input
            id="toPage"
            type="number"
            min="1"
            max={PDFDocument.load(pdf.arrayBuffer).then((pdfDoc) => pdfDoc.getPages().length)}
            value={toPage}
            onChange={(e) => setToPage(parseInt(e.target.value))}
          />
          <button onClick={handleSplit} style={{textAlign: 'center', margin: 0, color:'black'}}>Split PDF and Download</button>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default SplitPDF;
