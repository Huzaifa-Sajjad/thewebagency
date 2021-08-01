import { useEffect, useContext } from "react";
import { Power3, Expo, gsap } from "gsap";
import Prismic from "@prismicio/client";
import { Client } from "../prismic-config";
import Layout from "@/components/Layout";
import FeaturedProjects from "@/containers/FeaturedProjects";
import ReviewCard from "@/components/Review";
import { MouseContext } from "@/context/mouseContext";
import Loader from "@/components/Loader";

export default function Home({ projects, reviews }) {
  const { setHoverCursor, setNormalCursor } = useContext(MouseContext);

  useEffect(() => {
    const timeline = gsap.timeline();
    const main = document.getElementById("main");
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
          height: 0,
          ease: Expo.easeInOut,
          display: "none",
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
      .from(
        "#hero > h1",
        {
          opacity: 0,
          y: 50,
          ease: Power3.easeInOut,
          duration: 0.7,
          stagger: 0.5,
        },
        1
      )
      .from("#btnAnimation", {
        opacity: 0,
        y: 50,
        ease: Power3.easeInOut,
      })
      .from("#featuredProjets", {
        opacity: 0,
        y: 100,
        ease: Power3.easeInOut,
        duration: 0.5,
        delay: 0.2,
      });
  }, []);
  return (
    <>
      <Loader />
      <Layout isFooter={true}>
        <div className="lg:container lg:mx-auto">
          <div
            id="hero"
            className="flex flex-col justify-center xs:pt-28 lg:pt-40 mb-28"
          >
            <h1 className="xs:text-30 md:text-36 lg:text-44 xl:text-48 text-primary leading-tight  font-semibold mt-4 -mb-0">
              The Best Digital Products.
            </h1>
            <h1 className="xs:text-30 md:text-36 lg:text-48 xl:text-48 text-primary leading-tight font-semibold mt-2">
              On-Time. On-Budget. On-Point.
            </h1>
            <div id="btnAnimation">
              <button
                onMouseEnter={setHoverCursor}
                onMouseLeave={setNormalCursor}
                className="border-2 border-primary font-medium xs:text-16 md:text-18 lg:text:20 xl:text-22 w-max px-9 py-2 mt-7 letterspacing hover:bg-primary hover:text-white transition-all duration-500	cursor-none"
              >
                Let's Talk
              </button>
            </div>
          </div>
        </div>

        <section id="featuredProjets">
          <FeaturedProjects projects={projects} />
        </section>
        <section>
          <div className="lg:container lg:mx-auto  py-10  xs:px-4 lg:px-0">
            <h2 className="xs:text-24 md:text-28 lg:text-32 xl:text-36 text-primary font-semibold mb-14">
              Whatever you need, we build
            </h2>
            <div className="grid grid-cols-2 xs:gap-4 xs:gap-4 lg:gap-10">
              <div className="xs:col-span-2 md:col-span-1 shadow-md xs:py-4 xl:py-14 xs:px-6 xl:px-14">
                <h3 className="xs:text-20 md:text-22 lg:text-24 xl:text-26 text-primary font-medium mb-4">
                  Web Applications
                </h3>
                <p className="xs:text-14 md:text-14 lg:text-16 xl:text-18 text-gray font-light">
                  From the initial design to the final development stage, your
                  dedicated team of specialists will build your application to
                  reflect your business goals and user needs.
                </p>
              </div>
              <div className="xs:col-span-2 md:col-span-1 shadow-md xs:py-4 xl:py-14 xs:px-6 xl:px-14">
                <h3 className="xs:text-20 md:text-22 lg:text-24 xl:text-26 text-primary font-medium mb-4">
                  UI/UX
                </h3>
                <p className="xs:text-14 md:text-14 lg:text-16 xl:text-18 text-gray font-light">
                  From the initial design to the final development stage, your
                  dedicated team of specialists will build your application to
                  reflect your business goals and user needs.
                </p>
              </div>
              <div className="xs:col-span-2 md:col-span-1 shadow-md xs:py-4 xl:py-14 xs:px-6 xl:px-14">
                <h3 className="xs:text-20 md:text-22 lg:text-24 xl:text-26 text-primary font-medium mb-4">
                  Custom E-Commerce
                </h3>
                <p className="xs:text-14 md:text-14 lg:text-16 xl:text-18 text-gray font-light">
                  From the initial design to the final development stage, your
                  dedicated team of specialists will build your application to
                  reflect your business goals and user needs.
                </p>
              </div>
              <div className="xs:col-span-2 md:col-span-1 shadow-md xs:py-4 xl:py-14 xs:px-6 xl:px-14">
                <h3 className="xs:text-20 md:text-22 lg:text-24 xl:text-26 text-primary font-medium mb-4">
                  Digital Marketing
                </h3>
                <p className="xs:text-14 md:text-14 lg:text-16 xl:text-18 text-gray font-light">
                  From the initial design to the final development stage, your
                  dedicated team of specialists will build your application to
                  reflect your business goals and user needs.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-grayBg">
          <div className="lg:container lg:mx-auto py-10 xs:px-2">
            <h2 className="xs:text-24 md:text-28 lg:text-32 xl:text-36 text-primary font-semibold mb-14">
              Reveiws, Words On The Street
            </h2>
            <ReviewCard reviews={reviews} />
          </div>
        </section>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const client = Client();
  const doc = await client.query(
    Prismic.predicates.at("document.type", "projects")
  );
  const projects = doc.results.filter((item) => item.data.type === "featured");
  const reviews = await client.query(
    Prismic.predicates.at("document.type", "reviews"),
    { orderings: "[document.first_publication_date desc]" }
  );
  return {
    props: {
      projects,
      reviews: reviews.results,
    },
  };
}
