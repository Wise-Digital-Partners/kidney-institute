import React, { useState, useEffect } from "react";
import MicroModal from "micromodal";
import styled from "@emotion/styled";
import tw from "twin.macro";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import DialysisIndio from "../ModalContent/DialysisIndio";
import DialysisRanchoMirage from "../ModalContent/DialysisRanchoMirage";
import DialysisLaQuinta from "../ModalContent/DialysisLaQuinta";
import DialysisCoachella from "../ModalContent/DialysisCoachella";
import NephrologyIndio from "../ModalContent/NephrologyIndio";
import NephrologyLaQuinta from "../ModalContent/NephrologyLaQuinta";

const StyledModal = styled.div`
  .modal {
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
  }
`;

const StyledTabs = styled.div`
  .react-tabs__tab-list {
    ${tw`grid grid-cols-2 mb-6 md:mb-10 border-none rounded-4xl shadow-2xl bg-gray-100`}
  }
  .react-tabs__tab {
    ${tw`text-sm text-secondary-900 text-opacity-40 font-semibold py-2 px-4 bg-gray-100 rounded flex items-center justify-center w-full border-none first:rounded-l-4xl last:rounded-r-4xl`}
  }
  .react-tabs__tab--selected {
    ${tw`text-white text-opacity-100 bg-primary-900 rounded-4xl`}
    svg path {
      ${tw`text-white`}
    }
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

  // const [tabIndex, setTabIndex] = useState(modalTabIndex);

  // useEffect(() => {
  //   setTabIndex(modalTabIndex);
  // }, [modalTabIndex]);

  const [setDisalysisLocations, setDisalysisLocationsState] = useState("block");
  const [setNephrologyLocations, setNephrologyLocationsState] =
    useState("block");
  const [setModalContent, setModalContentState] = useState("block");
  const [setPhoneNumbers, setPhoneNumbersState] = useState("block");
  const [setDialysisBack2, setDialysisBackState2] = useState("hidden");
  const [setNephrologyBack2, setNephrologyBackState2] = useState("hidden");
  const [setDialysisIndio, setDialysisIndioState] = useState("hidden");
  const [setDialysisRanchoMirage, setDialysisRanchoMirageState] =
    useState("hidden");
  const [setDialysisLaQuinta, setDialysisLaQuintaState] = useState("hidden");
  const [setDialysisCoachella, setDialysisCoachellaState] = useState("hidden");
  const [setNephrologyIndio, setNephrologyIndioState] = useState("hidden");
  const [setNephrologyLaQuinta, setNephrologyLaQuintaState] =
    useState("hidden");

  function showDialysisLocations() {
    setDisalysisLocationsState("block");
    setPhoneNumbersState("block");
    setDialysisBackState2("hidden");
    setModalContentState("block");
    setDialysisIndioState("hidden");
    setDialysisRanchoMirageState("hidden");
    setDialysisLaQuintaState("hidden");
    setDialysisCoachellaState("hidden");
  }

  function showNephrologyLocations() {
    setNephrologyLocationsState("block");
    setPhoneNumbersState("block");
    setNephrologyBackState2("hidden");
    setModalContentState("block");
    setNephrologyIndioState("hidden");
    setNephrologyLaQuintaState("hidden");
  }

  function showDialysisIndio() {
    setPhoneNumbersState("hidden");
    setDialysisBackState2("block");
    setDisalysisLocationsState("hidden");
    setDialysisIndioState("block");
    setModalContentState("hidden");
  }

  function showDialysisRanchoMirage() {
    setPhoneNumbersState("hidden");
    setDialysisBackState2("block");
    setDisalysisLocationsState("hidden");
    setDialysisRanchoMirageState("block");
    setModalContentState("hidden");
  }

  function showDialysisLaQuinta() {
    setPhoneNumbersState("hidden");
    setDialysisBackState2("block");
    setDisalysisLocationsState("hidden");
    setDialysisLaQuintaState("block");
    setModalContentState("hidden");
  }

  function showDialysisCoachella() {
    setPhoneNumbersState("hidden");
    setDialysisBackState2("block");
    setDisalysisLocationsState("hidden");
    setDialysisCoachellaState("block");
    setModalContentState("hidden");
  }

  function showNephrologyIndio() {
    setPhoneNumbersState("hidden");
    setNephrologyBackState2("block");
    setNephrologyLocationsState("hidden");
    setNephrologyIndioState("block");
    setModalContentState("hidden");
  }

  function showNephrologyLaQuinta() {
    setPhoneNumbersState("hidden");
    setNephrologyBackState2("block");
    setNephrologyLocationsState("hidden");
    setNephrologyLaQuintaState("block");
    setModalContentState("hidden");
  }

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
            <div className="group flex justify-between items-center pt-12 pb-4 md:py-4 px-5 border-b border-gray-200">
              <div
                className={`flex space-x-6 md:space-x-8 ${setPhoneNumbers}`}
              ></div>

              {/* <button
                onClick={showServiceCards}
                className={`text-secondary-900 hover:text-secondary-900 group-hover:text-primary-900 font-semibold text-xs md:text-sm no-underline flex items-center space-x-2 ${setDialysisBack1}`}
              >
                <i className="far fa-arrow-left text-primary-900"></i>
                <span>Go Back</span>
              </button> */}

              <button
                onClick={showDialysisLocations}
                className={`text-secondary-900 hover:text-secondary-900 group-hover:text-primary-900 font-semibold text-xs md:text-sm no-underline flex items-center space-x-2 ${setDialysisBack2}`}
              >
                <i className="far fa-arrow-left text-primary-900"></i>
                <span>Go Back</span>
              </button>

              {/* <button
                onClick={showServiceCards}
                className={`text-secondary-900 hover:text-secondary-900 group-hover:text-primary-900 font-semibold text-xs md:text-sm no-underline flex items-center space-x-2 ${setNephrologyBack1}`}
              >
                <i className="far fa-arrow-left text-primary-900"></i>
                <span>Go Back</span>
              </button> */}

              <button
                onClick={showNephrologyLocations}
                className={`text-secondary-900 hover:text-secondary-900 group-hover:text-primary-900 font-semibold text-xs md:text-sm no-underline flex items-center space-x-2 ${setNephrologyBack2}`}
              >
                <i className="far fa-arrow-left text-primary-900"></i>
                <span>Go Back</span>
              </button>

              <i
                className="close fal fa-times text-xl text-secondary-900 hover:text-primary-900 cursor-pointer transition-all duration-300 ease-linear"
                data-modal-close
              ></i>
            </div>

            <div className="pt-8 px-6 md:px-18 pb-24">
              {/* Kidney Institute of the Desert - Indio */}
              <div className={`${setDialysisIndio}`}>
                <DialysisIndio />
              </div>

              {/* Kidney Institute at Eisenhower Medical Center */}
              <div className={`${setDialysisRanchoMirage}`}>
                <DialysisRanchoMirage />
              </div>

              {/* La Quinta Kidney Center */}
              <div className={`${setDialysisLaQuinta}`}>
                <DialysisLaQuinta />
              </div>

              {/* Coachella Kidney Institute */}
              <div className={`${setDialysisCoachella}`}>
                <DialysisCoachella />
              </div>

              {/* Coachella Valley Nephrology - Indio */}
              <div className={`${setNephrologyIndio}`}>
                <NephrologyIndio />
              </div>

              {/* Coachella Valley Nephrology - La Quinta */}
              <div className={`${setNephrologyLaQuinta}`}>
                <NephrologyLaQuinta />
              </div>

              <div className={`${setModalContent}`}>
                <div className="mb-7 md:mb-8 text-center">
                  <p className="font-body text-mobile-4xl md:text-4xl text-gray-900 font-bold mb-3">
                    Contact Us
                  </p>
                </div>

                <StyledTabs>
                  <Tabs
                  // selectedIndex={0}
                  // onSelect={(index) => setTabIndex(index)}
                  >
                    <TabList>
                      <Tab>Dialysis Clinic</Tab>                    
                      <Tab>Nephrology Office</Tab>
                    </TabList>

                    <TabPanel>
                      <p
                        className={`font-heading text-3xl text-black font-semibold ${setDisalysisLocations}`}
                      >
                        Choose a Location
                      </p>

                      <div
                        className={`flex flex-col space-y-4 ${setDisalysisLocations}`}
                      >
                        <button
                          onClick={showDialysisIndio}
                          className="group border border-solid border-gray-300 bg-transparent hover:border-primary-900 rounded-md p-4 md:px-6 md:py-4 cursor-pointer flex items-start space-x-3 text-left transition-colors duration-300 ease-linear"
                        >
                          <svg
                            width="18"
                            height="20"
                            viewBox="0 0 18 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.5 8.33325C16.5 14.1666 9 19.1666 9 19.1666C9 19.1666 1.5 14.1666 1.5 8.33325C1.5 6.34413 2.29018 4.43647 3.6967 3.02995C5.10322 1.62343 7.01088 0.833252 9 0.833252C10.9891 0.833252 12.8968 1.62343 14.3033 3.02995C15.7098 4.43647 16.5 6.34413 16.5 8.33325Z"
                              className="stroke-current	text-secondary-900 group-hover:text-primary-900 transition-colors duration-300 ease-linear"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M9 10.8333C10.3807 10.8333 11.5 9.71396 11.5 8.33325C11.5 6.95254 10.3807 5.83325 9 5.83325C7.61929 5.83325 6.5 6.95254 6.5 8.33325C6.5 9.71396 7.61929 10.8333 9 10.8333Z"
                              className="stroke-current	text-secondary-900 group-hover:text-primary-900 transition-colors duration-300 ease-linear"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>

                          <div>
                            <div className="font-heading text-lg text-secondary-900 group-hover:text-primary-900 font-semibold mb-0 leading-none transition-colors duration-300 ease-linear">
                              Indio
                            </div>
                            <div className="text-gray-600 text-sm">
                              Kidney Institute of the Desert - Indio
                            </div>
                          </div>
                        </button>

                        <button
                          onClick={showDialysisRanchoMirage}
                          className="group border border-solid border-gray-300 bg-transparent hover:border-primary-900 rounded-md p-4 md:px-6 md:py-4 cursor-pointer flex items-start space-x-3 text-left transition-colors duration-300 ease-linear"
                        >
                          <svg
                            width="18"
                            height="20"
                            viewBox="0 0 18 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.5 8.33325C16.5 14.1666 9 19.1666 9 19.1666C9 19.1666 1.5 14.1666 1.5 8.33325C1.5 6.34413 2.29018 4.43647 3.6967 3.02995C5.10322 1.62343 7.01088 0.833252 9 0.833252C10.9891 0.833252 12.8968 1.62343 14.3033 3.02995C15.7098 4.43647 16.5 6.34413 16.5 8.33325Z"
                              className="stroke-current	text-secondary-900 group-hover:text-primary-900 transition-colors duration-300 ease-linear"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M9 10.8333C10.3807 10.8333 11.5 9.71396 11.5 8.33325C11.5 6.95254 10.3807 5.83325 9 5.83325C7.61929 5.83325 6.5 6.95254 6.5 8.33325C6.5 9.71396 7.61929 10.8333 9 10.8333Z"
                              className="stroke-current	text-secondary-900 group-hover:text-primary-900 transition-colors duration-300 ease-linear"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>

                          <div>
                            <div className="font-heading text-lg text-secondary-900 group-hover:text-primary-900 font-semibold mb-0 leading-none transition-colors duration-300 ease-linear">
                              Rancho Mirage
                            </div>
                            <div className="text-gray-600 text-sm">
                              Kidney Institute at Eisenhower Medical Center
                            </div>
                          </div>
                        </button>

                        <button
                          onClick={showDialysisLaQuinta}
                          className="group border border-solid border-gray-300 bg-transparent hover:border-primary-900 rounded-md p-4 md:px-6 md:py-4 cursor-pointer flex items-start space-x-3 text-left transition-colors duration-300 ease-linear"
                        >
                          <svg
                            width="18"
                            height="20"
                            viewBox="0 0 18 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.5 8.33325C16.5 14.1666 9 19.1666 9 19.1666C9 19.1666 1.5 14.1666 1.5 8.33325C1.5 6.34413 2.29018 4.43647 3.6967 3.02995C5.10322 1.62343 7.01088 0.833252 9 0.833252C10.9891 0.833252 12.8968 1.62343 14.3033 3.02995C15.7098 4.43647 16.5 6.34413 16.5 8.33325Z"
                              className="stroke-current	text-secondary-900 group-hover:text-primary-900 transition-colors duration-300 ease-linear"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M9 10.8333C10.3807 10.8333 11.5 9.71396 11.5 8.33325C11.5 6.95254 10.3807 5.83325 9 5.83325C7.61929 5.83325 6.5 6.95254 6.5 8.33325C6.5 9.71396 7.61929 10.8333 9 10.8333Z"
                              className="stroke-current	text-secondary-900 group-hover:text-primary-900 transition-colors duration-300 ease-linear"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>

                          <div>
                            <div className="font-heading text-lg text-secondary-900 group-hover:text-primary-900 font-semibold mb-0 leading-none transition-colors duration-300 ease-linear">
                              La Quinta
                            </div>
                            <div className="text-gray-600 text-sm">
                              La Quinta Kidney Center
                            </div>
                          </div>
                        </button>

                        <button
                          onClick={showDialysisCoachella}
                          className="group border border-solid border-gray-300 bg-transparent hover:border-primary-900 rounded-md p-4 md:px-6 md:py-4 cursor-pointer flex items-start space-x-3 text-left transition-colors duration-300 ease-linear"
                        >
                          <svg
                            width="18"
                            height="20"
                            viewBox="0 0 18 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.5 8.33325C16.5 14.1666 9 19.1666 9 19.1666C9 19.1666 1.5 14.1666 1.5 8.33325C1.5 6.34413 2.29018 4.43647 3.6967 3.02995C5.10322 1.62343 7.01088 0.833252 9 0.833252C10.9891 0.833252 12.8968 1.62343 14.3033 3.02995C15.7098 4.43647 16.5 6.34413 16.5 8.33325Z"
                              className="stroke-current	text-secondary-900 group-hover:text-primary-900 transition-colors duration-300 ease-linear"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M9 10.8333C10.3807 10.8333 11.5 9.71396 11.5 8.33325C11.5 6.95254 10.3807 5.83325 9 5.83325C7.61929 5.83325 6.5 6.95254 6.5 8.33325C6.5 9.71396 7.61929 10.8333 9 10.8333Z"
                              className="stroke-current	text-secondary-900 group-hover:text-primary-900 transition-colors duration-300 ease-linear"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>

                          <div>
                            <div className="font-heading text-lg text-secondary-900 group-hover:text-primary-900 font-semibold mb-0 leading-none transition-colors duration-300 ease-linear">
                              Coachella
                            </div>
                            <div className="text-gray-600 text-sm">
                              Coachella Kidney Institute
                            </div>
                          </div>
                        </button>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <p
                        className={`font-heading text-3xl text-black font-semibold ${setNephrologyLocations}`}
                      >
                        Choose a Location
                      </p>

                      <div
                        className={`flex flex-col space-y-4 ${setNephrologyLocations}`}
                      >
                        <button
                          onClick={showNephrologyIndio}
                          className="group border border-solid border-gray-300 bg-transparent hover:border-primary-900 rounded-md p-4 md:px-6 md:py-4 cursor-pointer flex items-start space-x-3 text-left transition-colors duration-300 ease-linear"
                        >
                          <svg
                            width="18"
                            height="20"
                            viewBox="0 0 18 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.5 8.33325C16.5 14.1666 9 19.1666 9 19.1666C9 19.1666 1.5 14.1666 1.5 8.33325C1.5 6.34413 2.29018 4.43647 3.6967 3.02995C5.10322 1.62343 7.01088 0.833252 9 0.833252C10.9891 0.833252 12.8968 1.62343 14.3033 3.02995C15.7098 4.43647 16.5 6.34413 16.5 8.33325Z"
                              className="stroke-current	text-secondary-900 group-hover:text-primary-900 transition-colors duration-300 ease-linear"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M9 10.8333C10.3807 10.8333 11.5 9.71396 11.5 8.33325C11.5 6.95254 10.3807 5.83325 9 5.83325C7.61929 5.83325 6.5 6.95254 6.5 8.33325C6.5 9.71396 7.61929 10.8333 9 10.8333Z"
                              className="stroke-current	text-secondary-900 group-hover:text-primary-900 transition-colors duration-300 ease-linear"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>

                          <div>
                            <div className="font-heading text-lg text-secondary-900 group-hover:text-primary-900 font-semibold mb-0 leading-none transition-colors duration-300 ease-linear">
                              Indio
                            </div>
                            <div className="text-gray-600 text-sm">
                              Coachella Valley Nephrology - Indio
                            </div>
                          </div>
                        </button>

                        <button
                          onClick={showNephrologyLaQuinta}
                          className="group border border-solid border-gray-300 bg-transparent hover:border-primary-900 rounded-md p-4 md:px-6 md:py-4 cursor-pointer flex items-start space-x-3 text-left transition-colors duration-300 ease-linear"
                        >
                          <svg
                            width="18"
                            height="20"
                            viewBox="0 0 18 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.5 8.33325C16.5 14.1666 9 19.1666 9 19.1666C9 19.1666 1.5 14.1666 1.5 8.33325C1.5 6.34413 2.29018 4.43647 3.6967 3.02995C5.10322 1.62343 7.01088 0.833252 9 0.833252C10.9891 0.833252 12.8968 1.62343 14.3033 3.02995C15.7098 4.43647 16.5 6.34413 16.5 8.33325Z"
                              className="stroke-current	text-secondary-900 group-hover:text-primary-900 transition-colors duration-300 ease-linear"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M9 10.8333C10.3807 10.8333 11.5 9.71396 11.5 8.33325C11.5 6.95254 10.3807 5.83325 9 5.83325C7.61929 5.83325 6.5 6.95254 6.5 8.33325C6.5 9.71396 7.61929 10.8333 9 10.8333Z"
                              className="stroke-current	text-secondary-900 group-hover:text-primary-900 transition-colors duration-300 ease-linear"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>

                          <div>
                            <div className="font-heading text-lg text-secondary-900 group-hover:text-primary-900 font-semibold mb-0 leading-none transition-colors duration-300 ease-linear">
                              La Quinta
                            </div>
                            <div className="text-gray-600 text-sm">
                              La Quinta Kidney Center
                            </div>
                          </div>
                        </button>
                      </div>
                    </TabPanel>
                  </Tabs>
                </StyledTabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledModal>
  );
};
export default Modal;
