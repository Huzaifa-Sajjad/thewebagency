import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin={true}
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <script src="https://cdn.lordicon.com/libs/frhvbuzj/lord-icon-2.0.2.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
