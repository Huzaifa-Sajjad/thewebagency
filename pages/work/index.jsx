import { useEffect } from "react";
import { Power3, Expo, gsap } from "gsap";
import Layout from "@/components/Layout";
import Prismic from "@prismicio/client";
import Card from "@/components/Card";
import { Title, H6 } from "@/components/Text";
import { ButtonPrimary } from "@/components/Button";
import Wrapper from "@/components/Wrapper";
import { Client } from "../../prismic-config";

export default function CaseStudy({ projects }) {
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
        "#work-hero h6",
        {
          opacity: 0,
          y: 20,
          ease: Power3.easeInOut,
          duration: 0.5,
        },
        1.8
      )
      .from("#work-hero h1", {
        opacity: 0,
        y: 50,
        ease: Power3.easeInOut,
        duration: 1,
      })
      .from("#work-cards", {
        opacity: 0,
        ease: Power3.easeInOut,
        duration: 0.5,
      });
  }, []);
  return (
    <Layout
      hasCTA
      invertCTA
      title="Work | Review our Portfolio"
      description="Review our portfolio by going through various busines case studies. See how we have helped others grow and then decide if we are a good fit for you."
    >
      <section>
        <div className="lg:container lg:mx-auto spacing" id="work-hero">
          <Wrapper>
            <H6 className="mb-4">OUR PORTFOLIO</H6>
            <Title className="font-medium max-w-28 leading-tight">
              Crafting such digital products which gurantee customer
              satisfaction, intutive user experiences and maximum results.
            </Title>
          </Wrapper>
        </div>
      </section>
      <section className="xs:py-8 lg:py-20" id="work-cards">
        <div className="lg:container lg:mx-auto spacing ">
          <div className="flex flex-wrap ">
            {projects.map((project, idx) => (
              <Card
                bg={project.data.bgcolor}
                textColor={project.data.textcolor}
                logo={project.data.logo}
                statement={project.data.statement}
                tags={project.data.tags}
                cover={project.data.cover}
                id={project.uid}
                bg={project.data.bg}
                name={project.data.name[0].text}
                key={idx}
              />
            ))}
          </div>
          <div className="flex justify-center items-center border-t border-gray border-opacity-20 xs:mt-8 lg:mt-20 xs:py-8 lg:py-10">
            <ButtonPrimary className="xs:mr-0 lg:mr-4 xs:w-full lg:w-auto">
              View More
            </ButtonPrimary>
          </div>
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
  return {
    props: {
      projects: doc.results,
    },
  };
}
