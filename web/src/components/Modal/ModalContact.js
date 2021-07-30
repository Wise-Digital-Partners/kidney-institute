import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import MicroModal from "micromodal";
import styled from "@emotion/styled";
import tw from "twin.macro";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Contact from "../Form/Contact";

const StyledModal = styled.div`
  .modal {
    &.is-open {
      ${tw`block`}
    }
    &[aria-hidden="false"] {
      .overlay {
        animation: mmfadeIn 0.5s cubic-bezier(0, 0, 0.2, 1);
      }
    }
    &[aria-hidden="false"] {
      .content-wrapper {
        animation: mmslideIn 0.5s cubic-bezier(0, 0, 0.2, 1);
      }
    }
    &[aria-hidden="true"] {
      .overlay {
        animation: mmfadeOut 0.5s cubic-bezier(0, 0, 0.2, 1);
      }
    }
    &[aria-hidden="true"] {
      .content-wrapper {
        animation: mmslideOut 0.5s cubic-bezier(0, 0, 0.2, 1);
      }
    }
    .content-wrapper,
    .overlay {
      will-change: transform;
    }
  }
  @keyframes mmfadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes mmfadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @keyframes mmslideIn {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes mmslideOut {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(100%);
    }
  }
`;

const StyledTabs = styled.div`
  .react-tabs__tab-list {
    ${tw`grid grid-cols-2 gap-x-2 mb-6 md:mb-10 border-none`}
  }
  .react-tabs__tab {
    ${tw`text-sm  text-black text-opacity-40 font-semibold py-2 px-4 bg-gray-50 rounded flex items-center justify-center w-full border-none transition-colors duration-300 ease-linear`}
  }
  .react-tabs__tab--selected {
    ${tw`text-white text-opacity-100 bg-primary-900`}
  }
`;

const Modal = () => {
  if (typeof window !== "undefined") {
    MicroModal.init({
      openTrigger: "data-modal-open",
      closeTrigger: "data-modal-close",
      disableFocus: true,
      disableScroll: true,
      awaitOpenAnimation: true,
      awaitCloseAnimation: true,
    });
  }

  const data = useStaticQuery(graphql`
    {
      justinBaumann: file(relativePath: { eq: "global/Justin Baumann.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 80)
        }
      }
      billCoates: file(relativePath: { eq: "global/Bill Coates.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 80)
        }
      }
      joeMcGonigal: file(relativePath: { eq: "global/Joe McGonigal.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 80)
        }
      }
    }
  `);

  return (
    <StyledModal>
      <div
        className="modal relative hidden z-50"
        id="modal-contact"
        aria-hidden="false"
      >
        <div
          className="overlay fixed flex items-center justify-center top-0 right-0 left-0 bottom-0 bg-black bg-opacity-40 outline-none"
          tabIndex="-1"
          data-modal-close
        >
          <div
            className="content-wrapper bg-white w-full h-screen overflow-auto max-w-[720px] ml-auto"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex justify-between items-center pt-12 pb-4 md:py-4 px-5 border-b border-black/20">
              <a
                href="tel:855-546-0044"
                className="text-primary-900 hover:text-primary-400 no-underline flex items-center"
              >
                <i className="fas fa-phone-alt text-primary-900 mr-2"></i>
                <span>(855) 546-0044</span>
              </a>
              <i
                className="close fal fa-times text-2xl text-primary-900 hover:text-primary-900 cursor-pointer transition-all duration-300 ease-linear"
                data-modal-close
              ></i>
            </div>

            <div className="pt-8 px-6 md:px-18 pb-24">
              <div className="mb-7 md:mb-7">
                <p className="font-heading text-mobile-4xl md:text-4xl text-gray-900 font-bold mb-3">
                  Contact Us
                </p>
                <p className=" mb-0">
                  If you have questions, our experienced team is here for you.
                  Contact us for a free 15-minute consultation.
                </p>
              </div>

              <StyledTabs>
                <Tabs>
                  <TabList>
                    <Tab>
                      <i className="fal fa-envelope text-lg mr-2"></i> General
                      Inquiry
                    </Tab>
                    <Tab>
                      <i className="fal fa-calendar text-lg mr-2"></i>Book a
                      Meeting
                    </Tab>
                  </TabList>

                  <TabPanel>
                    <Contact />
                  </TabPanel>
                  <TabPanel className="flex flex-col space-y-6">
                    <a
                      href="https://www.appointmentcore.com/app/freeslots/8xcdp8mh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-solid border-primary-900 bg-transparent hover:bg-primary-50 rounded-md p-4 md:px-5 md:py-4 cursor-pointer flex items-center space-x-3 transition-all duration-300 ease-linear"
                    >
                      <GatsbyImage
                        image={
                          data.justinBaumann.childImageSharp.gatsbyImageData
                        }
                        alt="Justin Baumann"
                        className="rounded-full"
                      />

                      <div>
                        <div class="text-xl text-gray-900 font-bold mb-1.5">
                          Justin Baumann
                        </div>
                        <div class="text-sm text-gray-900 flex items-center space-x-1.5">
                          <i class="fal fa-map-marker-alt text-black/30 text-base"></i>
                          <span>New York & Western Pennsylvania</span>
                        </div>
                      </div>
                    </a>

                    <a
                      href="https://www.appointmentcore.com/app/freeslots/SepngKcAdX"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-solid border-primary-900 bg-transparent hover:bg-primary-50 rounded-md p-4 md:px-5 md:py-4 cursor-pointer flex items-center space-x-3 transition-all duration-300 ease-linear"
                    >
                      <GatsbyImage
                        image={data.billCoates.childImageSharp.gatsbyImageData}
                        alt="Bill Coates"
                        className="rounded-full"
                      />

                      <div>
                        <div class="text-xl text-gray-900 font-bold mb-1.5">
                          Bill Coates
                        </div>
                        <div class="text-sm text-gray-900 flex items-center space-x-1.5">
                          <i class="fal fa-map-marker-alt text-black/30 text-base"></i>
                          <span>
                            Eastern Pennsylvania, Southern New Jersey, &
                            Delaware
                          </span>
                        </div>
                      </div>
                    </a>

                    <a
                      href="https://jmcgonigal.Kidney Institute.com/schedule-a-call-with-joe-mcgonigal/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-solid border-primary-900 bg-transparent hover:bg-primary-50 rounded-md p-4 md:px-5 md:py-4 cursor-pointer flex items-center space-x-3 transition-all duration-300 ease-linear"
                    >
                      <GatsbyImage
                        image={
                          data.joeMcGonigal.childImageSharp.gatsbyImageData
                        }
                        alt="Joe McGonigal"
                        className="rounded-full"
                      />

                      <div>
                        <div class="text-xl text-gray-900 font-bold mb-1.5">
                          Joe McGonigal
                        </div>
                        <div class="text-sm text-gray-900 flex items-center space-x-1.5">
                          <i class="fal fa-map-marker-alt text-black/30 text-base"></i>
                          <span>
                            Greater Philadelphia area, Southern New Jersey, &
                            Delaware
                          </span>
                        </div>
                      </div>
                    </a>
                  </TabPanel>
                </Tabs>
              </StyledTabs>
            </div>
          </div>
        </div>
      </div>
    </StyledModal>
  );
};
export default Modal;
