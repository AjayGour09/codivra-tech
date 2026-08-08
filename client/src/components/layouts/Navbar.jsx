
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-zinc-800/50 bg-black/75 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          to="/"
          onClick={closeMenu}
          className="text-2xl font-bold tracking-tight"
        >
          <span className="text-white">CODIVRA</span>
          <span className="text-zinc-500">TECH</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active = location.pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm transition ${
                  active
                    ? "text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <Link
          to="/contact"
          className="hidden rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition hover:scale-105 md:block"
        >
          Let's Talk
        </Link>

        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          className="text-white md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-zinc-800 bg-black px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-5">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className="text-zinc-300 transition hover:text-white"
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/contact"
              onClick={closeMenu}
              className="mt-2 w-fit rounded-full bg-white px-5 py-2 font-medium text-black"
            >
              Let's Talk
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
