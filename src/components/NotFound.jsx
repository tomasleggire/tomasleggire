import React from 'react';
import { Link } from "react-router-dom";
import '../styles/NotFound.scss';
import notFoundImage from '../images/notfoundimage.png';

function NotFound() {
    return (
        <div className="not-found-main">
            <div className='not-found-image'>
                <img src={notFoundImage} />
            </div>
            <Link to="/">
                <button className='not-found-button'>Go Home</button>
            </Link>
        </div>
    );
}

export default NotFound;