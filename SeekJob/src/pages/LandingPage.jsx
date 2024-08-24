import Logo from "../components/Logo";
import SearchLanding from "../assets/SearchLanding.svg";
import Button from "../components/Button";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="graph-bg grid">
      <NavLink to="/" className=" grid items-center">
        <Logo />
      </NavLink>
      <div className="grid px-[10vw] h-full justify-items-center bg-red-00 gap-10 items-center py-[10vh] grid-cols-1">
        <div className="b-red-400 grid gap-2 justify-items-center md:w-2/4 text-center bg-blac">
          <h2 className="text-6xl tracking-tight font-extrabold">
            Look for any job of your choice.
          </h2>
          <p className="text-[1.1rem] tracking-tighter">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sapiente perferendis at dolor natus, 
          </p>
          <NavLink to="/signup">
            <Button>Seek Now</Button>
          </NavLink>
        </div>

        <div className="b-green-400 md:w-2/4">
          <img src={SearchLanding} width="inherit" alt="Search Landing image" draggable={false} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
