const Button = ({
  children,
  onClick,
  type = "button",
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-5 py-3 rounded-xl font-semibold transition-all duration-300 
      hover:scale-105 active:scale-95 shadow-lg ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;