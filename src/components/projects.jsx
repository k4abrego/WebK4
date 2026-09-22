import { useState } from 'react';
import './projects.css';
import GradientText from './gradientText';
import ProjectDetail from './projectdetail';

//ypu just need to modify the import statements for the images to match the new file paths
import bankingImg from '../assets/projects/nextbuypre.png';
import unityImg from '../assets/projects/unity.png';
import networkImg from '../assets/projects/network.JPG';
import mothersDayImg from '../assets/projects/mothers-day.png';
import taxdodgersImg from '../assets/projects/TaxDodgers.png';
import sipinnaImg from '../assets/projects/sipinna.png';

import bankingDetail1 from '../assets/projects/nextbuypre-detail1.png';
import bankingDetail2 from '../assets/projects/nextbuypre-detail2.JPG';

const projects = [
  {
    id: 1,
    title: 'Predictive Advertising Model for Banking Clients',
    description:'Machine learning model to predict customer behavior for advertising campaigns in a banking use case.',
    image: bankingImg,
    detailImages: [
    bankingDetail1,
    bankingDetail2,
  ]
}, {
    id: 2,
    title: 'Unity Video Game for Partner Organization',
    description:'Academic video game project developed with Unity and C#, including a supporting web platform and database.',
    image: unityImg,
  }, {
    id: 3,
    title: 'Network Design & Implementation',
    description:'Design and implementation of a segmented network using Cisco Packet Tracer and physical networking equipment.',
    image: networkImg,
  }, {
    id: 4,
    title: "Mother's Day Website",
    description:'A web development project created for Mothers Day.',
    image: mothersDayImg,
  }, {
    id: 5,
    title: 'TaxDodgers - Interledger 2025',
    description:'Project developed for Interledger 2025.',
    image: taxdodgersImg,
  },
  {
    id: 6,
    title: 'SIPINNA App',
    description:'Application development project.',
    image: sipinnaImg,
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <section id="projects" className="projects">
      {/* section title */}
      <h2 className="projects-title">

        <GradientText animationSpeed={20}>
          Projects
        </GradientText>
      </h2>

      {/* projects grid */}
      <div className="projects-container">
        {projects.map((project) => (
          <article className="project-card" key={project.id}>
            {/* project card image */}
            <div className="project-image">
              <img
                src={project.image}
                alt={project.title}
              />
            </div>

            {/* project card information */}
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {/* open project details */}
              <button
                className="project-button"
                type="button"
                aria-label={`View details of ${project.title}`}
                onClick={() => setSelectedProject(project)}>
                &gt;
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* project detail modal */}
      {selectedProject && (

        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

export default Projects;