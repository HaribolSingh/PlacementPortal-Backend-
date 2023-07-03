import React from 'react'
import './ProfileBar.css'

import { CgProfile } from 'react-icons/cg'

const ProfileBar = (props) => {
    return (
        <>
            <div className='pro-container'>
                <div className='pro-tabs'>
                    <div>
                        <p>Welcome, {props.name}!</p>
                    </div>
                    <div>
                        <p> <CgProfile /> {props.email}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileBar