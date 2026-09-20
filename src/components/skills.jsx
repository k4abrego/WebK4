import './skills.css';
import GradientText from './gradientText';
import LogoLoop from './logoloop';
import {programmingLanguages, technologies, tools} from './skillsdata';

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2 className="skills-title"> {' '}<GradientText animationSpeed={20}>
        Skills</GradientText>
      </h2>

      <div className="skills-container">


        <div className="skills-card">
        <h3>Programming Languages</h3>
            <div className="skills-loop">
                <LogoLoop
                logos={programmingLanguages}
                speed={45}
                direction="left"
                logoHeight={85}
                gap={35}
                pauseOnHover fadeOut
                fadeOutColor="#ffffff"
                ariaLabel="Programming languages"/>
            </div>
        </div>

        <div className="skills-card">
          <h3>Technologies</h3>
            <div className="skills-loop">
                <LogoLoop
                logos={technologies}
                speed={45}
                direction="left"
                logoHeight={85}
                gap={35}
                pauseOnHover fadeOut
                fadeOutColor="#ffffff"
                ariaLabel="Technologies"/>
            </div>
        </div>

        <div className="skills-card">
          <h3>Tools</h3>
            <div className="skills-loop">
                <LogoLoop
                logos={tools}
                speed={45}
                direction="left"
                logoHeight={85}
                gap={35}
                pauseOnHover fadeOut
                fadeOutColor="#ffffff"
                ariaLabel="Tools"/>
            </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;