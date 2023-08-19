import { combineReducers } from "@reduxjs/toolkit";

// import reducers
import {
  contactReducer,
  allContactReducer,
  deleteContact,
  updateContactReducer,
  contactDetailsReducer,
} from "../reducer/contactReducer";

export const reducers = combineReducers({
  contact: contactReducer,
  contacts: allContactReducer,
  deleteContact: deleteContact,
  updateContact: updateContactReducer,
  contactDetails: contactDetailsReducer,
});
