import Layout from "@/components/Layout";
import { useEffect } from "react";
import { Power3, gsap, Expo } from "gsap";
import { Title, H2, H4, H6, Para } from "@/components/Text";

function About() {
  useEffect(() => {
    const timeline = gsap.timeline();
    const header = document.getElementById("header");
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
      )
      .from(
        "#about-heading > h6",
        {
          opacity: 0,
          ease: Power3.easeInOut,
          duration: 0.75,
        },
        1.8
      )
      .from("#about-heading > h1", {
        opacity: 0,
        y: 50,
        ease: Power3.easeInOut,
        duration: 1,
      })
      .to(".image-container > div", {
        width: 0,
        duration: 1.6,
        ease: Power3.easeInOut,
      })
      .from(
        ".image-container > img",
        {
          scale: 1.6,
          duration: 1.4,
          ease: Expo.easeInOut,
        },
        3.2
      );
  }, []);
  return (
    <Layout hasCTA title={"About TWA: The Best At Work"}>
      <section>
        <div className="lg:container lg:mx-auto">
          <div className="xs:max-w-full lg:max-w-4/4 lg:mx-auto xs:py-14 lg:pt-40 lg:pb-20">
            <div className="spacing" id="about-heading">
              <H6 className="mb-4">ABOUT US</H6>
              <Title className="font-medium leading-tight max-w-28">
                We empower businesses to express their full potential without
                worrying about technical hickups.
              </Title>
            </div>
          </div>
          <div className="image-container">
            <div className="image-mask"></div>
            <img src="/About/hero.jpg" alt="" />
          </div>
        </div>
      </section>
      <section className="xs:mt-0 lg:mt-20 xs:py-8 lg:py-20 bg-grayBg">
        <div className="lg:container lg:mx-auto spacing">
          <div className="grid grid-cols-12 md:gap-10  md:px-6 lg:px-0">
            <div className="xs:col-span-12 lg:col-span-4 xl:col-span-5 lg:pl-14 mb-6 xs:text-center lg:text-left">
              <Title
                className="font-semibold leading-snug xs:my-6 lg:my-0"
                large
              >
                Our
                <br /> Approach
              </Title>
            </div>
            <div className="xs:col-span-12 lg:col-span-8 xl:col-span-6 py-2 pl-9 border-l-2 border-lightGray">
              <div className="relative">
                <div className="absolute w-6 h-6 bg-primary rounded-full top-3 -left-12"></div>
                <H4>PHASE 1</H4>
                <H2>Discover And Estimate</H2>
                <Para className="my-4">
                  To produce the best solution possible, we pay close attention
                  to your product vision. Discuss your requirements and use
                  cases in detail. We welcome your suggestions!
                </Para>
                <ul className="timelineList two-col">
                  <li>Requirement Gathering</li>
                  <li>Project Cost Estimation</li>
                  <li>Project Timeline Estimation</li>
                </ul>
              </div>
              <div className="relative">
                <div className="absolute w-6 h-6 bg-primary rounded-full top-3 -left-12"></div>
                <H4>PHASE 2</H4>
                <H2>Design</H2>
                <Para className="my-4">
                  Our designers will prepare the mockups for your product and
                  gather your feedback along the way. This process gurantees
                  your satifaction and will enable us to move towards the next
                  phase with full confidence.
                </Para>
                <ul className="timelineList two-col">
                  <li>Wireframing</li>
                  <li>Adobe XD/Figma</li>
                  <li>UI/UX Design</li>
                </ul>
              </div>
              <div className="relative">
                <div className="absolute w-6 h-6 bg-primary rounded-full top-3 -left-12">
                  .
                </div>
                <H4>PHASE 3</H4>
                <H2>Develop</H2>
                <Para className="my-4">
                  In the development process our developers will start
                  developing each mockup approved by you. We tend to follow the
                  Scrum/Agile methodology which helps us to effectively build
                  your product.
                </Para>
                <ul className="timelineList two-col">
                  <li>Front-end</li>
                  <li>Back-end</li>
                  <li>Application Architecture</li>
                  <li>Modern Technologies</li>
                </ul>
              </div>
              <div className="relative">
                <div className="absolute w-6 h-6 bg-primary rounded-full top-3 -left-12"></div>
                <H4>PHASE 4</H4>
                <H2>QA</H2>
                <Para className="my-4">
                  To be confident that every module is functioning as intented
                  to complement the overall product, exhaustive testing is
                  performed throughout the development process which ensures a
                  stable final product which you can share with the world.
                </Para>
                <ul className="timelineList two-col">
                  <li>Automated Testing</li>
                  <li>Performance Testing</li>
                  <li>API Testing</li>
                </ul>
              </div>
              <div className="relative">
                <div className="absolute w-6 h-6 bg-primary rounded-full top-3 -left-12"></div>
                <H4>PHASE 5</H4>
                <H2>Deploy & Maintain</H2>
                <Para className="my-4">
                  With the product designed, developed, and tested, it is live
                  for the world to experience but our job is not finished yet.
                  We are always there help in every way possible be it new
                  features, SEO or bug fixing ---- you name it. We are your
                  development partners, and we will stick with you until the
                  end.
                </Para>
                <ul className="timelineList two-col">
                  <li>Product Deployment</li>
                  <li>Maintenance</li>
                  <li>Optimization</li>
                  <li>Updates</li>
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
