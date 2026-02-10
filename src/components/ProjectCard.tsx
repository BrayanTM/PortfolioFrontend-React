import { SquareArrowOutUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

interface ProjectCardProps {
  project: {
    title: string;
    images: string[];
    technologies: string[];
    description: string;
    url?: string;
  };
  techStackLabel: string;
  demoLabel: string;
}

export const ProjectCard = ({
  project,
  techStackLabel,
  demoLabel,
}: ProjectCardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Validación de imágenes
  const images = project.images || [];
  const hasImages = images.length > 0;

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Autoplay
  useEffect(() => {
    if (images.length <= 1 || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered, images.length]);

  return (
    <div className="rounded-xl border border-gray-400 bg-white p-6 shadow-md transition-transform duration-300 hover:scale-105 hover:border-blue-700 hover:shadow-lg hover:shadow-blue-700 xl:p-8 dark:bg-gray-800">
      {/* Carrusel de Imagenes */}
      {hasImages && (
        <div
          className="relative mb-4 w-full overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Contenedor de imágenes */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((img, index) => (
              <div key={index} className="h-full w-full shrink-0">
                <img
                  src={img}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full rounded-lg object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Botones de navegación */}
          {images.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute top-1/2 left-2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-all hover:bg-black/70"
                aria-label="Imagen anterior"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={goToNext}
                className="absolute top-1/2 right-2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-all hover:bg-black/70"
                aria-label="Siguiente imagen"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Indicadores (dots) */}
              <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "w-6 bg-blue-600"
                        : "w-2 bg-white/70 hover:bg-white"
                    }`}
                    aria-label={`Ir a imagen ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}

      <h3 className="mt-3 text-lg font-bold text-gray-800 lg:text-lg xl:text-xl dark:text-gray-200">
        {project.title}
      </h3>
      <p className="mt-3 inline-block font-semibold text-gray-600 lg:text-lg xl:text-xl dark:text-gray-300">
        {techStackLabel}:
      </p>
      {project.technologies.map((tech, index) => (
        <span
          key={index}
          className="ml-2 rounded-md bg-blue-600/20 px-2.5 py-1 font-semibold text-blue-700 2xl:text-lg dark:text-blue-400"
        >
          {tech}
        </span>
      ))}
      <p className="mt-3 leading-relaxed text-gray-600 lg:text-lg dark:text-gray-400">
        {project.description}
      </p>
      {project.url && (
        <a
          href={`https://${project.url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-blue-700 hover:underline dark:text-blue-500"
        >
          {demoLabel}
          <SquareArrowOutUpRight className="ml-2 inline-block h-4 w-4" />
        </a>
      )}
    </div>
  );
};
