import { Fragment } from "react";
import layoutstyle from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main className={layoutstyle.main}>{props.children}</main>
    </Fragment>
  );
};
export default Layout;
