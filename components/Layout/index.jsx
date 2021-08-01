import { Fragment } from "react";
import Header from "../Navigation/Header";
import Footer from "../Navigation/Footer";
import Cursor from "../Cursor";
import Drawer from "../Drawer";
import Loader from "../Loader";

function Layout({ children, isFooter }) {
  return (
    <Fragment>
      <Drawer />
      <Loader />
      <div id="main">
        <Cursor />
        <Header />
        {children}
        {isFooter && <Footer />}
      </div>
    </Fragment>
  );
}

export default Layout;
