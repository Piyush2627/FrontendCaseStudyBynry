interface usersType {
  user_id: number;
  first_name: string;
  last_name: string;
  age: number;
  email: string;
  phone_number: string;
  address_line_1: string;
  address_line_2: string;
  profile_image_url: string;
}
import { useQuery } from "@tanstack/react-query";
function UserDashboard() {
  const {
    data: UsersData,
    error,
    status,
    isFetching,
  } = useQuery({
    queryFn: async () => {
      const response = await fetch(
        "https://my-json-server.typicode.com/Piyush2627/FrontendCaseStudyBynryApi/users",
      );
      return await response.json();
    },
    queryKey: ["users"],
  });
  console.log(UsersData);

  return (
    <div>
      <div className="w-full rounded-md bg-white p-8">
        <div className="flex items-center justify-between pb-6">
          <div>
            <h2 className="text-4xl font-semibold">Users Data</h2>
            <span className="text-xs">All products item</span>
          </div>
          <div className="flex items-center justify-between space-x-4">
            <div className="flex items-center rounded-md bg-gray-50 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                />
              </svg>
              <input
                className="ml-1 block bg-gray-50 outline-none"
                type="text"
                name=""
                id=""
                placeholder="search..."
              />
            </div>
            <button className="cursor-pointer rounded-md bg-indigo-600 px-4 py-2 font-semibold tracking-wide text-white">
              Create
            </button>
          </div>
        </div>
        <div>
          <div className="-mx-4 overflow-x-auto px-4 py-4 sm:-mx-8 sm:px-8">
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
                      QRT
                    </th>
                    <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                      Status
                    </th>
                    <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {status === "pending" ? (
                    <tr>
                      <td className="border-b border-gray-200 bg-white px-2 py-2 text-sm">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-600"></div>
                          <div className="ml-3"></div>
                        </div>
                      </td>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <p className="whitespace-no-wrap text-gray-900">
                          Loading...
                        </p>
                      </td>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <p className="whitespace-no-wrap text-gray-900">
                          Loading...
                        </p>
                      </td>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <p className="whitespace-no-wrap text-gray-900">
                          Loading...
                        </p>
                      </td>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <p className="whitespace-no-wrap text-gray-900">
                          Loading...
                        </p>
                      </td>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900"></span>
                      </td>
                    </tr>
                  ) : status === "error" ? (
                    <span>Error: {error.message}</span>
                  ) : (
                    <>
                      {UsersData.map((ele: usersType) => {
                        return (
                          <tr>
                            <td className="border-b border-gray-200 bg-white px-2 py-2 text-sm">
                              <div className="flex items-center">
                                <div className="h-10 w-10 flex-shrink-0">
                                  <img
                                    className="h-full w-full rounded-full"
                                    src={ele.profile_image_url}
                                    alt=""
                                  />
                                </div>
                                <div className="ml-3">
                                  <p className="whitespace-no-wrap text-gray-900">
                                    {ele.first_name} {ele.last_name}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                              <p className="whitespace-no-wrap text-gray-900">
                                {ele.email}
                              </p>
                            </td>
                            <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                              <p className="whitespace-no-wrap text-gray-900">
                                {ele.phone_number}
                              </p>
                            </td>
                            <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                              <p className="whitespace-no-wrap text-gray-900">
                                {ele.address_line_1}
                              </p>
                            </td>
                            <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                              <p className="whitespace-no-wrap text-gray-900">
                                43
                              </p>
                            </td>
                            <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                              <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                                <span
                                  aria-hidden
                                  className="absolute inset-0 rounded-full bg-green-200 opacity-50"
                                ></span>
                                <span className="relative">Location</span>
                              </span>
                            </td>
                          </tr>
                        );
                      })}

                      <tr>{isFetching ? "Background Updating..." : " "}</tr>
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
