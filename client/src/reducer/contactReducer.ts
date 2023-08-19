import {
  REGISTER_CONTACT_REQUEST,
  REGISTER_CONTACT_SUCCESS,
  REGISTER_CONTACT_FAIL,
  ALL_CONTACT_REQUEST,
  ALL_CONTACT_SUCCESS,
  ALL_CONTACT_FAIL,
  DELETE_CONTACT_REQUEST,
  DELETE_CONTACT_SUCCESS,
  DELETE_CONTACT_FAIL,
  EDIT_CONTACT_REQUEST,
  EDIT_CONTACT_SUCCESS,
  EDIT_CONTACT_FAIL,
  CONTACT_DETAILS_REQUEST,
  CONTACT_DETAILS_SUCCESS,
  CONTACT_DETAILS_FAIL,
} from "../constant/contactConstant";
import { PayloadAction } from "@reduxjs/toolkit";

interface Contact {
  _id: string;
  firstName: string;
  lastName: string;
  status: string;
}

interface ContactState {
  loading: boolean;
  error?: string | null;
  contact?: Contact | null;
  contacts?: Contact[];
  isUpdated?: boolean;
  isDeleted?: boolean;
}

export const contactReducer = (
  state: ContactState = { contact: null, loading: false },
  action: PayloadAction<Contact>
) => {
  switch (action.type) {
    case REGISTER_CONTACT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_CONTACT_SUCCESS:
      return {
        ...state,
        loading: false,
        contact: action.payload,
      };
    case REGISTER_CONTACT_FAIL:
      return {
        ...state,
        loading: false,
        contact: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const allContactReducer = (
  state: ContactState = { contacts: [], loading: false },
  action: PayloadAction<Contact | string>
) => {
  switch (action.type) {
    case ALL_CONTACT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ALL_CONTACT_SUCCESS:
      return {
        loading: false,
        contacts: action.payload,
      };

    case ALL_CONTACT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

const initialContact: Contact = {
  _id: "",
  firstName: "",
  lastName: "",
  status: "",
};

export const contactDetailsReducer = (
  state: ContactState = { contact: initialContact, loading: false },
  action: PayloadAction<Contact>
) => {
  switch (action.type) {
    case CONTACT_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CONTACT_DETAILS_SUCCESS:
      return {
        loading: false,
        contact: action.payload,
      };
    case CONTACT_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const updateContactReducer = (
  state: ContactState = { loading: false },
  action: PayloadAction<Contact>
) => {
  switch (action.type) {
    case EDIT_CONTACT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case EDIT_CONTACT_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    case EDIT_CONTACT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const deleteContact = (state = {}, action: PayloadAction<Contact>) => {
  switch (action.type) {
    case DELETE_CONTACT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_CONTACT_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };
    case DELETE_CONTACT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
