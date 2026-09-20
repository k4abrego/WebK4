import { useEffect } from 'react';
import './projectdetail.css';

function ProjectDetail({ project, onClose }) {

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="project-detail-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="project-detail"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-detail-title"
      >

        <button
          className="project-detail-close"
          onClick={onClose}
          type="button"
          aria-label="Close project details"
        >
          &times;
        </button>

        <div className="project-detail-image">
          <img
            src={project.image}
            alt={project.title}
          />
        </div>

        <div className="project-detail-content">

          <h2 id="project-detail-title">
            {project.title}
          </h2>

          <h3>About the project</h3>
          <p>{project.description}</p>

          {project.role && (
            <>
              <h3>My contribution</h3>
              <p>{project.role}</p>
            </>
          )}

          {project.technologies?.length > 0 && (
            <>
              <h3>Technologies</h3>

              <div className="project-detail-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
            </>
          )}

          {project.links?.length > 0 && (
            <div className="project-detail-links">
              {project.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;