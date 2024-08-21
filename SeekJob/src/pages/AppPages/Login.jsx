import { FaGoogle } from "react-icons/fa6";
import Button from "../../components/Button";
import Logo from "../../components/Logo";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabledBtn, setDisabledBtn] = useState(true);

  useEffect(() => {
    if (email.trim() != "" && password.trim() != "") {
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
      <div className="p-5 grid">
        <h1 className="text-5xl font-bold text-center my-2">LogIn</h1>
        <div className="mt-5 grid gap-5 md:justify-normal">
          <form action="" className="grid gap-2 m-auto w-10/12 md:w-2/5 ">
            <div className="grid gap-1">
              <label htmlFor="" className="required">
                Email
              </label>
              <input
                type="email"
                placeholder="Place your email here"
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
                placeholder="Remeber your password ?"
                className="border-2 border-[#b6b6b6] rounded-md p-3"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <NavLink to="/signup">
                <p className="my-2 text-[0.9rem] text-center hover-app-text-color font-bold">
                  New to SeekJob, create an account.
                </p>
              </NavLink>
            </div>

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

export default Login;
