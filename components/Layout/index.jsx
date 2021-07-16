import Header from "../Navigation/Header";
import Footer from "../Navigation/Footer";
import Overlay from "../Overlay";

function Layout({ children, isFooter }) {
  return (
    <div id="main">
      <Overlay />
      <Header />
      {children}
      {isFooter && <Footer />}
    </div>
  );
}

export default Layout;
