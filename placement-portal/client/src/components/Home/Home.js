import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'


const Home = () => {
    const navigate = useNavigate()

    const handleClick = (path) => {
        navigate(path)
    }

    return (
        <div className="home-container">
            <div className="guide-box">
                <div className="box">
                    <div>Are you hiring?</div>
                    <div>
                    <button onClick={() => handleClick('/company/login')}>Click Here</button>
                    </div>
                </div>
                <div className="box">
                    <div>Are you a student?</div>
                    <div>
                        <button onClick={() => handleClick('/student/login')}>Click Here</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home