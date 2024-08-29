import JobCard from "../../components/User/JobCard";
import UserPage from "./UserPage";

const Bookmarks = () => {
  return (
    <UserPage>
      <div className="grid justify-items-center">
        <h2 className="text-center text-3xl font-bold">Bookmarks</h2>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        </div>
      </div>
    </UserPage>
  );
};

export default Bookmarks;
