import React, { useState } from "react";
import axios from "axios";

const EducationalQualificationsForm = () => {
    // const reg_id = localStorage.getItem("reg_id");
    const phd_id = localStorage.getItem("phd_id");
    const pg_id = localStorage.getItem("pg_id");
    const ug_id = localStorage.getItem("ug_id");
    const school_id = localStorage.getItem("school_id");
    const additional_id = localStorage.getItem("additional_id");

    const [formData, setFormData] = useState({
        // reg_id: reg_id,
        university: "",
        department: "",
        supervisorName: "",
        yearOfJoining: "",
        defenseDate: "",
        awardDate: "",
        thesisTitle: "",
        degreeCertificate: "",
        universityInstitute: "",
        branchStream: "",
        yearOfJoiningMTech: "",
        yearOfCompletionMTech: "",
        durationMTech: "",
        percentageCGPAMTech: "",
        divisionClassMTech: "",
        degree1: "",
        university1: "",
        branch1: "",
        yearOfJoining1: "",
        yearOfCompletion1: "",
        duration1: "",
        percentageCGPA1: "",
        divisionClass1: "",
        
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/application/addPhD", formData);
            localStorage.setItem("phd_id", response.data.phd_id);
        } catch (error) {
            console.error("Error submitting PhD form:", error);
        }
    };

    const handleSubmitPG = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/application/addPG", formData);
            localStorage.setItem("pg_id", response.data.pg_id);
        } catch (error) {
            console.error("Error submitting PG form:", error);
        }
    };

    const handleSubmitUG = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/application/addUG", formData);
            localStorage.setItem("ug_id", response.data.ug_id);
        } catch (error) {
            console.error("Error submitting UG form:", error);
        }
    };

    const handleSubmitSchool = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/application/addSchool", formData);
            localStorage.setItem("school_id", response.data.school_id);
        } catch (error) {
            console.error("Error submitting School form:", error);
        }
    };

    const handleSubmitAdditional = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/application/addAdditionalQualifications", formData);
            localStorage.setItem("additional_id", response.data.additional_id);
        } catch (error) {
            console.error("Error submitting Additional form:", error);
        }
    };


    const savePhDData = async () => {
        try {
            await axios.post("http://localhost:3000/api/application/addPhD", formData);
            console.log("PhD data saved!");
        } catch (error) {
            console.error("Error saving PhD data:", error);
        }
    };



    const submitAllQualifications = async () => {
       

        const allData = {
            phd_id,
            pg_id,
            ug_id,
            school_id,
            additional_id,
            
        };

        try {
            const response = await axios.post("http://localhost:3000/api/application/addAllQualifications", allData);
            console.log(response.data);
        } catch (error) {
            console.error("Error submitting all qualifications:", error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    
    const [newRowData, setNewRowData] = useState({
                    
                });
    const addMoreRows = async () => {
        try {
            
            const response = await axios.post('http://localhost:3000/api/application/addEducationalQualifications/addMoreRows', newRowData);
    
         
            console.log(response.data);
    
            setNewRowData({
                // Default or initial values for the new row
            });
        } catch (error) {
            // Handle error
            console.error('Error adding more rows:', error);
        }
    };
    
  
    return (
        <div className="Educational_Qualifications" style={{ marginTop: '12rem', marginLeft: '7rem', marginRight: '7rem', marginBottom: '4rem', backgroundColor: '#f5f5f5' }}>
            <h2 style={{ animation: 'blinker 1s linear infinite', textAlign: 'center', color: '#d15f75' }}>Educational Qualifications</h2>
            <form onSubmit={handleSubmit} id="educationalQualificationsForm">
                <fieldset style={{ padding: '1rem', marginBottom: '0.5rem' }}>
                    <legend style={{ backgroundColor: '#e1f0d8', color: '#54773c', padding: '0.5rem', borderRadius: '0.5rem', width: '100%' }}>Details of PhD</legend>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                        <div style={{ width: '45%' }}>
                            <label htmlFor="university">University/Institute: </label>
                            <input type="text" id="university" name="university" onChange={handleInputChange} value={formData.university} required /><br /><br />

                            <label htmlFor="department">Department: </label>
                            <input type="text" id="department" name="department" onChange={handleInputChange} value={formData.department} required /><br /><br />

                            <label htmlFor="supervisorName">Name of PhD Supervisor: </label>
                            <input type="text" id="supervisorName" name="supervisorName" onChange={handleInputChange} value={formData.supervisorName} required /><br /><br />

                            <label htmlFor="yearOfJoining">Year of Joining: </label>
                            <input type="text" id="yearOfJoining" name="yearOfJoining" onChange={handleInputChange} value={formData.yearOfJoining} required /><br /><br />
                        </div>

                        <div style={{ width: '45%' }}>
                            <label htmlFor="defenseDate">Date of Successful Thesis Defence: </label>
                            <input type="text" id="defenseDate" name="defenseDate" onChange={handleInputChange} value={formData.defenseDate} required /><br /><br />

                            <label htmlFor="awardDate">Date of Award: </label>
                            <input type="text" id="awardDate" name="awardDate" onChange={handleInputChange} value={formData.awardDate} required /><br /><br />

                            <label htmlFor="thesisTitle">Title of PhD Thesis: </label>
                            <input type="text" id="thesisTitle" name="thesisTitle" onChange={handleInputChange} value={formData.thesisTitle} required /><br /><br />
                        </div>
                    </div>
                    <button type="button" onClick={savePhDData}>Save PhD Data</button>
                </fieldset>

               

<fieldset style={{ padding: '1rem', marginBottom: '0.5rem' }}>
    <legend style={{ backgroundColor: '#e1f0d8', color: '#54773c', padding: '0.5rem', borderRadius: '0.5rem', width: '100%' }}>Academic Details - M. Tech./ M.E./ PG Details</legend>
    <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
        <div style={{ width: '45%' }}>
            <label htmlFor="degreeCertificate">Degree/Certificate: </label>
            <input type="text" id="degreeCertificate" name="degreeCertificate" onChange={handleInputChange} value={formData.degreeCertificate} required /><br /><br />

            <label htmlFor="universityInstitute">University/Institute: </label>
            <input type="text" id="universityInstitute" name="universityInstitute" onChange={handleInputChange} value={formData.universityInstitute} required /><br /><br />

            <label htmlFor="branchStream">Branch/Stream: </label>
            <input type="text" id="branchStream" name="branchStream" onChange={handleInputChange} value={formData.branchStream} required /><br /><br />

            <label htmlFor="yearOfJoiningMTech">Year of Joining: </label>
            <input type="text" id="yearOfJoiningMTech" name="yearOfJoiningMTech" onChange={handleInputChange} value={formData.yearOfJoiningMTech} required /><br /><br />
        </div>

        <div style={{ width: '45%' }}>
            <label htmlFor="yearOfCompletionMTech">Year of Completion: </label>
            <input type="text" id="yearOfCompletionMTech" name="yearOfCompletionMTech" onChange={handleInputChange} value={formData.yearOfCompletionMTech} required /><br /><br />

            <label htmlFor="durationMTech">Duration (in years): </label>
            <input type="text" id="durationMTech" name="durationMTech" onChange={handleInputChange} value={formData.durationMTech} required /><br /><br />

            <label htmlFor="percentageCGPAMTech">Percentage/ CGPA: </label>
            <input type="text" id="percentageCGPAMTech" name="percentageCGPAMTech" onChange={handleInputChange} value={formData.percentageCGPAMTech} required /><br /><br />

            <label htmlFor="divisionClassMTech">Division/Class: </label>
            <input type="text" id="divisionClassMTech" name="divisionClassMTech" onChange={handleInputChange} value={formData.divisionClassMTech} required /><br /><br />
        </div>
    </div>
    <button type="button" onClick={handleSubmitPG}>Save </button>
</fieldset>


<fieldset style={{ padding: '1rem', marginBottom: '0.5rem' }}>
    <legend style={{ backgroundColor: '#e1f0d8', color: '#54773c', padding: '0.5rem', borderRadius: '0.5rem', width: '100%' }}>Academic Details - B. Tech./ B.E./ UG Details</legend>
    <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
        <div style={{ width: '45%' }}>
            <label htmlFor="degreeCertificate">Degree/Certificate: </label>
            <input type="text" id="degreeCertificate" name="degreeCertificate" onChange={handleInputChange} value={formData.degreeCertificate} required /><br /><br />

            <label htmlFor="universityInstitute">University/Institute: </label>
            <input type="text" id="universityInstitute" name="universityInstitute" onChange={handleInputChange} value={formData.universityInstitute} required /><br /><br />

            <label htmlFor="branchStream">Branch/Stream: </label>
            <input type="text" id="branchStream" name="branchStream" onChange={handleInputChange} value={formData.branchStream} required /><br /><br />

            <label htmlFor="yearOfJoiningMTech">Year of Joining: </label>
            <input type="text" id="yearOfJoiningMTech" name="yearOfJoiningMTech" onChange={handleInputChange} value={formData.yearOfJoiningMTech} required /><br /><br />
        </div>

        <div style={{ width: '45%' }}>
            <label htmlFor="yearOfCompletionMTech">Year of Completion: </label>
            <input type="text" id="yearOfCompletionMTech" name="yearOfCompletionMTech" onChange={handleInputChange} value={formData.yearOfCompletionMTech} required /><br /><br />

            <label htmlFor="durationMTech">Duration (in years): </label>
            <input type="text" id="durationMTech" name="durationMTech" onChange={handleInputChange} value={formData.durationMTech} required /><br /><br />

            <label htmlFor="percentageCGPAMTech">Percentage/ CGPA: </label>
            <input type="text" id="percentageCGPAMTech" name="percentageCGPAMTech" onChange={handleInputChange} value={formData.percentageCGPAMTech} required /><br /><br />

            <label htmlFor="divisionClassMTech">Division/Class: </label>
            <input type="text" id="divisionClassMTech" name="divisionClassMTech" onChange={handleInputChange} value={formData.divisionClassMTech} required /><br /><br />
        </div>
    </div>
    <button type="button" onClick={handleSubmitSchool}>Save </button>
</fieldset>



<fieldset style={{ padding: '1rem', marginBottom: '0.5rem' }}>
    <legend style={{ backgroundColor: '#e1f0d8', color: '#54773c', padding: '0.5rem', borderRadius: '0.5rem', width: '100%' }}>Academic Details - School *</legend>
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
            <tr>
                <th>10th/12th/HSC/Diploma</th>
                <th>School</th>
                <th>Year of Passing</th>
                <th>Percentage/ Grade</th>
                <th>Division/Class</th>
            </tr>
        </thead>
        <tbody>
            {/* Row 1: 12th/HSC/Diploma */}
            <tr>
                <td>12th/HSC/Diploma</td>
                <td><input type="text" name="schoolName1" onChange={handleInputChange} value={formData.schoolName1} required /></td>
                <td><input type="text" name="yearOfPassingSchool1" onChange={handleInputChange} value={formData.yearOfPassingSchool1} required /></td>
                <td><input type="text" name="percentageGrade1" onChange={handleInputChange} value={formData.percentageGrade1} required /></td>
                <td><input type="text" name="divisionClassSchool1" onChange={handleInputChange} value={formData.divisionClassSchool1} required /></td>
            </tr>
            {/* Row 2: 10th */}
            <tr>
                <td>10th</td>
                <td><input type="text" name="schoolName2" onChange={handleInputChange} value={formData.schoolName2} required /></td>
                <td><input type="text" name="yearOfPassingSchool2" onChange={handleInputChange} value={formData.yearOfPassingSchool2} required /></td>
                <td><input type="text" name="percentageGrade2" onChange={handleInputChange} value={formData.percentageGrade2} required /></td>
                <td><input type="text" name="divisionClassSchool2" onChange={handleInputChange} value={formData.divisionClassSchool2} required /></td>
            </tr>
        </tbody>
    </table>
    <button type="button" onClick={handleSubmitUG}>Save </button>
</fieldset>


<fieldset style={{ padding: '1rem', marginBottom: '0.5rem', maxWidth: '100%' }}>
    <legend style={{ backgroundColor: '#e1f0d8', color: '#54773c', padding: '0.5rem', borderRadius: '0.5rem', width: '100%' }}>Academic Details - M. Tech./ M.E./ PG Details</legend>
    <div style={{ width: '100%', overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
                <tr>
                    <th>Degree/Certificate</th>
                    <th>University/Institute</th>
                    <th>Branch/Stream</th>
                    <th>Year of Joining</th>
                    <th>Year of Completion</th>
                    <th>Duration (in years)</th>
                    <th>Percentage/CGPA</th>
                    <th>Division/Class</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="text" style={{ width: '100%' }} name="degree1" onChange={handleInputChange} value={formData.degree1} required /></td>
                    <td><input type="text" style={{ width: '100%' }} name="university1" onChange={handleInputChange} value={formData.university1} required /></td>
                    <td><input type="text" style={{ width: '100%' }} name="branch1" onChange={handleInputChange} value={formData.branch1} required /></td>
                    <td><input type="text" style={{ width: '100%' }} name="yearOfJoining1" onChange={handleInputChange} value={formData.yearOfJoining1} required /></td>
                    <td><input type="text" style={{ width: '100%' }} name="yearOfCompletion1" onChange={handleInputChange} value={formData.yearOfCompletion1} required /></td>
                    <td><input type="text" style={{ width: '100%' }} name="duration1" onChange={handleInputChange} value={formData.duration1} required /></td>
                    <td><input type="text" style={{ width: '100%' }} name="percentageCGPA1" onChange={handleInputChange} value={formData.percentageCGPA1} required /></td>
                    <td><input type="text" style={{ width: '100%' }} name="divisionClass1" onChange={handleInputChange} value={formData.divisionClass1} required /></td>
                </tr>
            </tbody>
        </table>
    </div>
    <button onClick={addMoreRows}>Add More</button>
    <button type="button" onClick={handleSubmitAdditional}>Save </button>
</fieldset>







                <div>
                    <button type="submit" style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block', marginTop: '1rem', backgroundColor: '#6fb85b', color: 'white' }}>Save & Next</button>
                </div>
            </form>
        </div>
    );
}
export default EducationalQualificationsForm;