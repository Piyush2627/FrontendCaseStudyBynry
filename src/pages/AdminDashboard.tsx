import React, { useEffect, useState } from "react";
import MapComponents from "../hooks/MapComponent ";
import { userType } from "../types/Types";

const AdminDashboard: React.FC = () => {
  const [usersData, setUsersData] = useState<userType[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isMapModelOpen, setIsMapModalOpen] = useState<boolean>(false);
  const [isSelectedUser, setIsSelectedUsers] = useState<
    userType | null | undefined
  >(null);
  const [newUser, setNewUser] = useState<userType>({
    user_id: 0,
    password: "",
    first_name: "",
    last_name: "",
    age: 0,
    email: "",
    phone_number: "",
    address_line_1: "",
    profile_image_url: "",
    user_type: "",
  });
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const usersPerPage = 7;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://my-json-server.typicode.com/Piyush2627/FrontendCaseStudyBynryApi/users",
        );
        const data = await response.json();
        setUsersData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleItemClick = (items: userType) => {
    setIsSelectedUsers(items);
    setIsMapModalOpen(true);
  };

  const closeModal = () => {
    setIsSelectedUsers(null);
    setIsMapModalOpen(false);
  };

  const handleAddUser = () => {
    if (isEditMode) {
      setUsersData((prevUsers) =>
        prevUsers.map((user) =>
          user.user_id === newUser.user_id ? newUser : user,
        ),
      );
      setIsEditMode(false);
    } else {
      setUsersData((prevUsers) => [
        ...prevUsers,
        { ...newUser, user_id: Date.now() },
      ]);
    }
    resetNewUser();
    setIsModalOpen(false);
  };

  const handleDeleteUser = (id: number) => {
    setUsersData((prevUsers) =>
      prevUsers.filter((user) => user.user_id !== id),
    );
  };

  const handleEditUser = (user: userType) => {
    setNewUser(user);
    setIsEditMode(true);
    setIsModalOpen(true);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const resetNewUser = () => {
    setNewUser({
      password: "",
      user_id: 0,
      first_name: "",
      last_name: "",
      age: 0,
      email: "",
      phone_number: "",
      address_line_1: "",
      profile_image_url: "",
      user_type: "",
    });
  };

  const filteredUsers = usersData.filter(
    (user) =>
      user.first_name.toLowerCase().includes(searchTerm) ||
      user.last_name.toLowerCase().includes(searchTerm) ||
      user.email.toLowerCase().includes(searchTerm) ||
      user.phone_number.toLowerCase().includes(searchTerm),
  );

  // Calculate pagination
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="p-4">
      <div className="w-full rounded-md bg-white p-4 md:p-8">
        <div className="flex flex-col items-center justify-between pb-6 md:flex-row">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-semibold md:text-4xl">
              Admins Dashboard Data
            </h2>
            <span className="text-xs">All users</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center rounded-md bg-gray-50 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                className="ml-1 block bg-gray-50 outline-none"
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
            <button
              className="cursor-pointer rounded-md bg-indigo-600 px-4 py-2 font-semibold tracking-wide text-white"
              onClick={() => setIsModalOpen(true)}
            >
              Add User
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full overflow-hidden rounded shadow">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-2 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                    Name
                  </th>
                  <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                    Email
                  </th>
                  <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                    Phone No
                  </th>
                  <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                    Actions
                  </th>
                  <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                    Summary
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentUsers.map((user) => (
                  <tr key={user.user_id}>
                    <td className="border-b border-gray-200 bg-white px-2 py-2 text-sm">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <img
                            className="h-full w-full rounded-full"
                            src={user.profile_image_url}
                            alt="profile"
                          />
                        </div>
                        <div className="ml-3">
                          <p className="whitespace-no-wrap text-gray-900">
                            {user.first_name} {user.last_name}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <p className="whitespace-no-wrap text-gray-900">
                        {user.email}
                      </p>
                    </td>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <p className="whitespace-no-wrap text-gray-900">
                        {user.phone_number}
                      </p>
                    </td>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <button
                        className="mr-2 rounded bg-red-500 px-3 py-1 text-white hover:bg-red-700"
                        onClick={() => handleDeleteUser(user.user_id)}
                      >
                        Delete
                      </button>
                      <button
                        className="mr-2 rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-700"
                        onClick={() => handleEditUser(user)}
                      >
                        Edit
                      </button>
                    </td>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <button
                        className="mr-2 rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-700"
                        onClick={() => handleItemClick(user)}
                      >
                        Summary
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-4 flex items-center justify-between p-2">
              <button
                className="rounded bg-blue-50 px-4 py-2 hover:bg-gray-400"
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <span>
                Page {currentPage} of {totalPages}
              </span>
              <button
                className="rounded bg-blue-50 px-4 py-2 hover:bg-gray-400"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      {isMapModelOpen && isSelectedUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md rounded-lg bg-white p-6">
            <div className="font-bold">
              The Address is : {isSelectedUser.address_line_1}
            </div>
            <MapComponents address={isSelectedUser.address_line_1} />

            <h2 className="mb-4 text-xl font-bold">
              {isSelectedUser.first_name}
            </h2>
            <p>{isSelectedUser.email}</p>
            <div className="mt-4 flex justify-end">
              <button
                className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-700"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md rounded-lg bg-white p-6">
            <h2 className="mb-4 text-2xl font-semibold">
              {isEditMode ? "Edit User" : "Add New User"}
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAddUser();
              }}
            >
              <input
                type="text"
                placeholder="First Name"
                className="mb-2 w-full border p-2"
                value={newUser.first_name}
                onChange={(e) =>
                  setNewUser((prev) => ({
                    ...prev,
                    first_name: e.target.value,
                  }))
                }
              />
              <input
                type="text"
                placeholder="Last Name"
                className="mb-2 w-full border p-2"
                value={newUser.last_name}
                onChange={(e) =>
                  setNewUser((prev) => ({ ...prev, last_name: e.target.value }))
                }
              />
              <input
                type="number"
                placeholder="Age"
                className="mb-2 w-full border p-2"
                value={newUser.age}
                onChange={(e) =>
                  setNewUser((prev) => ({
                    ...prev,
                    age: Number(e.target.value),
                  }))
                }
              />
              <input
                type="email"
                placeholder="Email"
                className="mb-2 w-full border p-2"
                value={newUser.email}
                onChange={(e) =>
                  setNewUser((prev) => ({ ...prev, email: e.target.value }))
                }
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="mb-2 w-full border p-2"
                value={newUser.phone_number}
                onChange={(e) =>
                  setNewUser((prev) => ({
                    ...prev,
                    phone_number: e.target.value,
                  }))
                }
              />
              <input
                type="text"
                placeholder="Address"
                className="mb-2 w-full border p-2"
                value={newUser.address_line_1}
                onChange={(e) =>
                  setNewUser((prev) => ({
                    ...prev,
                    address_line_1: e.target.value,
                  }))
                }
              />
              <input
                type="text"
                placeholder="Profile Image URL"
                className="mb-2 w-full border p-2"
                value={newUser.profile_image_url}
                onChange={(e) =>
                  setNewUser((prev) => ({
                    ...prev,
                    profile_image_url: e.target.value,
                  }))
                }
              />
              <div className="flex justify-end">
                <button
                  type="button"
                  className="mr-2 rounded bg-gray-300 px-4 py-2 hover:bg-gray-400"
                  onClick={() => {
                    setIsModalOpen(false);
                    setIsEditMode(false);
                    resetNewUser();
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
                >
                  {isEditMode ? "Update User" : "Add User"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
