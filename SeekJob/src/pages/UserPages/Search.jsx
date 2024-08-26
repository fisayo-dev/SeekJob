import UserPage from "./UserPage";
import { FaArrowDown } from "react-icons/fa6";
import SearchIcon from '../../icons/SearchIcon'

const Search = () => {
  return (
    <UserPage>
      <div className="grid gap-5 justify-items-center">
        <div className="border-1 text-slate-500 rounded-lg px-4 app-gray gap-2 flex items-center h-12 w-full lg:w-2/4 md:w-3/4">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search for any job of your choice."
            className="w-full"
          />

          <FaArrowDown />
        </div>
      </div>
    </UserPage>
  );
};

export default Search;
