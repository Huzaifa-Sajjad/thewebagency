import Link from "next/link";
import { useEffect } from "react";
import { Power3, Expo, gsap } from "gsap";
import Prismic from "@prismicio/client";
import { Client } from "../prismic-config";
import Layout from "@/components/Layout";
import FeaturedProjects from "@/containers/FeaturedProjects";
import ReviewCard from "@/components/Review";
import { ButtonOutline } from "@/components/Button";
import { Title, H2, H6 } from "@/components/Text";
import Wrapper from "@/components/Wrapper";
import Services from "@/containers/Services";

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
        "#hero > h6",
        { opacity: 0, y: 50, ease: Power3.easeInOut, duration: 0.75 },
        1
      )
      .from("#hero > h1", {
        opacity: 0,
        y: 50,
        ease: Power3.easeInOut,
        duration: 1,
      })
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
    <Layout hasCTA={true} title={"The Web Agency: Your Development Partner"}>
      <div className="lg:container lg:mx-auto spacing">
        <Wrapper>
          <div id="hero">
            <H6 className="mb-4">WELCOME</H6>
            <Title className="font-medium leading-snug">
              We offer the best digital services at an affordable rate, to help
              you craft your digital identity.
            </Title>
            <div id="btnAnimation">
              <Link href="/contact">
                <ButtonOutline className="mt-10 xs:w-full lg:w-auto">
                  Let's Talk
                </ButtonOutline>
              </Link>
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
