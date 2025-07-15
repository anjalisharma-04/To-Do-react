import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="app-footer">
      <a
        href="https://github.com/anjalisharma-04"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub className="github-icon" />
      </a>
      <div>
        <p style={{ margin: "8px 0 0 0" }}>
          &copy; 2025 My ToDo App. Created By{" "}
          <a
            href="https://github.com/anjalisharma-04"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#4fd1c5", textDecoration: "underline" }}
          >
            Anjali Sharma
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;