import './about.css';
import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import { Monitor, Hourglass } from 'react95';
const text = "My name is Eder Bragança, I'm 22 years old, I'm a Full Stack Developer and I'm a student of Computer Science at the Federal University of Ouro Preto (UFOP)."

export const About = () => {
    const [showText, setShowText] = useState(false);
    const [showHourglass, setShowHourglass] = useState(true);
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        setShowText(true);
    }, []);


    useEffect(() => {
        const timer = setTimeout(() => {
            setShowHourglass(false);
        }, 2000);

        return () => clearTimeout(timer);
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
                            cursor: '|',
                            cursorClassName: 'typewriter-cursor',
                            loop: false,
                            deleteSpeed: Infinity,
                            delay: 30,
                        }}
                    />
                )}            
            </section>
            <section className='aboutImage'>
                {showHourglass ? (
                    <Hourglass />
                ) : (
                    <>
                        {!imageLoaded || <Hourglass />}
                        <Monitor
                            backgroundStyles={{
                                backgroundImage: `url(https://github.com/EderBraganca/EderBraganca.github.io/blob/main/src/assets/perfil.jpg?raw=true)`,
                                
                                backgroundSize: 'cover',
                                backgroundPosition: '0% 70%',
                                backgroundRepeat: 'no-repeat'
                            }}
                        />
                    </>
                )}
            </section>
        </section>
    );
};
