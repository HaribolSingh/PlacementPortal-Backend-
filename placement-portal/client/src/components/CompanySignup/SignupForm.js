import React, { useState } from 'react'
import './SignupForm.css'

const SignupForm = ({ handleSubmitClick }) => {
    const [credentials, setCredentials] = useState({
        email: "",
        jobProfile: "",
        name: "",
        password: "",
        jobDescription: "",
        compensation: "",
        location: "",
        minCGPA: ""
    })

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const handleSignupClick = async (e) => {
        await handleSubmitClick(e, credentials)
    }

    return (
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
                        <div className="input-item jobProfile">
                            <label htmlFor="jobProfile">Job Profile</label>
                            <input name='jobProfile' id='jobProfile' value={credentials.jobProfile} onChange={onChange} type="text" size="50" />
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
                        <div className="input-item compensation">
                            <label htmlFor="compensation">compensation</label>
                            <input name='compensation' id='compensation' value={credentials.compensation} onChange={onChange} type="text" size="50" />
                        </div>
                        <div className="input-item location">
                            <label htmlFor="location">Location</label>
                            <input name='location' id='location' value={credentials.location} onChange={onChange} type="text" size="50" />
                        </div>
                    </div>
                    <div className="two-input">
                        <div className="input-item minCGPA">
                            <label htmlFor="minCGPA">Min CGPA</label>
                            <input name='minCGPA' id='minCGPA' value={credentials.minCGPA} onChange={onChange} type="text" size="50" />
                        </div>
                        <div className='input-item'>
                            <label htmlFor="jobDescription">Job Description</label>
                            <input name='jobDescription' id='jobDescription' value={credentials.jobDescription} onChange={onChange} type="text" size="50" />
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
    )
}

export default SignupForm