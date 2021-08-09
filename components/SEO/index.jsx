import Head from "next/head";

function SEO({ title, description, image }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content={
          description ||
          "We craft web applications, responsive websites, product design & UI/UX design along with digital marketing to establish your brand. Let's work together to built your digital identity."
        }
      />
      <meta
        name="keywords"
        content="Best online web design agency, Web agency website development service, Website design using react js, Hire react js web developers, React js professionals, Hire web agency for website development, Hire web agency for website design, Hire a wordpress web designer, Hire experienced wordpress developers, Hire Digital marketing web agency, Hire next js professionals, Web agencies ecommerce website, The web agency at work, Professional web design and development agency, International web design and marketing agency"
      />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content={
          description ||
          "We craft web applications, responsive websites, product design & UI/UX design along with digital marketing to establish your brand. Let's work together to built your digital identity."
        }
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://thewebagency.io/" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="The Web Agency"></meta>
      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:description"
        content={
          description ||
          "We craft web applications, responsive websites, product design & UI/UX design along with digital marketing to establish your brand. Let's work together to built your digital identity."
        }
      />
      <meta property="og:image" content={image || "link"} />
      <meta name="robots" content="index, archive" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#111111"
      />
      <meta name="msapplication-TileColor" content="#111111" />
      <meta name="theme-color" content="#111111" />
    </Head>
  );
}

export default SEO;
