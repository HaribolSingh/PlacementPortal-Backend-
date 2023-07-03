import React from 'react'
import './CompanyTable.css'

const CompanyTable = ({ title, studentsApplied }) => {

    return (
        <>
            <div className="table-container">
                <div className="company-message">
                    <p>Welcome, thanks for choosing our platform for hiring the best talent.
                        We hope you find the right candidates you want!</p>
                    <p>You can see the following applications.</p>
                </div>

                <div className="table-title">
                    <h3>{title}</h3>
                </div>
                {studentsApplied.length === 0 &&
                    <h3 className='table-message'>
                        New Applications will show up here!
                    </h3>
                }

                {studentsApplied.length > 0 && (
                    <div className="table-content">
                        <table>
                            <tbody>
                                <tr>
                                    <th>Student Name</th>
                                    <th>CGPA</th>
                                    <th>Branch</th>
                                    <th>Gender</th>
                                    <th>Resume Link</th>
                                    <th>Status</th>
                                </tr>
                                {studentsApplied.map(({name, cgpa, branch, gender, resumeLink, status}, index) =>
                                (<tr key={index}>
                                    <td>{name}</td>
                                    <td>{cgpa}</td>
                                    <td>{branch}</td>
                                    <td>{gender}</td>
                                    <td><a href="">{resumeLink}</a></td>
                                    <td>{status}</td>
                                    {/* <td>
                                        <button className='table-apply-button' onClick={() => handleApplyClick(email)}>Apply</button>
                                    </td> */}
                                </tr>)
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </>
    )
}

export default CompanyTable