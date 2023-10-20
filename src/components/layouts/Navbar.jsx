import { NavLink } from "react-router-dom";
import { navItem } from "../../lib/navItem";
import { useEffect, useState } from "react";
import { themeChange } from "theme-change";
import { Moon, SunDim, ShoppingCart, User } from "@phosphor-icons/react";
import { useDispatch, useSelector } from "react-redux";
import { getUsername } from "../../utils";
import { logout } from "../../redux/user/userSlice";

const Navbar = () => {
  const [totalCart, setTotalCart] = useState(0);
  const addedToCart = useSelector((state) => state.cart.data);
  const username = useSelector((state) => state.user.data.token);
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logout());
    window.location.reload();
  };

  useEffect(() => {
    themeChange(false);
    const sumTotalCart = addedToCart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sumTotalCart);
  }, [addedToCart]);

  return (
    <header className="sticky top-0 z-10 w-full border-b border-secondary backdrop-blur">
      <nav className="container navbar mx-auto px-4">
        <div className="flex-0">
          <div className="text-2xl font-bold">
            <NavLink to="/">D`Shop</NavLink>
          </div>
        </div>
        <div className="ml-10 flex-1">
          <div className="hidden md:flex">
            <ul className="flex gap-10">
              {navItem.map((item) => (
                <li key={item.name}>
                  <NavLink to={item.href}>{item.name}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex-0 gap-4">
          <div className="flex">
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input type="checkbox" />
              {/* sun icon */}
              <div
                className="swap-on h-7 w-7 fill-current"
                data-set-theme="dark"
              >
                <SunDim size={28} />
              </div>
              {/* moon icon */}
              <div
                className="swap-off h-7 w-7 fill-current"
                data-set-theme="light"
              >
                <Moon size={28} />
              </div>
            </label>
          </div>
          <div>
            <NavLink to="/cart">
              <div className="indicator">
                <span className="badge indicator-item badge-primary px-1">
                  {totalCart}
                </span>
                <ShoppingCart size={28} />
              </div>
            </NavLink>
          </div>
          {username ? (
            <div className="flex items-center gap-2">
              <p>Hello, {getUsername(username)}!</p>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-circle btn-ghost">
                  <div className="w-7 rounded-full">
                    <User size={28} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu dropdown-content rounded-box menu-sm z-[1] mt-3 w-fit bg-primary px-2 text-base font-semibold text-secondary shadow"
                >
                  <li>
                    <a onClick={handleLogout}>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="btn btn-primary btn-sm capitalize">
              <NavLink to="/login">Login</NavLink>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
