import React from 'react'

import { useNavigate } from 'react-router-dom'
import './StudentHome.css'


const StudentHome = () => {
    const navigate = useNavigate()

    return (
        <div className="std-container">
            <div className="item" onClick={() => navigate('/student/applied')}>Applied</div>
            <div className="item" onClick={() => navigate('/student/openings')}>Openings</div>
        </div>
    )
}

export default StudentHome