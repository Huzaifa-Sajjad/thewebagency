import { useEffect } from "react";
import { Power3, gsap } from "gsap";
import Layout from "@/components/Layout";
import Prismic from "@prismicio/client";
import Card from "@/components/Card";
import { Title, H6 } from "@/components/Text";
import { ButtonOutline, ButtonPrimary } from "@/components/Button";
import Wrapper from "@/components/Wrapper";
import { Client } from "../../prismic-config";

export default function CaseStudy({ projects }) {
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
        0.6
      )
      .from(
        "#work-hero h6",
        {
          opacity: 0,
          y: 20,
          ease: Power3.easeInOut,
          duration: 0.5,
        },
        0.9
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
    <Layout hasCTA invertCTA>
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
          <div className="grid grid-cols-12 gap-4">
            {projects.map((project, idx) => (
              <div className="xs:col-span-12 xl:col-span-6 h-full" key={idx}>
                <Card
                  bg={project.data.bgcolor}
                  textColor={project.data.textcolor}
                  logo={project.data.logo}
                  statement={project.data.statement}
                  tags={project.data.tags}
                  cover={project.data.cover}
                />
              </div>
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
  console.log(doc);
  return {
    props: {
      projects: doc.results,
    },
  };
}
