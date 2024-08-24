import { FaMagnifyingGlass } from "react-icons/fa6";

const Logo = ({className}) => {
  return (
    <div className={`${className} flex gap-2 font-bold  justify-center items-center text-[1.2rem] app-text-color`}>
      <FaMagnifyingGlass className="flip" />
      <p>SeekJob</p>
    </div>
  );
};

export default Logo;
