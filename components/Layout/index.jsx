import { Fragment } from "react";
import CTA from "../CTA";
import Cursor from "../Cursor";
import Drawer from "../Drawer";
import Loader from "../Loader";
import Header from "../Navigation/Header";
import Footer from "../Navigation/Footer";

function Layout({ children, hasCTA }) {
  return (
    <Fragment>
      <Drawer />
      <Loader />
      <div id="main">
        <Cursor />
        <Header />
        {children}
        {hasCTA && <CTA />}
        <Footer />
      </div>
    </Fragment>
  );
}

export default Layout;
