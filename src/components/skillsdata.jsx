import { VscVscode } from 'react-icons/vsc';
import {
  SiCplusplus,
  SiJavascript,
  SiPython,
  SiTypescript,
  SiMysql,
  SiHtml5,
  SiKotlin,
  SiReact,
  SiAngular,
  SiNodedotjs,
  SiGooglecloud,
  SiFirebase,
  SiDocker,
  SiSass,
  SiGit,
  SiGithub,
  SiFigma,
  SiJira,
  SiPostman,
  SiIntellijidea
} from 'react-icons/si';

//estas importaciones son porque no estaban los logos por la librería react-icons
import { FaCss3Alt, FaAws } from 'react-icons/fa'; 
import { BsFiletypeSql } from 'react-icons/bs';
import { TbBrandCSharp } from 'react-icons/tb';
import canvaLogo from '../assets/logoss/canva-logo.png';
import antigravityLogo from '../assets/logoss/google-antigravity.png';

const createLogo = (Icon, name, color) => ({
  node: (
    <div className="skill-item">
      <Icon className="skill-icon" style={{ color }} />
      <span className="skill-name">{name}</span>
    </div>
  ),
  title: name
});


const createImagenLogo = (image, name) => ({
  node: (
    <div className="skill-item">
      <img
        src={image}
        alt={name}
        className="skill-icon"
      />
      <span className="skill-name">{name}</span>
    </div>
  ),
  title: name
});

export const programmingLanguages = [
  createLogo(SiCplusplus, 'C++', '#00599C'),
  createLogo(TbBrandCSharp, 'C#', '#68217A'),
  createLogo(SiJavascript, 'JavaScript', '#D4B000'),
  createLogo(SiPython, 'Python', '#3776AB'),
  createLogo(SiTypescript, 'TypeScript', '#3178C6'),
  createLogo(SiKotlin, 'Kotlin', '#be4ac2ff'),
  createLogo(BsFiletypeSql, 'SQL', '#4479A1')
];

export const technologies = [
  createLogo(SiHtml5, 'HTML5', '#E34F26'),
  createLogo(FaCss3Alt, 'CSS', '#1572B6'),
  createLogo(SiReact, 'React', '#149ECA'),
  createLogo(SiAngular, 'Angular', '#DD0031'),
  createLogo(SiNodedotjs, 'Node.js', '#339933'),
  createLogo(SiGooglecloud, 'Google Cloud', '#4285F4'),
  createLogo(SiFirebase, 'Firebase', '#FFCA28'),
  createLogo(SiMysql, 'MySQL', '#4479A1'),
  createLogo(SiDocker, 'Docker', '#2496ED'),
  createLogo(FaAws, 'AWS', '#FF9900'),
  createLogo(SiSass, 'Sass / SCSS', '#CC6699'),
  createLogo(SiGit, 'Git', '#F05032'),
  createLogo(SiGithub, 'GitHub', '#181717')
];

export const tools = [
  createLogo(SiFigma, 'Figma', '#F24E1E'),
  createLogo(SiJira, 'Jira', '#0052CC'),
  createLogo(SiPostman, 'Postman', '#FF6C37'),
  createLogo(VscVscode, 'VS Code', '#007ACC'),
  createLogo(SiIntellijidea, 'IntelliJ IDEA', '#E4405F'),
  createImagenLogo(canvaLogo, 'Canva'),
  createImagenLogo(antigravityLogo, 'Antigravity')
];