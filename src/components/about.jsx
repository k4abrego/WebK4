import ka from '../assets/ka.png';
function About(){
    return (
        <section id="about" className="about">

            <div className='about-image'>
                <img src={ka} alt='yop'/>
            </div>

            <div className='about-content'>
                <h2 className='about-label'>About me</h2>
                <h1 className='about-title'> Hi! I'm Karen Abrego</h1>

                <p className='about-description'>
                    I'm a CS and Technology student at Tecnológico de Monterrey.
                    <br />
                    I also serve as Vice President of the ITC student society and President at Flopware.
                    <br />
                    I build, learn, and occasionally fix bugs that weredefinitely not my fault, lol.
                </p>

                <div className='about-links'>
                    <a href='/KarenAbregoCV.pdf' className='resume-button' download > Resume </a>
                    <a href='https://github.com/k4abrego' target='_blank' rel='nooper noreferrer'> GitHub </a>
                </div>
            </div>
        </section>
    )
}

export default About