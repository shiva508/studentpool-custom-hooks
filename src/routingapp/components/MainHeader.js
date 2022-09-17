import { Link, NavLink } from "react-router-dom";
import datastyle from "./MainHeader.module.css";
const MainHeader = () => {
  return (
    <header className={datastyle.header}>
      <ul>
        <li>
          <NavLink activeClassName={datastyle.active} to="/welcome">
            Welcome
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={datastyle.active} to="/product">
            Product
          </NavLink>
        </li>
      </ul>
    </header>
  );
};
export default MainHeader;
