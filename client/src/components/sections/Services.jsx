
import { ArrowUpRight, Code2, Palette, Bot, Wrench, Globe, Database } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Modern, responsive and professional websites designed to help businesses build a strong online presence.",
    tags: ["React", "Responsive", "SEO"],
  },
  {
    icon: Code2,
    title: "Web Applications",
    description:
      "Custom web applications with clean interfaces, reliable functionality and scalable architecture.",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    icon: Bot,
    title: "AI Solutions",
    description:
      "AI-powered features and intelligent web experiences that automate tasks and improve customer experiences.",
    tags: ["AI", "Python", "APIs"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Clean and user-focused interfaces designed to make your product easy to understand and enjoyable to use.",
    tags: ["Figma", "UI", "UX"],
  },
  {
    icon: Database,
    title: "Backend Development",
    description:
      "Secure APIs, databases and backend systems built to support modern web applications.",
    tags: ["Node.js", "Express", "MongoDB"],
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description:
      "Bug fixes, performance improvements, feature updates and ongoing technical support for existing projects.",
    tags: ["Fixes", "Updates", "Support"],
  },
];

function Services({ preview = false }) {
  const visibleServices = preview ? services.slice(0, 3) : services;

  return (
    <section className="border-t border-zinc-900 bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        {preview && (
          <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                What we do
              </p>

              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                Services built around your goals.
              </h2>

              <p className="mt-5 max-w-2xl leading-7 text-zinc-400">
                From business websites to complete web applications, we build
                practical digital solutions for modern businesses.
              </p>
            </div>

            <Link
              to="/services"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-700 px-5 py-3 text-sm transition hover:border-white"
            >
              All services
              <ArrowUpRight size={16} />
            </Link>
          </div>
        )}

        {!preview && (
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
              Capabilities
            </p>

            <h1 className="mt-4 text-4xl font-bold md:text-6xl">
              Everything you need to launch.
            </h1>

            <p className="mt-5 leading-7 text-zinc-400">
              Choose the service that matches your business requirement.
            </p>
          </div>
        )}

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visibleServices.map(
            ({ icon: Icon, title, description, tags }) => (
              <article
                key={title}
                className="group rounded-2xl border border-zinc-800 bg-zinc-950 p-7 transition duration-300 hover:-translate-y-1 hover:border-zinc-600"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-800 bg-black text-zinc-200">
                  <Icon size={22} />
                </div>

                <h3 className="mt-7 text-xl font-semibold">
                  {title}
                </h3>

                <p className="mt-4 min-h-20 leading-7 text-zinc-400">
                  {description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-zinc-900 px-3 py-1.5 text-xs text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Services;
