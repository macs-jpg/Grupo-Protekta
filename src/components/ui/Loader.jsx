function Loader({ className = "" }) {
  return (
    <div
      className={`w-8 h-8  border-4 border-border border-t-primary rounded-full animate-spin ${className}`}
    />
  );
}

export default Loader;
