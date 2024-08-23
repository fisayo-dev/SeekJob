import {
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaKey,
  FaUser,
  FaRegCopyright,
} from "react-icons/fa6";
import Button from "../../components/Button";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const SignUp = () => {
  // Input States
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabledBtn, setDisabledBtn] = useState(true);
  const [numValid, setNumValid] = useState(false);
  const [lenValid, setLenValid] = useState(false);
  const [symblValid, setSymblValid] = useState(false);
  const [openPassword, setOpenPassword] = useState(false);

  // Responsive states
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [responsive, setResponsive] = useState(false);

  useEffect(() => {
    windowWidth < 1001 ? setResponsive(true) : setResponsive(false);
  }, [windowWidth]);

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
  }, []);

  function checkPwdNum() {
    let i = 0;
    while (i < 10) {
      if (password.includes(i.toString())) {
        setNumValid(true);
        i = 10;
      } else {
        setNumValid(false);
        i++;
      }
    }
  }
  function chekPwdSymbl() {
    const sybmlList = [
      "!",
      "@",
      "#",
      "$",
      "%",
      "^",
      "&",
      "*",
      "(",
      ")",
      "<",
      ">",
      "?",
      "/",
      "[",
      "]",
      "{",
      "}",
      "+",
      "=",
      "-",
      "_",
      "`",
      "~",
    ];
    for (let i = 0; i < sybmlList.length; i++) {
      if (password.includes(sybmlList[i])) {
        setSymblValid(true);
        i = sybmlList.length;
      } else {
        setSymblValid(false);
      }
    }
  }

  useEffect(() => {
    password.length >= 8 ? setLenValid(true) : setLenValid(false);
    checkPwdNum();
    chekPwdSymbl();

    if (
      username.trim() != "" &&
      email.trim() != "" &&
      lenValid &&
      numValid &&
      symblValid
    ) {
      setDisabledBtn(false);
    } else {
      setDisabledBtn(true);
    }
  });

  return (
    <div className="graph-bg grid grid-cols-2 w-[100vw]  overflow-hidden">
      <div
        className={`app-bg-color w-full h-[100vh] shadow-lg ${
          responsive ? "hidden" : "grid"
        } place-items-center`}
      >
        <div className="w-full text-white grid py-3 px-20 gap-5 justify-items-">
          <NavLink to="/" className="flex items-center gap-2">
            <FaMagnifyingGlass className="flip" />
            <p>SeekJob</p>
          </NavLink>
          <h2 className="text-6xl font-bold ">
            Start your journey of <b>Job Seeking</b> Now.
          </h2>
          <p className="text-[1.1rem] bg-blck">
            Do you already have an account? Then login in to your account now.
          </p>
          <Link to="/login">
            <button className="px-4 py-2 rounded-md border-2 border-white hover:bg-white hover-app-text-color text-[1.2rem] font-bold">
              LogIn
            </button>
          </Link>
          <div className="flex gap-2 font-bold p-3 bg-transparent items-center text-[1.2rem]">
            <FaRegCopyright />
            <p>{new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
      <div
        className={`${
          responsive ? "w-[100vw]" : "w-full"
        } h-[100vh] bg-[#fff] overflow-scroll grid place-items-center`}
      >
        <div className="grid w-full py-2 gap-6 justify-items-center">
          <NavLink
            to="/"
            className={`${
              responsive ? "flex" : "hidden"
            } app-text-color items-center gap-2`}
          >
            <FaMagnifyingGlass className="flip" />
            <p>SeekJob</p>
          </NavLink>
          <h2 className="text-5xl font-bold text-center">SignUp</h2>
          <NavLink to="/login" className={`${responsive ? "block" : "hidden"} hover-app-text-color`}>
            Already have an account, Login.
          </NavLink>
          <form action="" className="grid gap-3 ">
            <div className="bg-gray-300 w-full rounded-md flex gap-2 items-center px-4 py-3">
              <FaUser />
              <input
                type="text"
                placeholder="Username"
                className="w-full text-[1.1rem]"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="bg-gray-300 w-full rounded-md flex gap-2 items-center px-4 py-3">
              <FaEnvelope />
              <input
                type="email"
                placeholder="Email address"
                className=" text-[1.1rem]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="bg-gray-300 w-full rounded-md flex gap-2 items-center px-4 py-3">
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
            <div className="grid gao-1 text-[0.7rem] md:text-[0.89rem] font-bold">
              <pre className={`${symblValid ? "app-success" : "app-text-color"}`}>
                Password must contain at least one symbol.
              </pre>
              <pre className={`${lenValid ? "app-success" : "app-text-color"}`}>
                Password must be more than 8 characters.
              </pre>
              <pre className={`${numValid ? "app-success" : "app-text-color"}`}>
                Password must include a number(s).
              </pre>
            </div>
            <Button disabled={disabledBtn}>LogIn</Button>
          </form>
          <div className="grid gap-1">
            <p className="text-center">-- OR --</p>
            <div className="px-4 py-2 border-2 border-gray-600 hover:bg-gray-600 hover:text-white cursor-pointer  rounded-md flex items-center justify-center gap-2">
              <FaGoogle />
              <p>Continue with Google</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
