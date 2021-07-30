import Layout from "../../components/Layout";
import { useEffect } from "react";
import { Power3, gsap } from "gsap";

function About() {
  useEffect(() => {
    const timeline = gsap.timeline();
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
        <div className="lg:container lg:mx-auto xs:px-4">
          <div className="flex flex-col justify-center py-2 py-20 xs:px-2 md:px-10 lg:px-0">
            <h3 className="text-base font-light">About Us</h3>
            <h1 className="xs:text-30 md:text-36 lg:text-48 leading-none font-bold mt-2 lg:w-3/4">
              Ingenious products driven by transparent relationships
            </h1>
            <p className="xs:text-20 md:text-24 font-light text-gray md:max-w-45 xs:my-6 md:my-14 border-l-4 pl-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <img src="/About/hero.png" alt="" className="w-full h-auto my-10" />
          </div>
        </div>
      </section>
      <section>
        <div className="lg:container lg:mx-auto xs:px-6 xl:px-0">
          <div className="grid grid-cols-12 md:gap-10  md:px-6 lg:px-0">
            <div className="xs:col-span-12 lg:col-span-4 xl:col-span-5 lg:pl-14 mb-6 xs:text-center lg:text-left">
              <h1 className="xs:text-4xl md:text-6xl lg:text-7-xl font-semibold w-max m-auto">
                Our
                <br /> Approach
              </h1>
            </div>
            <div className="xs:col-span-12 lg:col-span-8 xl:col-span-6  py-2 pl-9 border-l-2 border-lightGray">
              <div className="relative">
                <div className="absolute w-6 h-6 bg-primary rounded-full top-3 -left-12">
                  .
                </div>
                <h3 className="text-sm font-semibold text-gray">PHASE 1</h3>
                <h1 className="xs:text-2xl md:text-4-xl mb-4 font-semibold">
                  Discover And Estimate
                </h1>
                <p className="xs:text-base md:text-lg font-light  max-w-45">
                  To produce the best solution possible, we pay close attention
                  to your product vision. We welcome your suggestions.
                </p>
                <ul className="timelineList">
                  <li>Project Estimation</li>
                  <li>Development Of Technical Specification</li>
                </ul>
              </div>
              <div className="relative">
                <div className="absolute w-6 h-6 bg-primary rounded-full top-3 -left-12">
                  .
                </div>
                <h3 className="text-sm font-semibold text-gray">PHASE 2</h3>
                <h1 className="xs:text-2xl md:text-4-xl mb-4 font-semibold">
                  Design
                </h1>
                <p className="xs:text-base md:text-lg font-light  max-w-45">
                  To provide stylish and interaction design we focus on a custom
                  approach. No matter how complex the technological aspect of
                  the product, it will be easy and intuitive to navigate. We are
                  capable of producing clickable prototypes to provide a
                  comprehensive vision of the final result.
                </p>
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
                <h3 className="text-sm font-semibold text-gray">PHASE 3</h3>
                <h1 className="xs:text-2xl md:text-4-xl mb-4 font-semibold">
                  Develop
                </h1>
                <p className="xs:text-base md:text-lg font-light  max-w-45">
                  In the process of working toward a result we follow Scrum
                  methodology, assuring a development workflow that is
                  resource-effective and time-sensitive.
                </p>
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
                <h3 className="text-sm font-semibold text-gray">PHASE 4</h3>
                <h1 className="xs:text-2xl md:text-4-xl mb-4 font-semibold">
                  QA
                </h1>
                <p className="xs:text-base md:text-lg font-light  max-w-45">
                  To be confident that every individual part complements the
                  unified system and results in consistent, reliable product
                  functionality, exhaustive testing is performed throughout the
                  entire development process.
                </p>
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
                <h3 className="text-sm font-semibold text-gray">PHASE 5</h3>
                <h1 className="xs:text-2xl md:text-4-xl mb-4 font-semibold">
                  Delivery
                </h1>
                <p className="xs:text-base md:text-lg font-light  max-w-45">
                  With the product designed, developed, and tested, it is now
                  ready for launch.
                </p>
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
  );
}

export default About;
