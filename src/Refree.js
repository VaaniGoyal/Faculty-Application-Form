import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RefreeForm = () => {
    const app_number=localStorage.getItem("app_number");
    const name = localStorage.getItem("name");
    const navigate = useNavigate();
    
    /*-------------------------------------REFREES---------------------------------------------- */
    const [formData, setFormData] = useState({
        formDetails: [
            {
                app_number: app_number,
                name: "",
                position: "",
                association: "",
                organisation: "",
                email: "",
                contact: "",
            }
        ]
    });
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const updatedData = [...formData.formDetails]
        updatedData[index][name] = value;
        setFormData({ ...formData, formDetails: updatedData });
    };
    const handleAddMore = () => {
        setFormData({
            ...formData,
            formDetails: [
                ...formData.formDetails,
                {
                    app_number: app_number,
                    name: "",
                    position: "",
                    association: "",
                    organisation: "",
                    email: "",
                    contact: "",
                }
            ]
        });
    };
    const handleSubmit = async () => {
        try {
            // Iterate over each row in additionalDetails array
            for (let i = 0; i < formData.formDetails.length; i++) {
                const row = formData.formDetails[i];
                // Send a POST request for each row
                const response = await axios.post("http://localhost:3000/api/other/addReferees", row);
                console.log(response.data);
            }
            // navigate('/New_page').....final checkbox wala
        } catch (error) {
            console.error("Error submitting refree details :", error);
        }
    };
    const handleLogout = async (e) => {
        navigate('/Login_Page');
    }
/*------------------------------------------------------------------------------------------------------------------- */
    return (
        <div className="Present_Employment" style={{ marginTop: '12rem', marginLeft: '7rem', marginRight: '7rem', marginBottom: '4rem', backgroundColor: '#f5f5f5' }}>
        <h2 style={{ animation: 'blinker 1s linear infinite', textAlign: 'center', color: '#d15f75' }}>Apply For Faculty Position</h2>
        <h7> Welcome {name}!!</h7>  <button onClick={handleLogout}> Logout </button>

        


       {/* write  code for pdf uploads */}






        {/* Refree Form */}
        <form onSubmit={handleSubmit} id="RefreeForm">
                <fieldset style={{ padding: '1rem', marginBottom: '0.5rem' }}>
                <legend style={{ backgroundColor: '#e1f0d8', color: '#54773c', padding: '0.5rem', borderRadius: '0.5rem', width: '100%', fontWeight: 'bold' }}>Refrees *</legend>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Association with Refree</th>
                        <th>Organization/Institution</th>
                        <th>e-mail</th>
                        <th>Contact No.</th>
                    </tr>
                </thead>
                <tbody>
                {formData.formDetails.map((row, index) => (
                    <tr key = {index}>
                        <td><input type="text" name="name" onChange={(e) => handleInputChange(e, index)} value={row.name} required /></td>
                        <td><input type="text" name="position" onChange={(e) => handleInputChange(e, index)} value={row.position} required /></td>
                        <td><input type="text" name="association" onChange={(e) => handleInputChange(e, index)} value={row.association} required /></td>
                        <td><input type="text" name="organization" onChange={(e) => handleInputChange(e, index)} value={row.organisation} required /></td>
                        <td><input type="text" name="email" onChange={(e) => handleInputChange(e, index)} value={row.email} required /></td>
                        <td><input type="text" name="contact" onChange={(e) => handleInputChange(e, index)} value={row.contact} required /></td>
                    </tr>
                ))}
                </tbody>
                </table>
                <button onClick={handleAddMore}>Add More</button>
                <button type="button" onClick={handleSubmit}>Save </button>
                </fieldset>
        </form>
        </div>
    );
}

export default RefreeForm;






