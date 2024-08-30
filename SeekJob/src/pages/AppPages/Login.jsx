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
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import FormSideMessage from "../../components/FormSideMessage";
import { useAuth } from "../../utils/AuthContext";
import Google from "../../components/Google";

const Login = () => {
  const navigate = useNavigate();
  const { loginUser, user } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabledBtn, setDisabledBtn] = useState(true);
  const [openPassword, setOpenPassword] = useState(false);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [responsive, setResponsive] = useState(false);

  useEffect(() => {
    if (email.trim() != "" && password.trim() != "") {
      setDisabledBtn(false);
    } else {
      setDisabledBtn(true);
    }
  }, [email, password]);
  useEffect(() => {
    windowWidth < 1001 ? setResponsive(true) : setResponsive(false);
  }, [windowWidth]);

  useEffect(() => {
    if (user) {
      navigate("/jobs");
    }
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
    windowWidth < 1001 ? setResponsive(true) : setResponsive(false);
  }, []);

  const handleLogin = () => {
    const userInfo = {
      email: email,
      password: password,
    };
    loginUser(userInfo);
  };

  return (
    <div className="graph-bg grid grid-cols-2 w-[100vw] overflow-hidden">
      <div
        className={`${
          responsive ? "w-[100vw]" : "w-full"
        } h-[100vh]  overflow-scroll grid place-items-center`}
      >
        <div className="grid m-auto w-5/6 md:w-2/4 py-2 gap-6">
          <NavLink
            to="/"
            className={`${
              responsive ? "flex" : "hidden"
            } app-text-color m-auto items-center gap-2 text-center`}
          >
            <FaMagnifyingGlass className="flip" />
            <p>SeekJob</p>
          </NavLink>
          <h2 className="text-5xl font-bold text-center">Welcome!!</h2>
          <NavLink
            to="/signup"
            className={`${
              responsive ? "block" : "hidden"
            } hover-app-text-color text-center`}
          >
            New to Seek Job, SignUp now.
          </NavLink>
          <form onSubmit={handleLogin} className="grid gap-3 ">
            <div className="app-gray text-slate-700 w-full rounded-lg flex gap-2 items-center px-4 py-3">
              <FaEnvelope />
              <input
                type="email"
                placeholder="Email address"
                className="w-full text-[1.1rem] md:text-[0.9rem]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="app-gray text-slate-700 w-full rounded-lg flex gap-2 items-center px-4 py-3">
              <FaKey />
              <input
                type={`${openPassword ? "text" : "password"}`}
                placeholder="Password"
                className="w-full text-[1.1rem] md:text-[0.9rem]"
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
            <Google />
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
