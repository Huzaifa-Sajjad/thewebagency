import router from "next/router";
import { useEffect } from "react";
import { Power3, Expo, gsap } from "gsap";
import Layout from "@/components/Layout";
import FeaturedProjects from "@/containers/FeaturedProjects";
import ReviewCard from "@/components/Review";
import { ButtonOutline } from "@/components/Button";
import { Title, H2 } from "@/components/Text";
import Wrapper from "@/components/Wrapper";
import Services from "@/containers/Services";
import Stars from "@/containers/Stars";
import useFeatureProjects from "@/hooks/useFeatureProjects";
import useReviews from "@/hooks/useReviews";

export default function Home() {
  const { projects } = useFeatureProjects();
  const { reviews } = useReviews();

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
        "#hero > h1",
        {
          opacity: 0,
          y: 50,
          ease: Power3.easeInOut,
          duration: 1,
        },
        1.9
      )
      .from("#hero > #socialProof", {
        opacity: 0,
        y: 50,
        ease: Power3.easeInOut,
        duration: 0.5,
      })
      .from("#hero > .btnWrapper", {
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
            <Title className="font-medium leading-snug xs:max-w-25 lg:max-w-28">
              We offer the best digital services at an affordable rate, to help
              you craft your digital identity.
            </Title>
            <div
              id="socialProof"
              className="xs:text-14 md:text-16 lg:text-16 xl:text-18 font-light max-w-55 flex items-center text-gray mt-8"
            >
              We are the best at work <Stars /> 12 reviews.
            </div>
            <article className="btnWrapper">
              <ButtonOutline className="mt-8" handleClick={handleRouterClick}>
                Let's Talk
              </ButtonOutline>
            </article>
          </div>
        </Wrapper>
      </div>
      <section
        id="featuredProjets"
        className="border-b border-gray border-opacity-20"
      >
        {projects && projects.length > 0 && (
          <FeaturedProjects projects={projects} />
        )}
      </section>
      <Services />
      {reviews && reviews.length > 0 && (
        <section className="bg-grayBg xs:py-8 lg:py-20">
          <div className="lg:container lg:mx-auto spacing">
            <H2 className="xs:mb-6 lg:mb-10 xs:text-center lg:text-left">
              Reveiws, Words On The Street
            </H2>
            <ReviewCard reviews={reviews} />
          </div>
        </section>
      )}
    </Layout>
  );
}
