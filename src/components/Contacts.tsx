import React from "react";
import WriteMeForm from "./UI/WriteMeForm";
import ContactsList from "./UI/ContactsList";

const Contacts = () => {
  return (
    <div className="contacts">
      <div className="contacts-content container">
        <WriteMeForm />
        <ContactsList />
      </div>
    </div>
  );
};

export default Contacts;
