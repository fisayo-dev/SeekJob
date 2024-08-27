import {
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaKey,
  FaUser,
  FaMagnifyingGlass,
} from "react-icons/fa6";
import Button from "../../components/Button";
import { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import FormSideMessage from "../../components/FormSideMessage";
import { useAuth } from "../../utils/AuthContext";

const SignUp = () => {
  const navigate = useNavigate()
  // Input States
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabledBtn, setDisabledBtn] = useState(true);
  const [numValid, setNumValid] = useState(false);
  const [lenValid, setLenValid] = useState(false);
  const [symblValid, setSymblValid] = useState(false);
  const [openPassword, setOpenPassword] = useState(false);

  const { registerUser,user } = useAuth();

  // Responsive states
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [responsive, setResponsive] = useState(false);

  useEffect(() => {
    windowWidth < 1001 ? setResponsive(true) : setResponsive(false);
  }, [windowWidth]);

  useEffect(() => {
    if (user) {
      navigate('/jobs')
    }
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth))
    windowWidth < 1001 ? setResponsive(true) : setResponsive(false);
  }, []);

  // Client - Side Validation
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

  const handleSubmit = () => {
    const userInfo = {
      username: username,
      password: password,
      email: email
    };
    registerUser(userInfo)
  };
  return (
    <div className="graph-bg grid grid-cols-2 w-[100vw] overflow-hidden">
      <FormSideMessage
        responsive={responsive}
        title="Start your journey of Job Seeking Now."
        subtitle="Already have an account, then login and continue your job seeking process."
        btnText="Login to account"
        to="/login"
        border="border-r-2"
      />
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
            } app-text-color m-auto items-center gap-2`}
          >
            <FaMagnifyingGlass className="flip" />
            <p>SeekJob</p>
          </NavLink>
          <h2 className="text-5xl font-bold text-center">Hi There!</h2>
          <NavLink
            to="/login"
            className={`${
              responsive ? "block" : "hidden"
            } hover-app-text-color text-center`}
          >
            Already have an account, Login.
          </NavLink>
          <form onSubmit={handleSubmit} className="grid gap-3 ">
            <div className="app-gray text-slate-700 w-full rounded-lg flex gap-2 items-center px-4 py-3">
              <FaUser className="" />
              <input
                type="text"
                placeholder="Username"
                className="w-full text-[1.1rem] md:text-[0.9rem]"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="app-gray text-slate-700 w-full rounded-lg flex gap-2 ite2s-center px-4 py-3">
              <FaEnvelope className="" />
              <input
                type="email"
                placeholder="Email address"
                className="w-full text-[1.1rem] md:text-[0.9rem]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="app-gray text-slate-700 w-full rounded-lg flex gap-2 items-center px-4 py-3">
              <FaKey className="" />
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
                {openPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
            <div className="grid gao-1 text-[0.7rem] md:text-[0.89rem] font-bold">
              <pre
                className={`${symblValid ? "app-success" : "app-text-color"}`}
              >
                Password must contain at least one symbol.
              </pre>
              <pre className={`${lenValid ? "app-success" : "app-text-color"}`}>
                Password must be more than 8 characters.
              </pre>
              <pre className={`${numValid ? "app-success" : "app-text-color"}`}>
                Password must include a number(s).
              </pre>
            </div>
            <Button disabled={disabledBtn}>SignUp</Button>
          </form>
          <div className="grid gap-1">
            <p className="text-center">-- OR --</p>
            <div className="px-4 py-2 border-2 border-gray-600 hover:bg-gray-600 hover:text-white cursor-pointer  rounded-lg flex items-center justify-center gap-2">
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
