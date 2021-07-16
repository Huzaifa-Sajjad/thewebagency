import Prismic from "@prismicio/client";
import { Client } from "../prismic-config";
import Layout from "../components/Layout";
import FeaturedProjects from "../containers/FeaturedProjects";
import ReviewCard from "../components/Review";
import { Power3, gsap } from "gsap";
import { useEffect } from "react";

export default function Home({ projects }) {
  useEffect(() => {
    const timeline = gsap.timeline();
    const overlay = document.getElementById("overlay");
    const main = document.getElementById("main");
    const header = document.getElementById("header");
    gsap.to(main, { visibility: "visible" });
    timeline
      .to(overlay, {
        height: 0,
        display: "none",
        duration: 1,
        ease: Power3.easeInOut,
      })
      .from(header, {
        opacity: 0,
        y: 20,
        ease: Power3.easeInOut,
        duration: 1,
        delay: -0.85,
      })
      .from("#hero > h1, #hero > button", {
        opacity: 0,
        y: 50,
        ease: Power3.easeInOut,
        duration: 1,
        stagger: 0.5,
      });
  }, []);
  return (
    <Layout isFooter={true}>
      <section>
        <div className="lg:container lg:mx-auto">
          <div
            id="hero"
            className="flex flex-col justify-center py-2 py-20 xs:px-4 md:px-10 lg:px-0"
          >
            <h1 className="xs:text-3xl md:text-hero leading-tight font-medium mt-4 -mb-0">
              The Best Digital Products.
            </h1>
            <h1 className="xs:text-3xl md:text-hero leading-tight font-medium mt-2">
              On-Time. On-Budget. On-Point.
            </h1>
            <button className="border-2 border-primary xs:text-xl w-max px-9 py-2 mt-7 letterspacing">
              Let's Talk
            </button>
          </div>
        </div>
      </section>
      <FeaturedProjects projects={projects} />
      <section>
        <div className="lg:container lg:mx-auto  py-10 xs:px-4 md:px-2">
          <h1 className="xs:text-2xl md:text-6xl lg:text-7-xl font-bold mb-14">
            Whatever you need, we build
          </h1>
          <div className="grid grid-cols-2 xs:gap-4 xs:gap-4 lg:gap-10">
            <div className="xs:col-span-2 md:col-span-1 shadow-md xs:py-4 xl:py-14 xs:px-6 xl:px-24 transition-all duration-700 ease-in-out hover:bg-primary hover:text-white">
              <h1 className="xs:text-xl md:text-3xl lg:text-4xl font-medium mb-4">
                Mobile & Web App
              </h1>
              <p className="xs:text-sm md:text-lg lg:text-xl font-light">
                From the initial design to the final development stage, your
                dedicated team of specialists will build your application to
                reflect your business goals and user needs.
              </p>
            </div>
            <div className="xs:col-span-2 md:col-span-1 shadow-md xs:py-4 xl:py-14 xs:px-6 xl:px-24 transition-all duration-700 ease-in-out hover:bg-primary hover:text-white">
              <h1 className="xs:text-xl md:text-3xl lg:text-4xl font-medium mb-4">
                Responsive Website
              </h1>
              <p className="xs:text-sm md:text-lg lg:text-xl font-light">
                Your website is your digital first impression. That's why you
                need a responsive and conversion-oriented site, matched with
                great user experience and world-class design.
              </p>
            </div>
            <div className="xs:col-span-2 md:col-span-1 shadow-md xs:py-4 xl:py-14 xs:px-6  xl:px-24 transition-all duration-700 ease-in-out hover:bg-primary hover:text-white">
              <h1 className="xs:text-xl md:text-3xl lg:text-4xl font-medium mb-4">
                Custom eCommerce
              </h1>
              <p className="xs:text-sm md:text-lg lg:text-xl font-light">
                When it comes to eCommerce, user experience (UX) is paramount.
                Let us customize the perfect online store that matches your
                brand voice and your product
              </p>
            </div>
            <div className="xs:col-span-2 md:col-span-1 shadow-md xs:py-4 xl:py-14 xs:px-6  xl:px-24 transition-all duration-700 ease-in-out hover:bg-primary hover:text-white">
              <h1 className="xs:text-xl md:text-3xl lg:text-4xl font-medium mb-4">
                Brand Identity
              </h1>
              <p className="xs:text-sm md:text-lg lg:text-xl font-light">
                Who you are informs what you build. That’s why we thread your
                digital product and your brand identity together, always
                instilling product integrity.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="lg:container lg:mx-auto py-10 xs:px-2">
          <h1 className="xs:text-2xl md:text-6xl lg:text-7-xl font-bold xs:mb-4 md:mb-10">
            Reveiws, Words On The Street
          </h1>
          <ReviewCard />
        </div>
      </section>
    </Layout>
  );
}

export async function getServerSideProps() {
  const client = Client();
  const doc = await client.query(
    Prismic.predicates.at("document.type", "projects")
  );
  const projects = doc.results.filter((item) => item.data.type === "featured");
  return {
    props: {
      projects,
    },
  };
}
