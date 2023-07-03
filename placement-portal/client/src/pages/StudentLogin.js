import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import LoginForm from '../components/LoginForm'
import StudentContext from '../context/student/studentContext'

const SERVER = 'http://localhost:5000/api'

const StudentLogin = () => {
    const navigate = useNavigate()
    const context = useContext(StudentContext)
    const {setStudentLogin, setStudent} = context;

    const signupClick = () => {
        setStudentLogin(false)
        setStudent({})
        navigate('/student/signup')
    }

    const handleSubmitClick = async (e, email, password) => {
        e.preventDefault()

        try {
            const response = await fetch(`${SERVER}/student/login`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password
                })
            })

            const result = await response.json()

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
            <LoginForm 
                title={"For Students"} 
                handleSubmitClick={handleSubmitClick} 
                signupClick={signupClick}
            />
        </>
    )
}

export default StudentLogin