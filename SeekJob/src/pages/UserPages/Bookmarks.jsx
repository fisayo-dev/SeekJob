import UserPage from "./UserPage";
import db from "../../appwrite/databases";
import { useEffect, useState } from "react";
import { Query } from "appwrite";
import { NavLink } from "react-router-dom";
import Button from "../../components/Button";
import OpenLinkTab from "../../icons/OpenLinkTab";
import { useAuth } from "../../utils/AuthContext";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import EmptyBoomarks from "../../assets/EmptyBookmarks.svg";

const Bookmarks = () => {
  const { user } = useAuth();
  console.log(user);
  const [bookmark, setBookmark] = useState([]);

  const deleteBookmark = async (currentBookmark) => {
    await Swal.fire({
      icon: "warning",
      title: "Delete file ?",
      text: "Are you sure you want to delete the file",
      confirmButtonText: "Yes, delete it",
      confirmButtonColor: "#2563eb",
      cancelButtonText: "No",
      cancelButtonColor: "#d33",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        db.bookmarks.delete(currentBookmark.$id);
        setBookmark((prevBookmark) =>
          prevBookmark.filter((i) => i.$id !== currentBookmark.$id)
        );
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
          confirmButtonColor: "#2563eb",
        });
      }
    });
  };

  const fetchBookMarks = async () => {
    const results = await db.bookmarks.list([Query.orderDesc("$createdAt")]);
    const bookmarks = results.documents;
    const userBookmarks = bookmarks.filter((i) => i.userId === user.$id);
    setBookmark(userBookmarks);
    console.log(userBookmarks);
  };

  useEffect(() => {
    fetchBookMarks();
  }, []);
  return (
    <UserPage>
      <div className="grid justify-items-center">
        <h2 className="text-center text-3xl font-bold">Bookmarks</h2>
        {bookmark.length == 0 ? (
          <div className="grid justify-items-center py-5 text-center">
            <div className="w-2/4 lg:w-3/5"> 
              <img src={EmptyBoomarks} alt="" />
            </div>
            <h2>Your Bookmark List is Empty</h2>
          </div>
        ) : (
          <div className="grid py-5 gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            {bookmark.length !== 0 &&
              bookmark.map((item) => (
                <div className="job-card">
                  <div className="grid gap-1 w-full">
                    <div className="grid py-1 grid-cols-2 justify-between">
                      <img
                        src={item.company_logo_url}
                        alt=""
                        className="job-card-img"
                      />
                      <NavLink
                        to={`${item.redirect_url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button customStyles="hidden-btn hidden items-center gap-1">
                          <p>Visit Site</p>
                          <OpenLinkTab />
                        </Button>
                      </NavLink>
                    </div>
                    <h2 className="text-[1.5rem] font-bold line-height-ok text-wrap capitalize">
                      {item.title.substring(0, 25)}...
                    </h2>
                  </div>
                  <div className="grid gap-4 ">
                    <div className="">
                      <p>{item.company_name}</p>
                      <p>{item.location_name}</p>
                    </div>
                    <div>
                      <p>
                        {item.salary_max &&
                          `
            Salary: $${item.salary_min} - $${item.salary_max}
            `}
                      </p>
                      <p>Description: {item.description.substring(0, 95)}...</p>
                    </div>
                  </div>
                  <div className="flex w-full justify-between items-center ">
                    <p>
                      {`${new Date(item.$createdAt).getDay()} / ${
                        new Date(item.$createdAt).getMonth() + 1
                      } /${new Date(item.$createdAt).getFullYear()}`}
                    </p>
                    <div onClick={() => deleteBookmark(item)}>
                      <FaTrash className="hover-app-text-color text-[1.7rem]" />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </UserPage>
  );
};

export default Bookmarks;
