import React, { useState } from "react";
import axios from "axios";

const EmploymentForm = () => {
    const em_id=localStorage.getItem("em_id");
    
    const [formData, setFormData] = useState({
        app_number:"app_number",
        present_position: "",
        organization: "",
        status: "",
        date_join: "",
        date_leave: "",
        duration: "",
        area_special:"",
        current_area:"",

    });

    const [employmentHistory, setEmploymentHistory] = useState({
       em_id:"em_id", 
        present_position: "",
        organization: "",
        status: "",
        date_join: "",
        date_leave: "",
        duration: ""
    });

    const [teachingDetails, setteachingDetails] = useState({
        em_id:"em_id",  
        present_position: "",
        employer:"",
        courseTaught:"",
        UgPg:"",
       NoOfStud:"",
       
        date_join: "",
        date_leave: "",
        duration: ""
    });
    const [ResearchExperience, setResearchExperience] = useState({
        em_id:"em_id", 
        present_position: "",
        supervisor:"",
        institution:"",
        date_join: "",
        date_leave: "",
        duration: ""
    });

    const [IndustrialExperience, setIndustrialExperience] = useState({
        em_id:"em_id", 
        present_position: "",
        institution:"",
        workProfile:"",
        date_join: "",
        date_leave: "",
        duration: ""
    });
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/employement/addPresentEmployment", formData);
            localStorage.setItem("em_id", response.data.em_id); // Store em_id in local storage
            console.log("Employment ID stored:", response.data.em_id);
        } catch (error) {
            console.error("Error submitting Present Employment form:", error);
        }
    };
/*-----------------------PRESENT EMPLOYEMENT--------------------------------------------------------------------------- */
    const handleInputChangePresentEmp = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmitPresentEmp = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/employement/createEmployment", formData);
            localStorage.setItem("em_id", response.data.em_id); // Store em_id in local storage
            console.log("Employment ID stored:", response.data.em_id);
        } catch (error) {
            console.error("Error submitting present employement form:", error);
        }
    };
    

/*-------------------------------------EMPLOYEMENT HISTORY--------------------------------------------------------------------- */
    const handleInputChangeEmpHistory = (e) => {
        const { name, value } = e.target;
        setEmploymentHistory({ ...employmentHistory, [name]: value });
    };
    const handleSubmitHistory = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/employement/addEmpHistory", formData);
            localStorage.setItem("em_id", response.data.em_id); // Store em_id in local storage
            console.log("Employment ID stored:", response.data.em_id);
        } catch (error) {
            console.error("Error submitting Employment History form:", error);
        }
    };


    const [newRowData1, setNewRowData1] = useState({
                    
    });
   const addMoreRows1 = async () => {
   try {

     const response = await axios.post('http://localhost:3000/api/employement/addEmpHistory/addMoreRows1', newRowData1);


     console.log(response.data);

    setNewRowData1({
  
   });
   } catch (error) {

     console.error('Error adding more rows:', error);
    }
    };



/* --------------------------------------------------TEACHING DETAILS-------------------------------------------------------------------*/
      
    const handleInputChangeteachingDetails = (e) => {
        const { name, value } = e.target;
        setteachingDetails({ ...teachingDetails, [name]: value });
    };
    const handleSubmitTeaching = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/employement/addTeachExp", formData);
            localStorage.setItem("em_id", response.data.em_id); // Store em_id in local storage
            console.log("Employment ID stored:", response.data.em_id);
        } catch (error) {
            console.error("Error submitting teaching experience form:", error);
        }
    };
   
    const [newRowData2, setNewRowData2] = useState({
                    
    });
    const addMoreRows2 = async () => {
    try {
    
    const response = await axios.post('http://localhost:3000/api/employement/addTeachExp/addMoreRows2', newRowData2);
    
    
    console.log(response.data);
    
    setNewRowData2({
    
    });
    } catch (error) {
    
    console.error('Error adding more rows:', error);
    }
    };
   
    
