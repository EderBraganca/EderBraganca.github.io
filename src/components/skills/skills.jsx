import './skills.css'

export const Skills = () => {
    return (
        <>
            <section className='skillsSection'>
                <p>Major Skills</p>
                <section className='skillsIcons'>
                    <a href='https://github.com/EderBraganca?tab=repositories&q=React' target='_blank'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="React Icon" />
                    </a>
                    <a href='https://github.com/EderBraganca?tab=repositories&language=java' target='_blank'>
                        <img src="https://blog.geekhunter.com.br/wp-content/uploads/2020/07/pngwing.com_.png" alt="Java Icon" />
                    </a>
                    <a href='https://github.com/EderBraganca?tab=repositories&language=javascript' target='_blank'>
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/027/127/463/small_2x/javascript-logo-javascript-icon-transparent-free-png.png" alt="JS Icon" />
                    </a>
                    <a href='https://github.com/EderBraganca?tab=repositories&language=typescript' target='_blank'>
                        <img src="https://icons.veryicon.com/png/o/business/vscode-program-item-icon/typescript-def.png" alt="TS Icon" />
                    </a>
                    <a href='https://github.com/EderBraganca?tab=repositories&q=Spring' target='_blank'>
                        <img src="https://static-00.iconduck.com/assets.00/spring-icon-2048x2045-yufnoc34.png" alt="Spring Icon" />
                    </a>
                </section>
            </section>
        </>
    )
}