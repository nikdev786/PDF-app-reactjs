import React, { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import { useDropzone } from 'react-dropzone';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PdfMerge = () => {
  const [pdfs, setPdfs] = useState([]);

  const handleMerge = async () => {
    try {
      const mergedPdf = await PDFDocument.create();
  
      for (let i = 0; i < pdfs.length; i++) {
        const pdf = await PDFDocument.load(pdfs[i].arrayBuffer);
        const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        copiedPages.forEach((page) => {
          mergedPdf.addPage(page);
        });
      }
  
      const mergedPdfFile = await mergedPdf.save();
      console.log(mergedPdfFile); // check if merged PDF is created
  
      const blob = new Blob([mergedPdfFile], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
  
      const link = document.createElement('a');
      if ('download' in link) {
        link.href = url;
        link.download = 'merged.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        window.open(url);
      }
  
      toast.success('Merged file downloaded successfully!');
    } catch (error) {
      console.error(error);
    }
  };
  

  const onDrop = (acceptedFiles) => {
    const newPdfs = acceptedFiles.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      })
        .then((result) => {
          return new Uint8Array(result);
        })
        .then((array) => {
          return { file, arrayBuffer: array };
        });
    });

    Promise.all(newPdfs).then((pdfs) => {
      setPdfs(pdfs);
      toast.success(`${pdfs.length} PDF files uploaded successfully!`);
    });
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div >
     <h1 id="h1">Drop or select your multiple files and merged it into single file.</h1>
      <div {...getRootProps()} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '40px' }}>
        
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <button id="ms">Drag and drop some files here, or click to select files</button>
        )}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '40px' }}>
      <button onClick={handleMerge} disabled={pdfs.length < 2} >
        Merge PDFs and Download
      </button>
      <ToastContainer />
      </div>
    </div>
  );
};

export default PdfMerge;
