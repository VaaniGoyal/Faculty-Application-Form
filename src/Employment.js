import React, { useState } from "react";
import axios from "axios";

const PresentEmploymentForm = () => {
    const [formData, setFormData] = useState({
        position: "",
        organization: "",
        status: "",
        dateOfJoining: "",
        dateOfLeaving: "",
        duration: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/application/addPresentEmployment", formData);
            localStorage.setItem("em_id", response.data.em_id); // Store em_id in local storage
            console.log("Employment ID stored:", response.data.em_id);
        } catch (error) {
            console.error("Error submitting Present Employment form:", error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = async () => {
        try {
            const response = await axios.post("http://localhost:3000/api/application/addPresentEmployment", formData);
            localStorage.setItem("em_id", response.data.em_id); // Store em_id in local storage
            console.log("Employment ID stored:", response.data.em_id);
        } catch (error) {
            console.error("Error saving Present Employment data:", error);
        }
    };

    return (
        <div className="Present_Employment" style={{ marginTop: '12rem', marginLeft: '7rem', marginRight: '7rem', marginBottom: '4rem', backgroundColor: '#f5f5f5' }}>
            <h2 style={{ animation: 'blinker 1s linear infinite', textAlign: 'center', color: '#d15f75' }}>Present Employment</h2>
            <form onSubmit={handleSubmit}>
                <fieldset style={{ padding: '1rem', marginBottom: '0.5rem' }}>
                    <legend style={{ backgroundColor: '#e1f0d8', color: '#54773c', padding: '0.5rem', borderRadius: '0.5rem', width: '100%' }}>
                        Employment Details
                        <button type="button" onClick={handleSave} style={{ marginLeft: '1rem', backgroundColor: '#6fb85b', color: 'white', border: 'none', padding: '0.5rem' }}>Save</button>
                    </legend>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                        <div style={{ width: '45%' }}>
                            <label htmlFor="position">Position: </label>
                            <input type="text" id="position" name="position" onChange={handleInputChange} value={formData.position} required /><br /><br />

                            <label htmlFor="organization">Organization/Institution: </label>
                            <input type="text" id="organization" name="organization" onChange={handleInputChange} value={formData.organization} required /><br /><br />

                            <label htmlFor="status">Status: </label>
                            <input type="text" id="status" name="status" onChange={handleInputChange} value={formData.status} required /><br /><br />
                        </div>

                        <div style={{ width: '45%' }}>
                            <label htmlFor="dateOfJoining">Date of Joining: </label>
                            <input type="text" id="dateOfJoining" name="dateOfJoining" onChange={handleInputChange} value={formData.dateOfJoining} required /><br /><br />

                            <label htmlFor="dateOfLeaving">Date of Leaving: </label>
                            <input type="text" id="dateOfLeaving" name="dateOfLeaving" onChange={handleInputChange} value={formData.dateOfLeaving} required /><br /><br />

                            <label htmlFor="duration">Duration (in years & months): </label>
                            <input type="text" id="duration" name="duration" onChange={handleInputChange} value={formData.duration} required /><br /><br />
                        </div>
                    </div>
                </fieldset>

                <div>
                    <button type="submit" style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block', marginTop: '1rem', backgroundColor: '#6fb85b', color: 'white' }}>Save & Next</button>
                </div>
            </form>
        </div>
    );
}

export default PresentEmploymentForm;
