import Prismic from "@prismicio/client";
import { Client } from "../../prismic-config";
import { getServerSideSitemap } from "next-sitemap";

export const getServerSideProps = async (ctx) => {
  //fetch all projects from prismic
  const client = Client();
  const doc = await client.query(
    Prismic.predicates.at("document.type", "projects")
  );
  const projects = doc.results;

  //Add all the projects to a fields array
  const fields = projects.map((project) => ({
    loc: `${process.env.NEXT_PUBLIC_SITE_URL}/work/${project.uid}`,
    changefreq: "daily",
    priority: 0.7,
    lastmod: new Date().toISOString(),
  }));

  getServerSideSitemap(ctx, fields);
};

export default function Sitemap() {}
