import UserPage from "./UserPage";
import { useAuth } from "../../utils/AuthContext";
import Button from "../../components/Button";

const Profile = () => {
  // const { user } = useAuth();
  const user = useAuth();
  const userDate = `${new Date(user.registration).getDay()} / ${
    new Date(user.registration).getMonth() + 1
  } /${new Date(user.registration).getFullYear()}`;
  console.log(user);
  return (
    <UserPage>
      <div className="grid justify-items-center">
        <div className="grid profile-card ">
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
            <Button>Delete Account</Button>
          </div>
        </div>
      </div>
    </UserPage>
  );
};

export default Profile;
