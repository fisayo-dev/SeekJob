import Logo from "../components/Logo";
import SearchLanding from "../assets/SearchLanding.svg";
import Button from "../components/Button";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div className="graph-bg grid gap-3">
      <div className="grid py-4 justify-items-center">
        <div className="w-5/6 lg:w-3/5 flex justify-between items-center">
          <NavLink to="/">
            <Logo />
          </NavLink>
          <NavLink to="/login">
            <Button>Login</Button>
          </NavLink>
        </div>
      </div>
      <div className="grid h-3/5 lg:h-5/6 justify-items-center items-center py-4">
        <div className="w-5/6 lg:w-3/5 grid  items-center gap-10 justify-items-center text-center">
          <div className="grid gap-4 w-5/6 lg:w-3/4">
            <h2 className="text-6xl tracking-tight font-extrabold">
              Look for any job of your choice.
            </h2>
            <p className="text-[1.1rem]">
              Explore a World of Opportunities and Discover the Perfect Job to
              Match Your Skills and Ambitions.
            </p>
            <NavLink to="/signup">
              <Button>Seek Now</Button>
            </NavLink>
          </div>
          <img
            src={SearchLanding}
            width="inherit"
            alt="Search Landing image"
            draggable={false}
          />
        </div>
      </div>
      <div className="grid justify-items-center py-4">
        <div className="flex w-5/6 lg:w-3/5 items-center justify-between">
          <Footer />
          <NavLink className="text-[1.2rem]">
            <FaGithub />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
