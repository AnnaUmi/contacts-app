import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from "../types";
const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Anna",
        email: "anna_umi@mail.ua",
        phone: "1111111",
        type: "personal"
      },
      {
        id: 2,
        name: "Anna2",
        email: "anna_umi2@mail.ua",
        phone: "11111112",
        type: "personal"
      },
      {
        id: 3,
        name: "Anna3",
        email: "anna_umi3@mail.ua",
        phone: "11111113",
        type: "professional"
      }
    ],
    current: null,
    filtered: null
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);
  //Add contact
  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  // Delete contect
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };
  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  const updateContact = contact => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };
  const filterContact = text => {
    dispatch({ type: FILTER_CONTACTS, payload: text });
  };
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };
  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContact,
        clearFilter
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};
export default ContactState;
