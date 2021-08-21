import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { DrawerContext } from "@/context/drawerContext";
import { SchedulerLink } from "@/components/Scheduler";
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
          duration: 0.75,
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
            duration: 0.5,
            ease: Power3.easeInOut,
            stagger: 0.4,
          },
          0.6
        );
    }
  }, [open]);

  return (
    <div className={`${styles.root} ${open ? styles.open : ""}`} id="drawer">
      <img
        src="https://images.prismic.io/thewebagency/3fbe043f-332e-4849-b707-8c03c2b2b119_TWA+logo3.png?auto=compress,format"
        alt=""
        className={styles.logo}
      />

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
    </div>
  );
}

export default Drawer;
