import React, { useState } from 'react';
import { TextInput, Button } from 'react95';

export const Form = () =>{
    const [state, setState] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) =>
        setState({ value: e.target.value });

    const reset = () => setState({ name: '' });

    return (
        <div style={{ width: '50vw'}}>
            <div style={{ display: 'flex' }}>
                <TextInput
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
            <TextInput
                    value={state.email}
                    placeholder='email'
                    onChange={handleChange}
                    fullWidth
                />
            <br />
            <TextInput multiline rows={4} placeholder='Your Text message' fullWidth />
            
        </div>
    );
}