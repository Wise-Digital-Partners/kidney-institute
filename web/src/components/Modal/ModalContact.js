import React, { useState } from "react";
import MicroModal from "micromodal";
import styled from "@emotion/styled";
import tw from "twin.macro";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Contact from "../Form/Contact";
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
    ${tw`grid grid-cols-2 mb-6 md:mb-10 border-none`}
  }
  .react-tabs__tab {
    ${tw`text-sm  text-black text-opacity-40 font-semibold py-2 px-4 bg-gray-50 rounded flex items-center justify-center w-full border-none transition-colors duration-300 ease-linear first:rounded-l-4xl last:rounded-r-4xl`}
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

  const [setDisalysisLocations, setDisalysisLocationsState] =
    useState("hidden");
  const [setNephrologyLocations, setNephrologyLocationsState] =
    useState("hidden");
  const [setHubCards, setHubCardsState] = useState("block");
  const [setModalContent, setModalContentState] = useState("block");
  const [setPhoneNumbers, setPhoneNumbersState] = useState("block");
  const [setDialysisBack1, setDialysisBackState1] = useState("hidden");
  const [setDialysisBack2, setDialysisBackState2] = useState("hidden");
  const [setNephrologyBack1, setNephrologyBackState1] = useState("hidden");
  const [setNephrologyBack2, setNephrologyBackState2] = useState("hidden");
  const [setDialysisIndio, setDialysisIndioState] = useState("hidden");
  const [setDialysisRanchoMirage, setDialysisRanchoMirageState] =
    useState("hidden");
  const [setDialysisLaQuinta, setDialysisLaQuintaState] = useState("hidden");
  const [setDialysisCoachella, setDialysisCoachellaState] = useState("hidden");
  const [setNephrologyIndio, setNephrologyIndioState] = useState("hidden");
  const [setNephrologyLaQuinta, setNephrologyLaQuintaState] =
    useState("hidden");

  function showServiceCards() {
    setHubCardsState("block");
    setDisalysisLocationsState("hidden");
    setNephrologyLocationsState("hidden");
    setPhoneNumbersState("block");
    setDialysisBackState1("hidden");
    setNephrologyBackState1("hidden");
  }

  function showDialysisLocations() {
    setHubCardsState("hidden");
    setDisalysisLocationsState("block");
    setNephrologyLocationsState("hidden");
    setPhoneNumbersState("hidden");
    setDialysisBackState1("block");
    setDialysisBackState2("hidden");
    setModalContentState("block");
    setDialysisIndioState("hidden");
    setDialysisRanchoMirageState("hidden");
    setDialysisLaQuintaState("hidden");
    setDialysisCoachellaState("hidden");
  }

  function showNephrologyLocations() {
    setHubCardsState("hidden");
    setNephrologyLocationsState("block");
    setDisalysisLocationsState("hidden");
    setPhoneNumbersState("hidden");
    setNephrologyBackState1("block");
    setNephrologyBackState2("hidden");
    setModalContentState("block");
    setNephrologyIndioState("hidden");
    setNephrologyLaQuintaState("hidden");
  }

  function showDialysisIndio() {
    setDialysisBackState1("hidden");
    setDialysisBackState2("block");
    setDisalysisLocationsState("hidden");
    setDialysisIndioState("block");
    setModalContentState("hidden");
  }

  function showDialysisRanchoMirage() {
    setDialysisBackState1("hidden");
    setDialysisBackState2("block");
    setDisalysisLocationsState("hidden");
    setDialysisRanchoMirageState("block");
    setModalContentState("hidden");
  }

  function showDialysisLaQuinta() {
    setDialysisBackState1("hidden");
    setDialysisBackState2("block");
    setDisalysisLocationsState("hidden");
    setDialysisLaQuintaState("block");
    setModalContentState("hidden");
  }

  function showDialysisCoachella() {
    setDialysisBackState1("hidden");
    setDialysisBackState2("block");
    setDisalysisLocationsState("hidden");
    setDialysisCoachellaState("block");
    setModalContentState("hidden");
  }

  function showNephrologyIndio() {
    setNephrologyBackState1("hidden");
    setNephrologyBackState2("block");
    setNephrologyLocationsState("hidden");
    setNephrologyIndioState("block");
    setModalContentState("hidden");
  }

  function showNephrologyLaQuinta() {
    setNephrologyBackState1("hidden");
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
              <div className={`flex space-x-8 ${setPhoneNumbers}`}>
                <a
                  href="tel:123-456-7890"
                  className="text-secondary-900 hover:text-primary-900 font-semibold text-sm no-underline flex items-center"
                >
                  <i className="fas fa-phone-alt text-primary-900 mr-2"></i>
                  <span>For Dialysis: (123) 456-7890</span>
                </a>

                <a
                  href="tel:123-456-7890"
                  className="text-secondary-900 hover:text-primary-900 font-semibold text-sm no-underline flex items-center"
                >
                  <i className="fas fa-phone-alt text-primary-900 mr-2"></i>
                  <span>For Nephrology: (123) 456-7890</span>
                </a>
              </div>

              <button
                onClick={showServiceCards}
                className={`text-secondary-900 hover:text-secondary-900 group-hover:text-primary-900 font-semibold text-sm no-underline flex items-center space-x-2 ${setDialysisBack1}`}
              >
                <i className="far fa-arrow-left text-primary-900"></i>
                <span>Go Back</span>
              </button>

              <button
                onClick={showDialysisLocations}
                className={`text-secondary-900 hover:text-secondary-900 group-hover:text-primary-900 font-semibold text-sm no-underline flex items-center space-x-2 ${setDialysisBack2}`}
              >
                <i className="far fa-arrow-left text-primary-900"></i>
                <span>Go Back</span>
              </button>

              <button
                onClick={showServiceCards}
                className={`text-secondary-900 hover:text-secondary-900 group-hover:text-primary-900 font-semibold text-sm no-underline flex items-center space-x-2 ${setNephrologyBack1}`}
              >
                <i className="far fa-arrow-left text-primary-900"></i>
                <span>Go Back</span>
              </button>

              <button
                onClick={showNephrologyLocations}
                className={`text-secondary-900 hover:text-secondary-900 group-hover:text-primary-900 font-semibold text-sm no-underline flex items-center space-x-2 ${setNephrologyBack2}`}
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
                  <Tabs>
                    <TabList>
                      <Tab>
                        <svg
                          width="19"
                          height="16"
                          viewBox="0 0 19 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-2"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.26539 0.653076H16.3266C17.6713 0.653076 18.7688 1.74647 18.7756 3.08957C18.7757 3.09661 18.7757 3.10364 18.7756 3.11067V12.898C18.7756 14.2468 17.6754 15.347 16.3266 15.347H3.26539C1.91658 15.347 0.816406 14.2468 0.816406 12.898V3.1132M2.53606 2.73794L9.79598 7.81989L17.0559 2.73792C16.9209 2.47097 16.6433 2.28573 16.3266 2.28573H3.26539C2.94868 2.28573 2.67106 2.47098 2.53606 2.73794ZM3.26539 0.653076C1.92177 0.653076 0.824877 1.7448 0.816455 3.0865L3.26539 0.653076ZM2.44906 4.66995V12.898C2.44906 13.3451 2.81827 13.7143 3.26539 13.7143H16.3266C16.7737 13.7143 17.1429 13.3451 17.1429 12.898V4.66993L10.2641 9.4851C9.98304 9.68186 9.60893 9.68186 9.32785 9.4851L2.44906 4.66995Z"
                            className="fill-current	text-secondary-900/40 transition-colors duration-300 ease-linear"
                          />
                        </svg>
                        General Inquiry
                      </Tab>
                      <Tab>
                        <svg
                          width="18"
                          height="20"
                          viewBox="0 0 18 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-2"
                        >
                          <path
                            d="M16.5 8.33325C16.5 14.1666 9 19.1666 9 19.1666C9 19.1666 1.5 14.1666 1.5 8.33325C1.5 6.34413 2.29018 4.43647 3.6967 3.02995C5.10322 1.62343 7.01088 0.833252 9 0.833252C10.9891 0.833252 12.8968 1.62343 14.3033 3.02995C15.7098 4.43647 16.5 6.34413 16.5 8.33325Z"
                            className="stroke-current	text-secondary-900/40 transition-colors duration-300 ease-linear"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M9 10.8333C10.3807 10.8333 11.5 9.71396 11.5 8.33325C11.5 6.95254 10.3807 5.83325 9 5.83325C7.61929 5.83325 6.5 6.95254 6.5 8.33325C6.5 9.71396 7.61929 10.8333 9 10.8333Z"
                            className="stroke-current	text-secondary-900/40 transition-colors duration-300 ease-linear"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        Find a Location
                      </Tab>
                    </TabList>

                    <TabPanel>
                      <Contact />
                    </TabPanel>
                    <TabPanel>
                      <div
                        className={`grid grid-cols-2 gap-4 max-w-[480px] mx-auto ${setHubCards}`}
                      >
                        <button
                          className="group border border-solid border-gray-300 bg-transparent hover:border-primary-900 rounded-md p-4 md:px-6 md:py-8 cursor-pointer text-center transition-colors duration-300 ease-linear"
                          onClick={showDialysisLocations}
                        >
                          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-5">
                            <svg
                              width="35"
                              height="38"
                              viewBox="0 0 35 38"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clip-path="url(#clip0)">
                                <path
                                  d="M33.9256 24.9409C33.9258 25.3368 33.8386 25.7278 33.6702 26.0862C33.4066 26.6352 32.9875 27.0952 32.4646 27.4094C31.8942 27.755 31.2389 27.9364 30.5713 27.9338H29.7074V26.6836V19.7357H30.1703C30.598 19.7357 31.0082 19.5663 31.3106 19.2649C31.6131 18.9634 31.783 18.5546 31.783 18.1283C31.783 18.1237 31.783 18.1192 31.783 18.1146C31.783 18.11 31.783 18.1055 31.783 18.1009V17.6449H32.499C32.8768 17.6415 33.2421 17.7798 33.5223 18.0325C33.6475 18.1466 33.7488 18.2843 33.8204 18.4376C33.89 18.5879 33.9259 18.7516 33.9256 18.9172V24.9424V24.9409ZM4.42942 27.9049C3.54852 27.9121 2.69673 27.5909 2.04124 27.0043C1.74497 26.7345 1.50502 26.4091 1.33516 26.0467C1.16625 25.6849 1.0788 25.2906 1.07895 24.8915V18.8313C1.0781 18.6641 1.11347 18.4987 1.18265 18.3464C1.29285 18.111 1.46996 17.9131 1.69201 17.7772C1.93542 17.6263 2.21671 17.5473 2.50332 17.5492H3.19416V18.1298C3.19416 18.5561 3.36407 18.965 3.66651 19.2664C3.96895 19.5679 4.37915 19.7372 4.80687 19.7372H5.27047V27.9072L4.42942 27.9049ZM4.30895 16.2579C4.34964 16.1619 4.41746 16.0798 4.50415 16.0216C4.59285 15.9618 4.69753 15.93 4.80458 15.9304H5.80576C5.87617 15.9304 5.94589 15.9165 6.0109 15.8895C6.07591 15.8625 6.13492 15.823 6.18453 15.7732C6.23415 15.7234 6.27338 15.6643 6.29998 15.5993C6.32658 15.5343 6.34002 15.4647 6.33951 15.3946V2.55056C6.33927 2.30811 6.39889 2.06933 6.51312 1.85528C6.62735 1.64122 6.79267 1.45848 6.99451 1.32316C7.23959 1.15774 7.52889 1.06956 7.82488 1.07008H27.1477C27.3909 1.06984 27.6305 1.12926 27.8452 1.24311C28.06 1.35697 28.2434 1.52175 28.3791 1.72292C28.5453 1.96738 28.6338 2.25604 28.633 2.55132V15.3953C28.633 15.5368 28.6891 15.6725 28.7891 15.7729C28.8891 15.8732 29.0249 15.9301 29.1668 15.9311H30.1672C30.2392 15.931 30.3105 15.9452 30.3769 15.9729C30.4729 16.0139 30.5552 16.0814 30.614 16.1675C30.6736 16.2561 30.7055 16.3603 30.7055 16.4669V18.129C30.7055 18.2169 30.6838 18.3034 30.6423 18.381C30.6008 18.4585 30.5408 18.5247 30.4676 18.5736C30.3792 18.634 30.2743 18.6658 30.1672 18.6648H29.1668C29.025 18.6662 28.8895 18.7233 28.7896 18.8236C28.6897 18.9238 28.6334 19.0593 28.633 19.2006V28.2902C28.6331 28.3203 28.6359 28.3504 28.6414 28.3799C28.636 28.4093 28.6332 28.439 28.633 28.4689V32.1814H6.34333V28.4415C6.3431 28.4161 6.34131 28.3907 6.33799 28.3655C6.34133 28.3403 6.34312 28.3149 6.34333 28.2895V19.1999C6.34333 19.0584 6.28722 18.9227 6.18723 18.8224C6.08723 18.722 5.95148 18.6651 5.80957 18.6641H4.80534C4.73356 18.6645 4.66245 18.6503 4.59641 18.6223C4.50011 18.5817 4.41772 18.5141 4.35927 18.4277C4.29934 18.3393 4.26745 18.235 4.26777 18.1283V16.492C4.26777 16.4874 4.26777 16.4829 4.26777 16.4783C4.26777 16.4738 4.26777 16.4684 4.26777 16.4639C4.26767 16.3924 4.28193 16.3216 4.30971 16.2556L4.30895 16.2579ZM33.8799 16.9624C33.4652 16.7057 32.9864 16.5706 32.4982 16.5726H31.7822V16.4662C31.7824 16.2513 31.7391 16.0385 31.6549 15.8407C31.5316 15.5496 31.325 15.3012 31.0607 15.1267C30.7965 14.9521 30.4865 14.8592 30.1695 14.8595H29.7066V2.55132C29.7066 1.8748 29.4371 1.22598 28.9572 0.747533C28.4773 0.269089 27.8264 0.000201639 27.1477 1.13274e-07H7.8287C7.49252 -9.97444e-05 7.15961 0.065824 6.84901 0.194005C6.5384 0.322185 6.25617 0.51011 6.01846 0.747042C5.78074 0.983974 5.5922 1.26527 5.46359 1.57485C5.33499 1.88444 5.26885 2.21625 5.26895 2.55132V14.8633H4.80534C4.59359 14.8632 4.3839 14.9047 4.18824 14.9854C3.99258 15.0661 3.81479 15.1844 3.66503 15.3336C3.51527 15.4828 3.39646 15.66 3.31541 15.855C3.23435 16.0499 3.19263 16.2589 3.19263 16.47C3.19263 16.47 3.19263 16.4768 3.19263 16.4806H2.5018C1.85251 16.4774 1.22603 16.719 0.748023 17.157C0.518353 17.3679 0.333257 17.6224 0.203591 17.9056C0.0695927 18.1973 0.000155533 18.5143 1.87337e-08 18.8351V24.8953C-5.50909e-05 25.4498 0.121479 25.9977 0.356093 26.5005C0.707241 27.2427 1.26899 27.866 1.97185 28.2933C2.71133 28.7445 3.56237 28.9814 4.42942 28.9773H5.26819V32.376C5.06134 32.4786 4.87217 32.6133 4.70774 32.775C4.48682 32.9883 4.31622 33.2479 4.2083 33.535L3.29786 36.062C3.22337 36.2628 3.18441 36.4749 3.18272 36.689C3.18191 36.857 3.21002 37.0238 3.26583 37.1823C3.30885 37.3015 3.3695 37.4137 3.44579 37.5151C3.56394 37.6701 3.71805 37.7943 3.89491 37.8769C4.07635 37.9601 4.27395 38.0023 4.47365 38.0008H20.1867C20.3292 38.0008 20.4658 37.9444 20.5666 37.844C20.6673 37.7435 20.7239 37.6074 20.7239 37.4654C20.7239 37.3234 20.6673 37.1872 20.5666 37.0868C20.4658 36.9863 20.3292 36.9299 20.1867 36.9299H4.47365C4.43493 36.9307 4.3964 36.9242 4.36004 36.9109C4.34607 36.9056 4.33316 36.8979 4.32191 36.8881C4.30376 36.8723 4.28987 36.8522 4.2815 36.8296C4.2641 36.7848 4.25581 36.737 4.2571 36.689C4.259 36.5988 4.27654 36.5096 4.30895 36.4253L5.22396 33.9006C5.25679 33.8112 5.30363 33.7276 5.36274 33.6528C5.45691 33.5316 5.57465 33.4305 5.70892 33.3557C5.76807 33.3233 5.83075 33.2978 5.89573 33.2797C5.94775 33.2643 6.00162 33.2562 6.05586 33.2553H28.9235C28.999 33.257 29.0736 33.2719 29.1439 33.2994C29.2827 33.3537 29.4088 33.4356 29.5145 33.5403C29.6205 33.6421 29.7028 33.7659 29.7554 33.9029L30.6666 36.4276C30.6991 36.5118 30.7166 36.6011 30.7185 36.6913C30.7193 36.7354 30.7126 36.7794 30.6987 36.8213C30.6923 36.839 30.6836 36.8559 30.6727 36.8714C30.66 36.8882 30.6432 36.9015 30.6239 36.9102C30.5855 36.9257 30.5442 36.9332 30.5027 36.9322H27.8598C27.7174 36.9322 27.5807 36.9886 27.48 37.089C27.3793 37.1894 27.3227 37.3256 27.3227 37.4676C27.3227 37.6096 27.3793 37.7458 27.48 37.8462C27.5807 37.9466 27.7174 38.0031 27.8598 38.0031H30.5027C30.68 38.0044 30.8558 37.9714 31.0205 37.9058C31.1418 37.8568 31.2543 37.7885 31.3537 37.7036C31.4994 37.5783 31.6136 37.4205 31.6869 37.2431C31.7586 37.068 31.7946 36.8804 31.7929 36.6913C31.7911 36.4773 31.7524 36.2652 31.6785 36.0643L30.7635 33.5396C30.6926 33.3462 30.5921 33.1649 30.4653 33.0023C30.2812 32.7645 30.0506 32.5664 29.7875 32.4201L29.7044 32.3775V29.0047H30.5683C31.7162 29.0124 32.8258 28.5938 33.6809 27.8305C34.0839 27.4677 34.4103 27.0285 34.6409 26.5385C34.8754 26.0388 34.9972 25.494 34.9977 24.9424V18.9156C34.9976 18.5958 34.9281 18.2798 34.7941 17.9892C34.5963 17.5652 34.2782 17.2083 33.8791 16.9624H33.8799Z"
                                  className="fill-current	text-secondary-900 group-hover:text-primary-900 transition-colors duration-300 ease-linear"
                                />
                                <path
                                  d="M19.1134 27.3302C18.9566 27.6242 18.7225 27.8701 18.4362 28.0416C18.1499 28.2131 17.8222 28.3037 17.4882 28.3037C17.1541 28.3037 16.8264 28.2131 16.5401 28.0416C16.2538 27.8701 16.0197 27.6242 15.8629 27.3302C15.7482 27.1151 15.6781 26.8791 15.657 26.6364C15.6517 26.5821 15.6492 26.5275 15.6494 26.473C15.6507 26.41 15.6571 26.3472 15.6684 26.2852C15.7053 26.0863 15.7562 25.8903 15.8209 25.6985C15.9844 25.2268 16.1717 24.7636 16.3821 24.3108C16.7207 23.566 17.1149 22.7976 17.423 22.2185C17.4435 22.1797 17.4641 22.1425 17.4847 22.1037C17.6967 22.5012 17.9582 23.002 18.2175 23.531C18.5057 24.1192 18.7901 24.7417 18.9983 25.279C19.102 25.5496 19.1866 25.7996 19.2431 26.0086C19.2713 26.1127 19.2919 26.207 19.3048 26.286C19.3161 26.3467 19.3225 26.4082 19.3239 26.4699C19.3239 26.5262 19.3239 26.5801 19.3163 26.6333C19.2949 26.8761 19.2246 27.1121 19.1096 27.3272L19.1134 27.3302ZM20.3678 26.1051C20.3204 25.8525 20.2541 25.6038 20.1695 25.3611C19.9954 24.8521 19.7951 24.3524 19.5694 23.8639C19.2164 23.0879 18.8138 22.3044 18.5019 21.7123C18.19 21.1203 17.9605 20.7243 17.9582 20.7182C17.9121 20.6349 17.8445 20.5654 17.7622 20.517C17.68 20.4686 17.5863 20.4431 17.4908 20.4431C17.3953 20.4431 17.3016 20.4686 17.2194 20.517C17.1372 20.5654 17.0695 20.6349 17.0234 20.7182C17.0234 20.7236 16.4225 21.7746 15.8209 22.9982C15.5159 23.6116 15.217 24.2667 14.9822 24.8656C14.8721 25.1442 14.7764 25.4283 14.6955 25.7168C14.6596 25.849 14.6299 25.9767 14.6085 26.1013C14.5874 26.2223 14.5759 26.3448 14.5742 26.4676C14.5742 26.555 14.5788 26.6424 14.5864 26.7283C14.6204 27.1136 14.7319 27.4882 14.9143 27.8296C15.2454 28.4502 15.7909 28.9302 16.4498 29.1807C17.1087 29.4312 17.8364 29.4353 18.4981 29.1922C18.81 29.0776 19.0996 28.9102 19.3544 28.6975C19.6489 28.4536 19.8921 28.154 20.0699 27.8161C20.2477 27.4781 20.3568 27.1085 20.3907 26.7283C20.3983 26.6424 20.4021 26.555 20.4021 26.4676C20.4012 26.3448 20.3897 26.2222 20.3678 26.1013V26.1051Z"
                                  className="fill-current	text-secondary-900 group-hover:text-primary-900 transition-colors duration-300 ease-linear"
                                />
                                <path
                                  d="M8.9791 3.97485C8.97861 3.90333 8.99599 3.83282 9.02967 3.76966C9.06335 3.70651 9.11227 3.6527 9.17202 3.61309C9.24372 3.56365 9.32883 3.53714 9.41602 3.53709H25.5607C25.6324 3.5366 25.7032 3.55392 25.7665 3.58749C25.8299 3.62106 25.8839 3.66982 25.9236 3.72937C25.9732 3.80084 25.9998 3.88567 25.9999 3.97257V14.7129C26 14.771 25.9886 14.8286 25.9663 14.8824C25.9327 14.9603 25.8774 15.027 25.8069 15.0747C25.7351 15.1238 25.6501 15.1502 25.5629 15.1507H9.41831C9.35988 15.1509 9.30202 15.1393 9.24827 15.1165C9.16994 15.0832 9.10294 15.028 9.05535 14.9576C9.00575 14.8861 8.97915 14.8013 8.9791 14.7144V3.97485ZM8.5704 15.9601C8.82036 16.1298 9.11587 16.2203 9.41831 16.22H25.5607C25.9617 16.22 26.3463 16.0612 26.6298 15.7786C26.9134 15.4959 27.0727 15.1126 27.0727 14.7129V3.97485C27.0727 3.57515 26.9134 3.19182 26.6298 2.90919C26.3463 2.62655 25.9617 2.46777 25.5607 2.46777H9.41831C9.01728 2.46777 8.63269 2.62655 8.34912 2.90919C8.06555 3.19182 7.90625 3.57515 7.90625 3.97485V14.7129C7.90616 14.9591 7.96666 15.2015 8.08246 15.4189C8.19825 15.6364 8.36579 15.8222 8.5704 15.9601Z"
                                  className="fill-current	text-secondary-900 group-hover:text-primary-900 transition-colors duration-300 ease-linear"
                                />
                                <path
                                  d="M12.435 6.30793H22.5901C22.7327 6.30793 22.8695 6.25148 22.9703 6.151C23.0711 6.05051 23.1277 5.91423 23.1277 5.77213C23.1277 5.63003 23.0711 5.49374 22.9703 5.39326C22.8695 5.29278 22.7327 5.23633 22.5901 5.23633H12.435C12.2925 5.23633 12.1557 5.29278 12.0549 5.39326C11.9541 5.49374 11.8975 5.63003 11.8975 5.77213C11.8975 5.91423 11.9541 6.05051 12.0549 6.151C12.1557 6.25148 12.2925 6.30793 12.435 6.30793Z"
                                  className="fill-current	text-secondary-900 group-hover:text-primary-900 transition-colors duration-300 ease-linear"
                                />
                                <path
                                  d="M12.4102 9.52958H22.5654C22.7078 9.52958 22.8445 9.47317 22.9452 9.37276C23.0459 9.27235 23.1025 9.13616 23.1025 8.99416C23.1025 8.85216 23.0459 8.71597 22.9452 8.61556C22.8445 8.51515 22.7078 8.45874 22.5654 8.45874H12.4102C12.2678 8.45874 12.1311 8.51515 12.0304 8.61556C11.9296 8.71597 11.873 8.85216 11.873 8.99416C11.873 9.13616 11.9296 9.27235 12.0304 9.37276C12.1311 9.47317 12.2678 9.52958 12.4102 9.52958Z"
                                  className="fill-current	text-secondary-900 group-hover:text-primary-900 transition-colors duration-300 ease-linear"
                                />
                                <path
                                  d="M22.5901 11.8408H12.435C12.2925 11.8408 12.1557 11.8973 12.0549 11.9978C11.9541 12.0982 11.8975 12.2345 11.8975 12.3766C11.8975 12.5187 11.9541 12.655 12.0549 12.7555C12.1557 12.856 12.2925 12.9124 12.435 12.9124H22.5901C22.7327 12.9124 22.8695 12.856 22.9703 12.7555C23.0711 12.655 23.1277 12.5187 23.1277 12.3766C23.1277 12.2345 23.0711 12.0982 22.9703 11.9978C22.8695 11.8973 22.7327 11.8408 22.5901 11.8408Z"
                                  className="fill-current	text-secondary-900 group-hover:text-primary-900 transition-colors duration-300 ease-linear"
                                />
                                <path
                                  d="M24.6152 37.4103C24.615 37.3044 24.5834 37.2009 24.5243 37.1129C24.4651 37.0249 24.3812 36.9563 24.283 36.9159C24.1848 36.8754 24.0768 36.8649 23.9725 36.8856C23.8683 36.9063 23.7726 36.9573 23.6975 37.0322C23.6224 37.1071 23.5712 37.2025 23.5504 37.3063C23.5296 37.4102 23.5402 37.5179 23.5808 37.6157C23.6214 37.7136 23.6902 37.7973 23.7785 37.8562C23.8668 37.9151 23.9706 37.9467 24.0768 37.9468C24.1476 37.9469 24.2176 37.9331 24.283 37.9062C24.3483 37.8793 24.4077 37.8397 24.4577 37.7899C24.5077 37.7401 24.5474 37.6809 24.5744 37.6157C24.6014 37.5506 24.6153 37.4808 24.6152 37.4103Z"
                                  className="fill-current	text-secondary-900 group-hover:text-primary-900 transition-colors duration-300 ease-linear"
                                />
                                <path
                                  d="M9.32358 17.4282C9.16288 17.4282 9.00579 17.4757 8.87215 17.5647C8.73851 17.6536 8.63433 17.7801 8.57276 17.928C8.5112 18.0759 8.49501 18.2388 8.52625 18.3959C8.55749 18.553 8.63475 18.6974 8.74828 18.8107C8.8618 18.9241 9.00649 19.0014 9.16407 19.0328C9.32164 19.0642 9.48503 19.0484 9.63358 18.9873C9.78214 18.9262 9.90919 18.8226 9.99869 18.6896C10.0882 18.5566 10.1361 18.4001 10.1364 18.2399C10.1364 18.1335 10.1154 18.0282 10.0745 17.9299C10.0337 17.8316 9.97382 17.7423 9.89834 17.667C9.82286 17.5918 9.73326 17.5321 9.63464 17.4914C9.53602 17.4507 9.43032 17.4297 9.32358 17.4297V17.4282Z"
                                  className="fill-current	text-secondary-900 group-hover:text-primary-900 transition-colors duration-300 ease-linear"
                                />
                                <path
                                  d="M12.5902 17.4282C12.4295 17.4282 12.2724 17.4757 12.1388 17.5647C12.0051 17.6536 11.9009 17.7801 11.8394 17.928C11.7778 18.0759 11.7616 18.2388 11.7929 18.3959C11.8241 18.553 11.9014 18.6974 12.0149 18.8107C12.1284 18.9241 12.2731 19.0014 12.4307 19.0328C12.5882 19.0642 12.7516 19.0484 12.9002 18.9873C13.0487 18.9262 13.1758 18.8226 13.2653 18.6896C13.3548 18.5566 13.4027 18.4001 13.403 18.2399C13.4028 18.0251 13.3171 17.8191 13.1647 17.6673C13.0123 17.5154 12.8057 17.4299 12.5902 17.4297V17.4282Z"
                                  className="fill-current	text-secondary-900 group-hover:text-primary-900 transition-colors duration-300 ease-linear"
                                />
                                <path
                                  d="M16.6677 18.2401C16.6678 18.0798 16.6202 17.9231 16.531 17.7897C16.4417 17.6564 16.3148 17.5524 16.1662 17.491C16.0177 17.4296 15.8542 17.4135 15.6964 17.4447C15.5387 17.476 15.3938 17.5531 15.2801 17.6665C15.1663 17.7798 15.0889 17.9243 15.0576 18.0815C15.0262 18.2387 15.0424 18.4017 15.104 18.5497C15.1656 18.6978 15.2699 18.8243 15.4037 18.9133C15.5375 19.0023 15.6948 19.0497 15.8556 19.0495C16.0709 19.0493 16.2773 18.964 16.4296 18.8122C16.5818 18.6605 16.6675 18.4547 16.6677 18.2401Z"
                                  className="fill-current	text-secondary-900 group-hover:text-primary-900 transition-colors duration-300 ease-linear"
                                />
                                <path
                                  d="M19.1207 19.0478C19.2816 19.048 19.4389 19.0005 19.5727 18.9115C19.7065 18.8225 19.8108 18.6958 19.8724 18.5477C19.934 18.3995 19.95 18.2365 19.9186 18.0792C19.8871 17.922 19.8095 17.7775 19.6957 17.6642C19.5818 17.551 19.4367 17.4739 19.2789 17.4428C19.121 17.4118 18.9575 17.4281 18.809 17.4897C18.6604 17.5514 18.5336 17.6556 18.4445 17.7891C18.3555 17.9227 18.3081 18.0796 18.3086 18.2399C18.3088 18.4545 18.3944 18.6603 18.5467 18.812C18.6989 18.9638 18.9054 19.0491 19.1207 19.0493V19.0478Z"
                                  className="fill-current	text-secondary-900 group-hover:text-primary-900 transition-colors duration-300 ease-linear"
                                />
                                <path
                                  d="M22.3868 17.4282C22.2261 17.4281 22.0689 17.4754 21.9352 17.5643C21.8015 17.6531 21.6972 17.7795 21.6355 17.9275C21.5738 18.0754 21.5575 18.2382 21.5887 18.3954C21.6198 18.5526 21.697 18.697 21.8105 18.8104C21.924 18.9239 22.0687 19.0012 22.2263 19.0327C22.3839 19.0642 22.5473 19.0484 22.6959 18.9874C22.8445 18.9263 22.9716 18.8227 23.0611 18.6897C23.1507 18.5566 23.1986 18.4001 23.1989 18.2399C23.1989 18.0252 23.1134 17.8192 22.9611 17.6673C22.8088 17.5154 22.6023 17.4299 22.3868 17.4297V17.4282Z"
                                  className="fill-current	text-secondary-900 group-hover:text-primary-900 transition-colors duration-300 ease-linear"
                                />
                                <path
                                  d="M25.6517 17.4282C25.491 17.4282 25.3339 17.4757 25.2003 17.5647C25.0666 17.6536 24.9625 17.7801 24.9009 17.928C24.8393 18.0759 24.8231 18.2388 24.8544 18.3959C24.8856 18.553 24.9629 18.6974 25.0764 18.8107C25.1899 18.9241 25.3346 19.0014 25.4922 19.0328C25.6498 19.0642 25.8132 19.0484 25.9617 18.9873C26.1103 18.9262 26.2373 18.8226 26.3268 18.6896C26.4163 18.5566 26.4642 18.4001 26.4645 18.2399C26.4645 18.025 26.3789 17.819 26.2265 17.667C26.074 17.5151 25.8673 17.4297 25.6517 17.4297V17.4282Z"
                                  className="fill-current	text-secondary-900 group-hover:text-primary-900 transition-colors duration-300 ease-linear"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0">
                                  <rect width="35" height="38" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>

                          <div>
                            <div className="font-heading text-xl text-secondary-900 group-hover:text-primary-900 font-semibold mb-0 leading-none transition-colors duration-300 ease-linear">
                              Dialysis Clinic
                            </div>
                          </div>
                        </button>

                        <button
                          className="group border border-solid border-gray-300 bg-transparent hover:border-primary-900 rounded-md p-4 md:px-6 md:py-8 cursor-pointer text-center transition-colors duration-300 ease-linear"
                          onClick={showNephrologyLocations}
                        >
                          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-5">
                            <svg
                              width="43"
                              height="38"
                              viewBox="0 0 43 38"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clip-path="url(#clip1)">
                                <path
                                  d="M30.8005 17.7666H26.8633C26.7297 17.7666 26.6015 17.8193 26.507 17.9131C26.4125 18.007 26.3594 18.1342 26.3594 18.2669V22.4897H22.1064C21.9728 22.4897 21.8446 22.5424 21.7501 22.6363C21.6556 22.7301 21.6025 22.8573 21.6025 22.99V26.8993C21.6025 27.032 21.6556 27.1592 21.7501 27.2531C21.8446 27.3469 21.9728 27.3996 22.1064 27.3996H26.3594V31.6241C26.3594 31.7567 26.4125 31.884 26.507 31.9778C26.6015 32.0717 26.7297 32.1244 26.8633 32.1244H30.8005C30.9341 32.1244 31.0623 32.0717 31.1568 31.9778C31.2513 31.884 31.3044 31.7567 31.3044 31.6241V27.3996H35.5574C35.691 27.3996 35.8192 27.3469 35.9137 27.2531C36.0082 27.1592 36.0613 27.032 36.0613 26.8993V22.99C36.0613 22.8573 36.0082 22.7301 35.9137 22.6363C35.8192 22.5424 35.691 22.4897 35.5574 22.4897H31.3044V18.2669C31.3044 18.1342 31.2513 18.007 31.1568 17.9131C31.0623 17.8193 30.9341 17.7666 30.8005 17.7666ZM35.0535 23.4904V26.3989H30.8005C30.6669 26.3989 30.5387 26.4517 30.4442 26.5455C30.3497 26.6393 30.2966 26.7666 30.2966 26.8993V31.1237H27.3672V26.8993C27.3672 26.7666 27.3141 26.6393 27.2196 26.5455C27.1251 26.4517 26.997 26.3989 26.8633 26.3989H22.6103V23.4904H26.8633C26.997 23.4904 27.1251 23.4377 27.2196 23.3438C27.3141 23.25 27.3672 23.1227 27.3672 22.99V18.7673H30.2966V22.99C30.2966 23.1227 30.3497 23.25 30.4442 23.3438C30.5387 23.4377 30.6669 23.4904 30.8005 23.4904H35.0535Z"
                                  className="fill-current	text-secondary-900 group-hover:text-primary-900 transition-colors duration-300 ease-linear"
                                />
                                <path
                                  d="M42.9597 9.99531L38.7605 0.300602C38.7216 0.21048 38.657 0.13367 38.5746 0.0797079C38.4922 0.0257459 38.3956 -0.0029888 38.2969 -0.0029296H4.70312C4.6044 -0.0029888 4.50784 0.0257459 4.42542 0.0797079C4.343 0.13367 4.27836 0.21048 4.23953 0.300602L0.0403121 9.99531C0.0155251 10.0581 0.00188609 10.1247 0 10.1921V12.9473C0 16.0059 4.0934 17.1167 5.75293 14.615C6.97574 16.4629 9.78418 16.4596 11.002 14.615C12.2248 16.4629 15.0332 16.4596 16.251 14.615C17.4738 16.4629 20.2822 16.4612 21.5 14.615C22.7228 16.4629 25.5312 16.4596 26.749 14.615C27.9718 16.4629 30.7803 16.4596 31.998 14.615C33.2024 16.4345 36.0075 16.4879 37.2471 14.615C38.91 17.1283 43 15.9976 43 12.9473V10.1954C42.9984 10.1269 42.9848 10.0592 42.9597 9.99531ZM5.03906 1.00107H37.9609L41.7268 9.69512H1.26984L5.03906 1.00107ZM1.00781 12.9506V10.6958H5.24902V12.9506C5.24902 15.6824 1.00781 15.6807 1.00781 12.9506ZM6.25684 12.9506V10.6958H10.498V12.9506C10.498 15.6824 6.25684 15.6807 6.25684 12.9506ZM11.5059 12.9506V10.6958H15.7471V12.9506C15.7471 15.6824 11.5059 15.6807 11.5059 12.9506ZM16.7549 12.9506V10.6958H20.9961V12.9506C20.9961 15.6824 16.7549 15.6807 16.7549 12.9506ZM22.0039 12.9506V10.6958H26.2451V12.9506C26.2451 15.6824 22.0039 15.6807 22.0039 12.9506ZM27.2529 12.9506V10.6958H31.4941V12.9506C31.4941 15.6824 27.2529 15.6807 27.2529 12.9506ZM32.502 12.9506V10.6958H36.7432V12.9506C36.7432 15.6824 32.502 15.6807 32.502 12.9506ZM41.9922 12.9506C41.9922 15.6824 37.751 15.6807 37.751 12.9506V10.6958H41.9922V12.9506Z"
                                  className="fill-current	text-secondary-900 group-hover:text-primary-900 transition-colors duration-300 ease-linear"
                                />
                                <path
                                  d="M16.2511 20.6218H10.0127C9.87905 20.6218 9.75088 20.6745 9.65638 20.7684C9.56188 20.8622 9.50879 20.9895 9.50879 21.1222V30.0947C9.50879 30.2274 9.56188 30.3547 9.65638 30.4485C9.75088 30.5423 9.87905 30.5951 10.0127 30.5951H16.2511C16.3847 30.5951 16.5129 30.5423 16.6074 30.4485C16.7019 30.3547 16.755 30.2274 16.755 30.0947V21.1222C16.755 20.9895 16.7019 20.8622 16.6074 20.7684C16.5129 20.6745 16.3847 20.6218 16.2511 20.6218ZM15.7471 29.5944H10.5166V21.6225H15.7471V29.5944Z"
                                  className="fill-current	text-secondary-900 group-hover:text-primary-900 transition-colors duration-300 ease-linear"
                                />
                                <path
                                  d="M41.1719 37.001H39.7441V17.2447C39.7441 17.112 39.6911 16.9848 39.5966 16.8909C39.5021 16.7971 39.3739 16.7444 39.2402 16.7444C39.1066 16.7444 38.9784 16.7971 38.8839 16.8909C38.7894 16.9848 38.7363 17.112 38.7363 17.2447V36.9844H19.3796V18.2671C19.3796 18.1344 19.3265 18.0071 19.232 17.9133C19.1375 17.8194 19.0093 17.7667 18.8757 17.7667H7.49414C7.3605 17.7667 7.23233 17.8194 7.13782 17.9133C7.04332 18.0071 6.99023 18.1344 6.99023 18.2671V36.9844H4.26242V17.4332C4.26242 17.3005 4.20933 17.1732 4.11483 17.0794C4.02033 16.9856 3.89216 16.9328 3.75852 16.9328C3.62487 16.9328 3.4967 16.9856 3.4022 17.0794C3.3077 17.1732 3.25461 17.3005 3.25461 17.4332V37.001H1.86719C1.73354 37.001 1.60537 37.0538 1.51087 37.1476C1.41637 37.2414 1.36328 37.3687 1.36328 37.5014C1.36328 37.6341 1.41637 37.7613 1.51087 37.8552C1.60537 37.949 1.73354 38.0017 1.86719 38.0017H41.1719C41.3055 38.0017 41.4337 37.949 41.5282 37.8552C41.6227 37.7613 41.6758 37.6341 41.6758 37.5014C41.6758 37.3687 41.6227 37.2414 41.5282 37.1476C41.4337 37.0538 41.3055 37.001 41.1719 37.001ZM7.99805 18.7674H18.3718V36.9844H7.99805V18.7674Z"
                                  className="fill-current	text-secondary-900 group-hover:text-primary-900 transition-colors duration-300 ease-linear"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip1">
                                  <rect width="43" height="38" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>

                          <div>
                            <div className="font-heading text-xl text-secondary-900 group-hover:text-primary-900 font-semibold mb-0 leading-none transition-colors duration-300 ease-linear">
                              Nephrology Office
                            </div>
                          </div>
                        </button>
                      </div>

                      <p
                        className={`font-heading text-3xl text-black font-semibold ${setDisalysisLocations}`}
                      >
                        Choose a Location
                      </p>
                      <p
                        className={`font-heading text-3xl text-black font-semibold ${setNephrologyLocations}`}
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
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M9 10.8333C10.3807 10.8333 11.5 9.71396 11.5 8.33325C11.5 6.95254 10.3807 5.83325 9 5.83325C7.61929 5.83325 6.5 6.95254 6.5 8.33325C6.5 9.71396 7.61929 10.8333 9 10.8333Z"
                              className="stroke-current	text-secondary-900 group-hover:text-primary-900 transition-colors duration-300 ease-linear"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
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
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M9 10.8333C10.3807 10.8333 11.5 9.71396 11.5 8.33325C11.5 6.95254 10.3807 5.83325 9 5.83325C7.61929 5.83325 6.5 6.95254 6.5 8.33325C6.5 9.71396 7.61929 10.8333 9 10.8333Z"
                              className="stroke-current	text-secondary-900 group-hover:text-primary-900 transition-colors duration-300 ease-linear"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
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
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M9 10.8333C10.3807 10.8333 11.5 9.71396 11.5 8.33325C11.5 6.95254 10.3807 5.83325 9 5.83325C7.61929 5.83325 6.5 6.95254 6.5 8.33325C6.5 9.71396 7.61929 10.8333 9 10.8333Z"
                              className="stroke-current	text-secondary-900 group-hover:text-primary-900 transition-colors duration-300 ease-linear"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
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
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M9 10.8333C10.3807 10.8333 11.5 9.71396 11.5 8.33325C11.5 6.95254 10.3807 5.83325 9 5.83325C7.61929 5.83325 6.5 6.95254 6.5 8.33325C6.5 9.71396 7.61929 10.8333 9 10.8333Z"
                              className="stroke-current	text-secondary-900 group-hover:text-primary-900 transition-colors duration-300 ease-linear"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
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
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M9 10.8333C10.3807 10.8333 11.5 9.71396 11.5 8.33325C11.5 6.95254 10.3807 5.83325 9 5.83325C7.61929 5.83325 6.5 6.95254 6.5 8.33325C6.5 9.71396 7.61929 10.8333 9 10.8333Z"
                              className="stroke-current	text-secondary-900 group-hover:text-primary-900 transition-colors duration-300 ease-linear"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
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
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M9 10.8333C10.3807 10.8333 11.5 9.71396 11.5 8.33325C11.5 6.95254 10.3807 5.83325 9 5.83325C7.61929 5.83325 6.5 6.95254 6.5 8.33325C6.5 9.71396 7.61929 10.8333 9 10.8333Z"
                              className="stroke-current	text-secondary-900 group-hover:text-primary-900 transition-colors duration-300 ease-linear"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
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
