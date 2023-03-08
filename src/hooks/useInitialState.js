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
            text: 'Collect client feedback and report bugs into Jira, Trello, Asana, Github directly from your site with screenshots, annotations, console logs, and more.'
        },
        {
            image: imageTwo,
            text: 'Collect client feedback and report bugs into Jira, Trello, Asana, Github directly from your site with screenshots, annotations, console logs, and more.'
        },
        {
            image: imageThree,
            text: 'Collect client feedback and report bugs into Jira, Trello, Asana, Github directly from your site with screenshots, annotations, console logs, and more.'
        },
        {
            image: imageFour,
            text: 'Collect client feedback and report bugs into Jira, Trello, Asana, Github directly from your site with screenshots, annotations, console logs, and more.'
        },
        {
            image: imageFive,
            text: 'Collect client feedback and report bugs into Jira, Trello, Asana, Github directly from your site with screenshots, annotations, console logs, and more.'
        },
        {
            image: imageSix,
            text: 'Collect client feedback and report bugs into Jira, Trello, Asana, Github directly from your site with screenshots, annotations, console logs, and more.'
        }
    ]
    
    return {
        optionsState,
    }
    
}
export default useInitialState;