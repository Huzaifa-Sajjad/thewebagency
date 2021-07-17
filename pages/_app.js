import MouseContextProvider from "../context/mouseContext";
import "../styles/global.scss";

function MyApp({ Component, pageProps }) {
  return (
    <MouseContextProvider>
      <Component {...pageProps} />
    </MouseContextProvider>
  );
}

export default MyApp;
