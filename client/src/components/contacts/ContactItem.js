import React, { useContext } from "react";
import PropTypes from "prop-types";
import ContactContext from "../../context/contact/contactContext";

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;
  const { id, name, email, phone, type } = contact;
  const onDelete = () => {
    deleteContact(id);
    clearCurrent();
  };
  return (
    <div className="contact-card">
      <h2 className="contact-card__name">{name}</h2>
      <div
        className={`contact-card__type-${
          type == "professional" ? "prof" : "normal"
        }`}
      >
        {type.charAt(0).toUpperCase() + type.slice(1)}
        <ul className="contact-card-list">
          {email && <li className="fas fa-envelope-open">{email}</li>}
          {phone && <li className="fas fa-phone">{phone}</li>}
        </ul>
        <div>
          <button onClick={() => setCurrent(contact)}>Edit</button>
          <button onClick={onDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
};
ContactItem.propTypes = {
  contact: PropTypes.object
};
export default ContactItem;
