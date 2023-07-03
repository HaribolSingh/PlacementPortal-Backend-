import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import StudentContext from '../context/student/studentContext'
import ProfileBar from '../components/ProfileBar'
import StudentHome from '../components/StudentHome'

const Student = () => {
    const navigate = useNavigate()
    const context = useContext(StudentContext);
    const { studentLogin, student } = context;

    useEffect(() => {
        if (studentLogin === false) {
            navigate('/student/login')
        }
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <ProfileBar name={student.name} email={student.email} />
            <StudentHome />
        </>
    )
}

export default Student