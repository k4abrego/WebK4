import { useEffect, useState } from 'react';
import './projectdetail.css';

function ProjectDetail({ project, onClose }) {

  // images available for this project
  // if there are no detailImages, use the card image
  const images = project.detailImages?.length > 0
    ? project.detailImages.slice(0, 4)
    : [project.detailImage || project.image];

  //current carousel image
  const [currentImage, setCurrentImage] = useState(0);

  // previous image
  const previousImage = () => {
    setCurrentImage((previous) =>
      (previous - 1 + images.length) % images.length
    );
  };

  // next image
  const nextImage = () => {
    setCurrentImage((previous) =>
      (previous + 1) % images.length
    );
  };

  // close detaail with esc and prevent background scrolling
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

        {/* close button */}
        <button
          className="project-detail-close"
          onClick={onClose}
          type="button"
          aria-label="Close project details"
        >
          &times;
        </button>

        <div className="project-detail-content">

          {/* project title */}
          <h2 id="project-detail-title">
            {project.title}
          </h2>

          {/* complete project description */}
          <h3>About the project</h3>

          <p>
            {project.fullDescription || project.description}
          </p>

          {/* two-column layout */}
          <div className="project-detail-body">

            {/* left column: contribution and technologies */}
            <div className="project-detail-info">

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

            </div>

            {/* right column: image carousel */}
            <div className="project-detail-carousel">

              {/* current image */}
              <div className="project-detail-image">
                <img
                  src={images[currentImage]}
                  alt={`${project.title} - Image ${currentImage + 1}`}
                />
              </div>

              {/* carousel controls */}
              {images.length > 1 && (

                <div className="project-carousel-controls">

                  {/* previous image */}
                  <button
                    type="button"
                    className="project-carousel-arrow"
                    onClick={previousImage}
                    aria-label="Previous image"
                  >
                    &#10094;
                  </button>

                  {/* image indicators */}
                  <div className="project-carousel-dots">

                    {images.map((image, index) => (

                      <button
                        key={index}
                        type="button"
                        className={`project-carousel-dot ${
                          index === currentImage ? 'active' : ''
                        }`}
                        onClick={() => setCurrentImage(index)}
                        aria-label={`Go to image ${index + 1}`}
                        aria-current={
                          index === currentImage ? 'true' : undefined
                        }
                      />

                    ))}

                  </div>

                  {/* next image */}
                  <button
                    type="button"
                    className="project-carousel-arrow"
                    onClick={nextImage}
                    aria-label="Next image"
                  >
                    &#10095;
                  </button>

                </div>

              )}

            </div>

          </div>

          {/* project links */}
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