/*----------------------------------------------RESEARCH EXPERIENCE----------------------------------------------------------------- */

    const handleInputChangeResearchExp = (e) => {
        const { name, value } = e.target;
        setResearchExperience({ ...ResearchExperience, [name]: value });
    };
    const handleSubmitResearch = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/employement/addResearchExp", formData);
            localStorage.setItem("em_id", response.data.em_id); // Store em_id in local storage
            console.log("Employment ID stored:", response.data.em_id);
        } catch (error) {
            console.error("Error submitting research experience form:", error);
        }
    };



    const [newRowData3, setNewRowData3] = useState({
                    
    });
    const addMoreRows3 = async () => {
    try {
    
    const response = await axios.post('http://localhost:3000/api/employement/addResearchExp/addMoreRows3', newRowData3);
    
    
    console.log(response.data);
    
    setNewRowData3({
    
    });
    } catch (error) {
    
    console.error('Error adding more rows:', error);
    }
    };
    
/*------------------------------------------------------INDUSTRIAL EXPERIENCE------------------------------------------------------------------------------------- */
    
     


const handleInputChangeIndusExp = (e) => {
    const { name, value } = e.target;
    setIndustrialExperience({ ...IndustrialExperience, [name]: value });
};
    
     const handleSubmitIndus = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/employement/addIndustryExp", formData);
            localStorage.setItem("em_id", response.data.em_id); // Store em_id in local storage
            console.log("Employment ID stored:", response.data.em_id);
        } catch (error) {
            console.error("Error submitting employement form:", error);
        }
    };



    const [newRowData4, setNewRowData4] = useState({
                    
    });
    const addMoreRows4 = async () => {
    try {
    
    const response = await axios.post('http://localhost:3000/api/employement/addIndustryExp/addMoreRows4', newRowData4);
    
    
    console.log(response.data);
    
    setNewRowData4({
    
    });
    } catch (error) {
    
    console.error('Error adding more rows:', error);
    }
    };
/*------------------------------------------------------------------------------------------------------------------- */
    return (
        <div className="Present_Employment" style={{ marginTop: '12rem', marginLeft: '7rem', marginRight: '7rem', marginBottom: '4rem', backgroundColor: '#f5f5f5' }}>
            <h2 style={{ animation: 'blinker 1s linear infinite', textAlign: 'center', color: '#d15f75' }}>Apply For Faculty Position</h2>
            <form onSubmit={handleSubmit}>
            <fieldset style={{ padding: '1rem', marginBottom: '0.5rem' }}>
    <legend style={{ backgroundColor: '#e1f0d8', color: '#54773c', padding: '0.5rem', borderRadius: '0.5rem', width: '100%', fontWeight: 'bold' }}>
        Employment Details
    </legend>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '45%', fontWeight: 'bold' }}>
            <label htmlFor="present_position">Position: </label>
            <input type="text" id="present_position" name="present_position" onChange={handleInputChangePresentEmp} value={formData.present_position} required /><br /><br />

            <label htmlFor="organization">Organization/Institution: </label>
            <input type="text" id="organization" name="organization" onChange={handleInputChangePresentEmp} value={formData.organization} required /><br /><br />

            <label htmlFor="status">Status: </label>
            <input type="text" id="status" name="status" onChange={handleInputChangePresentEmp} value={formData.status} required /><br /><br />
        </div>

        <div style={{ width: '45%', fontWeight: 'bold' }}>
            <label htmlFor="date_join">Date of Joining: </label>
            <input type="text" id="date_join" name="date_join" onChange={handleInputChangePresentEmp} value={formData.date_join} required /><br /><br />

            <label htmlFor="date_leave">Date of Leaving: </label>
            <input type="text" id="date_leave" name="date_leave" onChange={handleInputChangePresentEmp} value={formData.date_leave} required /><br /><br />

            <label htmlFor="duration">Duration (in years & months): </label>
            <input type="text" id="duration" name="duration" onChange={handleInputChangePresentEmp} value={formData.duration} required /><br /><br />
        </div>
    </div>

    {/* New Textarea for Current Area */}
    <label htmlFor="current_area" style={{ fontWeight: 'bold' }}>Current Area: </label>
    <textarea id="current_area" name="current_area" onChange={handleInputChangePresentEmp} value={formData.current_area} rows="4" cols="50" required></textarea><br /><br />

    
    <label htmlFor="area_special" style={{ fontWeight: 'bold' }}>Area of Specialization: </label>
    <textarea id="area_special" name="area_special" onChange={handleInputChangePresentEmp} value={formData.area_special} rows="4" cols="50" required></textarea><br /><br />

    <button type="button" onClick={handleSubmitPresentEmp}>Save</button>
