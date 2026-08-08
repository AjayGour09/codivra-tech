
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";
import ProjectsSection from "../components/sections/Projects";

function Projects() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="pt-16">
        <ProjectsSection />
      </main>

      <Footer />
    </div>
  );
}

export default Projects;
