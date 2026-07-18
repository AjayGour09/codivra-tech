import Navbar from "../components/layouts/Navbar.jsx";

function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="pt-24 flex items-center justify-center">
        <h1 className="text-6xl font-bold">
          Welcome to <span className="text-zinc-400">CodivraTech</span>
        </h1>
      </main>
    </div>
  );
}

export default Home;