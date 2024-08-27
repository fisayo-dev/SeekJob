import { useContext, useState, createContext, useEffect } from "react";
import { account } from "../appwrite/config";
import { ID, Query } from "appwrite";
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
      console.error(err);
    }
    setLoading(false);
  };

  const registerUser = async (userInfo) => {
    setLoading(true);

    // //  Check if username is the same.
    // const users = await account.list([
    //   Query.equal("username", userInfo.username),
    // ]);

    // if (users.total > 0) {
    //   setLoading(false);
    //   Swal.fire({
    //     toast: true,
    //     text: "Username already exists. Please choose a different username",
    //     timer: 2000,
    //   });
    //   return;
    // }

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
          timer: 2000,
        });
      }
    }
    setLoading(false);
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
      console.error(err);
    }
    setLoading(false);
  };

  const contextData = {
    user,
    loginUser,
    registerUser,
    logoutUser,
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
