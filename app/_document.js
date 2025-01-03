import { Html, Head, Main, NextScript } from "next/document";
import crypto from "crypto";

export default function Document() {
  // Generate nonce for the current request
  const nonce = crypto.randomBytes(16).toString("base64");

  return (
    <Html lang="en">
      <Head nonce={nonce}>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Example of an inline script with nonce */}
        <script
          nonce={nonce}
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SL88DQ1E24', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript nonce={nonce} />
      </body>
    </Html>
  );
}