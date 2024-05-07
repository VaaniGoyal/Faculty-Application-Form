// import React, { useState } from "react";
// import axios from "axios";

// const PresentEmploymentForm = () => {
//     const [formData, setFormData] = useState({
//         present_position: "",
//         organization: "",
//         status: "",
//         date_join: "",
//         date_leave: "",
//         duration: ""
//     });

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post("http://localhost:3000/api/application/addPresentEmployment", formData);
//             localStorage.setItem("em_id", response.data.em_id); // Store em_id in local storage
//             console.log("Employment ID stored:", response.data.em_id);
//         } catch (error) {
//             console.error("Error submitting Present Employment form:", error);
//         }
//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSave = async () => {
//         try {
//             const response = await axios.post("http://localhost:3000/api/application/addPresentEmployment", formData);
//             localStorage.setItem("em_id", response.data.em_id); // Store em_id in local storage
//             console.log("Employment ID stored:", response.data.em_id);
//         } catch (error) {
//             console.error("Error saving Present Employment data:", error);
//         }
//     };
//     const app_number=localStorage.getItem("app_number");
//     const [EmployementHistory, setEmployementHistory] = useState({
//         id: app_number,
//         present_position: "",
//         organization: "",
//         status: "",
//         date_join: "",
//         date_leave: "",
//         duration: ""
//     });

//     return (
//         <div className="Present_Employment" style={{ marginTop: '12rem', marginLeft: '7rem', marginRight: '7rem', marginBottom: '4rem', backgroundColor: '#f5f5f5' }}>
//             <h2 style={{ animation: 'blinker 1s linear infinite', textAlign: 'center', color: '#d15f75' }}>Present Employment</h2>
//             <form onSubmit={handleSubmit}>
//                 <fieldset style={{ padding: '1rem', marginBottom: '0.5rem' }}>
//                     <legend style={{ backgroundColor: '#e1f0d8', color: '#54773c', padding: '0.5rem', borderRadius: '0.5rem', width: '100%' }}>
//                         Employment Details
//                         <button type="button" onClick={handleSave} style={{ marginLeft: '1rem', backgroundColor: '#6fb85b', color: 'white', border: 'none', padding: '0.5rem' }}>Save</button>
//                     </legend>
//                     <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
//                         <div style={{ width: '45%' }}>
//                             <label htmlFor="present_position">Position: </label>
//                             <input type="text" id="present_position" name="present_position" onChange={handleInputChange} value={formData.present_position} required /><br /><br />

//                             <label htmlFor="organization">Organization/Institution: </label>
//                             <input type="text" id="organization" name="organization" onChange={handleInputChange} value={formData.organization} required /><br /><br />

//                             <label htmlFor="status">Status: </label>
//                             <input type="text" id="status" name="status" onChange={handleInputChange} value={formData.status} required /><br /><br />
//                         </div>

//                         <div style={{ width: '45%' }}>
//                             <label htmlFor="date_join">Date of Joining: </label>
//                             <input type="text" id="date_join" name="date_join" onChange={handleInputChange} value={formData.date_join} required /><br /><br />

//                             <label htmlFor="date_leave">Date of Leaving: </label>
//                             <input type="text" id="date_leave" name="date_leave" onChange={handleInputChange} value={formData.date_leave} required /><br /><br />

//                             <label htmlFor="duration">Duration (in years & months): </label>
//                             <input type="text" id="duration" name="duration" onChange={handleInputChange} value={formData.duration} required /><br /><br />
//                         </div>
//                     </div>

                    
//                 </fieldset>

//                 <div>
//                     <button type="submit" style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block', marginTop: '1rem', backgroundColor: '#6fb85b', color: 'white' }}>Save & Next</button>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default PresentEmploymentForm;







import React, { useState } from "react";
import axios from "axios";

