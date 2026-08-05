function Button({ children, variant = "primary", ...props }) {
  const estilos = {
    primary: "bg-primary text-white hover:bg-primary-dark,",
    secondary: "bg-surface border border-border text-ink hover:bg-border",
  };

  return (
    <button
      className={`px-4  py-2 rounded-md  font-medium transition hover:bg-primary-dark cursor-pointer ${estilos[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;
