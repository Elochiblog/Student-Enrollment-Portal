import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Student Portal</h2>

      <div className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Home
        </NavLink>

        <NavLink
          to="/enroll"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Enroll
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
