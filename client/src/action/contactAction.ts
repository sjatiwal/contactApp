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
import { Dispatch } from "redux";

import backend from "../helper/axios";

// register new contact
export const register =
  (firstName: string, lastName: string, status: string) =>
  async (dispatch: Dispatch) => {
    try {
      dispatch({ type: REGISTER_CONTACT_REQUEST });
      const config: any = { header: { "Content-Type": "multipart/form-data" } };

      const { data } = await backend.post(
        `/api/v1/contact/save`,
        { firstName, lastName, status },
        config
      );

      dispatch({ type: REGISTER_CONTACT_SUCCESS, payload: data.contact });
    } catch (error: any) {
      dispatch({
        type: REGISTER_CONTACT_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Get All Contact
export const getAllContact = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: ALL_CONTACT_REQUEST });
    const config: any = { header: { "Content-Type": "multipart/form-data" } };

    const { data } = await backend.get(`/api/v1/contact/all`, config);

    dispatch({ type: ALL_CONTACT_SUCCESS, payload: data.contact });
  } catch (error: any) {
    dispatch({
      type: ALL_CONTACT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get Contact Details
export const getContactDetail = (id: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: CONTACT_DETAILS_REQUEST });

    const { data } = await backend.get(`/api/v1/contact/${id}`);

    dispatch({ type: CONTACT_DETAILS_SUCCESS, payload: data.contact });
  } catch (error: any) {
    dispatch({
      type: CONTACT_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Edit Contact
export const editSavedContact =
  (id: string, firstName: string, lastName: string, status: string) =>
  async (dispatch: Dispatch) => {
    try {
      dispatch({ type: EDIT_CONTACT_REQUEST });
      const config = {
        headers: {
          "content-Type": "application/json",
        },
      };

      const { data } = await backend.put(
        `/api/v1/contact/update/${id}`,
        {
          firstName,
          lastName,
          status,
        },
        config
      );

      dispatch({ type: EDIT_CONTACT_SUCCESS, payload: data.contact });
    } catch (error) {
      dispatch({
        type: EDIT_CONTACT_FAIL,
        payload: error,
      });
    }
  };

// Delete Contact
export const deleteContact = (id: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: DELETE_CONTACT_REQUEST });
    const config: any = { header: { "Content-Type": "multipart/form-data" } };

    const { data } = await backend.delete(
      `/api/v1/contact/delete/${id}`,

      config
    );

    dispatch({ type: DELETE_CONTACT_SUCCESS, payload: data.message });
  } catch (error: any) {
    dispatch({
      type: DELETE_CONTACT_FAIL,
      payload: error.response.data.message,
    });
  }
};
