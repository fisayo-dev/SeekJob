import { useContext, useState, createContext, useEffect } from "react";
import { account } from "../appwrite/config";
import { ID } from "appwrite";
import Swal from "sweetalert2";

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUserStatus();
  }, []);

  const loginUser = async (userInfo) => {
    setLoading(true);
    try {
      await account.createEmailPasswordSession(
        userInfo.email,
        userInfo.password
      );

      let accountDetail = await account.get();
      console.log(accountDetail);
      setUser(accountDetail);
    } catch (err) {
      if (err.code == 401) {
        Swal.fire({
          toast: true,
          icon: "error",
          text: "Invlaid username or Email",
          timer: 4000,
          position: "top",
          showConfirmButton: false,
        });
      } else {
        Swal.fire({
          toast: true,
          icon: "error",
          text: "Unable to Access Server",
          timer: 4000,
          position: "top",
          showConfirmButton: false,
        });
      }
    }
    setLoading(false);
  };

  const registerUser = async (userInfo) => {
    setLoading(true);

    try {
      await account.create(
        ID.unique(),
        userInfo.email,
        userInfo.password,
        userInfo.username
      );

      // Logs user in after creating account
      await account.createEmailPasswordSession(
        userInfo.email,
        userInfo.password
      );
      let accountDetail = await account.get();
      setUser(accountDetail);
    } catch (err) {
      // Check email duplicate error code.
      if (err.code == 409) {
        Swal.fire({
          toast: true,
          text: "Email Address has already been taken",
          position: "top-end",
          icon: "error",
          showConfirmButton: false,
          timer: 4000,
        });
      } else {
        Swal.fire({
          toast: true,
          text: "Unable to reach server. Try again",
          icon: "error",
          position: "top-end",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    }
    setLoading(false);
  };

  const deleteUser = async (userId) => {
    try {
      await users.deleteUser(userId);
      Swal.fire({
        toast: true,
        icon: "success",
        text: "User has been succesfully deleted",
        timer: 3000,
        position: "top",
        showConfirmButton: false,
      });
    } catch (error) {
      console.error("Failed to delete user:", error);
    }
    // try {
    //   const response = await axios.delete(`https://${import.meta.env.VITE_ENDPOINT}/v1/users/${userId}`, {
    //       headers: {
    //           'X-Appwrite-Project': import.meta.env.VITE_PROJECT_ID,
    //           'X-Appwrite-Key': import.meta.env.VITE_API_KEY,
    //       },
    //   });

    //   if (response.status === 204) { // No content status code
    //       console.log('User deleted successfully');
    //   } else {
    //       console.error('Failed to delete user:', response.statusText);
    //   }
  // } catch (error) {
  //     console.error('Error:', error);
  // }
  };

  const logoutUser = () => {
    account.deleteSession("current");
    setUser(null);
  };

  const checkUserStatus = async () => {
    try {
      let accountDetail = await account.get();
      setUser(accountDetail);
    } catch (err) {
      //   console.log(err)
    }
    setLoading(false);
  };

  const contextData = {
    user,
    loginUser,
    registerUser,
    logoutUser,
    deleteUser
  };

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? (
        <div className="w-[100vw] h-[100vh] grid items-center justify-center bg-gray-50 overflow-hidden anmate-load">
          <div className="text-center app-text-color ">
            <p className=" text-6xl font-bold">SeekJob</p>
            <p>Loading...</p>
          </div>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
export default AuthContext;
