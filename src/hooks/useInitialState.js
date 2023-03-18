import imageOne from '../icons/cell-phone-svgrepo-com.svg';
import imageTwo from '../icons/book-svgrepo-com.svg';
import imageThree from '../icons/official-document-svgrepo-com.svg';
import imageFour from '../icons/pencil-svgrepo-com.svg';
import imageFive from '../icons/ppt-icon-application-svgrepo-com.svg';
import imageSix from '../icons/tick-svgrepo-com.svg';


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
            text: 1
        },
        {
            id: 2,
            text: 2
        },
        {
            id: 3,
            text: 3
        },
        {
            id: 4,
            text: 4
        },
        {
            id: 5,
            text: 5
        },
        {
            id: 6,
            text: 6
        },
        {
            id: 7,
            text: 7
        },
        {
            id: 8,
            text: 8
        },
        {
            id: 9,
            text: 9
        },
        {
            id: 10,
            text: 10
        },
        {
            id: 11,
            text: 11
        },
        {
            id: 12,
            text: 12
        },
    ]

    return {
        optionsState,
        portfolioItems
    }
    
}
export default useInitialState;