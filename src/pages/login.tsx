import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { userType } from "../types/Types";

function LoginPage() {
  const navigator = useNavigate();
  const [usersData, setUsersData] = useState<userType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

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
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleLogin = (values: { email: string; password: string }) => {
    const filterData = usersData.filter((user) => user.email === values.email);

    if (filterData.length !== 1) {
      alert("Please check your username");
      return;
    }

    const user = filterData[0];
    if (user.password === values.password) {
      console.log("working");
      if (user.user_type === "admin") {
        navigator("/admin");
      } else {
        navigator("/UsersDashboard");
      }
    } else {
      alert("Wrong password");
    }
  };

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a loading spinner or message
  }

  return (
    <>
      <div className="b flex min-h-screen justify-center">
        <div className="flex flex-1 justify-center">
          <div className="p-6 lg:w-1/2 xl:w-5/12">
            <div className="mt-12 flex flex-col items-center">
              <h1 className="text-2xl font-extrabold xl:text-3xl">Log In</h1>
              <div className="mt-8 w-full flex-1">
                <div className="mx-auto max-w-xs">
                  <Formik
                    initialValues={{
                      email: "",
                      password: "",
                    }}
                    validate={(values) => {
                      const errors: { email?: string; password?: string } = {};
                      if (!values.email) {
                        errors.email = "Required";
                      } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                          values.email,
                        )
                      ) {
                        errors.email = "Invalid email address";
                      }
                      if (!values.password) {
                        errors.password = "Required";
                      }
                      return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                      handleLogin(values);
                      setSubmitting(false);
                    }}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                    }) => (
                      <form onSubmit={handleSubmit}>
                        <input
                          type="email"
                          name="email"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.email}
                          className="w-full rounded-lg border border-gray-200 bg-gray-100 px-8 py-4 text-sm font-medium placeholder-gray-500 focus:border-gray-400 focus:outline-none"
                          placeholder="Email"
                        />
                        {errors.email && touched.email && (
                          <div className="text-red-500">{errors.email}</div>
                        )}

                        <input
                          type="password"
                          name="password"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.password}
                          className="mt-5 w-full rounded-lg border border-gray-200 bg-gray-100 px-8 py-4 text-sm font-medium placeholder-gray-500 focus:border-gray-400 focus:outline-none"
                          placeholder="Password"
                        />
                        {errors.password && touched.password && (
                          <div className="text-red-500">{errors.password}</div>
                        )}

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="focus:shadow-outline mt-5 flex w-full items-center justify-center rounded-lg bg-indigo-500 py-4 font-semibold tracking-wide text-gray-100 transition-all duration-300 ease-in-out hover:bg-indigo-700 focus:outline-none"
                        >
                          <span className="ml-3">Log In</span>
                        </button>
                      </form>
                    )}
                  </Formik>

                  <p className="mt-6 text-center text-xs text-gray-600">
                    Please go through the read me file of the assignment
                    <a
                      href="#"
                      className="border-b border-dotted border-gray-500"
                    >
                      You will find the user and password
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden flex-1 text-center lg:flex">
            <div
              className="m-12 w-full bg-contain bg-center bg-no-repeat xl:m-16"
              style={{
                backgroundImage: `url(${"https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg"})`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