</fieldset>

                <fieldset style={{ padding: '1rem', marginBottom: '0.5rem' }}>
    <legend style={{ backgroundColor: '#e1f0d8', color: '#54773c', padding: '0.5rem', borderRadius: '0.5rem', width: '100%', fontWeight: 'bold' }}>Employement History</legend>
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
            <tr>
                <th>Sr. No.</th>
                <th>Position</th>
                <th>Organization/Institution</th>
                <th>Date Of Joining</th>
                <th>Date Of Leaving</th>
                <th>Duration</th>
            </tr>
        </thead>
        <tbody>
            
            <tr>
                <td>1.</td>
                <td><input type="text" name="Position" onChange={handleInputChangeEmpHistory} value={employmentHistory.present_position} required /></td>
                <td><input type="text" name="organization" onChange={handleInputChangeEmpHistory} value={employmentHistory.organization} required /></td>
                <td><input type="text" name="date_join" onChange={handleInputChangeEmpHistory} value={employmentHistory.date_join} required /></td>
                <td><input type="text" name="date_leave" onChange={handleInputChangeEmpHistory} value={employmentHistory.date_leave} required /></td>
                <td><input type="text" name="duration" onChange={handleInputChangeEmpHistory} value={employmentHistory.duration} required /></td>
            </tr>
           
        </tbody>
    </table>
    <button onClick={addMoreRows1}>Add More</button>
    <button type="button" onClick={handleSubmitHistory}>Save </button>
</fieldset>


<fieldset style={{ padding: '1rem', marginBottom: '0.5rem' }}>
    <legend style={{ backgroundColor: '#e1f0d8', color: '#54773c', padding: '0.5rem', borderRadius: '0.5rem', width: '100%', fontWeight: 'bold' }}>Teaching Experience</legend>
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
            <tr>
                <th>Sr. No.</th>
                <th>Position</th>
                <th>Employer</th>
                <th>Course Taught</th>
                <th>UG/PG</th>
                <th>No. Of Students</th>
                <th>Date Of Joining</th>
                <th>Date Of Leaving</th>
                <th>Duration</th>
            </tr>
        </thead>
        <tbody>
            
            <tr>
                <td>1.</td>
                <td><input type="text" style={{ width: '100%' }} name="Position" onChange={handleInputChangeteachingDetails} value={teachingDetails.present_position} required /></td>
                <td><input type="text" style={{ width: '100%' }} name="employer" onChange={handleInputChangeteachingDetails} value={teachingDetails.employer} required /></td>
                <td><input type="text" style={{ width: '100%' }} name="course Taught" onChange={handleInputChangeteachingDetails} value={teachingDetails.courseTaught} required /></td>
                <td><input type="text" style={{ width: '100%' }} name="UgPg" onChange={handleInputChangeteachingDetails} value={teachingDetails.UgPg} required /></td>
                <td><input type="text" style={{ width: '100%' }} name="NoOfStud" onChange={handleInputChangeteachingDetails} value={teachingDetails.NoOfStud} required /></td>
                <td><input type="text" style={{ width: '100%' }} name="date_join" onChange={handleInputChangeteachingDetails} value={teachingDetails.date_join} required /></td>
                <td><input type="text" style={{ width: '100%' }}name="date_leave" onChange={handleInputChangeteachingDetails} value={teachingDetails.date_leave} required /></td>
                <td><input type="text" style={{ width: '100%' }} name="duration" onChange={handleInputChangeteachingDetails} value={teachingDetails.duration} required /></td>
            </tr>
           
        </tbody>
    </table>
    <button onClick={addMoreRows2}>Add More</button>
    <button type="button" onClick={handleSubmitTeaching}>Save </button>
