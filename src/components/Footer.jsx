import React from "react";
import Facebook from "../assets/facebook.svg";
import YouTube from "../assets/icons8-youtube.svg";
import Instagram from "../assets/icons8-instagram.svg";
import Twitter from "../assets/icons8-twitterx.svg";
import Github from '../assets/github.svg'
import LinkedIn from "../assets/linkedin-svgrepo-com.svg";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col items-center w-screen h-auto justify-between py-6 bg-gray-900 text-white">
        {/* Social Media Links */}
        <div className="flex flex-col items-center gap-3 mt-4">
          <h3 className="text-lg font-semibold">Connect with Us</h3>
          <div className="flex items-center gap-3 mt-2">
            <a
              href="https://www.facebook.com/profile.php?id=61565827274771"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="h-4" src={Facebook} alt="Facebook" />
            </a>
            <span className="font-semibold">/</span>
            <a
              href="https://x.com/srkrcodingclub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="h-4" src={Twitter} alt="Twitter" />
            </a>
            <span className="font-semibold">/</span>
            <a
              href="https://github.com/Srkr-Coding-Club"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="h-4" src={Github} alt="Github" />
            </a>
            <span className="font-semibold">/</span>
            <a
              href="https://youtube.com/@SRKRCODINGCLUB?feature=shared"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="h-4" src={YouTube} alt="YouTube" />
            </a>
            <span className="font-semibold">/</span>
            <a
              href="https://instagram.com/srkr_coding_club?igshid=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="h-4" src={Instagram} alt="Instagram" />
            </a>
            <span className="font-semibold">/</span>
            <a
              href="https://www.linkedin.com/in/srkr-coding-club-549799293"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="h-4" src={LinkedIn} alt="LinkedIn" />
            </a>
          </div>
        </div>

        {/* Contact Details */}
        <div className="flex flex-col md:flex-row justify-between w-full max-w-4xl mt-6 text-center">
          {/* Left Side Contacts */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold sm:text-xl underline">
              Email Us
          </h3>
          <a className="mt-2 text-sm text-white sm:text-xl" href="mailto:srkrcodingclub@gmail.com">srkrcodingclub@gmail.com</a>
              {/* <p className="mt-2 text-sm sm:text-xl">
              <span className="font-bold">Avinash(Tech Lead)</span> <br />
              Phone: <a href="tel:+919346729461">+91 9346729461</a> <br />
            </p>
            <p className="mt-2 text-sm sm:text-xl">
              <span className="font-bold">Jagadeesh(Tech Lead)</span> <br />
              Phone: <a href="tel:+918919317202">+91 8919317202</a>
              <br />
            </p>
            <p className="mt-2 text-sm sm:text-xl">
              <span className="font-bold">Tarun(Tech Team Representative)</span> <br />
              Phone: <a href="tel:+919959132169"> +91 9959132169</a> <br />
            </p>
            <p className="mt-2 text-sm sm:text-xl">
              <span className="font-bold">Rama Raju(Tech Team Representative)</span> <br />
              Phone: <a href="tel:+919392419558">+91 9392419558</a> <br />
            </p> */}
          </div>

          {/* Right Side Contacts */}
          <div className="flex-1 mt-6 md:mt-0">
            <h3 className="text-lg font-semibold sm:text-xl underline">
              Get in Touch
            </h3>
            <p className="mt-2 text-sm sm:text-xl">
              <span className="font-bold">Siva Gopal Varma (President)
              </span> <br />
              Phone: <a href="tel:919951881139">+91 9951881139</a> <br />
            </p>
            <p className="mt-2 text-sm sm:text-xl">
              <span className="font-bold">Shaik Rafique(Event Coordinator)
              </span> <br />
              Phone: <a href="tel:+919381327622">+91 9381327622</a> <br />
            </p>
            <p className="mt-2 text-sm sm:text-xl">
              <span className="font-bold">Narendra Varma(Public Relations)
              </span> <br />
              Phone: <a href="tel:+918143628288">+91 8143628288</a>
              <br />
            </p>
          </div>
        </div>

        {/* Footer Logo (Placed below contact details in mobile view) */}
        <div className="mt-6 md:order-none order-1">
  <img
    src="/bottomlogo.png"
    className="w-36 mx-auto sm:w-44 rounded filter brightness-200 contrast-150 drop-shadow-lg"
    alt="SRKR logo"
  />
</div>


        {/* Copyright Section */}
        <p className="mt-4 text-xs text-balance sm:text-[10px]">
          Copyrights © 2024. All rights reserved by SRKR CODING CLUB
        </p>
      </footer>
    </>
  );
};

export default Footer;
