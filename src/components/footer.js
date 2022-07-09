import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>
        &copy; {new Date().getFullYear()} Vishwa.io &bull; Built with{" "}
        <span role="img" aria-label="love">
          ❤️
        </span>{" "}
        by Vishwa Murugan
      </p>
    </footer>
  );
}
