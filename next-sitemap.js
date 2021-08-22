const Prismic = require("@prismicio/client");

const apiEndpoint = "https://thewebagency.cdn.prismic.io/api/v2";
const accessToken = "";

// Client method to query documents from the Prismic repo
const Client = (req = null) =>
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken));

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {};
  const accessTokenOption = prismicAccessToken
    ? { accessToken: prismicAccessToken }
    : {};
  return {
    ...reqOption,
    ...accessTokenOption,
  };
};

const getProjects = async () => {
  const client = Client();
  const doc = await client.query(
    Prismic.predicates.at("document.type", "projects"),
    { orderings: "[document.first_publication_date desc]" }
  );
  return doc.results;
};

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
