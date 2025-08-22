import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Movie Search App",
    description:
      "A React app that allows users to search for movies and view details using the OMDB API.",
    image: "/projects/Project3.PNG",
    tags: ["React", "JavaScript", "HTML", "CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Shoe Store Landing Page",
    description:
      "A modern landing page for a shoe store. Designed with a responsive layout and clean UI to showcase products effectively",
    image: "/projects/Project2.PNG",
    tags: ["React", "JavaScript", "HTML", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Personal Portfolio",
    description:
      "Responsive layout with hero, projects, skills, and contact sections, optimized for performance and accessibility.",
    image: "/projects/Project1.PNG",
    tags: ["React", "JavaScript", "HTML", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-fourground mb-12 max-w-2xl mx-auto">
          Explore some of my recent projects, built with precision and optimized
          for both performance and usability.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500
                 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      className="px-2 py-1 text-xs font-medium border rounded-r-full
                        bg-primary/20 text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 text-xl font-semibold mb-1>
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank" // open the link in a new tab"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Ericdt17"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
