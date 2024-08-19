import './contact.css';
import contacts from './contact.json';
import { SiLinkedin } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Form } from '../utils/Form';
import { Button } from 'react95'

export const Contact = () => {
    const { email, github, linkedin, instagram } = contacts.contacts;
    
    const handleEmail = () => {
        window.open('mailto:' + email);
    }
    const downloadCV = () => {
        window.open('https://github.com/EderBraganca/EderBraganca.github.io/blob/main/src/assets/international_resume.pdf')
    }

    return (
        <footer className="contactsSection">
            <section className='sendEmailSection'>
                <nav>
                    <p>Send me a Email</p>
                </nav>
                <form onSubmit={handleEmail}>
                    <Form/>
                </form>
            </section>
            
            <section className='linksSection'>
                <a className='githubLink' target='_blank' href={github}>
                    <FaGithub />
                </a>
                <a className='linkedinLink' target='_blank' href={linkedin}>
                    <SiLinkedin />
                </a>
                <a className='instagramLink' target='_blank' href={instagram}>
                    <FaInstagram />
                </a>
                <section className='downloadCV'>
                    <Button onClick={downloadCV}>Download CV</Button>
                </section>
            </section>
            <section className='footerText'>
                <p>© 2024 Eder Bragança</p>
            </section>
        </footer>
    )
}