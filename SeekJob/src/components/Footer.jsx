import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex gap-2 font-bold p-3 bg-transparent justify-center items-center text-[1.2rem] text-slate-950">
      <FaRegCopyright />
      <p>{new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
