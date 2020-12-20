import "../index.css";
import { Link, NavLink } from "react-router-dom";
function NavBar() {
  return (
    <nav>
      <Link className="navbar-brand" to="/">
        Live COVID Tracker
      </Link>
      {/*Nav Links*/}

      <ul>
        {/* <li>
          <NavLink to="/home" activeClassName="active-route">
            Home
          </NavLink>
        </li> */}
        <li>
          <NavLink to="/historic" activeClassName="active-route">
            Historic
          </NavLink>
        </li>
        <li>
          <NavLink to="/current" activeClassName="active-route">
            Current
          </NavLink>
        </li>
        <li>
          <NavLink to="/search" activeClassName="active-route">
            Search
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
