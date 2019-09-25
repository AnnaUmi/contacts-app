import React from "react";
import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";
import ContactFilter from "../contacts/ContactFilter";

const Home = () => {
  return (
    <div>
      <ContactFilter />
      <Contacts />
      <ContactForm />
    </div>
  );
};

export default Home;
