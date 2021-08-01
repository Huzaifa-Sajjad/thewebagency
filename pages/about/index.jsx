import Layout from "../../components/Layout";
import Loader from "@/components/Loader";
import { useEffect } from "react";
import { Power3, gsap, Expo } from "gsap";
import CSSRulePlugin from "gsap/dist/CSSRulePlugin";
import { H1, H2, H4, Lead, Para } from "@/components/Text";
import { Title } from "@/components/Text";

if (typeof window !== "undefined") {
  gsap.registerPlugin(CSSRulePlugin);
}

function About() {
  useEffect(() => {
    let imageReveal = CSSRulePlugin.getRule(".image-container:after");
    const timeline = gsap.timeline();
    const header = document.getElementById("header");
    gsap.to(main, { visibility: "visible" });
    timeline
      .to("#app-loader > h1", {
        opacity: 0,
        duration: 0.75,
        ease: Power3.easeInOut,
      })
      .to(
        "#app-loader",
        {
          height: "0%",
          display: "none",
          ease: Expo.easeInOut,
          duration: 1,
        },
        0.4
      )
      .from(
        header,
        {
          opacity: 0,
          y: 35,
          ease: Power3.easeInOut,
          duration: 1,
        },
        0.8
      )
      .to(imageReveal, {
        width: "0%",
        duration: 1.6,
        ease: Power3.easeInOut,
      })
      .from(
        ".image-container img",
        {
          scale: 1.6,
          duration: 1.4,
          ease: Expo.easeInOut,
        },
        2
      );
  }, []);
  return (
    <>
      <Loader />
      <Layout isFooter={true}>
        <section>
          <div className="lg:container lg:mx-auto spacing">
            <div className="flex flex-col justify-center xs:py-2  lg:py-20 xs:px-2 md:px-10 lg:px-0">
              <H1 className="mt-10">
                Ingenious products driven by transparent relationships
              </H1>
              <Lead>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </Lead>
              <div className="image-container">
                <img src="/About/hero.png" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="lg:container lg:mx-auto spacing">
            <div className="grid grid-cols-12 md:gap-10  md:px-6 lg:px-0">
              <div className="xs:col-span-12 lg:col-span-4 xl:col-span-5 lg:pl-14 mb-6 xs:text-center lg:text-left">
                <Title>
                  Our
                  <br /> Approach
                </Title>
              </div>
              <div className="xs:col-span-12 lg:col-span-8 xl:col-span-6  py-2 pl-9 border-l-2 border-lightGray">
                <div className="relative">
                  <div className="absolute w-6 h-6 bg-primary rounded-full top-3 -left-12">
                    .
                  </div>
                  <H4>PHASE 1</H4>
                  <H2>Discover And Estimate</H2>
                  <Para>
                    To produce the best solution possible, we pay close
                    attention to your product vision. We welcome your
                    suggestions.
                  </Para>
                  <ul className="timelineList">
                    <li>Project Estimation</li>
                    <li>Development Of Technical Specification</li>
                  </ul>
                </div>
                <div className="relative">
                  <div className="absolute w-6 h-6 bg-primary rounded-full top-3 -left-12">
                    .
                  </div>
                  <H4>PHASE 2</H4>
                  <H2>Design</H2>
                  <Para>
                    To provide stylish and interaction design we focus on a
                    custom approach. No matter how complex the technological
                    aspect of the product, it will be easy and intuitive to
                    navigate. We are capable of producing clickable prototypes
                    to provide a comprehensive vision of the final result.
                  </Para>
                  <ul className="timelineList two-col">
                    <li>Wireframing</li>
                    <li>Invision & Marvel</li>
                    <li>UI/UX Design</li>
                  </ul>
                </div>
                <div className="relative">
                  <div className="absolute w-6 h-6 bg-primary rounded-full top-3 -left-12">
                    .
                  </div>
                  <H4>PHASE 3</H4>
                  <H2>Develop</H2>
                  <Para>
                    In the process of working toward a result we follow Scrum
                    methodology, assuring a development workflow that is
                    resource-effective and time-sensitive.
                  </Para>
                  <ul className="timelineList two-col">
                    <li>Front-end</li>
                    <li>Back-end</li>
                    <li>Modern Technologies</li>
                  </ul>
                </div>
                <div className="relative">
                  <div className="absolute w-6 h-6 bg-primary rounded-full top-3 -left-12">
                    .
                  </div>
                  <H4>PHASE 4</H4>
                  <H2>QA</H2>
                  <Para>
                    To be confident that every individual part complements the
                    unified system and results in consistent, reliable product
                    functionality, exhaustive testing is performed throughout
                    the entire development process.
                  </Para>
                  <ul className="timelineList two-col">
                    <li>Manual & Automated Testing</li>
                    <li>Performance Testing</li>
                    <li>API Testing</li>
                  </ul>
                </div>
                <div className="relative">
                  <div className="absolute w-6 h-6 bg-primary rounded-full top-3 -left-12">
                    .
                  </div>
                  <H4>PHASE 5</H4>
                  <H2>Delivery</H2>
                  <Para>
                    With the product designed, developed, and tested, it is now
                    ready for launch.
                  </Para>
                  <ul className="timelineList two-col">
                    <li>Strategic Plan</li>
                    <li>Customer Analytics</li>
                    <li>Product Launch</li>
                    <li>Support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default About;
