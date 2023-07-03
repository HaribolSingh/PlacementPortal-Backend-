import React from 'react'

const StudentTable2 = ({ title, companiesApplied }) => {
    return (
        <div className="table-container">
            <div className="table-title">
                <h3>{title}</h3>
            </div>
            {(companiesApplied.length > 0) &&

                <div className="table-content">
                    <table>
                        <tbody>
                            <tr>
                                <th>Company Name</th>
                                <th>Job Profile</th>
                                <th>Compensation</th>
                                <th>Location</th>
                                <th>Status</th>
                            </tr>
                            {companiesApplied.map(({ name, jobProfile, compensation, location, status }, index) =>
                                (<tr key={index}>
                                    <td>{name}</td>
                                    <td>{jobProfile}</td>
                                    <td>{compensation}</td>
                                    <td>{location}</td>
                                    <td>{status}</td>
                                </tr>)
                            )}
                        </tbody>
                    </table>
                </div>
            }
            {companiesApplied.length === 0 &&
                <h3 className='table-message'>
                    All the companies you applied to show up here!
                </h3>
            }
        </div>
    )
}

export default StudentTable2