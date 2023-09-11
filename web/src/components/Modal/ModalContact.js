import React, { useState, useEffect } from "react";
import MicroModal from "micromodal";
import styled from "@emotion/styled";
import tw from "twin.macro";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import LocationSwitch from "../ModalContent/LocationSwitch/LocationSwitch";
import LocationContainer from "../ModalContent/LocationContainer";
import { dialysisData, nephrologyData } from "./ModalData";
import ContactPhone from "../ModalContent/ContactPhone";
import {
  isDialysisActive,
  isNephrologyActive,
  isNoneActive,
} from "../ModalContent/Helpers";
import FormSelector from "../ModalContent/FormSelector/FormSelector";
import LocationHeader from "../ModalContent/LocationHeader";

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

  const [currentOption, setCurrentOption] = useState("");
  const [currentForm, setCurrentForm] = useState("");
  const [setModalContent, setModalContentState] = useState("block");

  useEffect(() => {
    // if (currentOption === "dialysis-clinic") {
    //   showDialysisLocations();
    // } else if (currentOption === "nephrology-office") {
    //   showNephrologyLocations();
    // } else {
    //   //??
    // }
  }, [currentOption]);

  const handleBack = () => {
    if (isDialysisActive(currentOption)) {
      if (currentForm !== "") {
        setCurrentForm("");
      } else {
        setCurrentOption("");
      }
    } else if (isNephrologyActive(currentOption)) {
      if (currentForm !== "") {
        setCurrentForm("");
      } else {
        setCurrentOption("");
      }
    }
  };

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
              {/* <div className={`flex space-x-6 md:space-x-8`}></div> */}

              {/* <button
                onClick={showServiceCards}
                className={`text-secondary-900 hover:text-secondary-900 group-hover:text-primary-900 font-semibold text-xs md:text-sm no-underline flex items-center space-x-2 ${setDialysisBack1}`}
              >
                <i className="far fa-arrow-left text-primary-900"></i>
                <span>Go Back</span>
              </button> */}
              {isNoneActive(currentOption) && (
                <div className="flex gap-x-8 justify-start w-full">
                  <ContactPhone text="For Dialysis: (123) 456-7890" />
                  <ContactPhone text="For Nephrology: (123) 456-7890" />
                </div>
              )}
              {!isNoneActive(currentOption) && (
                <button
                  onClick={handleBack}
                  className={`text-secondary-900 hover:text-secondary-900 group-hover:text-primary-900 font-semibold text-xs md:text-sm no-underline flex items-center space-x-2 self-start justify-self-start`}
                >
                  <i className="far fa-arrow-left text-primary-900"></i>
                  <span>Go Back</span>
                </button>
              )}

              <i
                className="close fal fa-times text-xl text-secondary-900 hover:text-primary-900 cursor-pointer transition-all duration-300 ease-linear"
                data-modal-close
              ></i>
            </div>

            <div className="pt-8 px-6 md:px-18 pb-24">
              <FormSelector currentForm={currentForm} />
              <div className={`${setModalContent}`}>
                {isNoneActive(currentOption) && (
                  <>
                    <div className="mb-7 md:mb-8 text-center">
                      <p className="font-body text-mobile-4xl md:text-4xl text-gray-900 font-bold mb-3">
                        Contact Us
                      </p>
                      <p className="text-sm">
                        If you're currently on dialysis, please select Dialysis
                        Clinic to view the locations where we offer treatment.
                        If youre not on dialysis, select Nephrology Office to
                        schedule an appointment with one of our kidney doctors.
                      </p>
                    </div>
                    <LocationSwitch setCurrentOption={setCurrentOption} />
                  </>
                )}
                <StyledTabs>
                  <Tabs
                  // selectedIndex={0}
                  // onSelect={(index) => setTabIndex(index)}
                  >
                    {/* <TabList>
                      <Tab>Dialysis Clinic</Tab>
                      <Tab>Nephrology Office</Tab>
                    </TabList> */}
                    {isDialysisActive(currentOption) && (
                      <TabPanel>
                        <LocationHeader
                          title="Dialysis"
                          copyText="Are you looking to transfer to a new clinic or need a transient facility while visiting our area? We have four locations to serve you."
                        />
                        <LocationContainer
                          locationItems={dialysisData}
                          setCurrentForm={setCurrentForm}
                        />
                      </TabPanel>
                    )}
                    {isNephrologyActive(currentOption) && (
                      <TabPanel>
                        <LocationHeader
                          title="Nephrology"
                          copyText="Our nephrologists are specialists in both the diagnosis and treatment of kidney disease. To schedule an appointment, select a location near you."
                        />
                        <LocationContainer
                          locationItems={nephrologyData}
                          setCurrentForm={setCurrentForm}
                        />
                      </TabPanel>
                    )}
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
