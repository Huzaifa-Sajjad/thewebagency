import { getProjects } from "./hooks/useProjects";

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.thewebagency.io",
  generateRobotsTxt: true,
  exclude: ["/server-sitemap.xml", "/thankyou"],
  additionalPaths: async (config) => {
    const projects = await getProjects();
    const result = projects.map((project) => ({
      loc: `https://www.thewebagency.io/work/${project.uid}`,
      changefreq: "daily",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    }));
    return result;
  },
  // robotsTxtOptions: {
  //   additionalSitemaps: [
  //     `${process.env.NEXT_PUBLIC_SITE_URL}/sitemap.xml`,
  //     `${process.env.NEXT_PUBLIC_SITE_URL}/server-sitemap.xml`,
  //   ],
  // },
};
