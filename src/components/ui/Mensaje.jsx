function Mensaje({ children, tipo = "info" }) {
  const estilos = {
    exito: "bg-green-50 text-green-800 border-green-200",
    error: "bg-red-50 text-red-800 border-red-200",
    info: "bg-surface text-muted border-border",
  };

  return (
    <div className={`border rounded-md px-4 py-3 text-sm ${estilos[tipo]}`}>
      {children}
    </div>
  );
}

export default Mensaje;
