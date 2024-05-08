import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const PersonalDetailsForm = () => {
    const regId = localStorage.getItem("reg_id");
    const reg_id = parseInt(regId, 10);
    // Modify the findUserName function to check if e is defined before calling preventDefault
    const findUserName = async (e) => {
        if (e) {
            e.preventDefault();
        }
        try {
            const response = await axios.get(`http://localhost:3000/api/users/getUser/${reg_id}`);
            localStorage.setItem("name", response.data.name);
        } catch (error) {
            console.error("Error fetching user:", error);
            // Handle error, such as displaying an error message to the user
        }
    }
    findUserName();
    const name = localStorage.getItem("name");
    console.log(name);
    const [applicationData, setApplicationData] = useState({
        reg_id: reg_id,
        add_number: "",
        date: "",
        app_number: "",
        post: "",
        dept: "",
    });

    const handleApplicationInputChange = (e) => {
        const { name, value } = e.target;
        setApplicationData({ ...applicationData, [name]: value });
    };

    const handleApplicationSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/application/createApplication", applicationData);
            console.log(response.data);
            localStorage.setItem("app_number", response.data.app_number);
        } catch (error) {
            console.error("Error submitting application form:", error);
        }
    };

    const app_number=localStorage.getItem("app_number");

    const [personalData, setPersonalData] = useState({
        app_number: app_number,
        f_name: "",
        m_name: "",
        l_name: "",
        nationality: "",
        gender: "", 
        marital_status: "",
        father_name: "",
        category: "",
        p_address: "",
        c_address: "",
        mob: "",
        alt_mob: "",
        email: "",
        alt_email: "",
        landline: "",
        dob: "",
        id_proof: null,
        user_image: null
    });

    const handlePersonalInputChange = (e) => {
        const { name, value } = e.target;
        setPersonalData({ ...personalData, [name]: value });
    };
    
    const handleIdProofUpload = (e) => {
        const idProofFile = e.target.files[0];
        setPersonalData({ ...personalData, id_proof: idProofFile });
    };
    
    const handleImageUpload = (e) => {
        const imageFile = e.target.files[0];
        setPersonalData({ ...personalData, image: imageFile });
    };
    const navigate = useNavigate();
    const handlePersonalSubmit = async (e) => {
        e.preventDefault();
        try {
            const personalData = new FormData();
            for (const key in personalData) {
                if (key === 'id_proof' || key === 'user_image') {
                    personalData.append(key, personalData[key]);
                } else {
                    personalData.append(key, personalData[key]);
                }
            }
            const response = await axios.post("http://localhost:3000/api/application/addPersonalDetails", personalData);
            console.log(response.data);
            navigate('/Educational_Qualifications');
        } catch (error) {
            console.error("Error submitting personal details form:", error);
        }
    };

    const handleLogout = async (e) => {
        navigate('/Login_Page');
    }
    

    return (
        <div className="Personal_Details" style={{ marginTop: '12rem', marginLeft: '7rem', marginRight: '7rem', marginBottom: '4rem', backgroundColor: '#f5f5f5' }}>
            <h2 style={{ animation: 'blinker 1s linear infinite', textAlign: 'center', color: '#d15f75' }}>Application for Faculty Position</h2>
            <h4 style={{marginLeft:'48%'}}> Welcome {name}!!</h4>  <button style={{backgroundColor:'#ddedf7', marginLeft:'94%', backgroundColor: '#6fb85b', color: 'white'}} onClick={handleLogout}> Logout </button>
            {/* Application Form */}
            <form onSubmit={handleApplicationSubmit} id="applicationForm">
                <fieldset style={{ padding: '1rem', marginBottom: '0.5rem' }}>
                    <legend style={{ backgroundColor: '#e1f0d8', color: '#54773c', padding: '0.5rem', borderRadius: '0.5rem', width: '100%' }}>Application Details</legend>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ width: '45%', fontWeight: 'bold' }}>
                            <label htmlFor="add_number">Advertisement Number:  </label>
                            <input type="text" id="add_number" name="add_number" onChange={handleApplicationInputChange} value={applicationData.add_number} required /><br /><br />
                            <label htmlFor="date">Date of Application:  </label>
                            <input type="date" id="date" name="date" onChange={handleApplicationInputChange} value={applicationData.date} required /><br /><br />
                            <label htmlFor="app_number">Application Number:  </label>
                            <input type="text" id="app_number" name="app_number" onChange={handleApplicationInputChange} value={applicationData.app_number} required /><br /><br />
                        </div>
                        <div style={{ width: '45%', marginLeft: '10px', fontWeight: 'bold' }}>
                            <label htmlFor="post">Post Applied for:  </label>
                            <select id="post" name="post" onChange={handleApplicationInputChange} value={applicationData.post} required>
                                <option value="">Select</option>
                                <option value="Professor">Professor</option>
                                <option value="Associate Professor">Associate Professor</option>
                                <option value="Associate Professor Grade I">Associate Professor Grade I</option>
                                <option value="Associate Professor Grade II">Associate Professor Grade II</option>
                            </select><br /><br />
                            <label htmlFor="dept">Department/School:  </label>
                            <select id="dept" name="dept" onChange={handleApplicationInputChange} value={applicationData.dept} required>
                                <option value="">Select</option>
                                <option value="Chemical Engineering">Chemical Engineering</option>
                                <option value="Mechanical Engineering">Mechanical Engineering</option>
                                <option value="Computer Engineering">Computer Engineering</option>
                                <option value="Civil Engineering">Civil Engineering</option>
                                <option value="Materials Engineering">Materials Engineering</option>
                            </select><br /><br />
                        </div>
                    </div>
                    <button type="submit" style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block', marginTop: '1rem', backgroundColor: '#6fb85b', color: 'white' }}>Save</button>
                </fieldset>
            </form>

            {/* Personal Details Form */}
            <form onSubmit={handlePersonalSubmit} id="personalDetailsForm">
                <fieldset style={{ padding: '1rem', marginBottom: '0.5rem' }}>
                    <legend style={{ backgroundColor: '#e1f0d8', color: '#54773c', padding: '0.5rem', borderRadius: '0.5rem', width: '100%' }}>Personal Details</legend>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                        <div style={{ width: '45%' }}>
                            <label htmlFor="f_name">First Name:  </label>
                            <input type="text" id="f_name" name="f_name" onChange={handlePersonalInputChange} value={personalData.f_name} required /><br /><br />

                            <label htmlFor="m_name">Middle Name:  </label>
                            <input type="text" id="m_name" name="m_name" onChange={handlePersonalInputChange} value={personalData.m_name} /><br /><br />

                            <label htmlFor="gender">Gender:  </label>
                            <select id="gender" name="gender" onChange={handlePersonalInputChange} value={personalData.gender} required>
                                <option value="">Select</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select><br /><br />
                            <label htmlFor="father_name">Father's Name:  </label>
                            <input type="text" id="father_name" name="father_name" onChange={handlePersonalInputChange} value={personalData.father_name} required /><br /><br />
                            <label htmlFor="user_image">Upload Image: </label>
                            <input type="file" id="user_image" name="user_image" onChange={handleImageUpload} accept=".jpg, .jpeg, .png" /><br /><br />
                        </div>

                        <div style={{ width: '45%' }}>
                            <label htmlFor="l_name">Last Name:  </label>
                            <input type="text" id="l_name" name="l_name" onChange={handlePersonalInputChange} value={personalData.l_name} required /><br /><br />
                            <label htmlFor="dob">Date of Birth:  </label>
                            <input type="date" id="dob" name="dob" onChange={handlePersonalInputChange} value={personalData.dob} required /><br /><br />
                            <label htmlFor="nationality">Nationality:  </label>
                            <select id="nationality" name="nationality" onChange={handlePersonalInputChange} value={personalData.nationality} required>
                                <option value="">Select</option>
                                <option value="Indian">Indian</option>
                                <option value="OCI">OCI</option>
                                <option value="Other">Other</option>
                            </select><br /><br />

                            <label htmlFor="marital_status">Marital Status:  </label>
                            <select id="marital_status" name="marital_status" onChange={handlePersonalInputChange} value={personalData.marital_status} required>
                                <option value="">Select</option>
                                <option value="Married">Married</option>
                                <option value="Unmarried">Unmarried</option>
                                <option value="Other">Other</option>
                            </select><br /><br />
                            <label htmlFor="id_proof">Identity Proof:  </label>
                            <input type="file" id="id_proof" name="id_proof" onChange={handleIdProofUpload} accept=".jpg, .jpeg, .png, .pdf" required /><br /><br />
                            <label htmlFor="category">Category:  </label>
                            <input type="text" id="category" name="category" onChange={handlePersonalInputChange} value={personalData.category} required /><br /><br />
                        </div>
                    </div>
                </fieldset>
                <fieldset style={{ padding: '1rem', marginTop: '0.5rem' }}> {/* Added marginTop */}
                    <legend style={{ backgroundColor: '#e1f0d8', color: '#54773c', padding: '0.5rem', borderRadius: '0.5rem',width: '100%' }}>Contact Information</legend>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                        <div style={{ width: '45%' }}>
                        <label htmlFor="mob">Mobile:  </label>
                        <input type="text" id="mob" name="mob" onChange={handlePersonalInputChange} value={personalData.mob} required /><br /><br />
                        <label htmlFor="alt_mob">Alternate Mobile:  </label>
                        <input type="text" id="alt_mob" name="alt_mob" onChange={handlePersonalInputChange} value={personalData.alt_mob} /><br /><br />
                        <label htmlFor="landline">Landline:  </label>
                        <input type="text" id="landline" name="landline" onChange={handlePersonalInputChange} value={personalData.landline} /><br /><br />
                    </div>
                    <div style={{ width: '45%', marginLeft: '10px' }}>
                        <label htmlFor="email" style={{fontStyle: 'bold'}}>Email:  </label>
                        <input type="email" id="email" name="email" onChange={handlePersonalInputChange} value={personalData.email} required /><br /><br />
                        <label htmlFor="alt_email">Alternate Email:  </label>
                        <input type="email" id="alt_email" name="alt_email" onChange={handlePersonalInputChange} value={personalData.alt_email} /><br /><br />
                    </div>
                    </div>
                </fieldset>
                <button type="submit" style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block', marginTop: '1rem', backgroundColor: '#6fb85b', color: 'white' }}>Save & Next</button>
            </form>
        </div>   
    );
};

export default PersonalDetailsForm;
