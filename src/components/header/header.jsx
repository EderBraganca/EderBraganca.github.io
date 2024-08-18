import './header.css';
import { Avatar } from 'react95';

export const Header = () => {
    const scrollToElement = (elementId) => {
        const element = document.getElementsByClassName(elementId)[0];
        element.scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <header className='menu'>
            <a href='#' onClick={() => scrollToElement('aboutSection')}>
                <Avatar square size={50}>
                    👤 
                </Avatar>About
            </a>
            <a href='#' onClick={() => scrollToElement('projectsSection')}>
                <Avatar square size={50}>
                    🚀 
                </Avatar>Projects
                </a>
            <a href='#' onClick={() => scrollToElement('skillsSection')}>
                <Avatar square size={50}>
                    ✎ 
                </Avatar>Skills
            </a>
            <a href='#' onClick={() => scrollToElement('contactsSection')}>
                <Avatar square size={50}>
                    ✉️ 
                </Avatar>Contact
            </a>
        </header>
    )
}
