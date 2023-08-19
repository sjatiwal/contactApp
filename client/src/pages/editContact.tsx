import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../helper/hooks";
import { useParams, useNavigate } from "react-router-dom";
import { editSavedContact, getContactDetail } from "../action/contactAction";

const EditContact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [status, setStatus] = useState("");

  const [fillFirstName, setfillFirstName] = useState(false);
  const [fillLastName, setfillLastName] = useState(false);
  const [fillStatus, setfillStatus] = useState(false);

  const { contact } = useAppSelector((state) => state.contactDetails);
  const { id } = useParams<{ id?: string }>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (id && contact !== null && contact !== undefined) {
      if (contact && contact["_id"] !== id) {
        dispatch(getContactDetail(id));
      } else {
        setFirstName(contact["firstName"]);
        setLastName(contact["lastName"]);
        setStatus(contact["status"]);
      }
    }
  }, [contact, dispatch, id]);

  const updateContact = (e: any) => {
    e.preventDefault();
    if (firstName === "") {
      setfillFirstName(true);
    }
    if (lastName === "") {
      setfillLastName(true);
    }
    if (status === "") {
      setfillStatus(true);
    }
    if (id && firstName !== "" && lastName !== "" && status !== "") {
      dispatch(editSavedContact(id, firstName, lastName, status));
      navigate("/");
    }
  };
  return (
    <div className="md:ml-36 h-[calc(100vh-5rem)] overflow-scroll bg-slate-300 flex flex-col items-center ">
      <div className="mt-10 text-2xl">Create Contact</div>

      <form
        className="border-2 border-black bg-white pb-2 w-[400px] flex flex-col items-center mt-10 overflow-scroll"
        onSubmit={updateContact}
      >
        <div className="mt-8">
          First Name:
          <input
            className="border-2 border-black ml-2 px-2"
            value={firstName}
            onChange={(e) => [
              setFirstName(e.target.value),
              setfillFirstName(false),
            ]}
          />
        </div>
        {fillFirstName && (
          <div className="text-red-500">Please Enter FirstName</div>
        )}
        <div className="mt-4">
          Last Name:
          <input
            className="border-2 border-black ml-2 px-2"
            value={lastName}
            onChange={(e) => [
              setLastName(e.target.value),
              setfillLastName(false),
            ]}
          />
        </div>
        {fillLastName && (
          <div className="text-red-500">Please Enter LastName</div>
        )}
        <div className="mt-4 flex w-60 relative h-20">
          <div className="absolute mt-2">Status:</div>
          <div className="flex flex-col absolute right-20">
            <div>
              <input
                type="radio"
                name="status"
                value="active"
                checked={status === "active"}
                onChange={(e) => setStatus(e.target.value)}
              />
              <span className="ml-2">Active</span>
            </div>
            <div>
              <input
                type="radio"
                name="status"
                value="inactive"
                checked={status === "inactive"}
                onChange={(e) => setStatus(e.target.value)}
              />
              <span className="ml-2">Inactive</span>
            </div>
          </div>
          {fillStatus && <div className="text-red-500">Please Fill Status</div>}
        </div>
        <div>
          <input
            type="submit"
            value="Save Edited Contact"
            className="bg-slate-400 px-2 py-1 border-2 border-black"
          />
        </div>
      </form>
    </div>
  );
};

export default EditContact;
