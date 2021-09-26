import Router from 'next/router';
import NProgress from 'nprogress';
import MouseContextProvider from '@/context/mouseContext';
import DrawerContextProvider from '@/context/drawerContext';
import 'nprogress/nprogress.css';
import 'overlayscrollbars/css/OverlayScrollbars.css';
import '../styles/global.scss';

NProgress.configure({ showSpinner: false });

function MyApp({ Component, pageProps }) {
  Router.events.on('routeChangeStart', () => {
    NProgress.start();
  });

  Router.events.on('routeChangeComplete', () => {
    NProgress.done();
  });

  return (
    <MouseContextProvider>
      <DrawerContextProvider>
        <Component {...pageProps} />
      </DrawerContextProvider>
    </MouseContextProvider>
  );
}

export default MyApp;
