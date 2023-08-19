import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../helper/hooks";
import { getAllContact } from "../action/contactAction";
import { RiCloseFill } from "react-icons/ri";
import Table from "../component/table";

const NewContact = () => {
  const dispatch = useAppDispatch();
  const { contacts } = useAppSelector((state) => state.contacts);

  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    dispatch(getAllContact());
  }, [deleted, dispatch]);
  useEffect(() => {
    dispatch(getAllContact());
  }, []);

  const header = [
    {
      name: "FirstName",
      data: "firstName",
    },
    {
      name: "LastName",
      data: "lastName",
    },
    {
      name: "Status",
      data: "status",
    },
  ];

  interface TableRowData {
    _id: string;
    firstName: string;
    lastName: string;
    status: string;
  }

  const rows: TableRowData[] = [];

  contacts &&
    (contacts as TableRowData[])?.forEach((item: TableRowData) => {
      rows.push({
        _id: item._id,
        firstName: item.firstName,
        lastName: item.lastName,
        status: item.status,
      });
    });

  return (
    <div className="md:ml-36  h-[calc(100vh-5rem)] overflow-scroll">
      <div className="flex justify-center items-center h-1/2 ">
        <Link to="/createContact">
          <div className="p-4 bg-slate-300 border-2 border-black">
            Create Contact
          </div>
        </Link>
      </div>
      <div className="flex justify-center items-center h-1/4">
        <div className="overflow-scroll">
          {contacts && (contacts as TableRowData[])?.length > 0 ? (
            <Table header={header} rows={rows} setDeleted={setDeleted} />
          ) : (
            <div className="py-4 flex bg-slate-300 border-2 border-black justify-center items-center">
              <RiCloseFill className="text-2xl" />
              <div className="ml-5 w-[70%]">
                No Contact Found Please add contact from Create Contact Button.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewContact;
