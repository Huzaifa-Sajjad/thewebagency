import Layout from "@/components/Layout";
import { useEffect } from "react";
import { Power3, gsap, Expo } from "gsap";
import { H1, H2, H4, Lead } from "@/components/Text";
import Prismic from "@prismicio/client";
import { Client } from "../../prismic-config";
import Features from "@/containers/Features";

function CaseStudy({ post }) {
  useEffect(() => {
    const timeline = gsap.timeline();
    const main = document.getElementById("main");
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
        <div className="lg:container lg:mx-auto spacing">
          <div id="hero" className="flex flex-col justify-center pt-20 mb-28">
            <H1 className="mb-4">{post.name[0].text}</H1>
            <div className="flex my-6 flex-wrap">
              {post.tags.map((tag) => (
                <div
                  className="xs:text-12 lg:text-14 px-6 py-2 rounded text-white mr-4 xs:mb-2 lg:mb-0"
                  style={{ backgroundColor: post.bg }}
                  key={tag.tag_name[0].text}
                >
                  {tag.tag_name[0].text}
                </div>
              ))}
            </div>
            <Lead></Lead>
          </div>
        </div>
      </section>
      <section className="bg-grayBg">
        <div className="lg:container lg:mx-auto spacing py-20">
          <ul className="casestudy-list">
            {post.points.map((point) => (
              <li key={point.label[0].text}>
                <h5>{point.label[0].text}</h5>
                <p>{point.field[0].text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section>
        <div className="lg:container lg:mx-auto spacing pt-28">
          <p className="sm:text-20 lg:text-24 font-semibold text-center max-w-35 mx-auto">
            {post.lead[0].text}
          </p>
          <img
            src={post.cover.url}
            alt=""
            className="max-h-120 mx-auto drop-shadow-lg mt-10"
          />
        </div>
      </section>
      <Features features={post.features} />
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const doc = await Client().getByUID("projects", params.id);
  return {
    props: {
      post: doc.data,
    },
  };
}

export default CaseStudy;
