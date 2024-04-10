// import React, { useState } from "react";
// import axios from "axios";
// import "./App.css";

// function Reset_Password() {
//   const [email, setEmail] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:3000/api/users/resetpassword", {
//         email: email,
//       });
//       // Handle successful reset password here
//       alert("Reset password link sent successfully");
//     } catch (error) {
//       setError("Failed to send reset password link. Please try again.");
//     }
//   };

//   return (
//     <div className="Reset_Password">
//       <h3 style={{ color: '#e10425', marginTop: '6rem', fontWeight: 'bold', textAlign: 'center', fontFamily: 'Noto Serif, serif', fontSize: '1.5rem' }}>Application for Faculty Position</h3>
//       <div className="container" style={{ borderRadius: '10rem', height: 'auto', marginTop: '2rem', marginLeft: '12rem', marginRight: '12rem' }}>
//         <div className="row" style={{ borderWidth: '0.2rem', borderStyle: 'solid', borderRadius: '1rem', boxShadow: '0rem 1rem 9rem 1rem #284d7a', backgroundColor: '#F7FFFF' }}>
//           <div className="col-md-6" style={{ height: 'auto', borderRadius: '10px 0px 0px 10px' }}>
//             <br />
//             <img src="https://i.postimg.cc/d37BZqr2/iitplogo.png" style={{ marginTop: '3%', marginLeft: '3%', height: '50%' }} />
//           </div>
//           <div className="col-md-6" style={{ borderRadius: '0px 10px 10px 0px', height: 'auto' }}>
//             <br />
//             <div className="col-md-10 col-md-offset-1">
//               <h3 style={{ textAlign: 'center', color: 'red' }}><strong>FORGOT PASSWORD</strong></h3><br />
//               <form onSubmit={handleSubmit} className="form" role="form">
//                 <input type="hidden" name="ci_csrf_token" value="" />
//                 <div className="inner-addon left-addon">
//                   <i className="glyphicon glyphicon-envelope"></i>
//                   <input
//                     type="text"
//                     name="email"
//                     placeholder="Please Enter Your Registered Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <br />
//                 <div className="row">
//                   <div className="col-md-3">
//                     <button type="submit" className="cancelbtn">Submit</button>
//                   </div>
//                   <div className="col-md-9">
//                     <a href="https://ofa.iiti.ac.in/facrec_che_2023_july_02/faculty/login">
//                       <button type="button" className="loginbtn pull-right">Login Area</button>
//                     </a>
//                   </div>
//                 </div>
//               </form>
//               {error && <div className="error" style={{ marginLeft: '30rem' }}>{error}</div>}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Reset_Password;


















import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import "./App.css";

function Reset_Password() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/users/resetpassword", {
        email: email,
      });
      // Handle successful reset password here
      alert("Reset password link sent successfully");
    } catch (error) {
      setError("Failed to send reset password link. Please try again.");
    }
  };

  const handleLoginClick = async() => {
      navigate('/');
  }

  return (
    <div className="Reset_Password">
      <br />
      <br />
      <h3 style={{ color: '#e10425', marginTop: '6rem', fontWeight: 'bold', textAlign: 'center', fontFamily: 'Noto Serif, serif', fontSize: '1.5rem' }}>Application for Faculty Position</h3>
      <div className="container" style={{ borderRadius: '10rem', height: '7.5rem', marginTop: '-1rem', marginLeft: '12rem', marginRight: '12rem' }}>
        <div className="row" style={{ borderWidth: '0.2rem', borderStyle: 'solid', borderRadius: '1rem', boxShadow: '0rem 1rem 9rem 1rem #284d7a', backgroundColor: '#F7FFFF' }}>
          <div className="col-md-6" style={{ height: '25rem', borderRadius: '10px 0px 0px 10px', position: 'relative' }}>
            <img src="https://i.postimg.cc/d37BZqr2/iitplogo.png" style={{ position: 'absolute', top: '50%', left: '20%', transform: 'translate(-50%, -50%)', height: '70%' }} />
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', textAlign: 'right' }}>
            <div style={{textAlign: 'center',marginleft: '34rem',marginTop: '-2rem' }}> 
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem',marginTop: '-2rem',marginLeft: '20rem',textAlignalign:'center'}}><strong><u>RESET PASSWORD</u></strong></h3>
              </div> 
              <form onSubmit={handleSubmit} className="form" role="form" style={{ textAlign: 'right' }}>
                <input type="hidden" name="ci_csrf_token" value="" />
                <div className="inner-addon left-addon">
                  <i className="glyphicon glyphicon-envelope"></i>
                  <input
                    type="text"
                    name="email"
                    placeholder="Please Enter Your Registered Email"
                    value={email}
                    style={{ fontSize: '1rem', width: '20rem' }}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <br />
              </form>
              {error && <div className="error" style={{ textAlign: 'center', color: 'red', marginTop: '1rem' }}>{error}</div>}
              {/* <div style={{ display: 'flex'}}>
              <div className="row">
                  <div className="col-md-3">
                    <button type="submit"  className=" universal-button" style={{ backgroundColor: 'red', marginLeft: '24rem' }}>Submit</button>
                   </div>
                 <div className="col-md-9">
                     
                      <button type="button" className="universal-button"  onClick={handleLoginClick}  style={{ backgroundColor: 'green', marginLeft: '24rem' }}>Login Area</button>
                    
                 </div>
                </div> */}
                <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
    <div className="col-md-3">
        <button type="submit" className="universal-button" style={{ backgroundColor: 'red',marginLeft: '24rem' }}>Submit</button>
    </div>
    <div className="col-md-3">
        <button type="button" className="universal-button" onClick={handleLoginClick} style={{ backgroundColor: 'green',marginLeft: '5rem' }}>Login Area</button>
    </div>
</div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default Reset_Password;
