import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Contribution = () => {
    const app_number = localStorage.getItem("app_number");
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
        } catch (error) {
            console.error("Error submitting contributions form:", error);
        }
    };
    const handleNext = async (e) => {
        navigate("/Refree");
    };
    const handleLogout = async (e) => {
        localStorage.clear();
        navigate("/Login_Page");
    };
    const [researchStatement, setResearchStatement] = useState(EditorState.createEmpty());
    return (
        <div
            className="Present_Employment"
            style={{
                marginTop: "12rem",
                marginLeft: "7rem",
                marginRight: "7rem",
                marginBottom: "4rem",
                backgroundColor: "#f5f5f5",
            }}
        >
            <h2 style={{ animation: "blinker 1s linear infinite", textAlign: "center", color: "#d15f75" }}>
                Apply For Faculty Position
            </h2>
            <h7> Welcome {name}!!</h7> <button onClick={handleLogout}> Logout </button>
            <legend>
                <legend style={{ backgroundColor: "#e1f0d8" }}>
                    14. Significant research contribution and future plans (not more than 500 words) <br />
                    (Please provide a Research Statement describing your research plans and one or two specific research
                    projects to be conducted at IIT Indore in 2-3 years time frame)
                </legend>
                <Editor
                    editorState={researchStatement}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={setResearchStatement}
                />
                <textarea
                    name="researchStatement"
                    placeholder="Enter your research statement here..."
                    rows="10"
                    cols="50"
                    maxLength="500"
                    style={{ marginTop: "1rem", width: "100%" }}
                    // Add any necessary onChange event handler to capture user input
                />
            </legend>
            <legend>
                <legend style={{ backgroundColor: "#e1f0d8" }}>
                    15. Significant teaching contribution and future plans * (Please list UG/PG courses that you would
                    like to develop and/or teach at IIT Indore)
                </legend>
                <Editor
                    editorState={researchStatement}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={setResearchStatement}
                />
                <textarea
                    name="researchStatement"
                    placeholder="Enter your research statement here..."
                    rows="10"
                    cols="50"
                    maxLength="500"
                    style={{ marginTop: "1rem", width: "100%" }}
                    // Add any necessary onChange event handler to capture user input
                />
            </legend>
            <legend style={{ backgroundColor: "#e1f0d8" }}>16. Any other relevant information.</legend>
            <Editor
                editorState={researchStatement}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={setResearchStatement}
            />
            <textarea
                name="researchStatement"
                placeholder="Enter your research statement here..."
                rows="10"
                cols="50"
                maxLength="500"
                style={{ marginTop: "1rem", width: "100%" }}
                // Add any necessary onChange event handler to capture user input
            />
            <legend style={{ backgroundColor: "#e1f0d8" }}>17. Professional Service : Editorship/Reviewership</legend>
            <Editor
                editorState={researchStatement}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={setResearchStatement}
            />
            <textarea
                name="researchStatement"
                placeholder="Enter your research statement here..."
                rows="10"
                cols="50"
                maxLength="500"
                style={{ marginTop: "1rem", width: "100%" }}
                // Add any necessary onChange event handler to capture user input
            />
            <legend style={{ backgroundColor: "#e1f0d8" }}>
                18. Detailed List of Journal Publications
                <br />
                (Including Sr. No., Author's Names, Paper Title, Volume, Issue, Year, Page Nos., Impact Factor (if any),
                DOI, Status[Published/Accepted] )
                <Editor
                    editorState={researchStatement}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={setResearchStatement}
                />
            </legend>
            <textarea
                name="researchStatement"
                placeholder="Enter your research statement here..."
                rows="10"
                cols="50"
                maxLength="500"
                style={{ marginTop: "1rem", width: "100%" }}
                // Add any necessary onChange event handler to capture user input
            />
            <legend style={{ backgroundColor: "#e1f0d8" }}>
                19. Detailed List of Conference Publications
                <br />
                (Including Sr. No., Author's Names, Paper Title, Name of the conference, Year, Page Nos., DOI [If any] )
                <Editor
                    editorState={researchStatement}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={setResearchStatement}
                />
            </legend>
            <textarea
                name="researchStatement"
                placeholder="Enter your research statement here..."
                rows="10"
                cols="50"
                maxLength="500"
                style={{ marginTop: "1rem", width: "100%" }}
                // Add any necessary onChange event handler to capture user input
            />
            <button onClick={handleNext}>Next</button>
        </div>
    );
};

export default Contribution;