const PresentEmploymentForm = () => {
    const [formData, setFormData] = useState({
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
        id:"",
        present_position: "",
        organization: "",
        status: "",
        date_join: "",
        date_leave: "",
        duration: ""
    });

    const [teachingDetails, setteachingDetails] = useState({
        id:"",
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
        id:"",
        present_position: "",
        supervisor:"",
        institution:"",
        date_join: "",
        date_leave: "",
        duration: ""
    });

    const [IndustrialExperience, setIndustrialExperience] = useState({
        id:"",
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

    const handleSubmitHistory = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/application/addEmpHistory", formData);
            localStorage.setItem("em_id", response.data.em_id); // Store em_id in local storage
            console.log("Employment ID stored:", response.data.em_id);
        } catch (error) {
            console.error("Error submitting Employment History form:", error);
        }
    };

    const handleSubmitTeaching = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/application/addTeachExp", formData);
            localStorage.setItem("em_id", response.data.em_id); // Store em_id in local storage
            console.log("Employment ID stored:", response.data.em_id);
        } catch (error) {
            console.error("Error submitting teaching experience form:", error);
        }
    };

    const handleSubmitPresentEmp = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/application/createEmployment", formData);
            localStorage.setItem("em_id", response.data.em_id); // Store em_id in local storage
            console.log("Employment ID stored:", response.data.em_id);
        } catch (error) {
            console.error("Error submitting present employement form:", error);
        }
    };

    const handleSubmitResearch = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/application/addResearchExp", formData);
            localStorage.setItem("em_id", response.data.em_id); // Store em_id in local storage
            console.log("Employment ID stored:", response.data.em_id);
        } catch (error) {
            console.error("Error submitting research experience form:", error);
        }
    };

    const handleSubmitIndus = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/application/addIndustryExp", formData);
            localStorage.setItem("em_id", response.data.em_id); // Store em_id in local storage
            console.log("Employment ID stored:", response.data.em_id);
        } catch (error) {
            console.error("Error submitting employement form:", error);
        }
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


    const [newRowData1, setNewRowData1] = useState({
                    
    });
const addMoreRows1 = async () => {
try {

const response = await axios.post('http://localhost:3000/api/application/addEmpHistory/addMoreRows1', newRowData1);


console.log(response.data);

setNewRowData1({
  
});
} catch (error) {

console.error('Error adding more rows:', error);
}
};



