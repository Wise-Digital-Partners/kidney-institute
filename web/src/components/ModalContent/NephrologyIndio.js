import React from "react";
import Accordion from "../Accordion/Accordion";

import NephrologyIndio from "../Form/NephrologyIndio";

const ModalContent = () => {
  const dayOfWeek = new Date().getDay();
  let dayHours;

  dayOfWeek === 0 && (dayHours = "Sunday — Closed");
  dayOfWeek === 1 && (dayHours = "Monday — 8:00am - 5:00pm");
  dayOfWeek === 2 && (dayHours = "Tuesday — 8:00am - 5:00pm");
  dayOfWeek === 3 && (dayHours = "Wednesday — 8:00am - 5:00pm");
  dayOfWeek === 4 && (dayHours = "Thursday — 8:00am - 5:00pm");
  dayOfWeek === 5 && (dayHours = "Friday — 8:00am - 5:00pm");
  dayOfWeek === 6 && (dayHours = "Saturday — Closed");

  return (
    <>
      <p className="font-heading text-xl text-secondary-900 font-semibold mb-8">
        Coachella Valley Nephrology - Indio
      </p>

      <div className="grid md:grid-cols-2 md:gap-x-18 gap-y-4 text-sm mb-8">
        <div>
          <div className="mb-4">
            <div className="font-bold text-secondary-900 mb-1">Address</div>
            <a
              href="https://goo.gl/maps/2riR8mrR8jwc1mFw9"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-900"
            >
              <address className="not-italic">
                81-719 Dr Carreon Blvd, Suite A Indio, CA 92201
              </address>
            </a>
          </div>
          <div>
            <div className="font-bold text-secondary-900 mb-1">
              Phone Number
            </div>
            <a href="tel:+760-360-4433" className="hover:text-primary-900">
              (760) 360-4433
            </a>
          </div>
        </div>

        <div>
          <div className="font-bold text-secondary-900 mb-1">
            Business Hours
          </div>

          <Accordion title={dayHours}>
            <div className="flex flex-col space-y-1 max-w-[210px]">
              <div className="flex justify-between space-x-1">
                <div>
                  <b className="text-secondary-900">Monday</b>
                </div>
                <div>8:00am - 5:00pm</div>
              </div>
              <div className="flex justify-between space-x-1">
                <div>
                  <b className="text-secondary-900">Tuesday</b>
                </div>
                <div>8:00am - 5:00pm</div>
              </div>
              <div className="flex justify-between space-x-1">
                <div>
                  <b className="text-secondary-900">Wednesday</b>
                </div>
                <div>8:00am - 5:00pm</div>
              </div>
              <div className="flex justify-between space-x-1">
                <div>
                  <b className="text-secondary-900">Thursday</b>
                </div>
                <div>8:00am - 5:00pm</div>
              </div>
              <div className="flex justify-between space-x-1">
                <div>
                  <b className="text-secondary-900">Friday</b>
                </div>
                <div>8:00am - 5:00pm</div>
              </div>
              <div className="flex justify-between space-x-1">
                <div>
                  <b className="text-secondary-900">Saturday</b>
                </div>
                <div>Closed</div>
              </div>
              <div className="flex justify-between space-x-1">
                <div>
                  <b className="text-secondary-900">Sunday</b>
                </div>
                <div>Closed</div>
              </div>
            </div>
          </Accordion>
        </div>
      </div>

      <NephrologyIndio />
    </>
  );
};

export default ModalContent;
