import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Login from "../components/Login";
import { deleteUser, getUsers } from "../redux/apiCalls";
import { logout } from "../redux/slices/login";

const Home = () => {
  const users = useSelector((state) => state.user.users);
  const logged = useSelector((state) => state.login.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    getUsers(dispatch);
  }, []);

  const handleDelete = (id) => {
    deleteUser(id, dispatch);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  if (logged) {
    return (
      <>
        <header className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
          <div className="flex items-center text-white mr-6">
            <span className="font-semibold text-xl tracking-tight">
              Dashboard
            </span>
          </div>
          <div className="lg:items-center lg:w-auto ">
            <div>
              <Link
                to={"/profile/" + logged._id}
                className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 mx-2 transition-all duration-75"
              >
                Profile
              </Link>
              <button
                className="inline-block text-sm px-4 py-2 leading-none border rounded bg-white text-teal-500 border-white hover:border-transparent hover:text-white hover:bg-teal-800 mt-4 lg:mt-0 mx-2 transition-all duration-75"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </header>
        <section className="p-10">
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full">
                    <thead className="border-b">
                      <tr>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Username
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {users?.map((item) => (
                        <tr className="border-b" key={item._id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {item.username}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {item.email}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            <button
                              onClick={handleDelete}
                              className="rounded-md p-2 text-white bg-rose-700"
                              id={item._id}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  } else {
    return <Login />;
  }
};

export default Home;
