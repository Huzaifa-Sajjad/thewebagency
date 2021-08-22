import { useEffect } from "react";
import { Power3, Expo, gsap } from "gsap";
import Layout from "@/components/Layout";
import { Para } from "@/components/Text";
import Styles from "./styles.module.scss";

function Confirm() {
  useEffect(() => {
    const timeline = gsap.timeline();
    const main = document.getElementById("main");
    const header = document.getElementById("header");
    const footer = document.getElementById("footer");
    const wrapper = document.getElementById("confirm-wrapper");
    //containers heights
    const headerHeight = header.clientHeight;
    const footerHeight = footer.clientHeight;
    const difference = headerHeight + footerHeight;
    wrapper.style.minHeight = `${window.innerHeight - difference}px`;
    //animations
    gsap.to(main, { visibility: "visible" });
    timeline
      .to("#app-loader > img", {
        opacity: 0,
        duration: 0.75,
        ease: Power3.easeInOut,
      })
      .to(
        "#app-loader",
        {
          height: 0,
          ease: Expo.easeInOut,
          display: "none",
          duration: 1.5,
        },
        0.6
      )
      .from(
        header,
        {
          opacity: 0,
          y: 35,
          ease: Power3.easeInOut,
          duration: 1,
        },
        1.5
      );
  }, []);

  return (
    <Layout
      title="Thank You | We will be in touch."
      description="Thank you for writing to us. We will review your requirements
      and will get back to you as soon as possible. Have a wonderful
      day ahead ✌️"
    >
      <div className="lg:container lg:mx-auto spacing">
        <div className="xs:max-w-full lg:max-w-4/4 lg:mx-auto">
          <div
            id="confirm-wrapper"
            className="flex items-center justify-center"
          >
            <div
              className={`xs:px-6 xs:py-10 lg:p-16 bg-grayBg rounded-lg ${Styles.card}`}
            >
              <lord-icon
                src="https://cdn.lordicon.com/lupuorrc.json"
                trigger="loop"
                colors="primary:#111111,secondary:#fd9644"
              />
              <Para className="text-center xs:leading-loose lg:leading-relaxed">
                Thank you for writing to us. We will review your requirements
                and will get back to you as soon as possible. Have a wonderful
                day ahead ✌️
              </Para>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Confirm;
