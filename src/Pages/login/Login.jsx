import { Helmet } from "react-helmet-async";
import bg from "../../assets/others/authentication.png";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import ButtonSpeener from "../../components/speener/ButtonSpeener";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {signinUser,loader, setLoader} = useContext(AuthContext);
  const onSubmit = data => {
    signinUser(data.email, data.password)
    .then((result)=>{
      const user = result.user;
      console.log(user);
      setLoader(false)
      // alert will go here
    }).catch(err =>{
      // err massage will go here
      setLoader(false)
    })
  }
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="min-h-screen flex items-center"
    >
      <Helmet>
        <title>Bistro boss -- Login</title>
      </Helmet>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
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
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
              {errors.email && <span className="text-red-600">This field is required</span>}
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
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
              {errors.password && <span className="text-red-600">This field is required</span>}
            </div>

            <div>
              <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                {loader? <ButtonSpeener></ButtonSpeener>:
                "Sign in"
                }
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
      </div>
    </div>
  );
};

export default Login;
