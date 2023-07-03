import './NavBar.css'
import { useNavigate } from 'react-router-dom'
import nittLogo from './assets/nitt-logo.png'

function NavBar() {
    const navigate = useNavigate()

    return (
        <>
            <div className='nav-container'>
                <div className='nav-brand' href="/">
                    <div onClick={() => { navigate('/')}} style={{ cursor: 'pointer'}}>
                        <img
                            alt="NITT Logo"
                            src={nittLogo}
                            className="d-inline-block align-top"
                        />
                    </div>
                    <div>
                        <p className='title'>
                            PLACEMENT PORTAL
                        </p>
                    </div>
                    <div></div>
                </div>
            </div>
        </>
    );
}

export default NavBar;