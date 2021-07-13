import Header from "../Navigation/Header";
import Footer from "../Navigation/Footer";

function Layout({ children, isFooter }) {
  return (
    <>
      <Header />
      {children}
      {isFooter && <Footer />}
    </>
  );
}

export default Layout;
