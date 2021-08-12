import router, { useRouter } from "next/router";
import { useEffect } from "react";
import { Power3, Expo, gsap } from "gsap";
import Prismic from "@prismicio/client";
import { Client } from "../prismic-config";
import Layout from "@/components/Layout";
import FeaturedProjects from "@/containers/FeaturedProjects";
import ReviewCard from "@/components/Review";
import { ButtonOutline } from "@/components/Button";
import { Title, H2, H6, Para } from "@/components/Text";
import Wrapper from "@/components/Wrapper";
import Services from "@/containers/Services";
import Stars from "@/containers/Stars";

export default function Home({ projects, reviews }) {
  useEffect(() => {
    const timeline = gsap.timeline();
    const main = document.getElementById("main");
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
        "#hero > h6",
        {
          opacity: 0,
          y: 50,
          ease: Power3.easeInOut,
          duration: 0.75,
        },
        1.8
      )
      .from("#hero > h1", {
        opacity: 0,
        y: 50,
        ease: Power3.easeInOut,
        duration: 1,
      })
      .from("#hero > p", {
        opacity: 0,
        y: 50,
        ease: Power3.easeInOut,
        duration: 0.5,
      })
      .from("#hero > .btnContainer", {
        opacity: 0,
        y: 50,
        ease: Power3.easeInOut,
        duration: 0.5,
      })
      .from("#featuredProjets", {
        opacity: 0,
        ease: Expo.easeInOut,
        duration: 1,
      });
  }, []);

  const handleRouterClick = () => {
    router.push("/contact");
  };

  return (
    <Layout hasCTA={true} title={"The Web Agency: Your Development Partner"}>
      <div className="lg:container lg:mx-auto spacing">
        <Wrapper>
          <div id="hero">
            <H6 className="mb-4">WELCOME</H6>
            <Title className="font-medium leading-snug xs:max-w-25 lg:max-w-28">
              We offer the best digital services at an affordable rate, to help
              you craft your digital identity.
            </Title>
            <Para className="flex items-center text-gray mt-8">
              We are the best at work <Stars /> 12 reviews.
            </Para>
            <div className="btnContainer">
              <ButtonOutline className="mt-8" handleClick={handleRouterClick}>
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
      <Services />
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
