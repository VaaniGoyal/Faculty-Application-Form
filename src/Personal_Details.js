import React, { useState } from "react";
import axios from "axios";

const PersonalDetailsForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        gender: "", 
        nationality: "",
        maritalStatus: "",
        identityProof: "",
        fatherName: "",
        category: "",
        idProofFile: null,
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("your_api_endpoint", formData);
            console.log(response.data);
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="Personal_Details" style={{ marginTop: '12rem', marginLeft: '7rem', marginRight: '7rem' }}>
            <form onSubmit={handleSubmit} id="personalDetailsForm">
                <fieldset style={{ border: '2px solid green', padding: '1rem' }}>
                  
                <legend style={{ backgroundColor: 'green', color: 'white', padding: '0.5rem', borderRadius: '0.5rem' }}>Personal Details</legend>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ width: '45%' }}>
                            <label htmlFor="firstName">First Name:</label>
                            <input type="text" id="firstName" name="firstName" onChange={handleInputChange} value={formData.firstName} required /><br /><br />

                            <label htmlFor="middleName">Middle Name:</label>
                            <input type="text" id="middleName" name="middleName" onChange={handleInputChange} value={formData.middleName} /><br /><br />

                            <label htmlFor="gender">Gender:</label>
                            <select id="gender" name="gender" onChange={handleInputChange} value={formData.gender} required>
                                <option value="">Select</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select><br /><br />

                            <label htmlFor="fatherName">Father's Name:</label>
                            <input type="text" id="fatherName" name="fatherName" onChange={handleInputChange} value={formData.fatherName} required /><br /><br />
                        </div>

                        <div style={{ width: '45%' }}>
                            <label htmlFor="lastName">Last Name:</label>
                            <input type="text" id="lastName" name="lastName" onChange={handleInputChange} value={formData.lastName} required /><br /><br />

                            <label htmlFor="nationality">Nationality:</label>
                            <select id="nationality" name="nationality" onChange={handleInputChange} value={formData.nationality} required>
                                <option value="">Select</option>
                                <option value="Indian">Indian</option>
                                <option value="OCI">OCI</option>
                                <option value="Other">Other</option>
                            </select><br /><br />

                            <label htmlFor="maritalStatus">Marital Status:</label>
                            <select id="maritalStatus" name="maritalStatus" onChange={handleInputChange} value={formData.maritalStatus} required>
                                <option value="">Select</option>
                                <option value="Married">Married</option>
                                <option value="Unmarried">Unmarried</option>
                                <option value="Other">Other</option>
                            </select><br /><br />

                            <label htmlFor="idProof">Identity Proof:</label>
                            <input type="file" id="idProof" name="idProof" accept=".jpg, .jpeg, .png, .pdf" required /><br /><br />

                            <label htmlFor="category">Category:</label>
                            <input type="text" id="category" name="category" onChange={handleInputChange} value={formData.category} required /><br /><br />
                        </div>
                    </div>

                    <button type="submit" style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block', marginTop: '1rem' }}>Submit</button>
                </fieldset>
            </form>
        </div>
    );
};

export default PersonalDetailsForm;
