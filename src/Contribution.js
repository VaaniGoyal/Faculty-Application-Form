//Contribution.js
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
