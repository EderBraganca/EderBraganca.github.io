import './contact.css';
import contacts from './contact.json';

export const Contact = () => {
    const { email, foneNumber, github, linkedin } = contacts.contacts;

    return (
        <section className="contactsSection">
            <p>Contacts</p>

            <p className='emailLabel'>{email}</p>
            <p className='foneLabel'>{foneNumber}</p>
            <a className='githubLink' target='_blank' href={github}>GitHub</a> <br/>         
            <a className='linkedinLink' target='_blank' href={linkedin}>Linkedin</a>
        </section>
    )
}