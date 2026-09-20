import './skills.css';
import GradientText from './gradientText';

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2 className="skills-title"> {' '}<GradientText animationSpeed={20}>
        Skills</GradientText>
      </h2>

      <div className="skills-container">

        <div className="skills-card">
          <h3>Programming Languages</h3>
        </div>

        <div className="skills-card">
          <h3>Technologies</h3>
        </div>

        <div className="skills-card">
          <h3>Tools</h3>
        </div>

      </div>
    </section>
  );
}

export default Skills;