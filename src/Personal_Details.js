import React, { useState } from "react";
import axios from "axios";




const PersonalDetailsForm = () => {
    const reg_id = localStorage.getItem("reg_id");

    const [formData, setFormData] = useState({
        reg_id: reg_id,
        f_name: "",
        m_name: "",
        l_name: "",
        gender: "", 
        nationality: "",
        dob:"",
        marital_status: "",
        id_proof: "",
        father_name: "",
        category: "",
        permanentAddress: "",
        correspondenceAddress: "",
        alt_mob: "",
        email: "",
        alt_email: "",
        landline: "",
        mob:"",
        c_address:"",
        p_address:"",
    /*-------------------------------------------------------------*/
    postAppliedFor: "",
    advertisementNumber: "",
    dateOfApplication: "",
    departmentSchool: "",
    applicationNumber: "",


        idProofFile: null,
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/application/addPersonalDetails", formData);
            console.log(response.data);
            localStorage.setItem("app_number", response.data.app_number);
            // app_number=localStorage.getItem("app_number");
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "idProof") {
            setFormData({ ...formData, idProofFile: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    return (

<div className="Personal_Details" style={{ marginTop: '12rem', marginLeft: '7rem', marginRight: '7rem',marginBottom: '4rem', backgroundColor: '#f5f5f5' }}>
<h2 style={{ animation: 'blinker 1s linear infinite' , textAlign: 'center', color: '#d15f75'}}>Application for Faculty Position</h2>
            <form onSubmit={handleSubmit} id="personalDetailsForm">

        
              
              <div>
              <fieldset style={{  padding: '1rem', marginBottom: '0.5rem' }}> {/* Added marginTop */}
    <legend style={{ backgroundColor: '#e1f0d8', color: '#54773c', padding: '0.5rem', borderRadius: '0rem',width: '100%' }}>Application Details</legend>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '45%',fontWeight: 'bold' }}>
            <label htmlFor="advertisementNumber">Advertisement Number:  </label>
            <input type="text" id="advertisementNumber" name="advertisementNumber" onChange={handleInputChange} value={formData.advertisementNumber} required /><br /><br />
            <label htmlFor="dateOfApplication">Date of Application:  </label>
            <input type="text" id="dateOfApplication" name="dateOfApplication" onChange={handleInputChange} value={formData.dateOfApplication} required /><br /><br />
            <label htmlFor="applicationNumber">Application Number:  </label>
            <input type="text" id="applicationNumber" name="applicationNumber" onChange={handleInputChange} value={formData.applicationNumber} required /><br /><br />
        </div>
        <div style={{ width: '45%', marginLeft: '10px', fontWeight: 'bold' }}>
        <label htmlFor="postAppliedFor">Post Applied for:  </label>
<select id="postAppliedFor" name="postAppliedFor" onChange={handleInputChange} value={formData.postAppliedFor} required>
    <option value="">Select</option>
    <option value="Professor">Professor</option>
    <option value="Associate Professor">Associate Professor</option>
    <option value="Associate Professor Grade I">Associate Professor Grade I</option>
    <option value="Associate Professor Grade II">Associate Professor Grade II</option>
</select><br /><br />

<label htmlFor="departmentSchool">Department/School:  </label>
<select id="departmentSchool" name="departmentSchool" onChange={handleInputChange} value={formData.departmentSchool} required>
    <option value="">Select</option>
    <option value="Chemical Engineering">Chemical Engineering</option>
</select><br /><br />

        </div>
    </div>
</fieldset>

              </div>
                <fieldset style={{ padding: '1rem', marginBottom: '0.5rem' }}>
                    <legend style={{ backgroundColor: '#e1f0d8', color: '#54773c', padding: '0.5rem', borderRadius: '0.5rem',width: '100%' }}>Personal Details</legend>
                    <div style={{ display: 'flex', justifyContent: 'space-between',fontWeight: 'bold' }}>
                        <div style={{ width: '45%' }}>
                            <label htmlFor="f_name">First Name:  </label>
                            <input type="text" id="f_name" name="f_name" onChange={handleInputChange} value={formData.f_name} required /><br /><br />

                            <label htmlFor="m_name">Middle Name:  </label>
                            <input type="text" id="m_name" name="m_name" onChange={handleInputChange} value={formData.m_name} /><br /><br />

                            <label htmlFor="gender">Gender:  </label>
                            <select id="gender" name="gender" onChange={handleInputChange} value={formData.gender} required>
                                <option value="">Select</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select><br /><br />

                            <label htmlFor="father_name">Father's Name:  </label>
                            <input type="text" id="father_name" name="father_name" onChange={handleInputChange} value={formData.father_name} required /><br /><br />
                        </div>

                        <div style={{ width: '45%' }}>
                            <label htmlFor="l_name">Last Name:  </label>
                            <input type="text" id="l_name" name="l_name" onChange={handleInputChange} value={formData.l_name} required /><br /><br />

                            <label htmlFor="nationality">Nationality:  </label>
                            <select id="nationality" name="nationality" onChange={handleInputChange} value={formData.nationality} required>
                                <option value="">Select</option>
                                <option value="Indian">Indian</option>
                                <option value="OCI">OCI</option>
                                <option value="Other">Other</option>
                            </select><br /><br />

                            <label htmlFor="marital_status">Marital Status:  </label>
                            <select id="marital_status" name="marital_status" onChange={handleInputChange} value={formData.marital_status} required>
                                <option value="">Select</option>
                                <option value="Married">Married</option>
                                <option value="Unmarried">Unmarried</option>
                                <option value="Other">Other</option>
                            </select><br /><br />

                            <label htmlFor="id_proof">Identity Proof:  </label>
                            <input type="file" id="id_proof" name="id_proof" onChange={handleInputChange} accept=".jpg, .jpeg, .png, .pdf" required /><br /><br />

                            <label htmlFor="category">Category:  </label>
                            <input type="text" id="category" name="category" onChange={handleInputChange} value={formData.category} required /><br /><br />
                        </div>
                    </div>
                    
                   
                </fieldset>
                
                <div>
    <fieldset style={{  padding: '1rem' }}>
        <legend style={{ backgroundColor: '#e1f0d8', color: '#54773c', padding: '0.5rem', borderRadius: '0.5rem', margintop: '0.5 rem',width: '100%' }}>Address</legend>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
            <div style={{ width: '45%' }}>
                <label htmlFor="c_address">Correspondence Address:  </label>
                <textarea id="c_address" name="c_address" onChange={handleInputChange} value={formData.c_address} required /><br /><br />
            </div>
            <div style={{ width: '45%', marginLeft: '10px' }}> {/* Added marginLeft */}
                <label htmlFor="p_address">Permanent Address:  </label>
                <textarea id="p_address" name="p_address" onChange={handleInputChange} value={formData.p_address} required /><br /><br />
            </div>
        </div>
    </fieldset>
</div>


<div>
<fieldset style={{ padding: '1rem', marginTop: '0.5rem' }}> {/* Added marginTop */}
    <legend style={{ backgroundColor: '#e1f0d8', color: '#54773c', padding: '0.5rem', borderRadius: '0.5rem',width: '100%' }}>Contact Information</legend>
    <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
        <div style={{ width: '45%' }}>
            <label htmlFor="mob">Mobile:  </label>
            <input type="text" id="mob" name="mob" onChange={handleInputChange} value={formData.mob} required /><br /><br />
            <label htmlFor="alt_mob">Alternate Mobile:  </label>
            <input type="text" id="alt_mob" name="alt_mob" onChange={handleInputChange} value={formData.alt_mob} /><br /><br />
            <label htmlFor="landline">Landline:  </label>
            <input type="text" id="landline" name="landline" onChange={handleInputChange} value={formData.landline} /><br /><br />
        </div>
        <div style={{ width: '45%', marginLeft: '10px' }}>
            <label htmlFor="email" style={{fontStyle: 'bold'}}>Email:  </label>
            <input type="email" id="email" name="email" onChange={handleInputChange} value={formData.email} required /><br /><br />
            <label htmlFor="alt_email">Alternate Email:  </label>
            <input type="email" id="alt_email" name="alt_email" onChange={handleInputChange} value={formData.alt_email} /><br /><br />
        </div>
    </div>
</fieldset>

</div>
<div>
<button type="submit" style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block', marginTop: '1rem', backgroundColor: '#6fb85b', color: 'white' }}>Save & Next</button>
</div>


           
            </form>
           
        </div>
    );
};

export default PersonalDetailsForm;


