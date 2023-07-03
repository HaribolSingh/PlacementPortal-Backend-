import React, { useState } from 'react'

import './LoginForm.css'

import { CgProfile } from 'react-icons/cg'
import { AiOutlineLock } from 'react-icons/ai'

const LoginForm = ({ title, handleSubmitClick, signupClick}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLoginClick = async (e) => {
        e.preventDefault()
        await handleSubmitClick(e, email, password)
    }

    return (
        <div className="login-container">
            <div><h2>{title}</h2></div>
            <div className="login-box">
                <div className="navigate-box">
                    <div className="btns signup" onClick={signupClick}>
                        <h3>Sign Up</h3>
                    </div>
                    <div className="btns login">
                        <h3>Login</h3>
                    </div>
                </div>
                <div className="form-content">
                    <div className='form-message'><h3>Welcome Back!</h3></div>
                    <div>
                        <form action="">
                            <div className="form-item login-email">
                                <span><CgProfile size={30} /></span>
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    value={email} 
                                    onChange={(e) => { setEmail(e.target.value)}} 
                                    placeholder="Your work email" 
                                    required
                                    style={{ width: '20rem', height: '3rem'}}
                                />
                            </div>
                            <div className="form-item login-password">
                                <span><AiOutlineLock size={30} /></span>
                                <input 
                                    type="password" 
                                    name="password" 
                                    id="password" 
                                    value={password} 
                                    onChange={(e) => { setPassword(e.target.value)}} 
                                    placeholder="password" 
                                    required
                                    style={{ width: '20rem', height: '3rem'}}
                                />
                            </div>
                            <div className='form-item'>
                                <button className='login-button' type="submit" onClick={handleLoginClick}>
                                    Login
                                </button>
                            </div>
                        </form>

                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm

/**
 * 
 * <Form>
                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                <Form.Label column sm={2}>
                                    <CgProfile size={30} />
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control value={email} onChange={(e) => { setEmail(e.target.value)}} type="email" placeholder="Your work email" required />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3 px-0 mr-0 ml-0" controlId="formHorizontalPassword">
                                <Form.Label column sm={2}>
                                    <AiOutlineLock size={30} />
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control value={password} onChange={(e) => { setPassword(e.target.value)}} type="password" placeholder="Password" required />
                                </Col>
                            </Form.Group>
                            /* <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                                <Col sm={{ span: 10, offset: 2 }}>
                                    <Form.Check label="Remember me" />
                                </Col>
                            </Form.Group> 

                            <Form.Group as={Row} className="mb-3">
                                <Col sm={{ span: 10, offset: 2 }}>
                                    <Button className='login-button' type="submit" onClick={handleLoginClick}>Login</Button>
                                </Col>
                            </Form.Group>
                        </Form>
 */