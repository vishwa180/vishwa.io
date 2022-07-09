import React from "react";
import Navigation from "../components/navigation";
import { Link } from "gatsby";

export default function Header({ data }) {
  return (
    <header className="site-header">
      <div className="site-title">
        <Link to="/">{data.site.siteMetadata.title}</Link>
      </div>
      <Navigation />
    </header>
  );
}
