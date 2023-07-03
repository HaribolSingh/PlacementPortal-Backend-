import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import StudentContext from '../context/student/studentContext'
import ProfileBar from '../components/ProfileBar'
import StudentTable2 from '../components/StudentTable2'

const SERVER = 'http://localhost:5000/api'

const StudentApplied = () => {
    const navigate = useNavigate()
    const { studentLogin, student } = useContext(StudentContext);

    const [companiesApplied, setCompaniesApplied] = useState([])

    useEffect(() => {
        if (studentLogin === false) {
            navigate('/student/login')
        }
        // eslint-disable-next-line

        const findAppliedCompanies = async () => {
            try {
                // Find all the companies who signed up
                const response1 = await fetch(`${SERVER}/company/listall`, {
                    method: 'GET'
                })
                const result1 = await response1.json()
                const allCompanies = result1.companies

                // Find all the emails of the companies for whom the student has applied
                const response2 = await fetch(`${SERVER}/student/listcompanies`, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ email: student.email })
                })
                const result2 = await response2.json()
                const allAppliedCompanies = result2.companiesApplied

                // Find all the companies & their details for which student has applied
                let appliedArray = []
                for (let company of allCompanies) {
                    for (let appliedObj of allAppliedCompanies) {
                        if (company.email === appliedObj.companyEmail) {
                            const entry = { ...company, status: appliedObj.status };
                            appliedArray.push(entry)
                        }
                    }
                }

                console.log(appliedArray)
                setCompaniesApplied(appliedArray)
            } catch (error) {
                alert(error)
            }
        }

        findAppliedCompanies()
    }, [student, navigate, studentLogin])

    return (
        <>
            <ProfileBar name={student.name} email={student.email} />
            <StudentTable2
                title={'Companies Applied'}
                companiesApplied={companiesApplied}
            />
        </>
    )
}

export default StudentApplied