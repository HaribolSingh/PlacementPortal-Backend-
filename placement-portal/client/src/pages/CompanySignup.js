import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import SignupForm from '../components/CompanySignup'
import CompanyContext from '../context/company/companyContext';

const SERVER = 'http://localhost:5000/api'

const CompanySignup = () => {
    const navigate = useNavigate()

    const context = useContext(CompanyContext)
    const { setCompanyLogin, setCompany } = context

    const handleSubmitClick = async (e, credentials) => {
        e.preventDefault();
        try {
            console.log(credentials)
            const response = await fetch(`${SERVER}/company/create`, {
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

            setCompanyLogin(true)
            setCompany(result.company)
            navigate('/company')
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

export default CompanySignup