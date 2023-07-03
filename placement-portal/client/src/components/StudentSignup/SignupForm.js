import React, { useState } from 'react'
import './SignupForm.css'

const SignupForm = ({ handleSubmitClick }) => {
    const [credentials, setCredentials] = useState({
        email: "", 
        rollNo: "", 
        name: "", 
        password: "", 
        cgpa: "",
        branch: "", 
        gender: "", 
        resumeLink: ""
    })

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const handleSignupClick = async (e) => {
        await handleSubmitClick(e, credentials)
    }

    return (
        <>
        <div className=''>
            
        </div>
        <div className="sig-container">
            <div className="content">
                <div className="signup-title">
                    <h2>Sign Up</h2>
                </div>
                <form action="">
                    <div className="two-input">
                        <div className="input-item email">
                            <label htmlFor="email">Email</label>
                            <input name='email' id='email' value={credentials.email} onChange={onChange} type="text" size="50" />
                        </div>
                        <div className="input-item rollNo">
                            <label htmlFor="rollNo">Roll No</label>
                            <input name='rollNo' id='rollNo' value={credentials.rollNo} onChange={onChange} type="number" size="50" />
                        </div>
                    </div>
                    <div className="two-input">
                        <div className="input-item name">
                            <label htmlFor="name">Name</label>
                            <input name='name' id='name' value={credentials.name} onChange={onChange} type="text" size="50" />
                        </div>
                        <div className="input-item password">
                            <label htmlFor="password">Password</label>
                            <input name='password' id='password' value={credentials.password} onChange={onChange} type="password" size="50" />
                        </div>
                    </div>
                    <div className="two-input">
                        <div className="input-item cgpa">
                            <label htmlFor="cgpa">CGPA</label>
                            <input name='cgpa' id='cgpa' value={credentials.cgpa} onChange={onChange} type="number" step="0.01" size="50" />
                        </div>
                        <div className="input-item branch">
                            <label htmlFor="branch">Branch</label>
                            <input name='branch' id='branch' value={credentials.branch} onChange={onChange} type="text" size="50" />
                        </div>
                    </div>
                    <div className="two-input">
                        <div className="input-item gender">
                            <label htmlFor="gender">Gender</label>
                            <input name='gender' id='gender' value={credentials.gender} onChange={onChange} type="text" size="50" />
                        </div>
                        <div className="input-item resumeLink">
                            <label htmlFor="resumeLink">Resume Link</label>
                            <input name='resumeLink' id='resumeLink' value={credentials.resumeLink} onChange={onChange} type="url" size="50" />
                        </div>
                    </div>
                    <div className="two-input">
                        <div className="input-item" onClick={handleSignupClick}>
                            <button>SignUp</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default SignupForm