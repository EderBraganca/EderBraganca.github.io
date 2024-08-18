import './about.css';
import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';

const text  = "My name is Eder Bragança, I'm 22 years old, I'm a Full Stack Developer and I'm a student of Computer Science at the Federal University of Ouro Preto (UFOP)."

export const About = () => {
    const [showText, setShowText] = useState(false);
    useEffect(() => {
        setShowText(true);
    }, []);

    return (
        <section className='aboutSection'>
            <section className='aboutText'>
                {showText && (
                    <Typewriter
                        options={{
                            strings: [
                                text,
                            ],
                            autoStart: true,
                            onComplete: () => setShowText(false),
                            cursor: '|',
                            cursorClassName: 'typewriter-cursor',
                            loop: false,
                            deleteSpeed: Infinity, 
                            delay: 30,
                        }}
                    />
                )}
            </section>
        </section>
    );
};
