import Layout from "../../components/Layout";
import Prismic from "@prismicio/client";
import { Client } from "../../prismic-config";
import Card from "../../components/Card";
import { useEffect } from "react";
import { Power3, gsap } from "gsap";

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
        0.2
      );
  }, []);
  return (
    <Layout isFooter={true}>
      <section>
        <div className="lg:container lg:mx-auto xs:px-4">
          <div className="flex flex-col justify-center pt-10 xs:px-2 md:px-10 lg:px-0">
            <h1 className="xs:text-30 md:text-36 lg:text-48 xl:text-48 leading-none font-bold mt-2 lg:w-3/4 leading-snug">
              Creating digital experiences our clients fall in love with
            </h1>
            <p className="xs:text-20 md:text-24 font-light text-gray md:max-w-45 xs:mt-6 md:mt-14 border-l-4 pl-4">
              Tell us all about your project right here, or send us an email at{" "}
              <span className="font-medium text-primary cursor-pointer">
                info@thewebagency.io
              </span>
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="lg:container lg:mx-auto xs:px-4 ">
          <div className="grid grid-cols-12 md:gap-4">
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
          <div className="flex justify-center items-center pt-20">
            <button className="xs:text-base md:text-xl bg-primary border-2 border-primary text-white w-max xs:px-10 md:px-14 py-3">
              Back
            </button>
            <button className="xs:text-base md:text-xl border-2 border-black w-max px-9 py-3 ml-6">
              View More
            </button>
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
