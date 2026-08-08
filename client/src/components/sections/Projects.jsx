
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    number: "01",
    title: "AI Interview Platform",
    category: "AI / Web Application",
    description:
      "An interview preparation platform with AI-powered practice, resume checks and interactive quizzes.",
    tech: ["React", "AI", "JavaScript"],
  },
  {
    number: "02",
    title: "Smart Kirana Store",
    category: "E-commerce / Management",
    description:
      "A modern retail management concept designed to make product browsing and everyday store operations simpler.",
    tech: ["React", "Firebase", "Tailwind"],
  },
  {
    number: "03",
    title: "Smart Tour Guide",
    category: "Travel / Web Application",
    description:
      "A travel-focused digital experience for discovering destinations, planning trips and presenting useful information.",
    tech: ["React", "API", "UI/UX"],
  },
  {
    number: "04",
    title: "Trading Platform",
    category: "Fintech / Dashboard",
    description:
      "A modern trading dashboard concept with a clean, responsive and data-focused interface.",
    tech: ["React", "Charts", "Responsive UI"],
  },
];

function ProjectCard({ project }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
      <div className="relative flex aspect-[16/9] items-end overflow-hidden bg-gradient-to-br from-zinc-800 via-zinc-950 to-black p-7">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/5 blur-3xl transition group-hover:bg-white/10" />

        <span className="relative text-sm text-zinc-500">
          {project.number}
        </span>

        <span className="absolute bottom-7 right-7 rounded-full border border-zinc-700 bg-black/70 px-3 py-1.5 text-xs text-zinc-300">
          {project.category}
        </span>
      </div>

      <div className="p-7">
        <h3 className="text-2xl font-semibold">
          {project.title}
        </h3>

        <p className="mt-4 leading-7 text-zinc-400">
          {project.description}
        </p>

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

        <button
          type="button"
          className="mt-7 inline-flex items-center gap-2 text-sm text-zinc-300 transition hover:text-white"
          onClick={() =>
            alert(
              `${project.title} case study will be available soon.`
            )
          }
        >
          Case study
          <ExternalLink size={15} />
        </button>
      </div>
    </article>
  );
}

function Projects({ preview = false }) {
  const visibleProjects = preview
    ? projects.slice(0, 3)
    : projects;

  return (
    <section className="border-t border-zinc-900 bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        {preview && (
          <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                Selected work
              </p>

              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                Projects that show what we can do.
              </h2>

              <p className="mt-5 max-w-2xl leading-7 text-zinc-400">
                A selection of projects and concepts built with modern
                technologies.
              </p>
            </div>

            <Link
              to="/projects"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-700 px-5 py-3 text-sm transition hover:border-white"
            >
              View all
              <ArrowUpRight size={16} />
            </Link>
          </div>
        )}

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
