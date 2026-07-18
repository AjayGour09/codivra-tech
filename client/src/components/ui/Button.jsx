function Button({
  children,
  variant = "primary",
  className = "",
}) {
  const base =
    "rounded-full px-6 py-3 font-medium transition-all duration-300";

  const variants = {
    primary:
      "bg-white text-black hover:scale-105",

    secondary:
      "border border-zinc-700 text-white hover:border-white",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}

export default Button;