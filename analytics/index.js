import ReactGA from "react-ga";

export const initGA = () => {
  ReactGA.initialize("G-68J159M8T7");
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
