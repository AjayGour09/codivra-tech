
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-6 text-center text-white">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          404
        </p>

        <h1 className="mt-4 text-5xl font-bold md:text-6xl">
          Page not found.
        </h1>

        <p className="mt-4 text-zinc-400">
          The page you are looking for does not exist.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-white px-6 py-3 font-medium text-black transition hover:scale-105"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
