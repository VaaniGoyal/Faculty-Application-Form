// import React, { useState } from "react";
// import { Document, Page } from "react-pdf";
// import axios from "axios";

// const PdfViewer = () => {
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);
//   const [pdfUrl, setPdfUrl] = useState(null);
//   const [agreement, setAgreement] = useState(false);

//   const handleAgreementChange = (e) => {
//     setAgreement(e.target.checked);
//   };

//   const handleDocumentLoadSuccess = ({ numPages }) => {
//     setNumPages(numPages);
//   };

//   const handleSubmit = async () => {
//     try {
//       if (!agreement) {
//         alert("Please agree to the declaration to submit the form.");
//         return;
//       }

//       // Your submission logic goes here

//     } catch (error) {
//       console.error("Error submitting form:", error);
//     }
//   };

//   return (
//     <div style={{ marginTop: "20%", marginLeft: "5%", marginRight: "5%", border: "2px solid black" }}>
//       <h2 style={{ backgroundColor: "#e1f0d8", color: "#308000" }}>Final Declaration</h2>
//       <p style={{ color: "red" }}>
//         I hereby declare that I have carefully read and understood the instructions and particulars mentioned in the
//         advertisement and this application form. I further declare that all the entries along with the attachments uploaded
//         in this form are true to the best of my knowledge and belief.
//       </p>
//       <label>
//         <input type="checkbox" checked={agreement} onChange={handleAgreementChange} />
//         I agree to the declaration
//       </label>
//       <br />
//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   );
// };

// export default PdfViewer;
