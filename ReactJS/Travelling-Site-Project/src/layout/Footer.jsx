import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer-container py-10">
      <div className="px-6 px-12">
        <div className="border-t border-gray-600 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <span className="text-sm text-black-400">
            © 2024 Musaafir. All rights reserved.
            <br />
          </span>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="https://facebook.com"
              className="text-black-400 hover:text-gray-400"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              className="text-black-400 hover:text-gray-400"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              className="text-black-400 hover:text-gray-400"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              className="text-black-400 hover:text-gray-400"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
