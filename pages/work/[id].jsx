import Layout from "@/components/Layout";
import { useEffect, useContext } from "react";
import { Power3, gsap } from "gsap";

function CaseStudy() {
  useEffect(() => {
    const timeline = gsap.timeline();
    const main = document.getElementById("main");
    const header = document.getElementById("header");
    gsap.to(main, { visibility: "visible" });
    timeline
      .to("#app-loader", {
        height: 0,
        ease: Power3.easeOut,
        display: "none",
        duration: 1.5,
      })
      .from(
        header,
        {
          opacity: 0,
          y: 35,
          ease: Power3.easeInOut,
          duration: 1,
        },
        0.2
      );
  }, []);
  return (
    <Layout isFooter={true}>
      <section>
        <div className="lg:container lg:mx-auto">
          <div id="hero" className="flex flex-col justify-center pt-20 mb-28">
            <h1 className="xs:text-30 md:text-36 lg:text-44 xl:text-48 text-primary leading-tight font-semibold mt-4 -mb-0">
              Toronto Fine Jewelry.ca
            </h1>
            <p className="xs:text-20 md:text-24 font-light text-gray md:max-w-55 xs:my-6 md:my-6 border-l-4 pl-4 leading-relaxed">
              Rebranding and generating exponential user growth poses
              challenges. That's why Neuvoo, one of the world's largest job
              sites, chose Orizon to seamlessly transition their brand to
              Talent.com and elevate their user experience.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-grayBg">
        <div className="lg:container lg:mx-auto py-10">
          <ul className="casestudy-list">
            <li>
              <h5>BRAND</h5>
              <p>SBG Funding</p>
            </li>
            <li>
              <h5>BRAND</h5>
              <p>SBG Funding</p>
            </li>
            <li>
              <h5>BRAND</h5>
              <p>SBG Funding</p>
            </li>
            <li>
              <h5>BRAND</h5>
              <p>SBG Funding</p>
            </li>
            <li>
              <h5>BRAND</h5>
              <p>SBG Funding</p>
            </li>
            <li>
              <h5>BRAND</h5>
              <p>SBG Funding</p>
            </li>
            <li>
              <h5>BRAND</h5>
              <p>SBG Funding</p>
            </li>
            <li>
              <h5>BRAND</h5>
              <p>SBG Funding</p>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div className="lg:container lg:mx-auto pt-28">
          <p className="sm:text-20 lg:text-24 font-semibold text-center max-w-35 mx-auto">
            “Get support on a large platform, flesh out your first MVP, go from
            concept to investment, or take your startup to the next level. Our
            process wraps around your unique business needs.”
          </p>
          <img
            src="/Home/coin.png"
            alt=""
            className="max-h-120 mx-auto drop-shadow-lg mt-10"
          />
        </div>
      </section>
      <section>
        <div className="lg:container lg:mx-auto pt-28">
          <h4 className="text-12 font-semibold text-gray">VISUAL IDENTITY</h4>
          <h2 className="xs:text-32 lg:text-52 font-semibold">
            Logotype: A single image
          </h2>
          <p className="xs:text-16 lg:text-22 font-light mt-4 max-w-65 mb-4 leading-loose">
            The arrow-shaped logo was inspired by the previous one that
            represented a rocket (which is the international symbol of growth!).
            With that detail, we’ve managed to slim the logo, while ensuring
            consistency with the established brand image.
          </p>
          <img
            src="/Home/coin.png"
            alt=""
            className="max-h-100 mx-auto drop-shadow-lg"
          />
        </div>
      </section>
    </Layout>
  );
}

export default CaseStudy;
