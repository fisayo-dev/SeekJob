import UserPage from "./UserPage";
import { useAuth } from "../../utils/AuthContext";
import { FaUser } from "react-icons/fa";

const Profile = () => {
  const { user} = useAuth();
  // const user = useAuth();
  const userDate = `${new Date(user.registration).getDay()} / ${
    new Date(user.registration).getMonth() + 1
  } /${new Date(user.registration).getFullYear()}`;
  console.log(user);
  return (
    <UserPage>
      <div className="grid profile-card md:w-4/12">
        <div className="bg-gray-50 h-20 w-full rounded-lg grid items-center justify-items-center text-6xl">
          <FaUser />
        </div>
        <div className="py-[1vh] grid gap-1 w-full border-b-2">
          <h2 className="font-bold text-2xl">Username:</h2>
          <p className="text-1xl">{user.name}</p>
        </div>
        <div className="py-[1vh] grid gap-1 w-full border-b-2">
          <h2 className="font-bold text-2xl">Email Address:</h2>
          <p className="text-1xl">{user.email}</p>
        </div>
        <div className="py-[1vh] grid gap-1 w-full border-b-2">
          <h2 className="font-bold text-2xl">User ID:</h2>
          <p className="text-1xl">{user.$id}</p>
        </div>
        <div className="py-[1vh] grid gap-1 w-full border-b-2">
          <h2 className="font-bold text-2xl">Date Joined:</h2>
          <p className="text-1xl">{userDate}</p>
        </div>

        <div className="grid w-full justify-center">
        <button onClick={() => deleteUser(user.$id)} className="app-bg-color px-4 py-2 text-white font-bold rounded-lg hover-app-bg-color disabled:bg-gray-400 disabled:cursor-not-allowed">
      Delete Account
    </button>
        </div>
      </div>
    </UserPage>
  );
};

export default Profile;
