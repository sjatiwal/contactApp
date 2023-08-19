import React, { useState } from "react";
import { useAppDispatch } from "../helper/hooks";
import { register } from "../action/contactAction";
import { useNavigate } from "react-router-dom";
const CreateContact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [status, setStatus] = useState("");

  const [fillFirstName, setfillFirstName] = useState(false);
  const [fillLastName, setfillLastName] = useState(false);
  const [fillStatus, setfillStatus] = useState(false);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const saveContact = (e: React.FormEvent) => {
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
    if (firstName !== "" && lastName !== "" && status !== "") {
      dispatch(register(firstName, lastName, status));
      navigate("/");
    }
  };
  return (
    <div className="md:ml-36 h-[calc(100vh-5rem)] overflow-scroll bg-slate-300 flex flex-col items-center ">
      <div className="mt-10 text-2xl">Create Contact</div>

      <form
        className="border-2 border-black bg-white pb-2 w-[400px] flex flex-col items-center mt-10 overflow-scroll"
        onSubmit={saveContact}
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
                onChange={(e) => [
                  setStatus(e.target.value),
                  setfillStatus(false),
                ]}
              />
              <span className="ml-2">Active</span>
            </div>
            <div>
              <input
                type="radio"
                name="status"
                value="inactive"
                onChange={(e) => setStatus(e.target.value)}
              />
              <span className="ml-2">Inactive</span>
            </div>
          </div>
        </div>
        {fillStatus && <div className="text-red-500">Please Fill Status</div>}
        <div className="mt-2">
          <input
            type="submit"
            value="Save Contact"
            className="bg-slate-400 px-2 py-1 border-2 border-black"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateContact;
