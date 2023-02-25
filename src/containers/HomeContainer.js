import React from 'react';
import '../styles/HomeContainer.scss';


export default function HomeContainer({ children }) {
    return (
        <div className='home-div-main'>
            {children}
        </div>
    )
}
