import Navbar from "../components/layouts/Navbar.jsx";
import Hero from "../components/sections/Hero.jsx";

function Home() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
    </div>
  );
}

export default Home;