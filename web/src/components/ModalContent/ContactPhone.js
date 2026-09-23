import React from "react";
import contactPhone from "../../images/Locations/Icons/contact-phone.svg";

function ContactPhone({ label, phone }) {
  const telHref = `tel:${phone.replace(/[^\d+]/g, "")}`;

  return (
    <div className="flex gap-x-2">
      <img src={contactPhone} alt="" width={16} height={16} />
      <div className="text-sm">
        {label}:{" "}
        <a href={telHref} className="hover:text-primary-900">
          {phone}
        </a>
      </div>
    </div>
  );
}

export default ContactPhone;
