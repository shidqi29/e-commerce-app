import { useEffect, useRef, useState } from "react";
import { useUserLoginMutation } from "../redux/api/apiSlice";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../redux/user/userSlice";
import { getUsername } from "../utils";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const usernameRef = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [userLogin, { data, isLoading, isSuccess, isError, error }] = useUserLoginMutation();

  const handleLogin = (e) => {
    e.preventDefault();
    const userCredentials = {
      username,
      password
    }
    userLogin(userCredentials);
  };

  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem("token", data.token);
      dispatch(login({ token: data.token, name: getUsername(data.token) }));
      navigate(from, { replace: true });
    }
    if (localStorage.getItem("token")) {
      navigate(from, { replace: true });
    }
    usernameRef.current.focus();
  }, [isSuccess, isError]);

  return (
    <div className="hero min-h-screen lg:w-3/4">
      <div className="hero-content flex-col rounded-2xl bg-primary md:w-1/2">
        <section className="text-center text-secondary lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </section>
        <section className="card w-full max-w-sm flex-shrink-0 bg-inherit shadow-2xl">
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <input
                type="text"
                placeholder="Username"
                className="input input-bordered bg-secondary"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                ref={usernameRef}
              />
            </div>
            <div className="form-control">
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered bg-secondary"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {isError && <span className="text-red-600">{error.data}</span>}
            <div className="form-control mt-6">
              <button
                className="btn btn-accent tracking-widest text-secondary"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Login"}
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Login;
