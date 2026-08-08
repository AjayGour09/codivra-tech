import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";

import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Projects from "../components/sections/Projects";

import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-black text-white">

      <Navbar />

      <main>

        {/* HERO */}
        <Hero />

        {/* SERVICES PREVIEW */}
        <Services preview />

        {/* PROJECTS PREVIEW */}
        <Projects preview />

        {/* WHY CHOOSE US */}
        <section className="border-t border-zinc-900 bg-black py-24">

          <div className="mx-auto max-w-7xl px-6">

            <div className="mx-auto max-w-2xl text-center">

              <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">
                Why CodivraTech
              </p>

              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                Technology that moves your business forward.
              </h2>

              <p className="mt-5 leading-7 text-zinc-400">
                We focus on building fast, scalable and user-friendly
                digital products that solve real business problems.
              </p>

            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-3">

              {/* CARD 1 */}
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8 transition hover:border-zinc-600">

                <h3 className="text-xl font-semibold">
                  Modern Technology
                </h3>

                <p className="mt-4 leading-7 text-zinc-400">
                  We use modern frameworks and development practices
                  to create reliable digital products.
                </p>

              </div>

              {/* CARD 2 */}
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8 transition hover:border-zinc-600">

                <h3 className="text-xl font-semibold">
                  Business Focused
                </h3>

                <p className="mt-4 leading-7 text-zinc-400">
                  Every product is designed around your business goals,
                  customers and growth.
                </p>

              </div>

              {/* CARD 3 */}
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8 transition hover:border-zinc-600">

                <h3 className="text-xl font-semibold">
                  Built to Scale
                </h3>

                <p className="mt-4 leading-7 text-zinc-400">
                  We build flexible solutions that can grow with your
                  business.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* PROCESS */}
        <section className="border-t border-zinc-900 py-24">

          <div className="mx-auto max-w-7xl px-6">

            <div className="text-center">

              <p className="text-sm uppercase tracking-widest text-zinc-500">
                Our Process
              </p>

              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                From idea to launch.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-7 text-zinc-400">
                A simple and transparent process designed to turn
                your idea into a professional digital product.
              </p>

            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-4">

              {[
                [
                  "01",
                  "Discover",
                  "Understand your idea and business requirements.",
                ],
                [
                  "02",
                  "Design",
                  "Create a clean and intuitive user experience.",
                ],
                [
                  "03",
                  "Develop",
                  "Build your product using modern technology.",
                ],
                [
                  "04",
                  "Launch",
                  "Deploy, optimize and help you grow.",
                ],
              ].map(([number, title, description]) => (

                <div
                  key={number}
                  className="rounded-2xl border border-zinc-800 bg-zinc-950 p-7 transition hover:border-zinc-600"
                >

                  <span className="text-sm text-zinc-500">
                    {number}
                  </span>

                  <h3 className="mt-5 text-xl font-semibold">
                    {title}
                  </h3>

                  <p className="mt-3 leading-7 text-zinc-400">
                    {description}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* FINAL CTA */}
        <section className="border-t border-zinc-900 py-28">

          <div className="mx-auto max-w-4xl px-6 text-center">

            <p className="text-sm uppercase tracking-widest text-zinc-500">
              Start a Project
            </p>

            <h2 className="mt-5 text-4xl font-bold md:text-6xl">
              Have an idea?
              <br />
              Let's build it.
            </h2>

            <p className="mx-auto mt-6 max-w-xl leading-7 text-zinc-400">
              Tell us about your project and let's create something
              amazing together.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-medium text-black transition hover:scale-105"
            >
              Start Your Project
            </Link>

          </div>

        </section>

      </main>

      <Footer />

    </div>
  );
}

export default Home;