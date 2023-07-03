import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import StudentContext from '../context/student/studentContext'
import ProfileBar from '../components/ProfileBar'
import StudentTable from '../components/StudentTable'

const SERVER = 'http://localhost:5000/api'

const StudentOpening = () => {
    const navigate = useNavigate()
    const { studentLogin, student, setStudent } = useContext(StudentContext);

    const [companyOpenings, setCompanyOpenings] = useState([]);

    useEffect(() => {
        if (studentLogin === false) {
            navigate('/student/login')
        }
        // eslint-disable-next-line

        const findOpenings = async () => {
            const response1 = await fetch(`${SERVER}/company/listall`, {
                method: 'GET'
            })
            const result1 = await response1.json()
            const allCompanies = result1.companies

            const response2 = await fetch(`${SERVER}/student/listcompanies`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email: student.email })
            })
            const result2 = await response2.json()
            const allAppliedCompanies = result2.companiesApplied

            let openings = []
            for (let i=0; i<allCompanies.length; i++) {
                let present = false
                for (let j=0; j<allAppliedCompanies.length; j++) {
                    if (allCompanies[i].email === allAppliedCompanies[j].companyEmail) {
                        present = true;
                        break;
                    }
                }
                if (!present) {
                    openings.push(allCompanies[i]);
                }
            }

            setCompanyOpenings(openings)
        }

        findOpenings()
    }, [student, navigate, studentLogin])

    const applyToCompany = async (studentEmail, companyEmail) => {
        try {
            const response = await fetch(`${SERVER}/student/apply`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ studentEmail, companyEmail })
            })

            const result = await response.json()

            if (result.success === false) {
                throw new Error(result.message)
            }

            const {updatedStudent} = result
            setStudent(updatedStudent)


        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <>
            <ProfileBar name={student.name} email={student.email} />
            <StudentTable 
                title={'Company Openings'} 
                companyOpenings={companyOpenings} 
                studentEmail={student.email} 
                applyToCompany={applyToCompany}
            />
        </>
    )
}

export default StudentOpening