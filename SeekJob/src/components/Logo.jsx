import { FaMagnifyingGlass } from "react-icons/fa6";

const Logo = () => {
  return (
    <div className="flex gap-2 font-bold p-3 justify-center items-center text-[1.2rem] app-text-color">
      <FaMagnifyingGlass className="flip" />
      <p>SeekJob</p>
    </div>
  );
};

export default Logo;
