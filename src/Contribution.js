// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
// import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

// const Contribution = () => {
//     // const app_number = localStorage.getItem("app_number");
//     const app_number = "app2";
//     const name = localStorage.getItem("name");
//     const navigate = useNavigate();

//     const [contriData, setContriData] = useState({
//         app_number: app_number,
//         research_contri: "",
//         teaching_contri: "",
//         other_info: "",
//         professional_service: "",
//         list_journalpub: "",
//         list_conferencepub: "",
//     });

//     const handleInputChangeContri = (e) => {
//         const { name, value } = e.target;
//         setContriData({ ...contriData, [name]: value });
//     };

//     const handleSubmitContri = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post("http://localhost:3000/api/other/addContributions", contriData);
//             alert("Contributions Entered Successfully");
//             navigate("/Refree");
//         } catch (error) {
//             console.error("Error submitting contributions form:", error);
//         }
//     };
    
//     const handleLogout = async (e) => {
//         localStorage.clear();
//         navigate("/Login_Page");
//     };
//     const [researchStatement, setResearchStatement] = useState(EditorState.createEmpty());
//     return (
//         <div
//             className="Present_Employment"
//             style={{
//                 marginTop: "12rem",
//                 marginLeft: "7rem",
//                 marginRight: "7rem",
//                 marginBottom: "4rem",
//                 backgroundColor: "#f5f5f5",
//             }}
//         >
//             <h2 style={{ animation: "blinker 1s linear infinite", textAlign: "center", color: "#d15f75" }}>
//                 Apply For Faculty Position
//             </h2>
//             <h7> Welcome {name}!!</h7> <button onClick={handleLogout}> Logout </button>
//             <legend>
//                 <legend style={{ backgroundColor: "#e1f0d8" }}>
//                     14. Significant research contribution and future plans (not more than 500 words) <br />
//                     (Please provide a Research Statement describing your research plans and one or two specific research
//                     projects to be conducted at IIT Patna in 2-3 years time frame)
//                 </legend>
//                 <Editor
//                     editorState={researchStatement}
//                     toolbarClassName="toolbarClassName"
//                     wrapperClassName="wrapperClassName"
//                     editorClassName="editorClassName"
//                     onEditorStateChange={setResearchStatement}
//                 />
//                 <textarea
//                     name="researchStatement"
//                     placeholder="Enter your research statement here..."
//                     rows="10"
//                     cols="50"
//                     maxLength="500"
//                     style={{ marginTop: "1rem", width: "100%" }}
//                     onChange={handleInputChangeContri} value={contriData.research_contri}
//                 />
//             </legend>
//             <legend>
//                 <legend style={{ backgroundColor: "#e1f0d8" }}>
//                     15. Significant teaching contribution and future plans * (Please list UG/PG courses that you would
//                     like to develop and/or teach at IIT Patna)
//                 </legend>
//                 <Editor
//                     editorState={researchStatement}
//                     toolbarClassName="toolbarClassName"
//                     wrapperClassName="wrapperClassName"
//                     editorClassName="editorClassName"
//                     onEditorStateChange={setResearchStatement}
//                 />
//                 <textarea
//                     name="researchStatement"
//                     placeholder="Enter your research statement here..."
//                     rows="10"
//                     cols="50"
//                     maxLength="500"
//                     style={{ marginTop: "1rem", width: "100%" }}
//                     onChange={handleInputChangeContri} value={contriData.teaching_contri}
//                 />
//             </legend>
//             <legend style={{ backgroundColor: "#e1f0d8" }}>16. Any other relevant information.</legend>
//             <Editor
//                 editorState={researchStatement}
//                 toolbarClassName="toolbarClassName"
//                 wrapperClassName="wrapperClassName"
//                 editorClassName="editorClassName"
//                 onEditorStateChange={setResearchStatement}
//             />
//             <textarea
//                 name="researchStatement"
//                 placeholder="Enter your research statement here..."
//                 rows="10"
//                 cols="50"
//                 maxLength="500"
//                 style={{ marginTop: "1rem", width: "100%" }}
//                 onChange={handleInputChangeContri} value={contriData.other_info}
//             />
//             <legend style={{ backgroundColor: "#e1f0d8" }}>17. Professional Service : Editorship/Reviewership</legend>
//             <Editor
//                 editorState={researchStatement}
//                 toolbarClassName="toolbarClassName"
//                 wrapperClassName="wrapperClassName"
//                 editorClassName="editorClassName"
//                 onEditorStateChange={setResearchStatement}
//             />
//             <textarea
//                 name="researchStatement"
//                 placeholder="Enter your research statement here..."
//                 rows="10"
//                 cols="50"
//                 maxLength="500"
//                 style={{ marginTop: "1rem", width: "100%" }}
//                 onChange={handleInputChangeContri} value={contriData.professional_service}
//             />
//             <legend style={{ backgroundColor: "#e1f0d8" }}>
//                 18. Detailed List of Journal Publications
//                 <br />
//                 (Including Sr. No., Author's Names, Paper Title, Volume, Issue, Year, Page Nos., Impact Factor (if any),
//                 DOI, Status[Published/Accepted] )
//                 <Editor
//                     editorState={researchStatement}
//                     toolbarClassName="toolbarClassName"
//                     wrapperClassName="wrapperClassName"
//                     editorClassName="editorClassName"
//                     onEditorStateChange={setResearchStatement}
//                 />
//             </legend>
//             <textarea
//                 name="researchStatement"
//                 placeholder="Enter your research statement here..."
//                 rows="10"
//                 cols="50"
//                 maxLength="500"
//                 style={{ marginTop: "1rem", width: "100%" }}
//                 onChange={handleInputChangeContri} value={contriData.list_journalpub}
//             />
//             <legend style={{ backgroundColor: "#e1f0d8" }}>
//                 19. Detailed List of Conference Publications
//                 <br />
//                 (Including Sr. No., Author's Names, Paper Title, Name of the conference, Year, Page Nos., DOI [If any] )
//                 <Editor
//                     editorState={researchStatement}
//                     toolbarClassName="toolbarClassName"
//                     wrapperClassName="wrapperClassName"
//                     editorClassName="editorClassName"
//                     onEditorStateChange={setResearchStatement}
//                 />
//             </legend>
//             <textarea
//                 name="researchStatement"
//                 placeholder="Enter your research statement here..."
//                 rows="10"
//                 cols="50"
//                 maxLength="500"
//                 style={{ marginTop: "1rem", width: "100%" }}
//                 onChange={handleInputChangeContri} value={contriData.list_conferencepub}
//             />
//             <button onClick={handleSubmitContri}>Next</button>
//         </div>
//     );
// };
// export default Contribution;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Contribution = () => {
    const app_number = "app2";
    const name = localStorage.getItem("name");
    const navigate = useNavigate();

    const [contriData, setContriData] = useState({
        app_number: app_number,
        research_contri: "",
        teaching_contri: "",
        other_info: "",
        professional_service: "",
        list_journalpub: "",
        list_conferencepub: "",
    });

    const handleInputChangeContri = (e) => {
        const { name, value } = e.target;
        setContriData({ ...contriData, [name]: value });
    };

    const handleSubmitContri = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/other/addContributions", contriData);
            alert("Contributions Entered Successfully");
            navigate("/Refree");
        } catch (error) {
            console.error("Error submitting contributions form:", error);
        }
    };
    
    const handleLogout = async (e) => {
        localStorage.clear();
        navigate("/Login_Page");
    };

    const [researchEditorState, setResearchEditorState] = useState(EditorState.createEmpty());
    const [teachingEditorState, setTeachingEditorState] = useState(EditorState.createEmpty());
    const [otherInfoEditorState, setOtherInfoEditorState] = useState(EditorState.createEmpty());
    const [professionalServiceEditorState, setProfessionalServiceEditorState] = useState(EditorState.createEmpty());
    const [journalPubEditorState, setJournalPubEditorState] = useState(EditorState.createEmpty());
    const [conferencePubEditorState, setConferencePubEditorState] = useState(EditorState.createEmpty());

    return (
        <div className="Present_Employment">
            <h2>Apply For Faculty Position</h2>
            <h7>Welcome {name}!!</h7> <button onClick={handleLogout}>Logout</button>
            <form onSubmit={handleSubmitContri}>
                <legend>Significant research contribution and future plans</legend>
                <Editor
                    editorState={researchEditorState}
                    onEditorStateChange={setResearchEditorState}
                />
                <textarea
                    name="research_contri"
                    placeholder="Enter your research statement here..."
                    rows="10"
                    cols="50"
                    maxLength="500"
                    value={contriData.research_contri}
                    onChange={handleInputChangeContri}
                />

                <legend>Significant teaching contribution and future plans</legend>
                <Editor
                    editorState={teachingEditorState}
                    onEditorStateChange={setTeachingEditorState}
                />
                <textarea
                    name="teaching_contri"
                    placeholder="Enter your teaching contribution here..."
                    rows="10"
                    cols="50"
                    maxLength="500"
                    value={contriData.teaching_contri}
                    onChange={handleInputChangeContri}
                />

                <legend>Any other relevant information</legend>
                <Editor
                    editorState={otherInfoEditorState}
                    onEditorStateChange={setOtherInfoEditorState}
                />
                <textarea
                    name="other_info"
                    placeholder="Enter any other relevant information here..."
                    rows="10"
                    cols="50"
                    maxLength="500"
                    value={contriData.other_info}
                    onChange={handleInputChangeContri}
                />

                <legend>Professional Service : Editorship/Reviewership</legend>
                <Editor
                    editorState={professionalServiceEditorState}
                    onEditorStateChange={setProfessionalServiceEditorState}
                />
                <textarea
                    name="professional_service"
                    placeholder="Enter your professional service information here..."
                    rows="10"
                    cols="50"
                    maxLength="500"
                    value={contriData.professional_service}
                    onChange={handleInputChangeContri}
                />

                <legend>Detailed List of Journal Publications</legend>
                <Editor
                    editorState={journalPubEditorState}
                    onEditorStateChange={setJournalPubEditorState}
                />
                <textarea
                    name="list_journalpub"
                    placeholder="Enter your list of journal publications here..."
                    rows="10"
                    cols="50"
                    maxLength="500"
                    value={contriData.list_journalpub}
                    onChange={handleInputChangeContri}
                />

                <legend>Detailed List of Conference Publications</legend>
                <Editor
                    editorState={conferencePubEditorState}
                    onEditorStateChange={setConferencePubEditorState}
                />
                <textarea
                    name="list_conferencepub"
                    placeholder="Enter your list of conference publications here..."
                    rows="10"
                    cols="50"
                    maxLength="500"
                    value={contriData.list_conferencepub}
                    onChange={handleInputChangeContri}
                />

                <button type="submit">Next</button>
            </form>
        </div>
    );
};
export default Contribution;
