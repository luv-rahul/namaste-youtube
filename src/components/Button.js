const Button = ({ btnName }) => {
  return (
    <button className="px-2 py-1 mx-2 text-sm border border-gray-400 bg-gray-400/50 rounded-2xl">
      {btnName}
    </button>
  );
};

export default Button;
