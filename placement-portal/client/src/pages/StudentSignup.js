import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import SignupForm from '../components/StudentSignup'
import StudentContext from '../context/student/studentContext';

const SERVER = 'http://localhost:5000/api'

const StudentSignup = () => {
    const navigate = useNavigate()

    const context = useContext(StudentContext)
    const { setStudentLogin, setStudent } = context

    const handleSubmitClick = async (e, credentials) => {
        e.preventDefault();
        try {
            console.log(credentials)
            const response = await fetch(`${SERVER}/student/create`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(credentials)
            }) 

            const result = await response.json();

            if (result.success === false) {
                throw new Error(result.message)
            }

            setStudentLogin(true)
            setStudent(result.student)
            navigate('/student')
        } catch (error) {
            alert(error.message)
        }
    }
    
    return (
        <>
            <SignupForm handleSubmitClick={handleSubmitClick} />
        </>
    )
}

export default StudentSignup