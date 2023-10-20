import { useEffect, useRef, useState } from "react";
import { useUserLoginMutation } from "../redux/api/apiSlice";
import { useDispatch } from "react-redux";
import { login } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const usernameRef = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [mutate, { isLoading }] = useUserLoginMutation();

  const handleLogin = (e) => {
    e.preventDefault();
    const userCredentials = { username, password };
    mutate(userCredentials).then((res) => {
      if (!res.data?.token) {
        setError(res.error.data);
        return;
      }
      dispatch(login(res.data));
      navigate("/");
      localStorage.setItem("token", res.data.token);
    });
    setUsername("");
    setPassword("");
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
    usernameRef.current.focus();
  }, []);

  return (
    <main className="flex min-h-screen justify-center">
      <div className="hero lg:w-3/4">
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
              {error && <span className="text-red-600">{error}</span>}
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
    </main>
  );
};

export default Login;
