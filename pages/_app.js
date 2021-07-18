import Router from "next/router";
import NProgress from "nprogress";
import MouseContextProvider from "@/context/mouseContext";
import "nprogress/nprogress.css";
import "../styles/global.scss";

NProgress.configure({ showSpinner: false });

function MyApp({ Component, pageProps }) {
  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });

  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });

  return (
    <MouseContextProvider>
      <Component {...pageProps} />
    </MouseContextProvider>
  );
}

export default MyApp;
