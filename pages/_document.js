import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin={'true'}
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700&display=swap'
            rel='stylesheet'
          />
          {/* Scrollbar css link */}
          <link rel='stylesheet' href='css/perfect-scrollbar.css'></link>
          <script
            async
            src='https://cdn.lordicon.com/libs/frhvbuzj/lord-icon-2.0.2.js'
          />
          <script
            async
            src='https://www.googletagmanager.com/gtag/js?id=G-68J159M8T7'
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-68J159M8T7', { page_path: window.location.pathname });
            `,
            }}
          />
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
