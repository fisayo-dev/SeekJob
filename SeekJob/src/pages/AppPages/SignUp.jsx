import { FaGoogle } from "react-icons/fa6";
import Button from "../../components/Button";
import Logo from "../../components/Logo";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabledBtn, setDisabledBtn] = useState(true);

  const [numValid, setNumValid] = useState(false);
  const [lenValid, setLenValid] = useState(false);
  const [symblValid, setSymblValid] = useState(false);

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
      password.length >= 8 &&
      numValid &&
      symblValid
    ) {
      setDisabledBtn(false);
    } else {
      setDisabledBtn(true);
    }
  });

  return (
    <div className="h-full graph-bg grid items-start">
      <NavLink to="/">
        <Logo />
      </NavLink>
      <div className="py-5 grid">
        <h1 className="text-5xl font-bold  my-2 text-center">SignUp</h1>
        <div className="mt-5 grid gap-5 w-full justify-center">
          <form action="" className="grid gap-2 items-center">
            <div className="grid gap-1">
              <label htmlFor="" className="required">
                Username
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="border-2 border-[#b6b6b6] rounded-md p-3"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div className="grid gap-1">
              <label htmlFor="" className="required">
                Email
              </label>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="border-2 border-[#b6b6b6] rounded-md p-3"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="grid gap-1">
              <label htmlFor="" className="required">
                Password
              </label>
              <input
                type="password"
                placeholder="Secure password"
                className="border-2 border-[#b6b6b6] rounded-md p-3"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              </div>
              <div className="my-2 text-[0.89rem] font-bold">
                <pre
                  className={`${symblValid ? "app-success" : "app-text-color"}`}
                >
                  Password must contain at least one symbol.
                </pre>
                <pre
                  className={`${lenValid ? "app-success" : "app-text-color"}`}
                >
                  Password must be more than 8 characters.
                </pre>
                <pre
                  className={`${numValid ? "app-success" : "app-text-color"}`}
                >
                  Password must include a number(s).
                </pre>
              </div>

              <NavLink to="/login">
                <p className="my-2 text-[0.9rem] text-center hover-app-text-color font-bold">
                  Have an account already, then Login.
                </p>
              </NavLink>

            <Button
              disabled={disabledBtn}
              customStyles="w-full disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Submit
            </Button>
          </form>
          <div className="grid gap-1">
            <p className="text-center text-sm">-- OR --</p>
            <div className="py-2 px-5 w-auto m-auto rounded-md border-2 border-gray-600 flex gap-2 justify-center items-center cursor-pointer hover:bg-gray-600 hover:text-white text-gray-600 text-[1.1rem]">
              <FaGoogle />
              <pre className="tracking-tight">Continue with Google.</pre>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
