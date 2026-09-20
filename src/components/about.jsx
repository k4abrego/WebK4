import ka from '../assets/ka.png';
import GradientText from './gradientText';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { FiDownload } from 'react-icons/fi';

function About(){
    return (
        <section id="about" className="about">

            <div className='about-image'>
                <img src={ka} alt='yop'/>
            </div>

            <div className='about-content'>
                <h2 className='about-label'> {' '} <GradientText animationSpeed={20}> 
                    About Me </GradientText> </h2>
                <h1 className="about-title"> {' '} <GradientText animationSpeed={20}>
                    Hi! I'm Karen Abrego </GradientText> </h1>

                <p className='about-description'>
                    I'm a CS and Technology student at Tecnológico de Monterrey.
                    <br />
                    I also serve as Vice President of the ITC student society and President at Flopware.
                    <br />
                    I build, learn, and occasionally fix bugs that were definitely not my fault, lol.
                </p>

                <div className='about-links'>
                    <a href='/KarenAbregoCV.pdf' className='resume-button' download > Resume <FiDownload /> </a>
                    <a href='https://github.com/k4abrego'className='social-link github' target='_blank' rel='nooper noreferrer' aria-label='GitHub' title='GitHub'> <FaGithub /> </a>
                    <a href='https://www.linkedin.com/in/karenabregoo' className='social-link linkedin' target='_blank' rel='nooper noreferrer' aria-label='LinkedIn' title='LinkedIn'><FaLinkedin /> </a>
                    <a href='mailto:karenabrego182@gmail.com' className='social-link gmail' aria-label='Gmail' title='Gmail'> <SiGmail /> </a>
                </div>
            </div>
        </section>
    )
}

export default About