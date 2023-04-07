import React from 'react';
import me from '../images/YO.PNG';
import '../styles/HomeContainer.scss';


export default function HomeContainer() {
    return (
        <div className='home-div-main'>
            <div className='home-content'>
                <img src={me} alt='Tomás Leggire' className='img-me' />
                <h1 className='h1-home'>
                    Hi, I am 
                    <span className='span-home'> Tomás Leggire</span>
                </h1>
            </div>
        </div>
    )
}
