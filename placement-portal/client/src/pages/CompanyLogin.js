import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import LoginForm from '../components/LoginForm'
import companyContext from '../context/company/companyContext'

const SERVER = 'http://localhost:5000/api'

const CompanyLogin = () => {
    const navigate = useNavigate()
    const context = useContext(companyContext)
    const {setCompanyLogin, setCompany} = context;

    const signupClick = () => {
        setCompanyLogin(false)
        setCompany({})
        navigate('/company/signup')
    }

    const handleSubmitClick = async (e, email, password) => {
        e.preventDefault()

        try {
            const response = await fetch(`${SERVER}/company/login`, {
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

            setCompanyLogin(true)
            setCompany(result.company)
            navigate('/company')
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <>
            <LoginForm 
                title={"For Companies"}  
                handleSubmitClick={handleSubmitClick}  
                signupClick={signupClick}
            />
        </>
    )
}

export default CompanyLogin