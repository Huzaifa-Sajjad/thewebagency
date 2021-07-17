import Header from "../Navigation/Header";
import Footer from "../Navigation/Footer";
import Overlay from "../Overlay";
import Cursor from "../Cursor";

function Layout({ children, isFooter }) {
  return (
    <div id="main">
      <Cursor />
      <Overlay />
      <Header />
      {children}
      {isFooter && <Footer />}
    </div>
  );
}

export default Layout;
