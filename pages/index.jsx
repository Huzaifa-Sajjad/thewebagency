import { useEffect, useContext } from "react";
import { Power3, Expo, gsap } from "gsap";
import Prismic from "@prismicio/client";
import { Client } from "../prismic-config";
import Layout from "@/components/Layout";
import FeaturedProjects from "@/containers/FeaturedProjects";
import ReviewCard from "@/components/Review";
import { ButtonOutline } from "@/components/Button";
import { Title, H2, H3, Para } from "@/components/Text";
import Wrapper from "@/components/Wrapper";

export default function Home({ projects, reviews }) {
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
    <Layout hasCTA={true}>
      <div className="lg:container lg:mx-auto spacing">
        <Wrapper>
          <div id="hero">
            <Title className="font-medium leading-snug">
              The Best Digital Products.
            </Title>
            <Title className="font-medium leading-snug">
              On-Time. On-Budget. On-Point.
            </Title>
            <div id="btnAnimation">
              <ButtonOutline className="mt-10 xs:w-full lg:w-auto">
                Let's Talk
              </ButtonOutline>
            </div>
          </div>
        </Wrapper>
      </div>
      <section
        id="featuredProjets"
        className="border-b border-gray border-opacity-20"
      >
        <FeaturedProjects projects={projects} />
      </section>
      <section className="xs:py-8 lg:py-20">
        <div className="lg:container lg:mx-auto spacing">
          <H2 className="xs:mb-6 lg:mb-10">Whatever you need, we build</H2>
          <div className="grid grid-cols-2 gap-10">
            <div className="xs:col-span-2 md:col-span-1 shadow-md xs:py-4 xl:py-14 xs:px-6 xl:px-14">
              <H3>Web Applications</H3>
              <Para className="my-4">
                From the initial design to the final development stage, your
                dedicated team of specialists will build your application to
                reflect your business goals and user needs.
              </Para>
            </div>
            <div className="xs:col-span-2 md:col-span-1 shadow-md xs:py-4 xl:py-14 xs:px-6 xl:px-14">
              <H3>UI/UX</H3>
              <Para className="my-4">
                From the initial design to the final development stage, your
                dedicated team of specialists will build your application to
                reflect your business goals and user needs.
              </Para>
            </div>
            <div className="xs:col-span-2 md:col-span-1 shadow-md xs:py-4 xl:py-14 xs:px-6 xl:px-14">
              <H3>Custom E-Commerce</H3>
              <Para className="my-4">
                From the initial design to the final development stage, your
                dedicated team of specialists will build your application to
                reflect your business goals and user needs.
              </Para>
            </div>
            <div className="xs:col-span-2 md:col-span-1 shadow-md xs:py-4 xl:py-14 xs:px-6 xl:px-14">
              <H3>Digital Marketing</H3>
              <Para className="my-4">
                From the initial design to the final development stage, your
                dedicated team of specialists will build your application to
                reflect your business goals and user needs.
              </Para>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-grayBg xs:py-8 lg:py-20">
        <div className="lg:container lg:mx-auto spacing">
          <H2 className="xs:mb-6 lg:mb-10 xs:text-center lg:text-left">
            Reveiws, Words On The Street
          </H2>
          <ReviewCard reviews={reviews} />
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
