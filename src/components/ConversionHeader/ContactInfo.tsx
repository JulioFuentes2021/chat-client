import React from "react";
import ContactHeader from "../GlobalComponents/ContactHeader";
import WhiteButton from "../Buttons/WhiteButton";
import ColorButton from "../Buttons/ColorButton";
import IconButton from "../Buttons/IconButton";

const ContactInfo = () => {
  return (
    <div className="flex items-center justify-between">
      <ContactHeader />
      <div className="sm:flex items-center gap-5 hidden">
        <IconButton text="Call" />
        <WhiteButton text="Archive" />
        <ColorButton text="View Profile" />
      </div>
      <span className="sm:hidden">Icon</span>
    </div>
  );
};

export default ContactInfo;
