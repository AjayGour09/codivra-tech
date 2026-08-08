
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-bold">
              <span className="text-white">CODIVRA</span>
              <span className="text-zinc-500">TECH</span>
            </Link>

            <p className="mt-5 max-w-md leading-7 text-zinc-400">
              Building modern websites, scalable applications and
              AI-powered digital products for businesses.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Company</h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-zinc-400">
              <Link to="/" className="hover:text-white">
                Home
              </Link>

              <Link to="/services" className="hover:text-white">
                Services
              </Link>

              <Link to="/projects" className="hover:text-white">
                Projects
              </Link>

              <Link to="/about" className="hover:text-white">
                About
              </Link>

              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Connect</h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-zinc-400">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-white"
              >
                GitHub
                <ArrowUpRight size={14} />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-white"
              >
                LinkedIn
                <ArrowUpRight size={14} />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-white"
              >
                Instagram
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-zinc-900 pt-7 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 CodivraTech. All rights reserved.</p>

          <p>Built with React & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
