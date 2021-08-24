import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import ModalContact from "../Modal/ModalContact";

const Footer = ({ modalTabIndex }) => {
  const getYear = () => {
    return new Date().getFullYear();
  };

  const [cityDropdownOpen, setCityDropdownOpen] = useState(false);

  const citiesClickHandler = () => {
    setCityDropdownOpen(!cityDropdownOpen);
  };

  const data = useStaticQuery(graphql`
    {
      kidneyInstitutelogo: file(
        relativePath: { eq: "global/Logo-grayscale stacked.png" }
      ) {
        publicURL
      }
    }
  `);

  const navigation = {
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
    resources: [
      {
        name: "Forms",
        href: "",
      },
      {
        name: "Nutrition",
        href: "",
      },
      {
        name: "Travel",
        href: "",
      },
    ],
    cities: [
      {
        name: "Bermuda Dunes",
        href: "/bermuda-dunes",
      },
      {
        name: "Cathedral City",
        href: "/cathedral-city",
      },
      {
        name: "Coachella",
        href: "/coachella",
      },
      {
        name: "Indian Wells",
        href: "/indian-wells",
      },
      {
        name: "Indio",
        href: "/indio",
      },
      {
        name: "La Quinta",
        href: "/la-quinta",
      },
      {
        name: "Mecca",
        href: "/mecca",
      },
      {
        name: "Palm Desert",
        href: "/palm-desert",
      },
      {
        name: "Palm Springs",
        href: "/palm-springs",
      },
      {
        name: "Rancho Mirage",
        href: "/rancho-mirage",
      },
      {
        name: "Thermal",
        href: "/thermal",
      },
      {
        name: "Thousand Palms",
        href: "/thousand-palms",
      },
    ],
    social: [
      {
        name: "Facebook",
        href: "https://www.facebook.com/Kidney-Institute-of-the-Desert-134446316605496/",
        icon: "fab fa-facebook-f",
      },
      {
        name: "Linkedin",
        href: "https://www.linkedin.com/company/kidney/about/",
        icon: "fab fa-linkedin-in",
      },
      {
        name: "Twitter",
        href: "https://twitter.com/KidneyInsDesert",
        icon: "fab fa-twitter",
      },
    ],
  };

  return (
    <>
      <footer className="border-t border-white/30 bg-secondary-900 pt-20 lg:pt-24 pb-12 lg:pb-6 text-center lg:text-left">
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:justify-between space-y-10 lg:space-y-0 lg:space-x-6 mb-20 lg:mb-18">
            <div>
              <AniLink fade to="/">
                <img
                  src={data.kidneyInstitutelogo.publicURL}
                  alt="Kidney Institute Logo"
                  width="120"
                  className="mx-auto lg:mx-0"
                />
              </AniLink>
            </div>

            <div className="lg:hidden flex flex-row justify-center space-x-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-secondary-900 bg-white/20 hover:bg-white rounded-full w-7 h-7 flex items-center justify-center no-underline"
                >
                  <span className="sr-only">{item.name}</span>
                  <i className={`text-xs ${item.icon}`} aria-hidden="true"></i>
                </a>
              ))}
            </div>

            <div>
              <div className="flex flex-col lg:flex-row justify-center lg:justify-between space-y-10 lg:space-y-0 lg:space-x-18">
                <div>
                  <div className="text-white font-bold mb-2">About</div>

                  <ul className="flex flex-col">
                    {navigation.about.map((item) => (
                      <li key={item.name}>
                        <AniLink
                          fade
                          to={item.href}
                          className="text-sm text-white hover:text-primary-900 no-underline"
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
                          className="text-sm text-white hover:text-primary-900 no-underline"
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
                          className="text-sm text-white hover:text-primary-900 no-underline"
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
                          className="text-sm text-white hover:text-primary-900 no-underline"
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
              <ul className="flex items-center flex-wrap lg:space-x-4 justify-center lg:justify-start">
                <li className="text-sm text-gray-50">
                  © {getYear()} Kidney Institute{" "}
                </li>
                <div className="lg:hidden text-gray-50 mx-1">|</div>
                <li className="text-sm">
                  <AniLink
                    fade
                    to="/privacy-policy/"
                    className="text-gray-50 hover:text-primary-900 no-underline"
                  >
                    Privacy Policy
                  </AniLink>
                </li>
                <div className="lg:hidden text-gray-50 mx-1">|</div>
                <li className="text-sm text-gray-50">
                  <button
                    className="relative focus:outline-none font-normal text-gray-50 hover:text-primary-900 no-underline"
                    onKeyDown={citiesClickHandler}
                    onClick={citiesClickHandler}
                  >
                    <span className="flex items-center justify-between">
                      Cities
                      <i
                        className={`far fa-chevron-down ml-2 transition-all duration-300 ease-linear transform ${
                          cityDropdownOpen ? "rotate-180" : "rotate-0"
                        }`}
                      ></i>
                    </span>
                    <ul
                      className={`bg-white text-left absolute bottom-0 right-0 pt-5 px-4 pb-4 flex flex-col space-y-1.5 max-h-28 overflow-y-scroll transform transition-all duration-300 ease-linear ${
                        cityDropdownOpen
                          ? "opacity-100 -translate-y-10 visible"
                          : "opacity-0 -translate-y-4 invisible"
                      }`}
                    >
                      {navigation.cities.map((item) => (
                        <li
                          className="text-xs whitespace-nowrap pb-1.5"
                          key={item.name}
                        >
                          <AniLink
                            fade
                            to={item.href}
                            className="font-heading text-secondary-900 hover:text-primary-900"
                          >
                            {item.name}
                          </AniLink>
                        </li>
                      ))}
                    </ul>
                  </button>
                </li>
                <div className="lg:hidden text-gray-50 mx-1">|</div>
                <li className="text-sm text-gray-50 w-full md:w-auto">
                  <a
                    className="no-underline hover:text-primary-900"
                    href="https://www.wisedigitalpartners.com/affordable-web-design/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Powered by NEST
                  </a>
                </li>
              </ul>
            </div>

            <div className="hidden lg:flex flex-row justify-center space-x-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-secondary-900 bg-white/20 hover:bg-white rounded-full w-7 h-7 flex items-center justify-center no-underline"
                >
                  <span className="sr-only">{item.name}</span>
                  <i className={`text-xs ${item.icon}`} aria-hidden="true"></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <ModalContact modalTabIndex={modalTabIndex} />
    </>
  );
};

export default Footer;
