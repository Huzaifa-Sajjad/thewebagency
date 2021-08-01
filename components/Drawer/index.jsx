import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { DrawerContext } from "@/context/drawerContext";
import { Expo, gsap, Power3 } from "gsap";
import styles from "./styles.module.scss";

function Drawer() {
  const { open, closeDrawer, fastClose } = useContext(DrawerContext);
  const timeline = gsap.timeline();
  const router = useRouter();

  const execLinkPush = (link) => {
    fastClose();
    router.push(link);
  };

  useEffect(() => {
    if (open === true) {
      timeline
        .to("#drawer", {
          display: "block",
          width: "100%",
          duration: 1,
          ease: Expo.easeInOut,
        })
        .to(
          "#drawer img, button",
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: Expo.easeInOut,
          },
          0.5
        )
        .to(
          "#drawer li",
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: Power3.easeInOut,
            stagger: 0.4,
          },
          0.6
        )
        .to("#drawer p", {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: Power3.easeInOut,
        });
    }
  }, [open]);

  return (
    <div className={`${styles.root} ${open ? styles.open : ""}`} id="drawer">
      <img src="/logo.png" alt="" className={styles.logo} />

      <button onClick={() => closeDrawer(timeline)} className={styles.closeBtn}>
        x
      </button>
      <div className="h-2/3 flex items-center justify-center">
        <ul className={styles.navLinks}>
          <li onClick={() => execLinkPush("/about")}>About</li>
          <li onClick={() => execLinkPush("/work")}>Work</li>
          <li onClick={() => execLinkPush("/contact")}>Contact</li>
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
