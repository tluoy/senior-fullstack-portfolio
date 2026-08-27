import { Outlet, NavLink } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <header>
        <nav>
          <strong>Senior Full-Stack Portfolio</strong>

          <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/skills">Skills</NavLink>
            <NavLink to="/experience">Experience</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/login">Login</NavLink>
          </div>
        </nav>
      </header>

      <Outlet />

      <footer>
        <p>© 2026 Senior Full-Stack Portfolio</p>
      </footer>
    </>
  );
}

export default MainLayout;
