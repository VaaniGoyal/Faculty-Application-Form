import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


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
        } catch (error) {
            console.error("Error submitting contributions form:", error);
        }
    };
    const handleLogout = async (e) => {
        navigate('/Login_Page');
    }
    return (
        <div className="Present_Employment" style={{ marginTop: '12rem', marginLeft: '7rem', marginRight: '7rem', marginBottom: '4rem', backgroundColor: '#f5f5f5' }}>

            <h2 style={{ animation: 'blinker 1s linear infinite', textAlign: 'center', color: '#d15f75' }}>Apply For Faculty Position</h2>
            <h7> Welcome {name}!!</h7> <button onClick={handleLogout}> Logout </button>

        </div>
    );
};

export default Contribution;

