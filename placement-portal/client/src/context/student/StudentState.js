import { useState } from "react";
import StudentContext from "./studentContext";

// const SERVER = 'http://localhost:5000/api'

const StudentState = (props) => {
    const [student, setStudent] = useState({})
    const [studentLogin, setStudentLogin] = useState(false)

    return (
        <StudentContext.Provider value={{ studentLogin, setStudentLogin, student, setStudent }}>
            {props.children}
        </StudentContext.Provider>
    )
}

export default StudentState