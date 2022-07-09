import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import "prismjs/themes/prism-okaidia.css";
import Footer from "./footer";
import Header from "./header";

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  return (
    <div className="site-wrapper">
      <Header data={data} />
      {children}
      <Footer />
    </div>
  );
};
