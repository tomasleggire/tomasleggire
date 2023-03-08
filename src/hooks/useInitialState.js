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
    
    return {
        optionsState,
    }
    
}
export default useInitialState;