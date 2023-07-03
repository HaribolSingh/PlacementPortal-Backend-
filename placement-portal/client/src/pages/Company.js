import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import companyContext from '../context/company/companyContext'
import ProfileBar from '../components/ProfileBar'
import CompanyTable from '../components/CompanyTable'

const SERVER = 'http://localhost:5000/api'

const Company = () => {
    const navigate = useNavigate()
    const context = useContext(companyContext);
    const { companyLogin, company } = context;

    const [studentsApplied, setStudentsApplied] = useState([])

    useEffect(() => {
        if (companyLogin === false) {
            navigate('/company/login')
        }
        // eslint-disable-next-line

        const findAppliedStudents = async () => {
            try {
                // Find all the students who signed up
                const response1 = await fetch(`${SERVER}/student/listall`, {
                    method: 'GET'
                })
                const result1 = await response1.json();
                const allStudents = result1.students;

                // Find all email of students who have applied for the company
                const response2 = await fetch(`${SERVER}/company/liststudents`, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ email: company.email })
                })
                const result2 = await response2.json();
                const allAppliedStudents = result2.studentsApplied;

                // Find all the students & their details who have applied for the company
                let appliedArray = []
                for (let student of allStudents) {
                    for (let appliedObj of allAppliedStudents) {
                        if (student.email === appliedObj.studentEmail) {
                            const entry = { ...student, status: appliedObj.status };
                            appliedArray.push(entry)
                        }
                    }
                }

                setStudentsApplied(appliedArray)
            } catch (error) {
                alert(error.message)
            }
        }

        findAppliedStudents()
    }, [])

    return (
        <>
            <ProfileBar name={company.name} email={company.email}/>
            <CompanyTable title={'Applied Students'} studentsApplied={studentsApplied} />
        </>
    )
}

export default Company