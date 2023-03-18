import imageOne from '../icons/cell-phone-svgrepo-com.svg';
import imageTwo from '../icons/book-svgrepo-com.svg';
import imageThree from '../icons/official-document-svgrepo-com.svg';
import imageFour from '../icons/pencil-svgrepo-com.svg';
import imageFive from '../icons/ppt-icon-application-svgrepo-com.svg';
import imageSix from '../icons/tick-svgrepo-com.svg';

import imagePortOne from '../images/imagesPortfolio/vecteezy_computer-laptop-with-transparent-screen_8854312_335.png';


const useInitialState = () => {
    const optionsState = [
        {
            image: imageOne,
            text: 'A responsive design makes your website accessible to all users, regardless of their device',
            title: 'MOBILE-FRIENDLY'
        },
        {
            image: imageTwo,
            text: 'A responsive design makes your website accessible to all users, regardless of their device',
            title: 'MOBILE-FRIENDLY'
        },
        {
            image: imageThree,
            text: 'A responsive design makes your website accessible to all users, regardless of their device',
            title: 'MOBILE-FRIENDLY'
        },
        {
            image: imageFour,
            text: 'A responsive design makes your website accessible to all users, regardless of their device',
            title: 'MOBILE-FRIENDLY'
        },
        {
            image: imageFive,
            text: 'A responsive design makes your website accessible to all users, regardless of their device',
            title: 'MOBILE-FRIENDLY'
        },
        {
            image: imageSix,
            text: 'A responsive design makes your website accessible to all users, regardless of their device',
            title: 'MOBILE-FRIENDLY'
        }
    ]

    const portfolioItems = [
        {
            id: 1,
            image: imagePortOne,
            title: 'Mobile First',
            text: 'Web design/development' 
        },
        {
            id: 2,
            image: imagePortOne,
            title: 'Mobile First',
            text: 'Web design/development'
        },
        {
            id: 3,
            image: imagePortOne,
            title: 'Mobile First',
            text: 'Web design/development'
        },
        {
            id: 4,
            image: imagePortOne,
            title: 'Mobile First',
            text: 'Web design/development'
        },
        {
            id: 5,
            image: imagePortOne,
            title: 'Mobile First',
            text: 'Web design/development'
        },
        {
            id: 6,
            image: imagePortOne,
            title: 'Mobile First',
            text: 'Web design/development'
        },
        {
            id: 7,
            image: imagePortOne,
            title: 'Mobile First',
            text: 'Web design/development'
        },
        {
            id: 8,
            image: imagePortOne,
            title: 'Mobile First',
            text: 'Web design/development'
        },
        {
            id: 9,
            image: imagePortOne,
            title: 'Mobile First',
            text: 'Web design/development'
        },
        {
            id: 10,
            image: imagePortOne,
            title: 'Mobile First',
            text: 'Web design/development'
        },
        {
            id: 11,
            image: imagePortOne,
            title: 'Mobile First',
            text: 'Web design/development'
        },
        {
            id: 12,
            image: imagePortOne,
            title: 'Mobile First',
            text: 'Web design/development'
        },
    ]

    return {
        optionsState,
        portfolioItems
    }
    
}
export default useInitialState;