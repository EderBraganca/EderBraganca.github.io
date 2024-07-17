import './about.css';

export const About = () => {
    return (
        <section className='aboutSection'>
            <p>About</p>
            <section className='aboutText'>
                <p>My name is Eder, I'm 22 years old and I'm a student of Computer Science at the Federal University of Ouro Preto (UFOP).</p>
                <img className='fotoPessoal' src='https://media.licdn.com/dms/image/D4D03AQFNyCrK-NLULg/profile-displayphoto-shrink_200_200/0/1715785876795?e=1726704000&v=beta&t=BJjUBaT_5Y9mPqr3OqUwzw-WldVKvJBkMcda6eWKJkk' alt='Foto pessoal' />
            </section>
        </section>
    )
}