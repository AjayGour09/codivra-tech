function Badge({ children }) {
  return (
    <span className="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-300">
      {children}
    </span>
  );
}

export default Badge;