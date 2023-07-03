import React from 'react'
import './StudentTable.css'

const StudentTable = ({ title, companyOpenings, studentEmail, applyToCompany }) => {

    const handleApplyClick = async (companyEmail) => {
        await applyToCompany(studentEmail, companyEmail)
    }

    return (
        <div className="table-container">
            <div className="table-title">
                <h3>{title}</h3>
            </div>
            {companyOpenings.length > 0 && (
                <div className="table-content">
                    <table>
                        <tbody>
                            <tr>
                                <th>Company Name</th>
                                <th>Job Profile</th>
                                <th>Compensation</th>
                                <th>Location</th>
                                <th>Minimum CGPA</th>
                                <th>Apply</th>
                            </tr>
                            {companyOpenings.map(({ email, name, jobProfile, compensation, location, minCGPA }, index) =>
                                (<tr key={index}>
                                    <td>{name}</td>
                                    <td>{jobProfile}</td>
                                    <td>{compensation}</td>
                                    <td>{location}</td>
                                    <td>{minCGPA}</td>
                                    <td>
                                        <button className='table-apply-button' onClick={() => handleApplyClick(email)}>Apply</button>
                                    </td>
                                </tr>)
                            )}
                        </tbody>
                    </table>
                </div>
            )}

            {companyOpenings.length === 0 &&
                <h3 className='table-message'>
                    New Openings are shown here!
                </h3>
            }
        </div>
    )
}

export default StudentTable