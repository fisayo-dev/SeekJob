import {
  FaGoogle,
  FaMagnifyingGlass,
  FaRegCopyright,
  FaEnvelope,
  FaKey,
  FaEyeSlash,
  FaEye,
} from "react-icons/fa6";
import Button from "../../components/Button";
import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import FormSideMessage from "../../components/FormSideMessage";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabledBtn, setDisabledBtn] = useState(true);
  const [openPassword, setOpenPassword] = useState(false);

  useEffect(() => {
    if (email.trim() != "" && password.trim() != "") {
      setDisabledBtn(false);
    } else {
      setDisabledBtn(true);
    }
  }, [email, password]);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [responsive, setResponsive] = useState(false);

  useEffect(() => {
    windowWidth < 1001 ? setResponsive(true) : setResponsive(false);
  }, [windowWidth]);

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
  }, []);

  return (
    <div className="graph-bg grid grid-cols-2 w-[100vw] overflow-hidden">
      <div
        className={`${
          responsive ? "w-[100vw]" : "w-full"
        } h-[100vh]  overflow-scroll grid place-items-center`}
      >
        <div className="grid py-2 gap-6 w-full justify-items-center">
          <NavLink
            to="/"
            className={`${
              responsive ? "flex" : "hidden"
            } app-text-color items-center gap-2 text-center`}
          >
            <FaMagnifyingGlass className="flip" />
            <p>SeekJob</p>
          </NavLink>
          <h2 className="text-5xl font-bold text-center">LogIn </h2>
          <NavLink
            to="/signup"
            className={`${
              responsive ? "block" : "hidden"
            } hover-app-text-color`}
          >
            New to Seek Job, SignUp now.
          </NavLink>
          <form action="" className="grid gap-3 ">
            <div className="app-gray text-slate-700 w-full rounded-lg flex gap-2 items-center px-4 py-3">
              <FaEnvelope />
              <input
                type="email"
                placeholder="Email address"
                className=" text-[1.1rem]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="app-gray text-slate-700 w-full rounded-lg flex gap-2 items-center px-4 py-3">
              <FaKey />
              <input
                type={`${openPassword ? "text" : "password"}`}
                placeholder="Password"
                className="w-full text-[1.1rem]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div
                className="cursor-pointer"
                onClick={() => setOpenPassword((prev) => !prev)}
              >
                {openPassword ? <FaEye /> : <FaEyeSlash />}
              </div>
            </div>
            <Button disabled={disabledBtn}>LogIn</Button>
          </form>
          <div className="grid gap-1">
            <p className="text-center">-- OR --</p>
            <div className="px-4 py-2 border-2 border-gray-600 hover:bg-gray-600 hover:text-white cursor-pointer rounded-md flex items-center justify-center gap-2">
              <FaGoogle />
              <p>Continue with Google</p>
            </div>
          </div>
        </div>
      </div>
      <FormSideMessage
        responsive={responsive}
        title="We are glad to meet you again!!"
        subtitle="Are you new to Seekjob, create your account."
        btnText="Create account"
        to="/signup"
        border="border-l-2"
      />
    </div>
  );
};

export default Login;
