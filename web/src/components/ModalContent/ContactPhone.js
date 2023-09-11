import React from "react";
import contactPhone from "../../images/Locations/Icons/contact-phone.svg";

function ContactPhone({ text }) {
  return (
    <div className="flex gap-x-2">
      <img src={contactPhone} alt="" width={16} height={16} />
      <div className="text-sm">{text}</div>
    </div>
  );
}

export default ContactPhone;
