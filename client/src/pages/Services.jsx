
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";
import ServicesSection from "../components/sections/Services";

function Services() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="pt-16">
        <ServicesSection />
      </main>

      <Footer />
    </div>
  );
}

export default Services;