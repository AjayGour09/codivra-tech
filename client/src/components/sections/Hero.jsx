import { ArrowRight } from "lucide-react";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-black pt-40 pb-28">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[140px]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 text-center">

        {/* Badge */}
        <div className="mb-6 rounded-full border border-zinc-800 bg-zinc-900/70 px-4 py-2 text-sm text-zinc-300 backdrop-blur">
          🚀 Building Modern Software for Businesses
        </div>

        {/* Heading */}
        <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
          Build Faster.
          <br />
          Scale Smarter.
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-2xl text-lg text-zinc-400">
          CodivraTech helps startups and businesses build modern websites,
          scalable web applications, and AI-powered digital products.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button className="flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 font-medium text-black transition hover:scale-105">
            Start Project
            <ArrowRight size={18} />
          </button>

          <button className="rounded-full border border-zinc-700 px-7 py-3 text-white transition hover:border-white">
            View Projects
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;