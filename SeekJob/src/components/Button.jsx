const Button = ({ children, customStyles = "" , disabled}) => {
  return (
    <button disabled={disabled} className={`${customStyles} app-bg-color px-4 py-2 text-white font-bold rounded-md hover-app-color disabled:bg-gray-400 disabled:cursor-not-allowed`}>
      {children}
    </button>
  );
};

export default Button;
