import './contact.css';
import contacts from './contact.json';
import { SiLinkedin } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Form } from '../utils/Form';

export const Contact = () => {
    const { email, github, linkedin, instagram } = contacts.contacts;
    
    const handleEmail = () => {
        window.open('mailto:' + email);
    }
    return (
        <footer className="contactsSection">
            <section className='sendEmailSection'>
                <p>Send me a Email</p>
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
            </section>
            <section className='footerText'>
                <p>© 2024 Eder Bragança</p>
            </section>
        </footer>
    )
}