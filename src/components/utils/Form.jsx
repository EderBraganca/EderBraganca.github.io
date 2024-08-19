import React, { useState } from 'react';
import { TextInput, Button } from 'react95';
import emailjs from '@emailjs/browser';

export const Form = () => {
    const [state, setState] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) =>
        setState({ ...state, [e.target.name]: e.target.value });

    const reset = () => setState({ ...state, name: '' });
    const resetEmail = () => setState({ ...state, email: '' });

    const templateParams = {
        from_name: state.name,
        email: state.email,
        message: state.message,
    };

    const sendEmail = () => {
        emailjs.send(
            'service_peuuo4e',
            'template_xi7trpq',
            templateParams,
            '5aUZolHgfixwTUMZp'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Email sent successfully!');
            })
            .catch((err) => {
                console.log('FAILED...', err);
                alert('Failed to send email');
            });
    }

    return (
        <div style={{ width: '50vw' }}>
            <div style={{ display: 'flex' }}>
                <TextInput
                    name="name"
                    value={state.name}
                    placeholder='name'
                    onChange={handleChange}
                    fullWidth
                />
                <Button onClick={reset} style={{ marginLeft: 4 }}>
                    Reset
                </Button>
            </div>
            <br />
            <div style={{ display: 'flex' }}>
                <TextInput
                    name="email"
                    value={state.email}
                    placeholder='email'
                    onChange={handleChange}
                    fullWidth
                />
                <Button onClick={resetEmail} style={{ marginLeft: 4 }}>
                    Reset
                </Button>
            </div>
            <br />
            <div style={{ display: 'flex' }}>
                <TextInput
                    name="message"
                    multiline
                    rows={4}
                    placeholder='Your Text message'
                    fullWidth
                    onChange={handleChange}
                />
                <Button onClick={sendEmail} style={{ marginLeft: 8 }}> Send</Button>
            </div>
        </div>
    );
}