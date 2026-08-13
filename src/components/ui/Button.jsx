//En button se le agrego el {...props} en la linea 10 para que pudiera funcionar de manera correcta y se corrigieron algunos errores de sintaxis de la linea 4 y 5
function Button({ children, variant = "primary", className = "", ...props }) {
  const estilos = {
    primary: "bg-primary text-white hover:bg-primary-dark",
    secondary: "bg-surface border border-border text-ink hover:bg-border",
  };
  return (
    <button
      className={`px-4 py-2 rounded-md font-medium transition hover:bg-primary-dark cursor-pointer ${estilos[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;