const [newRowData2, setNewRowData2] = useState({
                    
});
const addMoreRows2 = async () => {
try {

const response = await axios.post('http://localhost:3000/api/application/addTeachExp/addMoreRows2', newRowData2);


console.log(response.data);

setNewRowData2({

});
} catch (error) {

console.error('Error adding more rows:', error);
}
};


     
const [newRowData3, setNewRowData3] = useState({
                    
});
const addMoreRows3 = async () => {
try {

const response = await axios.post('http://localhost:3000/api/application/addResearchExp/addMoreRows3', newRowData3);


console.log(response.data);

setNewRowData3({

});
} catch (error) {

console.error('Error adding more rows:', error);
}
};


            
const [newRowData4, setNewRowData4] = useState({
                    
});
const addMoreRows4 = async () => {
try {

const response = await axios.post('http://localhost:3000/api/application/addIndustryExp/addMoreRows4', newRowData4);


console.log(response.data);

setNewRowData4({

});
} catch (error) {

console.error('Error adding more rows:', error);
}
};




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
            <input type="text" id="present_position" name="present_position" onChange={handleInputChange} value={formData.present_position} required /><br /><br />

            <label htmlFor="organization">Organization/Institution: </label>
            <input type="text" id="organization" name="organization" onChange={handleInputChange} value={formData.organization} required /><br /><br />

            <label htmlFor="status">Status: </label>
            <input type="text" id="status" name="status" onChange={handleInputChange} value={formData.status} required /><br /><br />
        </div>

        <div style={{ width: '45%', fontWeight: 'bold' }}>
            <label htmlFor="date_join">Date of Joining: </label>
            <input type="text" id="date_join" name="date_join" onChange={handleInputChange} value={formData.date_join} required /><br /><br />

            <label htmlFor="date_leave">Date of Leaving: </label>
            <input type="text" id="date_leave" name="date_leave" onChange={handleInputChange} value={formData.date_leave} required /><br /><br />

            <label htmlFor="duration">Duration (in years & months): </label>
            <input type="text" id="duration" name="duration" onChange={handleInputChange} value={formData.duration} required /><br /><br />
        </div>
    </div>

    {/* New Textarea for Current Area */}
    <label htmlFor="current_area" style={{ fontWeight: 'bold' }}>Current Area: </label>
    <textarea id="current_area" name="current_area" onChange={handleInputChange} value={formData.current_area} rows="4" cols="50" required></textarea><br /><br />

    
    <label htmlFor="area_special" style={{ fontWeight: 'bold' }}>Area of Specialization: </label>
    <textarea id="area_special" name="area_special" onChange={handleInputChange} value={formData.area_special} rows="4" cols="50" required></textarea><br /><br />

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
                <td><input type="text" name="Position" onChange={handleInputChange} value={employmentHistory.present_position} required /></td>
                <td><input type="text" name="organization" onChange={handleInputChange} value={employmentHistory.organization} required /></td>
                <td><input type="text" name="date_join" onChange={handleInputChange} value={employmentHistory.date_join} required /></td>
                <td><input type="text" name="date_leave" onChange={handleInputChange} value={employmentHistory.date_leave} required /></td>
                <td><input type="text" name="duration" onChange={handleInputChange} value={employmentHistory.duration} required /></td>
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
                <td><input type="text" style={{ width: '100%' }} name="Position" onChange={handleInputChange} value={teachingDetails.present_position} required /></td>
                <td><input type="text" style={{ width: '100%' }} name="employer" onChange={handleInputChange} value={teachingDetails.employer} required /></td>
                <td><input type="text" style={{ width: '100%' }} name="course Taught" onChange={handleInputChange} value={teachingDetails.courseTaught} required /></td>
                <td><input type="text" style={{ width: '100%' }} name="UgPg" onChange={handleInputChange} value={teachingDetails.UgPg} required /></td>
                <td><input type="text" style={{ width: '100%' }} name="NoOfStud" onChange={handleInputChange} value={teachingDetails.NoOfStud} required /></td>
                <td><input type="text" style={{ width: '100%' }} name="date_join" onChange={handleInputChange} value={teachingDetails.date_join} required /></td>
                <td><input type="text" style={{ width: '100%' }}name="date_leave" onChange={handleInputChange} value={teachingDetails.date_leave} required /></td>
                <td><input type="text" style={{ width: '100%' }} name="duration" onChange={handleInputChange} value={teachingDetails.duration} required /></td>
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
                <td><input type="text" style={{ width: '100%' }} name="Position" onChange={handleInputChange} value={ResearchExperience.present_position} required /></td>
                <td><input type="text" style={{ width: '100%' }} name="organization" onChange={handleInputChange} value={ResearchExperience.organization} required /></td>
                <td><input type="text" style={{ width: '100%' }} name="supervisor" onChange={handleInputChange} value={ResearchExperience.supervisor} required /></td>
                <td><input type="text" style={{ width: '100%' }} name="date_join" onChange={handleInputChange} value={ResearchExperience.date_join} required /></td>
                <td><input type="text" style={{ width: '100%' }} name="date_leave" onChange={handleInputChange} value={ResearchExperience.date_leave} required /></td>
                <td><input type="text" style={{ width: '100%' }} name="duration" onChange={handleInputChange} value={ResearchExperience.duration} required /></td>
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
                <td><input type="text" style={{ width: '100%' }} name="Position" onChange={handleInputChange} value={ResearchExperience.present_position} required /></td>
                <td><input type="text" style={{ width: '100%' }} name="organization" onChange={handleInputChange} value={ResearchExperience.organization} required /></td>
                <td><input type="text" style={{ width: '100%' }} name="supervisor" onChange={handleInputChange} value={ResearchExperience.supervisor} required /></td>
                <td><input type="text" style={{ width: '100%' }} name="date_join" onChange={handleInputChange} value={ResearchExperience.date_join} required /></td>
                <td><input type="text" style={{ width: '100%' }} name="date_leave" onChange={handleInputChange} value={ResearchExperience.date_leave} required /></td>
                <td><input type="text" style={{ width: '100%' }} name="duration" onChange={handleInputChange} value={ResearchExperience.duration} required /></td>
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

export default PresentEmploymentForm;
