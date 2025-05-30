import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const Login = () => {
  const navigate = useNavigate();
  const { singInUser, singInWithGoogle } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    singInUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  const handleGoogleSingIn = () => {
    singInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log("Error", error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-2xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label-text">Email</label>
              <input
                type="email"
                name="email"
                className="input input-bordered"
                placeholder="Email"
                required
              />
            </div>
            <div className="form-control my-3">
              <label className="label-text">Password</label>
              <input
                type="password"
                name="password"
                className="input input-bordered"
                placeholder="Password"
                required
              />
            </div>
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </form>
          <p className="ml-4 mb-4 text-green-500">
            New to this website? Please{" "}
            <Link className="text-red-500" to="/register">
              Register
            </Link>
          </p>
          <div className="divider"></div>
          <p className="text-center pb-3">
            <button onClick={handleGoogleSingIn} className="btn btn-neutral">
              Google
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
