import styles from "./styles.module.scss";
import Link from "next/link";
import { useEffect } from "react";
import { Expo, gsap, Power3 } from "gsap";

function Drawer({ isOpen, onClose }) {
  const timeline = gsap.timeline();
  isOpen === true &&
    useEffect(() => {
      timeline
        .to("#drawer", {
          display: "block",
          width: "100%",
          duration: 1,
          ease: Expo.easeInOut,
        })
        .from(
          "#drawer img, button",
          {
            opacity: 0,
            y: -20,
            display: "none",
            duration: 0.5,
            ease: Expo.easeInOut,
          },
          0.5
        )
        .from(
          "#drawer li",
          {
            opacity: 0,
            x: -150,
            display: "none",
            scale: 0.5,
            duration: 1,
            ease: Power3.easeInOut,
          },
          0.6
        )
        .from("#drawer p", {
          y: 20,
          display: "none",
          duration: 0.5,
          ease: Power3.easeInOut,
        });
    }, []);
  const handleDrawerClose = () => {
    timeline.reverse();
    onClose(false);
  };
  return (
    <div className={`${styles.root} ${isOpen ? styles.open : ""}`} id="drawer">
      <Link href="/">
        <img src="/Home/logo.png" alt="" className={styles.logo} />
      </Link>
      <button onClick={handleDrawerClose} className={styles.closeBtn}>
        x
      </button>
      <div className="h-2/3 flex items-center justify-center">
        <ul className={styles.navLinks}>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/work">Work</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <p className="text-lightGray text-center mb-10">
        Drop a line at <br />
        <span className="text-white font-medium">info@thewebagency.io</span>
      </p>
      <p className="text-lightGray text-center mb-10">
        or <span className="text-white font-medium">schedule a call</span> and
        <br />
        share your story with us
      </p>
    </div>
  );
}

export default Drawer;
