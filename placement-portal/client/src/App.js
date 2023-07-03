import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './pages/Navbar.js';
import Home from './pages/Home.js';

import Company from './pages/Company';
import CompanyLogin from './pages/CompanyLogin';
import CompanySignup from './pages/CompanySignup';

import Student from './pages/Student';
import StudentLogin from './pages/StudentLogin';
import StudentSignup from './pages/StudentSignup';
import StudentOpening from './pages/StudentOpening';
import StudentApplied from './pages/StudentApplied';

import CompanyState from './context/company/CompanyState';
import StudentState from './context/student/StudentState';

function App() {

  return (
    <>
      <StudentState>
        <CompanyState>
            <Navbar />
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/company' element={<Company />} />
              <Route exact path='/company/login' element={<CompanyLogin />} />
              <Route exact path='/company/signup' element={<CompanySignup />} />
              <Route exact path='/student' element={<Student />} />
              <Route exact path='/student/login' element={<StudentLogin />} />
              <Route exact path='/student/signup' element={<StudentSignup />} />
              <Route exact path='/student/openings' element={<StudentOpening />} />
              <Route exact path='/student/applied' element={<StudentApplied />} />
            </Routes>
        </CompanyState>
      </StudentState>
    </>
  );
}

export default App;
