import { Helmet } from "react-helmet-async";
import bg from "../../assets/others/authentication.png";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {emailPasswordUser, updateUserProfile} =useContext(AuthContext)
  const onSubmit = (data) => {
    const userName = data.firstName + ' ' + data.lastName;
    emailPasswordUser(data.email,data.password)
    .then(() =>{
      const updateUser = {
        displayName : userName
      }
      updateUserProfile(updateUser)
      .then(()=>{

      }).catch(err => {
        console.log(err.message);
      })
    }).catch(err =>{
      console.log(err);
    })
  };
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="min-h-screen flex items-center"
    >
      <Helmet>
        <title>Bistro boss -- Sign Up</title>
      </Helmet>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <Link to="/">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm bg-indigo-600 p-5 rounded-sm text-center text-5xl italic font-bold">
            <span className="text-orange-500">Bistro</span>{" "}
            <span
              className="text-white
          "
            >
              Boss
            </span>
          </div>
        </Link>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                First Name
              </label>
              <div className="mt-2">
                <input
                  name="firstName"
                  {...register("firstName", { required: true })}
                  type="text"
                  className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {errors.firstName && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Last Name
              </label>
              <div className="mt-2">
                <input
                  name="lastName"
                  {...register("lastName", { required: true })}
                  type="text"
                  className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {errors.lastName && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div className=" flex justify-between">
              <div className="w-full">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Date of birth
                </label>
                <div className="mt-2">
                  <input
                    name="dob"
                    {...register("dob", { required: true })}
                    type="date"
                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                {errors.dob && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
              <div className="w-full ml-2">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Gender
                </label>
                <div className="mt-2">
                  <select
                    {...register("gender")}
                    className="block px-2 w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                  </select>
                </div>
                {errors.gender && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  name="email"
                  {...register("email", { required: true })}
                  type="email"
                  autoComplete="email"
                  className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {errors.email && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="block px-2 text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  name="password"
                  {...register("password", { required: true })}
                  type="password"
                  autoComplete="current-password"
                  className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {errors.password && (
              <span className="text-red-600">This field is required</span>
            )}
            <div>
              <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Create a new account
            </a>
          </p>
          <div className="flex justify-around mt-10 border p-5 bg-slate-100 rounded-sm shadow-md">
            <div>
              <FaFacebook className="w-12 h-12 text-blue-600" />
            </div>
            <div>
              <FcGoogle className="w-12 h-12" />
            </div>
            <div>
              <FaXTwitter className="w-12 h-12 text-black" />
            </div>
          </div>
        </div>
        {/* social login */}
      </div>
    </div>
  );
};

export default SignIn;
