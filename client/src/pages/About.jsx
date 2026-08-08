import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";
import { Link } from "react-router-dom";

const technologies = [
  "React",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "MongoDB",
  "Firebase",
  "Python",
  "Git & GitHub",
];

const services = [
  {
    title: "Modern Websites",
    text: "Professional, responsive websites designed to build trust and convert visitors into customers.",
  },
  {
    title: "Web Applications",
    text: "Fast and scalable web applications built around your business requirements.",
  },
  {
    title: "UI/UX Design",
    text: "Clean and user-friendly interfaces that make digital products simple and enjoyable to use.",
  },
  {
    title: "Custom Solutions",
    text: "Technology solutions tailored to your specific business needs and workflow.",
  },
];

function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="pt-24">

        {/* HERO */}
        <section className="border-b border-zinc-900">
          <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">

            <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
              About CodivraTech
            </p>

            <h1 className="mt-6 max-w-5xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              We build digital
              <br />
              experiences that
              <br />
              <span className="text-zinc-500">
                help businesses grow.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
              CodivraTech helps businesses, startups and individuals turn
              their ideas into modern websites, web applications and
              digital experiences.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="rounded-full bg-white px-7 py-3 font-medium text-black transition hover:bg-zinc-200"
              >
                Start a Project
              </Link>

              <Link
                to="/projects"
                className="rounded-full border border-zinc-700 px-7 py-3 font-medium text-white transition hover:border-white"
              >
                View Projects
              </Link>
            </div>

          </div>
        </section>

        {/* WHO WE ARE */}
        <section className="border-b border-zinc-900">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2">

            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                Who We Are
              </p>

              <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
                Technology should solve problems,
                <br />
                not create them.
              </h2>
            </div>

            <div className="space-y-6 text-zinc-400">
              <p className="leading-8">
                CodivraTech is a digital development brand focused on
                creating clean, modern and useful digital products.
              </p>

              <p className="leading-8">
                We combine development, design and problem-solving to
                create websites and applications that are not only
                visually attractive but also practical and easy to use.
              </p>

              <p className="leading-8">
                Our goal is simple: understand the client's requirement,
                build the right solution and deliver a professional
                experience.
              </p>
            </div>

          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="border-b border-zinc-900">
          <div className="mx-auto max-w-7xl px-6 py-24">

            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
              What We Do
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-bold md:text-5xl">
              Digital solutions built around your goals.
            </h2>

            <div className="mt-14 grid gap-5 md:grid-cols-2">

              {services.map((service, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8 transition hover:border-zinc-600"
                >
                  <span className="text-sm text-zinc-600">
                    0{index + 1}
                  </span>

                  <h3 className="mt-8 text-2xl font-semibold">
                    {service.title}
                  </h3>

                  <p className="mt-4 max-w-md leading-7 text-zinc-400">
                    {service.text}
                  </p>
                </div>
              ))}

            </div>

          </div>
        </section>

        {/* TECHNOLOGIES */}
        <section className="border-b border-zinc-900">
          <div className="mx-auto max-w-7xl px-6 py-24">

            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                Technologies
              </p>

              <h2 className="mt-5 text-4xl font-bold md:text-5xl">
                Modern technology.
                <br />
                Clean development.
              </h2>

              <p className="mt-6 leading-7 text-zinc-400">
                We use modern technologies according to the requirements
                of each project.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-3">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-zinc-800 bg-zinc-950 px-5 py-3 text-sm text-zinc-300 transition hover:border-zinc-500 hover:text-white"
                >
                  {technology}
                </span>
              ))}
            </div>

          </div>
        </section>

        {/* PROCESS */}
        <section className="border-b border-zinc-900">
          <div className="mx-auto max-w-7xl px-6 py-24">

            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
              Our Process
            </p>

            <h2 className="mt-5 text-4xl font-bold md:text-5xl">
              From idea to launch.
            </h2>

            <div className="mt-14 grid gap-5 md:grid-cols-4">

              <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-7">
                <p className="text-sm text-zinc-600">01</p>
                <h3 className="mt-8 text-xl font-semibold">
                  Understand
                </h3>
                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  We understand your idea, business and project
                  requirements.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-7">
                <p className="text-sm text-zinc-600">02</p>
                <h3 className="mt-8 text-xl font-semibold">
                  Plan
                </h3>
                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  We create a clear structure and plan for the project.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-7">
                <p className="text-sm text-zinc-600">03</p>
                <h3 className="mt-8 text-xl font-semibold">
                  Build
                </h3>
                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  We develop the product using modern technologies.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-7">
                <p className="text-sm text-zinc-600">04</p>
                <h3 className="mt-8 text-xl font-semibold">
                  Launch
                </h3>
                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  We test, launch and help improve the final product.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="mx-auto max-w-5xl px-6 py-28 text-center">

            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
              Have a project?
            </p>

            <h2 className="mt-5 text-4xl font-bold md:text-6xl">
              Let's build something
              <br />
              great together.
            </h2>

            <p className="mx-auto mt-6 max-w-xl leading-7 text-zinc-400">
              Have an idea or business requirement? Tell us about it
              and let's discuss how we can build it.
            </p>

            <Link
              to="/contact"
              className="mt-9 inline-block rounded-full bg-white px-8 py-3.5 font-medium text-black transition hover:bg-zinc-200"
            >
              Discuss Your Project
            </Link>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default About;