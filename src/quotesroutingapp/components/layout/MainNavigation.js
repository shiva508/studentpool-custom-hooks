import { NavLink } from "react-router-dom";
import mns from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={mns.header}>
      <div className={mns.logo}>Great Quotes</div>
      <nav className={mns.nav}>
        <ul>
          <li>
            <NavLink to="/quotes" activeClassName={mns.active}>
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-quote" activeClassName={mns.active}>
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
