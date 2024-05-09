import React from 'react';
import html2pdf from 'html2pdf.js';


function DownloadPdf() {
    const handlePrint = () => {
        const element = document.getElementById('page-content'); // Change 'page-content' to the ID of the element containing the content you want to print

        html2pdf()
            .from(element)
            .save('page.pdf');
    };

    return (
        <div>
            {/* Your page content goes here */}
            <div id="page-content">
                <h1>Page Title</h1>
                <p>This is the content of your page.</p>
                <p> mY name is vaani</p>
            </div>
            <button onClick={handlePrint}>Print</button>
        </div>
    );
}

export default DownloadPdf;
