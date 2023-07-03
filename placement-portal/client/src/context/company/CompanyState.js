import { useState } from "react";
import CompanyContext from "./companyContext";

// const SERVER = 'http://localhost:5000/api'

const CompanyState = (props) => {
    const [company, setCompany] = useState({})
    const [companyLogin, setCompanyLogin] = useState(false)

    return (
        <CompanyContext.Provider value={{ companyLogin, setCompanyLogin, company, setCompany }}>
            {props.children}
        </CompanyContext.Provider>
    )
}

export default CompanyState