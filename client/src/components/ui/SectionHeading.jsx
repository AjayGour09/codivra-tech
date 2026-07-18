function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-14 text-center">
      <h2 className="text-4xl font-bold">{title}</h2>

      <p className="mt-4 text-zinc-400">
        {subtitle}
      </p>
    </div>
  );
}

export default SectionHeading;