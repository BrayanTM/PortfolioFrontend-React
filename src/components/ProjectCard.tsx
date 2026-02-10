import { SquareArrowOutUpRight } from "lucide-react";
import useCarousel from "../hooks/useCarousel";

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
  const [carouselRef] = useCarousel({
    infinite: true,
    transition: "slide",
    Autoplay: {
      timeout: 3000,
      pauseOnHover: true,
    },
  });

  return (
    <div className="rounded-xl border border-gray-400 bg-white p-6 shadow-md transition-transform duration-300 hover:scale-105 hover:border-blue-700 hover:shadow-lg hover:shadow-blue-700 xl:p-8 dark:bg-gray-800">
      {/* Carrusel de Imagenes */}
      <div ref={carouselRef} className="carousel mb-4 w-full rounded-lg">
        {project.images.map((img, index) => (
          <div key={index} className="f-carousel__slide h-full w-full">
            <img
              src={img}
              alt={`${project.title} screenshot ${index + 1}`}
              className="w-full rounded-lg object-cover"
            />
          </div>
        ))}
      </div>

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
