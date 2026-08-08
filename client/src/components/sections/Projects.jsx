import { ExternalLink } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Desh Videsh Darpan",
    category: "News / Web Application",
    description:
      "A modern news platform designed to deliver national and international news with a clean, responsive and user-friendly experience.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    image: "/projects/desh-videsh-darpan.png",
    liveLink: "https://lnkd.in/gGnNsuJK",
    codeLink: "https://lnkd.in/gXw97WhE",
  },
];

function ProjectCard({ project }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 transition hover:border-zinc-600">
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden border-b border-zinc-800">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <span className="absolute left-7 top-7 text-sm text-white/70">
          {project.number}
        </span>

        <span className="absolute bottom-7 right-7 rounded-full border border-white/20 bg-black/70 px-3 py-1.5 text-xs text-zinc-300 backdrop-blur-sm">
          {project.category}
        </span>
      </div>

      {/* Project Content */}
      <div className="p-7">
        <h3 className="text-2xl font-semibold">
          {project.title}
        </h3>

        <p className="mt-4 leading-7 text-zinc-400">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-full bg-zinc-900 px-3 py-1.5 text-xs text-zinc-400"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-zinc-200"
          >
            Live Project
            <ExternalLink size={15} />
          </a>

          <a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-5 py-2.5 text-sm text-zinc-300 transition hover:border-white hover:text-white"
          >
            View Code
            <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </article>
  );
}

function Projects({ preview = false }) {
  const visibleProjects = preview
    ? projects.slice(0, 1)
    : projects;

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Home Preview */}
        {preview && (
          <div className="mb-14">
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
              Selected work
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Projects that show what we can do.
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-zinc-400">
              A selection of projects built with modern technologies.
            </p>
          </div>
        )}

        {/* Full Projects Page */}
        {!preview && (
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
              Portfolio
            </p>

            <h1 className="mt-4 text-4xl font-bold md:text-6xl">
              Selected projects.
            </h1>

            <p className="mt-5 leading-7 text-zinc-400">
              A showcase of web applications and digital products.
            </p>
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.number}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;