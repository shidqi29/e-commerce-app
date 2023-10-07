import { NavLink } from "react-router-dom";
import { navItem } from "../../lib/navItem";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import { Moon, SunDim, ShoppingCart, User } from "@phosphor-icons/react";

const Navbar = () => {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <header className="sticky top-0 z-10 w-full border-b border-secondary backdrop-blur">
      <nav className="container navbar mx-auto px-4">
        <div className="navbar-start">
          <div className="text-2xl font-bold">
            <NavLink to="/">D`Shop</NavLink>
          </div>
        </div>
        <div className="navbar-center">
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
        <div className="navbar-end gap-4">
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
                <span className="badge indicator-item badge-accent px-1">
                  1
                </span>
                <ShoppingCart size={28} />
              </div>
            </NavLink>
          </div>
          <div className="flex items-center gap-2">
            <p>Hello, Shidqi!</p>
            <NavLink to="/profile">
              <User size={28} />
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
