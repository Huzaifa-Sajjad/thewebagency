import { Fragment } from "react";
import Cursor from "../Cursor";
import Drawer from "../Drawer";
import Loader from "../Loader";
import Header from "../Navigation/Header";
import Footer from "../Navigation/Footer";
import SEO from "../SEO";
import CTA from "../CTA";

function Layout({
  hasCTA,
  invertCTA,
  layoutBg,
  title,
  description,
  image,
  children,
}) {
  return (
    <Fragment>
      <SEO title={title} description={description} image={image} />
      <Drawer />
      <Loader bg={layoutBg} />
      <div id="main">
        <Cursor />
        <Header />
        {children}
        {hasCTA && <CTA hasBg={invertCTA} />}
        <Footer />
      </div>
    </Fragment>
  );
}

export default Layout;
