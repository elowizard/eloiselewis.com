import React from "react";
import PropTypes from "prop-types";

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" type="image/x-icon" href="/favicon_new.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hi, I'm Eloise!" />
        <meta
          name="twitter:description"
          content="Latest blog posts, photography and more."
        />
        <meta
          name="twitter:image"
          content="https://www.eloiselewis.com/twitter-card.jpg"
        />
        <meta
          name="twitter:image:alt"
          content="View over London eloiselewis.com"
        />
        <meta name="twitter:creator" content="@TheElowizard" />
        <meta name="twitter:site" content="@TheElowizard" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PH2X8PE4SY"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag() {
                dataLayer.push(arguments);
              }
              gtag("js", new Date());

              gtag("config", "G-PH2X8PE4SY");
            `,
          }}
        />

        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
