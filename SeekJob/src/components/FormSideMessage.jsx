import { FaMagnifyingGlass, FaRegCopyright } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import Button from './Button'
import Logo from './Logo'

const FormSideMessage = ({responsive,title,subtitle,btnText, to,border}) => {
  return (
    <div
        className={`${border} w-full h-[100vh] ${
          responsive ? "hidden" : "grid"
        } place-items-center`}
      >
        <div className="w-full grid py-3 px-[8vw] gap-5 justify-items-">
          <NavLink to="/" className="flex items-center app-text-color gap-2">
            <Logo/>
          </NavLink>
          <h2 className="text-6xl font-extrabold ">
            {title}
          </h2>
          <p className="text-[1rem] bg-blck">
            {subtitle}
          </p>
          <NavLink to={to}>
            <Button>{btnText}</Button>
          </NavLink>
          <div className="flex gap-2 font-bold bg-transparent items-center text-[1rem]">
            <FaRegCopyright />
            <p>{new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
  )
}

export default FormSideMessage