import Logo from "../components/Logo";
import SearchLanding from "../assets/SearchLanding.svg";
import Button from "../components/Button";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="h-[100vh] graph-bg grid items-stretch">
      <NavLink to="/">
        <Logo />
      </NavLink>
      <div className="grid gap-2 md:flex w-3/4 m-auto items-center">
        <div className="grid gap-3 my-[1rem]">
          <h1 className="text-6xl md:text-7xl app-tet-color font-extrabold text-slate-900">
            Look for any job of your choice.
          </h1>
          <p className="text-[1.1rem] w-2/3 tracking-tighter text-slate-700 ">
            Get all the information you need to know about your dream job.
          </p>
          <NavLink to="/signup">
            <Button className="">Try Now</Button>
          </NavLink>
        </div>
        <div className="grid items-center justify-center">
          <img src={SearchLanding} draggable={false} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