</fieldset>

<fieldset style={{ padding: '1rem', marginBottom: '0.5rem' }}>
    <legend style={{ backgroundColor: '#e1f0d8', color: '#54773c', padding: '0.5rem', borderRadius: '0.5rem', width: '100%', fontWeight: 'bold' }}>Research Experience</legend>
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
            <tr>
                <th>Sr. No.</th>
                <th>Position</th>
                <th>Organization/Institution</th>
                <th>Supervisor</th>
                <th>Date Of Joining</th>
                <th>Date Of Leaving</th>
                <th>Duration</th>
            </tr>
        </thead>
        <tbody>
            
            <tr>
                <td>1.</td>
                <td><input type="text" style={{ width: '100%' }} name="Position" onChange={handleInputChangeResearchExp} value={ResearchExperience.present_position} required /></td>
                <td><input type="text" style={{ width: '100%' }} name="organization" onChange={handleInputChangeResearchExp} value={ResearchExperience.organization} required /></td>
                <td><input type="text" style={{ width: '100%' }} name="supervisor" onChange={handleInputChangeResearchExp} value={ResearchExperience.supervisor} required /></td>
                <td><input type="text" style={{ width: '100%' }} name="date_join" onChange={handleInputChangeResearchExp} value={ResearchExperience.date_join} required /></td>
                <td><input type="text" style={{ width: '100%' }} name="date_leave" onChange={handleInputChangeResearchExp} value={ResearchExperience.date_leave} required /></td>
                <td><input type="text" style={{ width: '100%' }} name="duration" onChange={handleInputChangeResearchExp} value={ResearchExperience.duration} required /></td>
            </tr>
           
        </tbody>
    </table>
    <button onClick={addMoreRows3}>Add More</button>
    <button type="button" onClick={handleSubmitResearch}>Save </button>
</fieldset>
            

<fieldset style={{ padding: '1rem', marginBottom: '0.5rem' }}>
    <legend style={{ backgroundColor: '#e1f0d8', color: '#54773c', padding: '0.5rem', borderRadius: '0.5rem', width: '100%', fontWeight: 'bold' }}>Industrial Experience</legend>
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
            <tr>
                <th>Sr. No.</th>
                <th>Position</th>
                <th>Organization/Institution</th>
                <th>Work Profile</th>
                <th>Date Of Joining</th>
                <th>Date Of Leaving</th>
                <th>Duration</th>
            </tr>
        </thead>
        <tbody>
            
            <tr>
                <td>1.</td>
                <td><input type="text" style={{ width: '100%' }} name="Position" onChange={handleInputChangeIndusExp} value={ResearchExperience.present_position} required /></td>
                <td><input type="text" style={{ width: '100%' }} name="organization" onChange={handleInputChangeIndusExp} value={ResearchExperience.organization} required /></td>
                <td><input type="text" style={{ width: '100%' }} name="supervisor" onChange={handleInputChangeIndusExp} value={ResearchExperience.supervisor} required /></td>
                <td><input type="text" style={{ width: '100%' }} name="date_join" onChange={handleInputChangeIndusExp} value={ResearchExperience.date_join} required /></td>
                <td><input type="text" style={{ width: '100%' }} name="date_leave" onChange={handleInputChangeIndusExp} value={ResearchExperience.date_leave} required /></td>
                <td><input type="text" style={{ width: '100%' }} name="duration" onChange={handleInputChangeIndusExp} value={ResearchExperience.duration} required /></td>
            </tr>
           
        </tbody>
    </table>
    <button onClick={addMoreRows4}>Add More</button>
    <button type="button" onClick={handleSubmitIndus}>Save </button>
</fieldset>

                <div>
                    <button type="submit" style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block', marginTop: '1rem', backgroundColor: '#6fb85b', color: 'white' }}>Save & Next</button>
                </div>
            </form>
        </div>
    );
}

export default EmploymentForm;
