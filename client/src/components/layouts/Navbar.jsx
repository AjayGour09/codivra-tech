import { Menu } from "lucide-react";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-zinc-800/50 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-tight">
          <span className="text-white">CODIVRA</span>
          <span className="text-zinc-500">TECH</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
          <a href="#" className="hover:text-white transition">Home</a>
          <a href="#" className="hover:text-white transition">Services</a>
          <a href="#" className="hover:text-white transition">Projects</a>
          <a href="#" className="hover:text-white transition">About</a>
          <a href="#" className="hover:text-white transition">Contact</a>
        </nav>

        {/* Button */}
        <button className="hidden md:block rounded-full bg-white px-5 py-2 text-sm font-medium text-black hover:scale-105 transition">
          Let's Talk
        </button>

        {/* Mobile Menu */}
        <button className="md:hidden text-white">
          <Menu size={28} />
        </button>
      </div>
    </header>
  );
}

export default Navbar;