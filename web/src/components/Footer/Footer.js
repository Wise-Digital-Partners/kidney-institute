import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import ModalContact from "../Modal/ModalContact";

const Footer = () => {
  const getYear = () => {
    return new Date().getFullYear();
  };

  const data = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "global/Logo-grayscale.png" }) {
        publicURL
      }
    }
  `);

  const navigation = {
    nephrologyLocations: [
      {
        name: "Coachella Valley Nephrology - Indio",
        href: "",
      },
      {
        name: "Coachella Valley Nephrology - La Quinta",
        href: "",
      },
    ],
    about: [
      {
        name: "Dialysis",
        href: "",
      },
      {
        name: "Nephrology",
        href: "",
      },
      {
        name: "About Us",
        href: "",
      },
      {
        name: "Testimonials",
        href: "",
      },
      {
        name: "Meet the Team",
        href: "",
      },
      {
        name: "Careers",
        href: "",
      },
    ],
    dialysisLocations: [
      {
        name: "Kidney Institute of the Desert - Indio",
        href: "",
      },
      {
        name: "Coachella Kidney Institute",
        href: "",
      },
      {
        name: "Kidney Institute at Eisenhower Medical Center",
        href: "",
      },
      {
        name: "La Quinta Kidney Center",
        href: "",
      },
    ],
    resources: [
      {
        name: "Forms",
        href: "",
      },
      {
        name: "Forms",
        href: "",
      },
      {
        name: "Travel",
        href: "",
      },
    ],
    social: [
      {
        name: "Facebook",
        href: "",
        icon: "fab fa-facebook-f",
      },
      {
        name: "Linkedin",
        href: "",
        icon: "fab fa-linkedin-in",
      },
      {
        name: "Twitter",
        href: "",
        icon: "fab fa-twitter",
      },
    ],
  };

  return (
    <>
      <footer className="border-t border-white/30 bg-secondary-900 pt-16 lg:pt-24 pb-12 lg:pb-6 text-center lg:text-left">
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:justify-between space-y-10 lg:space-y-0 lg:space-x-6 mb-16 lg:mb-18">
            <div>
              <AniLink fade to="/">
                <img
                  src={data.logo.publicURL}
                  alt="Kidney Institute Logo"
                  width="146"
                  className="mx-auto lg:mx-0"
                />
              </AniLink>
            </div>

            <div>
              <div className="flex flex-col lg:flex-row justify-center lg:justify-between space-y-7 lg:space-y-0 lg:space-x-18">
                <div>
                  <div className="text-white font-bold mb-2">About</div>

                  <ul className="flex flex-col">
                    {navigation.about.map((item) => (
                      <li key={item.name}>
                        <AniLink
                          fade
                          to={item.href}
                          className="text-sm text-white hover:text-primary-400 no-underline"
                        >
                          {item.name}
                        </AniLink>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="text-white font-bold mb-2">Resources</div>

                  <ul className="flex flex-col">
                    {navigation.resources.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-white hover:text-primary-400 no-underline"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="text-white font-bold mb-2">
                    Nephrology Office Locations
                  </div>

                  <ul className="flex flex-col">
                    {navigation.nephrologyLocations.map((item) => (
                      <li key={item.name}>
                        <AniLink
                          fade
                          to={item.href}
                          className="text-sm text-white hover:text-primary-400 no-underline"
                        >
                          {item.name}
                        </AniLink>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="text-white font-bold mb-2">
                    Dialysis Clinic Locations
                  </div>

                  <ul className="flex flex-col">
                    {navigation.dialysisLocations.map((item) => (
                      <li key={item.name}>
                        <AniLink
                          fade
                          to={item.href}
                          className="text-sm text-white hover:text-primary-400 no-underline"
                        >
                          {item.name}
                        </AniLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap lg:flex-nowrap flex-col lg:flex-row justify-items-center lg:justify-between lg:items-center lg:pt-4">
            <div className="lg:flex lg:items-center">
              <ul className="flex items-center flex-col md:flex-row flex-wrap space-y-2 md:space-y-0 lg:space-x-4 justify-center lg:justify-start">
                <li className="text-sm text-gray-50 w-full lg:w-auto">
                  © {getYear()} Kidney Institute
                </li>
                {/* <li className="text-sm">
                    <a
                      href="/terms-conditions/"
                      className="text-gray-50 hover:text-white no-underline"
                    >
                      Terms & Conditions
                    </a>
                  </li> */}
                <li className="text-sm">
                  <AniLink
                    fade
                    to="/privacy-policy/"
                    className="text-gray-50 hover:text-white no-underline"
                  >
                    Privacy Policy
                  </AniLink>
                </li>
                <li className="text-sm text-gray-50">
                  <a
                    className="no-underline"
                    href="https://www.wisedigitalpartners.com/affordable-web-design/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Powered by NEST
                  </a>
                </li>
              </ul>
            </div>

            <div className="">
              <div className="flex flex-row justify-center space-x-4">
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white bg-white/20 hover:bg-primary-900 rounded-full w-7 h-7 flex items-center justify-center border border-gray-900 border-opacity-40 no-underline"
                  >
                    <span className="sr-only">{item.name}</span>
                    <i
                      className={`text-xs ${item.icon}`}
                      aria-hidden="true"
                    ></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

      <ModalContact />
    </>
  );
};

export default Footer;
