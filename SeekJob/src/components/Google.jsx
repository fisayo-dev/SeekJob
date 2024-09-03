import { FaGoogle } from "react-icons/fa6";
import { useAuth } from "../utils/AuthContext";
const Google = () => {
  const { googleSignIn } = useAuth();
  return (
    <div
      onClick={googleSignIn}
      className="px-5 py-3 border bg-gray-50  hover:bg-gray-100 cursor-pointer rounded-lg flex items-center justify-center gap-2"
    >
      <FaGoogle />
      <p>Continue with Google</p>
    </div>
  );
};

export default Google;
