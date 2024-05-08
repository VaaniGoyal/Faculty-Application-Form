import React from "react";

function FinalPdf() {
    return (
        <div style={{ marginTop: "20%", marginLeft: "5%", marginBottom: "2%", marginRight: "2%", width: "100%" }}>
            <span className="label">
                <h2 style={{ backgroundColor: "#e1f0d8", fontWeight: "bolder", color: "#54773c" }}>
                    1. Application Details
                </h2>
            </span>
            <table className="tab" style={{ borderCollapse: "collapse", border: "1px solid black", width: "100%" }}>
                <tbody>
                    <tr style={{ backgroundColor: "#f1f1f1" }}>
                        <td>
                            <strong className="tr_title">Advertisement Number</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Date of Application</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Application Number</strong>
                        </td>

                        <td>
                            <strong className="tr_title">Post Applied for</strong>
                        </td>

                        <td>
                            <strong className="tr_title"> Department/School</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>Gennedy</td>
                        <td>Tourist</td>
                        <td>Krotokevich</td>
                    </tr>
                </tbody>
            </table>

            <span className="label">
                <h2 style={{ backgroundColor: "#e1f0d8", fontWeight: "bolder", color: "#54773c" }}>
                    2. Personal Details
                </h2>
            </span>
            <table className="tab" style={{ borderCollapse: "collapse", border: "1px solid black", width: "100%" }}>
                <tbody>
                    <tr style={{ backgroundColor: "#f1f1f1" }}>
                        <td>
                            <strong className="tr_title">Middle Name</strong>
                        </td>
                        <td>
                            <strong className="tr_title">First Name</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Last Name</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>Gennedy</td>
                        <td>Tourist</td>
                        <td>Krotokevich</td>
                    </tr>
                </tbody>
            </table>
            <br />
            <table className="tab" style={{ borderCollapse: "collapse", border: "1px solid black", width: "100%" }}>
                <tbody>
                    <tr style={{ backgroundColor: "#f1f1f1" }}>
                        <td>
                            <strong className="tr_title">Date of Birth</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Gender</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Marital Status</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Category</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Nationality</strong>
                        </td>
                        <td>
                            <strong className="tr_title">ID Proof</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>20/01/2005</td>
                        <td>Other</td>
                        <td>Married</td>
                        <td>UR</td>
                        <td>OCI</td>
                        <td>AADHAR</td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Father's Name</strong>
                        </td>
                        <td colSpan="6">Esperanza.Daugherty</td>
                    </tr>
                </tbody>
            </table>
            <br />
            <table className="tab" style={{ borderCollapse: "collapse", border: "1px solid black", width: "100%" }}>
                <tbody>
                    <tr style={{ backgroundColor: "#f1f1f1" }}>
                        <td width="50%">
                            <strong className="tr_title">Current Address</strong>
                        </td>
                        <td width="50%">
                            <strong className="tr_title">Permanent Address</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>476 Alex Mall</td>
                        <td>150 Heidenreich Center</td>
                    </tr>
                </tbody>
            </table>
            <br />
            <table className="tab" style={{ borderCollapse: "collapse", border: "1px solid black", width: "100%" }}>
                <tbody>
                    <tr>
                        <td style={{ backgroundColor: "#f1f1f1" }}>
                            <strong className="tr_title">Mobile</strong>
                        </td>
                        <td>Lead Applications Ad</td>
                    </tr>
                    <tr>
                        <td style={{ backgroundColor: "#f1f1f1" }}>
                            <strong className="tr_title">Alternate Mobile</strong>
                        </td>
                        <td>Central Applications</td>
                    </tr>
                    <tr>
                        <td style={{ backgroundColor: "#f1f1f1" }}>
                            <strong className="tr_title">Landline Phone No.</strong>
                        </td>
                        <td>657</td>
                    </tr>
                    <tr>
                        <td style={{ backgroundColor: "#f1f1f1" }}>
                            <strong className="tr_title">E-mail</strong>
                        </td>
                        <td>gulidy@clout.wiki</td>
                    </tr>
                    <tr>
                        <td style={{ backgroundColor: "#f1f1f1" }}>
                            <strong className="tr_title">Alternate E-mail</strong>
                        </td>
                        <td>your.email+fakedata13950@gmail.com</td>
                    </tr>
                </tbody>
            </table>
            <br />

            <span className="label">
                <h2 style={{ backgroundColor: "#e1f0d8", fontWeight: "bolder", color: "#54773c" }}>
                    3. Educational Qualifications
                </h2>
            </span>

            {/* (A) Ph. D. Details */}
            <table className="tab" style={{ borderCollapse: "collapse", border: "1px solid black", width: "100%" }}>
                <h4>(A) Ph. D. Details </h4>
                <tbody>
                    <tr style={{ backgroundColor: "#f1f1f1" }}>
                        <td>
                            <strong className="tr_title">University/Institute</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Department</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Name of PhD Supervisor</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Year of Joining:</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Date of Successful Thesis Defence</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Date of Award</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Title of PhD Thesis:</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>Gennedy</td>
                        <td>Tourist</td>
                        <td>Krotokevich</td>
                        <td>Krotokevich</td>
                        <td>Krotokevich</td>
                        <td>Krotokevich</td>
                        <td>Krotokevich</td>
                    </tr>
                </tbody>
            </table>
            <br />
            {/* (B) Academic Details - PG */}
            <table className="tab" style={{ borderCollapse: "collapse", border: "1px solid black", width: "100%" }}>
                <h4>(B) Academic Details - PG </h4>
                <tbody>
                    <tr style={{ backgroundColor: "#f1f1f1" }}>
                        <td>
                            <strong className="tr_title">Degree/Certificate</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Year of Completion</strong>
                        </td>
                        <td>
                            <strong className="tr_title">University/Institute</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Duration (in years)</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Branch/Stream</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Percentage/ CGPA</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Year of Joining</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Division/Class</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>Gennedy</td>
                        <td>Tourist</td>
                        <td>Krotokevich</td>
                        <td>Krotokevich</td>
                        <td>Krotokevich</td>
                        <td>Krotokevich</td>
                        <td>Krotokevich</td>
                        <td>Krotokevich</td>
                    </tr>
                </tbody>
            </table>
            <br />
            {/* (C) Academic Details - UG */}
            <table className="tab" style={{ borderCollapse: "collapse", border: "1px solid black", width: "100%" }}>
                <h4>(C) Academic Details - UG</h4>
                <tbody>
                    <tr style={{ backgroundColor: "#f1f1f1" }}>
                        <td>
                            <strong className="tr_title">Degree/Certificate</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Year of Completion</strong>
                        </td>
                        <td>
                            <strong className="tr_title">University/Institute</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Duration (in years)</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Branch/Stream</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Percentage/ CGPA</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Year of Joining</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Division/Class</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>Gennedy</td>
                        <td>Tourist</td>
                        <td>Krotokevich</td>
                        <td>Krotokevich</td>
                        <td>Krotokevich</td>
                        <td>Krotokevich</td>
                        <td>Krotokevich</td>
                        <td>Krotokevich</td>
                    </tr>
                </tbody>
            </table>
            <br />
            {/* (D) Academic Details - School */}
            <table className="tab" style={{ borderCollapse: "collapse", border: "1px solid black", width: "100%" }}>
                <h4>(D) Academic Details - School</h4>
                <tbody>
                    <tr style={{ backgroundColor: "#f1f1f1" }}>
                        <td>
                            <strong className="tr_title">10th/12th/HSC/Diploma</strong>
                        </td>
                        <td>
                            <strong className="tr_title">School</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Year of Passing</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Percentage/ Grade</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Division/Class</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>Gennedy</td>
                        <td>Tourist</td>
                        <td>Krotokevich</td>
                        <td>Krotokevich</td>
                        <td>Krotokevich</td>
                    </tr>
                </tbody>
            </table>
            <br />
            {/* (E) Additional Educational Qualifications (If any) */}
            <table className="tab" style={{ borderCollapse: "collapse", border: "1px solid black", width: "100%" }}>
                <h4>(E) Additional Educational Qualifications</h4>
                <tbody>
                    <tr style={{ backgroundColor: "#f1f1f1" }}>
                        <td>
                            <strong className="tr_title">Degree</strong>
                        </td>
                        <td>
                            <strong className="tr_title">University</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Branch </strong>
                        </td>
                        <td>
                            <strong className="tr_title">Year of Joining </strong>
                        </td>
                        <td>
                            <strong className="tr_title">Year of Completion</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Duration</strong>
                        </td>
                        <td>
                            <strong className="tr_title">CGPA</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Division</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>Gennedy</td>
                        <td>Tourist</td>
                        <td>Krotokevich</td>
                        <td>Krotokevich</td>
                        <td>Krotokevich</td>
                        <td>Krotokevich</td>
                        <td>Krotokevich</td>
                        <td>Krotokevich</td>
                    </tr>
                </tbody>
            </table>
            <br />

            <span className="label">
                <h2 style={{ backgroundColor: "#e1f0d8", fontWeight: "bolder", color: "#54773c" }}>
                    4. Employement Details
                </h2>
            </span>
            {/* (A) Present Employment */}
            <table className="tab" style={{ borderCollapse: "collapse", border: "1px solid black", width: "100%" }}>
                <h4>(A) Present Employment</h4>
                <tbody>
                    <tr style={{ backgroundColor: "#f1f1f1" }}>
                        <td>
                            <strong className="tr_title">Position</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Date of Joining</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Organization/Institution</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Date of Leaving</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Status</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Duration (in years & months)</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Current Area</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Area of Specialization</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>Gennedy</td>
                        <td>Tourist</td>
                        <td>Krotokevich</td>
                        <td>Krotokevich</td>
                        <td>Krotokevich</td>
                        <td>Krotokevich</td>
                        <td>Krotokevich</td>
                        <td>Krotokevich</td>
                    </tr>
                </tbody>
            </table>
            <br />

            <table className="tab" style={{ borderCollapse: "collapse", border: "1px solid black", width: "100%" }}>
                <h4>(B) Employment History</h4>
                <tbody>
                    <tr style={{ backgroundColor: "#f1f1f1" }}>
                        <td>
                            <strong className="tr_title">Sr. No.</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Position</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Organization/Institution</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Date Of Joining</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Date of Leaving</strong>
                        </td>

                        <td>
                            <strong className="tr_title">Duration (in years & months)</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>Gennedy</td>
                        <td>Tourist</td>
                        <td>Krotokevich</td>
                        <td>Krotokevich</td>
                        <td>Krotokevich</td>
                        <td>Krotokevich</td>
                    </tr>
                </tbody>
            </table>

            {/* Teaching Experience */}
            <table className="tab" style={{ borderCollapse: "collapse", border: "1px solid black", width: "100%" }}>
                <h4>(C) Teaching Experience</h4>
                <tbody>
                    <tr style={{ backgroundColor: "#f1f1f1" }}>
                        <td>
                            <strong className="tr_title">Sr. No.</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Position</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Employer</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Course Taught </strong>
                        </td>
                        <td>
                            <strong className="tr_title">UG/PG</strong>
                        </td>

                        <td>
                            <strong className="tr_title">No. Of Students</strong>
                        </td>

                        <td>
                            <strong className="tr_title">Date of Joining</strong>
                        </td>

                        <td>
                            <strong className="tr_title">Date of Leaving</strong>
                        </td>

                        <td>
                            <strong className="tr_title">Duration</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>Gennedy</td>
                        <td>Tourist</td>
                        <td>Krotokevich</td>
                        <td>Krotokevich</td>
                        <td>Krotokevich</td>
                        <td>Krotokevich</td>
                    </tr>
                </tbody>
            </table>
            <br />

            <table className="tab" style={{ borderCollapse: "collapse", border: "1px solid black", width: "100%" }}>
                <h4>(D) Research Experience</h4>
                <tbody>
                    <tr style={{ backgroundColor: "#f1f1f1" }}>
                        <td>
                            <strong className="tr_title">Sr. No.</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Position</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Organization/Institution</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Supervisor</strong>
                        </td>

                        <td>
                            <strong className="tr_title">Date Of Joining</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Date of Leaving</strong>
                        </td>

                        <td>
                            <strong className="tr_title">Duration (in years & months)</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>Gennedy</td>
                        <td>Tourist</td>
                        <td>Krotokevich</td>
                        <td>Krotokevich</td>
                        <td>Krotokevich</td>
                        <td>Krotokevich</td>
                    </tr>
                </tbody>
            </table>

            <table className="tab" style={{ borderCollapse: "collapse", border: "1px solid black", width: "100%" }}>
                <h4>(E) Industrial Experience</h4>
                <tbody>
                    <tr style={{ backgroundColor: "#f1f1f1" }}>
                        <td>
                            <strong className="tr_title">Sr. No.</strong>
                        </td>

                        <td>
                            <strong className="tr_title">Organization/Institution</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Work Profile</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Date Of Joining</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Date of Leaving</strong>
                        </td>

                        <td>
                            <strong className="tr_title">Duration (in years & months)</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>Gennedy</td>
                        <td>Tourist</td>
                        <td>Krotokevich</td>
                        <td>Krotokevich</td>
                        <td>Krotokevich</td>
                        <td>Krotokevich</td>
                    </tr>
                </tbody>
            </table>

            {/*------------------------------PUBLICATIONS------------------------------------- */}
            <span className="label">
                <h2 style={{ backgroundColor: "#e1f0d8", fontWeight: "bolder", color: "#54773c" }}>5. Publications</h2>
            </span>

            {/* (A) summary of pub */}

            <table className="tab" style={{ borderCollapse: "collapse", border: "1px solid black", width: "100%" }}>
                <h3> (A) Summary of Publications</h3>
                <tbody>
                    <tr style={{ backgroundColor: "#f1f1f1" }}>
                        <td>
                            <strong className="tr_title">Number of International Journal Papers</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Number of National Journal Papers</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Number of Books</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Number of Book Chapters</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Number of International Conference Papers</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Number of National Conference Papers</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Number of Patents:</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Google Scholar Link</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>Gennedy</td>
                        <td>Tourist</td>
                        <td>Krotokevich</td>
                        <td>Krotokevich</td>
                        <td>Krotokevich</td>
                        <td>Krotokevich</td>
                        <td>Krotokevich</td>
                    </tr>
                </tbody>
            </table>
            <br />

            {/*List of pub*/}
            <table className="tab" style={{ borderCollapse: "collapse", border: "1px solid black", width: "100%" }}>
                <h3>(B) List of Publications</h3>
                <tbody>
                    <tr style={{ backgroundColor: "#f1f1f1" }}>
                        <td>
                            <strong className="tr_title">S.No.</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Author(s)</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Title</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Name of Journal </strong>
                        </td>
                        <td>
                            <strong className="tr_title">Year, Vol, Page</strong>
                        </td>
                        <td>
                            <strong className="tr_title">impact Factor</strong>
                        </td>
                        <td>
                            <strong className="tr_title">DOI</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Status</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>Gennedy</td>
                        <td>Tourist</td>
                        <td>Krotokevich</td>
                        <td>Krotokevich</td>
                        <td>Krotokevich</td>
                        <td>Krotokevich</td>
                        <td>Krotokevich</td>
                    </tr>
                </tbody>
            </table>

            {/*List of patents*/}
            <table className="tab" style={{ borderCollapse: "collapse", border: "1px solid black", width: "100%" }}>
                <h3>(C) List of Patents</h3>
                <tbody>
                    <tr style={{ backgroundColor: "#f1f1f1" }}>
                        <td>
                            <strong className="tr_title">S.No.</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Inventor(s)</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Title</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Country of Patent </strong>
                        </td>
                        <td>
                            <strong className="tr_title">Patent Number</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Date of Filing</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Date of Publish</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Status</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>Gennedy</td>
                        <td>Tourist</td>
                        <td>Krotokevich</td>
                        <td>Krotokevich</td>
                        <td>Krotokevich</td>
                        <td>Krotokevich</td>
                        <td>Krotokevich</td>
                    </tr>
                </tbody>
            </table>

            {/*List of Books*/}
            <table className="tab" style={{ borderCollapse: "collapse", border: "1px solid black", width: "100%" }}>
                <h3>(D) List of Books</h3>
                <tbody>
                    <tr style={{ backgroundColor: "#f1f1f1" }}>
                        <td>
                            <strong className="tr_title">S.No.</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Author(s)</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Title</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Year of Publication </strong>
                        </td>
                        <td>
                            <strong className="tr_title">ISBN</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>Gennedy</td>
                        <td>Tourist</td>
                        <td>Krotokevich</td>
                        <td>Krotokevich</td>
                        <td>Krotokevich</td>
                        <td>Krotokevich</td>
                        <td>Krotokevich</td>
                    </tr>
                </tbody>
            </table>

            {/*List of Books Ch*/}
            <table className="tab" style={{ borderCollapse: "collapse", border: "1px solid black", width: "100%" }}>
                <h3>(E) List of Books Chapters</h3>
                <tbody>
                    <tr style={{ backgroundColor: "#f1f1f1" }}>
                        <td>
                            <strong className="tr_title">S.No.</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Author(s)</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Title</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Year of Publication </strong>
                        </td>
                        <td>
                            <strong className="tr_title">ISBN</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>Gennedy</td>
                        <td>Tourist</td>
                        <td>Krotokevich</td>
                        <td>Krotokevich</td>
                        <td>Krotokevich</td>
                        <td>Krotokevich</td>
                        <td>Krotokevich</td>
                    </tr>
                </tbody>
            </table>
            {/*-----------------------MEMBERSHIP-------------------------------- */}
            <span className="label">
                <h2 style={{ backgroundColor: "#e1f0d8", fontWeight: "bolder", color: "#54773c" }}>6. Membership</h2>
            </span>

            <table className="tab" style={{ borderCollapse: "collapse", border: "1px solid black", width: "100%" }}>
                <h3> (A) Membership of Professional Societies</h3>
                <tbody>
                    <tr style={{ backgroundColor: "#f1f1f1" }}>
                        <td>
                            <strong className="tr_title">S.No.</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Name of professional society</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Membership Status</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>Gennedy</td>
                        <td>Tourist</td>
                        <td>Krotokevich</td>
                    </tr>
                </tbody>
            </table>

            <table className="tab" style={{ borderCollapse: "collapse", border: "1px solid black", width: "100%" }}>
                <h3> (B) Professional Trainings</h3>
                <tbody>
                    <tr style={{ backgroundColor: "#f1f1f1" }}>
                        <td>
                            <strong className="tr_title">S.No.</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Type of Training</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Organisation</strong>
                        </td>
                        <td>
                            <strong className="tr_title"> Year</strong>
                        </td>
                        <td>
                            <strong className="tr_title"> Duration</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>Gennedy</td>
                        <td>Tourist</td>
                        <td>Krotokevich</td>
                    </tr>
                </tbody>
            </table>
            <br />

            <table className="tab" style={{ borderCollapse: "collapse", border: "1px solid black", width: "100%" }}>
                <h3> (C) Award(s) and Recognition(s)</h3>
                <tbody>
                    <tr style={{ backgroundColor: "#f1f1f1" }}>
                        <td>
                            <strong className="tr_title">S.No.</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Name of Award</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Awarded By</strong>
                        </td>
                        <td>
                            <strong className="tr_title"> Year</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>Gennedy</td>
                        <td>Tourist</td>
                        <td>Krotokevich</td>
                    </tr>
                </tbody>
            </table>

            <table className="tab" style={{ borderCollapse: "collapse", border: "1px solid black", width: "100%" }}>
                <h3> (D) Sponsored Projects</h3>
                <tbody>
                    <tr style={{ backgroundColor: "#f1f1f1" }}>
                        <td>
                            <strong className="tr_title">S.No.</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Sponsoring Agency </strong>
                        </td>
                        <td>
                            <strong className="tr_title">Title of project</strong>
                        </td>
                        <td>
                            <strong className="tr_title"> Sanctioned Amount</strong>
                        </td>
                        <td>
                            <strong className="tr_title"> Period</strong>
                        </td>
                        <td>
                            <strong className="tr_title"> Role</strong>
                        </td>
                        <td>
                            <strong className="tr_title"> Status</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>Gennedy</td>
                        <td>Tourist</td>
                        <td>Krotokevich</td>
                    </tr>
                </tbody>
            </table>
            <br />
            <table className="tab" style={{ borderCollapse: "collapse", border: "1px solid black", width: "100%" }}>
                <h3> (D) Consultancy Projects</h3>
                <tbody>
                    <tr style={{ backgroundColor: "#f1f1f1" }}>
                        <td>
                            <strong className="tr_title">S.No.</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Organisation </strong>
                        </td>
                        <td>
                            <strong className="tr_title">Title of project</strong>
                        </td>
                        <td>
                            <strong className="tr_title"> Amount of Grant </strong>
                        </td>
                        <td>
                            <strong className="tr_title"> Period</strong>
                        </td>
                        <td>
                            <strong className="tr_title"> Role</strong>
                        </td>
                        <td>
                            <strong className="tr_title"> Status</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>Gennedy</td>
                        <td>Tourist</td>
                        <td>Krotokevich</td>
                    </tr>
                </tbody>
            </table>

            <br />
            {/**----------------------supervision---------------------------------- */}
            <span className="label">
                <h2 style={{ backgroundColor: "#e1f0d8", fontWeight: "bolder", color: "#54773c" }}>7. Supervision</h2>
            </span>

            <table className="tab" style={{ borderCollapse: "collapse", border: "1px solid black", width: "100%" }}>
                <h3> (A) PHD Thesis Supervision</h3>
                <tbody>
                    <tr style={{ backgroundColor: "#f1f1f1" }}>
                        <td>
                            <strong className="tr_title">S.No.</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Name of research scholar</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Title of Thesis</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Role</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Status</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Ongoing since/ Year of Completion</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>Gennedy</td>
                        <td>Tourist</td>
                        <td>Krotokevich</td>
                    </tr>
                </tbody>
            </table>

            <table className="tab" style={{ borderCollapse: "collapse", border: "1px solid black", width: "100%" }}>
                <h3> (B) M.Tech/ M.E./ Master's Degree</h3>
                <tbody>
                    <tr style={{ backgroundColor: "#f1f1f1" }}>
                        <td>
                            <strong className="tr_title">S.No.</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Name of research scholar</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Title of Thesis</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Role</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Status</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Ongoing since/ Year of Completion</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>Gennedy</td>
                        <td>Tourist</td>
                        <td>Krotokevich</td>
                    </tr>
                </tbody>
            </table>

            <table className="tab" style={{ borderCollapse: "collapse", border: "1px solid black", width: "100%" }}>
                <h3> (C) B.Tech/ B.E./ Bachelor's Degree</h3>
                <tbody>
                    <tr style={{ backgroundColor: "#f1f1f1" }}>
                        <td>
                            <strong className="tr_title">S.No.</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Name of research scholar</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Title of Thesis</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Role</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Status</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Ongoing since/ Year of Completion</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>Gennedy</td>
                        <td>Tourist</td>
                        <td>Krotokevich</td>
                    </tr>
                </tbody>
            </table>

            {/**-----------------------------refree-------------------------------- */}
            <span className="label">
                <h2 style={{ backgroundColor: "#e1f0d8", fontWeight: "bolder", color: "#54773c" }}>8. Referees</h2>
            </span>

            <table className="tab" style={{ borderCollapse: "collapse", border: "1px solid black", width: "100%" }}>
                <h3> (A) PHD Thesis Supervision</h3>
                <tbody>
                    <tr style={{ backgroundColor: "#f1f1f1" }}>
                        <td>
                            <strong className="tr_title">Name</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Position</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Association with Referee</strong>
                        </td>
                        <td>
                            <strong className="tr_title"> Organization/Institution </strong>
                        </td>
                        <td>
                            <strong className="tr_title">e-mail</strong>
                        </td>
                        <td>
                            <strong className="tr_title">Contact No.</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>Gennedy</td>
                        <td>Tourist</td>
                        <td>Krotokevich</td>
                    </tr>
                </tbody>
            </table>
            <button type="download">Print Application</button>
        </div>
    );
}

export default FinalPdf;
