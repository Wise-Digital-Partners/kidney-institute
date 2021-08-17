import React, { useState, useRef } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useOnClickOutside } from "../../hooks";
import styled from "@emotion/styled";
import tw from "twin.macro";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { GatsbyImage } from "gatsby-plugin-image";

import Burger from "./Burger";
import OffCanvas from "../OffCanvas/OffCanvas";
import ButtonSolid from "../Button/ButtonSolid";
import ButtonGhost from "../Button/ButtonGhost";
import Accordion from "./Accordion";

const StyledMainNav = styled.nav`
  &[data-fixed="true"] {
    ${tw`fixed top-0 left-0 w-full z-50`}
    /* #navigation-desktop {
      > li {
        > a {
          ${tw`text-gray-900`}
        }
      }
    } */
    .logo-initial {
      ${tw`hidden`}
    }
    .logo-fixed {
      ${tw`block`}
    }
  }
  /* #navigation-desktop {
    > li {
      > a {
        ${({ headerLinkColor }) =>
    headerLinkColor === "white"
      ? tw`text-white hover:text-white`
      : tw`text-gray-900 hover:text-primary-900`};
      }
    }
  } */
`;

const MainNav = ({
  headerStyle,
  headerHasBorder,
  headerLinkColor,
  scrolled,
}) => {
  // determine if offcanvas is open
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);

  const [subMenuHovering1, setSubMenuHovering1] = useState(false);
  const isHoveringSubMenu1 = () => setSubMenuHovering1(true);
  const notHoveringSubMenu1 = () => setSubMenuHovering1(false);

  const [subMenuHovering2, setSubMenuHovering2] = useState(false);
  const isHoveringSubMenu2 = () => setSubMenuHovering2(true);
  const notHoveringSubMenu2 = () => setSubMenuHovering2(false);

  const [subMenuHovering3, setSubMenuHovering3] = useState(false);
  const isHoveringSubMenu3 = () => setSubMenuHovering3(true);
  const notHoveringSubMenu3 = () => setSubMenuHovering3(false);

  // handle click of navigation items
  const clickHandler = () => {
    setOffcanvasOpen(!offcanvasOpen);
  };

  // close offcanvas onclick outside
  const node = useRef();
  useOnClickOutside(node, () => setOffcanvasOpen(false));

  const data = useStaticQuery(graphql`
    {
      darkLogo: file(relativePath: { eq: "global/Logo.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 210, placeholder: NONE)
        }
      }
      lightLogo: file(relativePath: { eq: "global/Logo.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 210, placeholder: NONE)
        }
      }
    }
  `);

  // Define logos based on header style
  let initialLogo = null,
    stickyLogo = null,
    className = null;

  if (headerStyle === "overlap" || headerStyle === "overlap-hero") {
    initialLogo = data.lightLogo.childImageSharp.gatsbyImageData;
    stickyLogo = data.darkLogo.childImageSharp.gatsbyImageData;
    className = "absolute";
  } else {
    initialLogo = data.darkLogo.childImageSharp.gatsbyImageData;
    stickyLogo = data.darkLogo.childImageSharp.gatsbyImageData;
  }

  if (offcanvasOpen) {
    initialLogo = data.darkLogo.childImageSharp.gatsbyImageData;
    stickyLogo = data.darkLogo.childImageSharp.gatsbyImageData;
  }

  const navigation = {
    resources: [
      {
        name: "Forms",
        href: "/resources",
      },
      {
        name: "Nutrition",
        href: "/kidney-nutrition-dialysis-diet",
      },
      {
        name: "Travel",
        href: "/traveling-on-dialysis",
      },
    ],
    about: [
      {
        name: "About Us",
        href: "/about-us",
      },
      {
        name: "Testimonials",
        href: "/testimonials",
      },
      {
        name: "Meet the Team",
        href: "/team",
      },
      {
        name: "Careers",
        href: "/careers",
      },
    ],
    locations: [
      {
        name: "Kidney Institute of the Desert - Indio",
        href: "/indio-kidney-institute",
      },
      {
        name: "Kidney Institute at EMC",
        href: "/rancho-mirage-kidney-institute",
      },
      {
        name: "Coachella Kidney Institute",
        href: "/coachella-kidney-institute",
      },
      {
        name: "La Quinta Kidney Center",
        href: "/la-quinta-kidney-center",
      },
      {
        name: "Coachella Valley Nephrology - Indio",
        href: "/indio-coachella-valley-nephrology",
      },
      {
        name: "Coachella Valley Nephrology - La Quinta",
        href: "/rancho-mirage-coachella-valley-nephrology",
      },
    ],
  };

  return (
    <StyledMainNav
      id="main-navigation"
      className={`pt-3.5 pb-2 lg:py-3 bg-white w-full transition duration-300 ease-linear ${
        headerStyle === "overlap" ? "lg:bg-transparent" : "lg:bg-white"
      } ${headerHasBorder && "border-b border-solid border-gray-300"} ${
        offcanvasOpen ? "" : ""
      } ${className}`}
      role="navigation"
      aria-label="main-navigation"
      data-fixed={scrolled}
      headerStyle={headerStyle}
      headerHasBorder={headerHasBorder}
      headerLinkColor={headerLinkColor}
      offcanvasOpen={offcanvasOpen}
    >
      <div className="container relative flex justify-between items-center">
        {/* <div className="flex-auto flex items-center lg:hidden">
          <a href="tel:310-831-0587" className="group z-30">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="z-30"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.62 7.79C5.06 10.62 7.38 12.93 10.21 14.38L12.41 12.18C12.68 11.91 13.08 11.82 13.43 11.94C14.55 12.31 15.76 12.51 17 12.51C17.55 12.51 18 12.96 18 13.51V17C18 17.55 17.55 18 17 18C7.61 18 0 10.39 0 1C0 0.45 0.45 0 1 0H4.5C5.05 0 5.5 0.45 5.5 1C5.5 2.25 5.7 3.45 6.07 4.57C6.18 4.92 6.1 5.31 5.82 5.59L3.62 7.79Z"
                className={`fill-current group-hover:text-primary-900 transition-colors duration-300 ease-linear transform ${
                  headerStyle === "overlap"
                    ? "text-primary-400"
                    : "text-primary-400"
                } ${offcanvasOpen || scrolled ? "text-primary-400" : null}`}
              />
            </svg>
          </a>
        </div> */}

        <div className="flex-auto flex items-center lg:justify-start">
          <AniLink fade to="/">
            <div className="logo-initial">
              <GatsbyImage
                image={initialLogo}
                alt="Kidney Institute Logo"
                className="w-[160px] md:w-[210px]"
              />
            </div>
            <div className="logo-fixed hidden">
              <GatsbyImage
                image={stickyLogo}
                alt="Kidney Institute Logo"
                className="w-[160px] md:w-[210px]"
              />
            </div>
          </AniLink>
        </div>
        <div className="flex items-center justify-end flex-auto">
          <ul
            id="navigation-desktop"
            className="hidden lg:flex lg:flex-row lg:space-x-8 lg:items-center lg:justify-end lg:mr-10"
          >
            <li className="group">
              <AniLink
                fade
                to="/dialysis-services"
                className="font-heading text-secondary-900 hover:text-primary-900"
              >
                Dialysis
              </AniLink>
            </li>

            <li className="group">
              <AniLink
                fade
                to="/nephrology"
                className="font-heading text-secondary-900 hover:text-primary-900"
              >
                Nephrology
              </AniLink>
            </li>

            <li className={`group relative ${subMenuHovering2 && "active"}`}>
              <AniLink
                fade
                to="/resources"
                onMouseEnter={isHoveringSubMenu2}
                onMouseLeave={notHoveringSubMenu2}
                className="font-heading text-secondary-900 hover:text-primary-900 pb-12"
              >
                Resources
              </AniLink>
              <ul className="absolute top-0 bg-white shadow-3xl flex flex-col space-y-2.5 w-auto invisible group-hover:visible transform -translate-x-8 translate-y-20 group-hover:translate-y-[58px] rounded-md opacity-0 group-hover:opacity-100 px-6 py-5 z-10 transition-all duration-300 ease-linear">
                {navigation.resources.map((item) => (
                  <li key={item.name} className="whitespace-nowrap">
                    <AniLink
                      fade
                      to={item.href}
                      className="relative block font-heading text-secondary-900 hover:text-primary-900"
                    >
                      {item.name}
                    </AniLink>
                  </li>
                ))}
              </ul>
            </li>

            <li className={`group relative ${subMenuHovering1 && "active"}`}>
              <AniLink
                fade
                to="/about-us"
                onMouseEnter={isHoveringSubMenu1}
                onMouseLeave={notHoveringSubMenu1}
                className="font-heading text-secondary-900 hover:text-primary-900 pb-12"
              >
                About
              </AniLink>
              <ul className="absolute top-0 bg-white shadow-3xl flex flex-col space-y-2.5 w-auto invisible group-hover:visible transform -translate-x-8 translate-y-20 group-hover:translate-y-[58px] rounded-md opacity-0 group-hover:opacity-100 px-6 pt-6 pb-8 z-10 transition-all duration-300 ease-linear">
                {navigation.about.map((item) => (
                  <li key={item.name} className="whitespace-nowrap">
                    <AniLink
                      fade
                      to={item.href}
                      className="relative block font-heading text-secondary-900 hover:text-primary-900"
                    >
                      {item.name}
                    </AniLink>
                  </li>
                ))}
              </ul>
            </li>

            <li className={`group relative ${subMenuHovering3 && "active"}`}>
              <AniLink
                fade
                to="/locations"
                onMouseEnter={isHoveringSubMenu3}
                onMouseLeave={notHoveringSubMenu3}
                className="font-heading text-secondary-900 hover:text-primary-900 pb-12"
              >
                Locations
              </AniLink>
              <ul className="absolute top-0 bg-white shadow-3xl flex flex-col space-y-2.5 w-auto invisible group-hover:visible transform -translate-x-8 translate-y-20 group-hover:translate-y-[58px] rounded-md opacity-0 group-hover:opacity-100 px-6 pt-6 pb-8 z-10 transition-all duration-300 ease-linear">
                {navigation.locations.map((item) => (
                  <li key={item.name} className="whitespace-nowrap">
                    <AniLink
                      fade
                      to={item.href}
                      className="relative block font-heading text-secondary-900 hover:text-primary-900"
                    >
                      {item.name}
                    </AniLink>
                  </li>
                ))}
              </ul>
            </li>
          </ul>

          <div className="hidden lg:inline-flex lg:items-center lg:space-x-10">
            <ButtonSolid modal="modal-contact" text="Contact Us" />
          </div>

          <div className="lg:hidden" ref={node}>
            <Burger
              offcanvasOpen={offcanvasOpen}
              setOffcanvasOpen={setOffcanvasOpen}
              headerStyle={headerStyle}
              scrolled={scrolled}
              aria-controls="offcanvas-navigation"
            />
            <OffCanvas offcanvasOpen={offcanvasOpen} id="offcanvas-navigation">
              <ul
                id="navigation-mobile"
                className="flex flex-col space-y-7 mb-20 border-t border-white/20 pt-6"
              >
                <li className="border-b border-white/20 pb-6">
                  <AniLink
                    fade
                    to="/dialysis-services"
                    onKeyDown={clickHandler}
                    onClick={clickHandler}
                    className="font-heading text-2xl text-white hover:text-white font-bold no-underline"
                  >
                    Dialysis
                  </AniLink>
                </li>

                <li className="border-b border-white/20 pb-6">
                  <AniLink
                    fade
                    to="/nephrology"
                    onKeyDown={clickHandler}
                    onClick={clickHandler}
                    className="font-heading text-2xl text-white hover:text-white font-bold no-underline"
                  >
                    Nephrology
                  </AniLink>
                </li>
                <li className="border-b border-white/20 pb-6">
                  <Accordion title="About">
                    {navigation.about.map((item) => (
                      <li key={item.name}>
                        <AniLink
                          fade
                          to={item.href}
                          onKeyDown={clickHandler}
                          onClick={clickHandler}
                          className="font-body text-white text-lg no-underline"
                        >
                          {item.name}
                        </AniLink>
                      </li>
                    ))}
                  </Accordion>
                </li>
                <li className="border-b border-white/20 pb-6">
                  <Accordion title="Resources">
                    {navigation.resources.map((item) => (
                      <li key={item.name} className="whitespace-nowrap">
                        <AniLink
                          fade
                          to={item.href}
                          onKeyDown={clickHandler}
                          onClick={clickHandler}
                          className="font-body text-white text-lg no-underline"
                        >
                          {item.name}
                        </AniLink>
                      </li>
                    ))}
                  </Accordion>
                </li>
                <li className="border-b border-white/20 pb-6">
                  <Accordion title="Locations">
                    {navigation.locations.map((item) => (
                      <li key={item.name}>
                        <AniLink
                          fade
                          to={item.href}
                          onKeyDown={clickHandler}
                          onClick={clickHandler}
                          className="font-body text-white text-lg no-underline"
                        >
                          {item.name}
                        </AniLink>
                      </li>
                    ))}
                  </Accordion>
                </li>
              </ul>

              <div className="grid gap-y-4">
                <ButtonGhost
                  modal="modal-contact"
                  altStyle={true}
                  icon="fas fa-map-marker-alt"
                  text="Find a Location"
                  className="w-full md:w-auto"
                />
                <ButtonSolid modal="modal-contact" text="Contact Us" />
              </div>
            </OffCanvas>
          </div>
        </div>
      </div>
    </StyledMainNav>
  );
};
export default MainNav;
