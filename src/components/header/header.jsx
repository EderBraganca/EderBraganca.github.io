import './header.css';

export const Header = () => {
    const scrollToElement = (elementId) => {
        const element = document.getElementsByClassName(elementId)[0];
        element.scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <header className='menu'>
            <a href='#' onClick={() => scrollToElement('aboutSection')}>About</a>
            <a href='#' onClick={() => scrollToElement('projectsSection')}>Projects</a>
            <a href='#' onClick={() => scrollToElement('skillsSection')}>Skills</a>
            <a href='#' onClick={() => scrollToElement('contactsSection')}>Contact</a>
        </header>
    )
}
