import Layout from "../../components/Layout";
import Prismic from "@prismicio/client";
import { Client } from "../../prismic-config";
import Card from "../../components/Card";

export default function CaseStudy({ projects }) {
  return (
    <Layout isFooter={true}>
      <section>
        <div className="lg:container lg:mx-auto xs:px-4">
          <div className="flex flex-col justify-center pt-10 xs:px-2 md:px-10 lg:px-0">
            <h1 className="xs:text-3xl md:text-9xl leading-none font-bold mt-2 lg:w-3/4 leading-snug">
              Creating digital experiences our clients fall in love with
            </h1>
            <p className="xs:text-base md:text-2xl font-light text-gray md:max-w-45 xs:mt-6 md:mt-14 border-l-4 pl-4">
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
