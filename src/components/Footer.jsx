import React from "react";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center gap-5">
          <a
            href="https://www.linkedin.com/in/gonzalogramagia/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-white mx-2"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://www.youtube.com/@gonzalogramagia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-white mx-2"
          >
            <FaYoutube size={28} />
          </a>
          <a
            href="https://github.com/gonzalogramagia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-white mx-2"
          >
            <FaGithub size={28} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
