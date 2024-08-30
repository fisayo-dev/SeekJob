import { FaGoogle } from "react-icons/fa6";
const Google = () => {
  return (
    <div className="px-5 py-3 border bg-gray-50  hover:bg-gray-100 cursor-pointer rounded-lg flex items-center justify-center gap-2">
      <FaGoogle />
      <p>Continue with Google</p>
    </div>
  );
};

export default Google;
