import React, { useState } from "react";
import axios from "axios";

const PublicationsForm = () => {
    const app_number = localStorage.getItem("app_number");
    const [publications, setPublications] = useState([]);

    const [publicationData, setPublicationData] = useState({
        
        intj_paper: "",
        natj_paper: "",
        intc_paper: "",
        natc_paper: "",
        no_patent: "",
        no_book: "",
        no_bookch: "",
        google_link: "",
        app_number: "" 
    });

    const handlePublicationInputChange = (e) => {
        const { name, value } = e.target;
        setPublicationData({ ...publicationData, [name]: value });
    };

    const handlePublicationSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/publications/addPublication", publicationData);
            console.log(response.data);
            localStorage.setItem("app_number", response.data.app_number);
        } catch (error) {
            console.error("Error submitting publications form:", error);
        }
    };

    return (
        <div className="Personal_Details" style={{ marginTop: '12rem', marginLeft: '7rem', marginRight: '7rem', marginBottom: '4rem', backgroundColor: '#f5f5f5' }}>
            <h2 style={{ animation: 'blinker 1s linear infinite', textAlign: 'center', color: '#d15f75' }}>Application for Faculty Position</h2>
       

        <form onSubmit={handlePublicationSubmit}>
            <fieldset style={{ padding: '1rem', marginBottom: '0.5rem' }}>
                <legend style={{ backgroundColor: '#e1f0d8', color: '#54773c', padding: '0.5rem', borderRadius: '0.5rem', width: '100%' }}>Publication Details</legend>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ width: '45%', fontWeight: 'bold' }}>
                        <label htmlFor="intj_paper">Number of International Journal Papers:  </label>
                        <input type="text" id="intj_paper" name="intj_paper" onChange={handlePublicationInputChange} value={publicationData.intj_paper} required /><br /><br />
                        <label htmlFor="natj_paper">Number of National Journal Papers:  </label>
                        <input type="text" id="natj_paper" name="natj_paper" onChange={handlePublicationInputChange} value={publicationData.natj_paper} required /><br /><br />
                        <label htmlFor="intc_paper">Number of International Conference Papers:  </label>
                        <input type="text" id="intc_paper" name="intc_paper" onChange={handlePublicationInputChange} value={publicationData.intc_paper} required /><br /><br />
                        <label htmlFor="natc_paper">Number of National Conference Papers:  </label>
                        <input type="text" id="natc_paper" name="natc_paper" onChange={handlePublicationInputChange} value={publicationData.natc_paper} required /><br /><br />
                        <label htmlFor="no_patent">Number of Patents:  </label>
                        <input type="text" id="no_patent" name="no_patent" onChange={handlePublicationInputChange} value={publicationData.no_patent} required /><br /><br />
                    </div>
                    <div style={{ width: '45%', marginLeft: '10px', fontWeight: 'bold' }}>
                        <label htmlFor="no_book">Number of Books:  </label>
                        <input type="text" id="no_book" name="no_book" onChange={handlePublicationInputChange} value={publicationData.no_book} required /><br /><br />
                        <label htmlFor="no_bookch">Number of Book Chapters:  </label>
                        <input type="text" id="no_bookch" name="no_bookch" onChange={handlePublicationInputChange} value={publicationData.no_bookch} required /><br /><br />
                        <label htmlFor="google_link">Google Scholar Link:  </label>
                        <input type="text" id="google_link" name="google_link" onChange={handlePublicationInputChange} value={publicationData.google_link} /><br /><br />
                    </div>
                </div>



                <div className="best-publications-list">
                <h2>List of 10 Best Publications (Journal/Conference)</h2>
                <table>
                    <thead>
                        <tr>
                            <th>S. No.</th>
                            <th>Author(s)</th>
                            <th>Title</th>
                            <th>Name of Journal/Conference</th>
                            <th>Year, Vol., Page</th>
                            <th>Impact Factor</th>
                            <th>DOI</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {publications.map((publication, index) => (
                            <tr key={publication.id}>
                                <td>{index + 1}</td>
                                <td>{publication.author}</td>
                                <td>{publication.title}</td>
                                <td>{publication.journal}</td>
                                <td>{`${publication.year}, ${publication.volume}, ${publication.page}`}</td>
                                <td>{publication.impactFactor}</td>
                                <td>{publication.doi}</td>
                                <td>{publication.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
                <button type="submit" style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block', marginTop: '1rem', backgroundColor: '#6fb85b', color: 'white' }}>Save</button>
            </fieldset>
        </form>
    </div>
    );
};

export default PublicationsForm;
