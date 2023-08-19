import React, { Dispatch, SetStateAction } from "react";
import { useAppDispatch } from "../helper/hooks";
import { deleteContact, getContactDetail } from "../action/contactAction";
import { Link } from "react-router-dom";

interface TableHeaderItem {
  name: string;
  data: string;
}

interface TableRowData {
  _id: string;
  firstName: string;
  lastName: string;
  status: string;
}

interface TableProps {
  header: TableHeaderItem[];
  rows: TableRowData[];

  setDeleted: Dispatch<SetStateAction<boolean>>;
}

function Table({ header, rows, setDeleted }: TableProps) {
  const dispatch = useAppDispatch();
  const deletedContact = (_id: string) => {
    dispatch(deleteContact(_id));
    setDeleted((prev) => !prev);
  };
  return (
    <>
      <table className="min-w-max">
        <thead>
          <tr>
            {header.map((item) => {
              return (
                <th key={item.name} className="border-2 border-black px-3">
                  {item.name}
                </th>
              );
            })}
            <th className="border-2 border-black px-3">Edit</th>
            <th className="border-2 border-black px-3">Delete</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((data) => {
            return (
              <tr key={data.firstName}>
                {header.map((item) => {
                  return (
                    <td
                      key={item.data}
                      className="border-2 py-1 border-black px-2"
                    >
                      {data[item.data as keyof TableRowData]}
                    </td>
                  );
                })}
                <td className="border-2 py-1 border-black px-2">
                  <Link
                    to={`/editContact/${data._id}`}
                    onClick={() => dispatch(getContactDetail(data._id))}
                  >
                    Edit
                  </Link>
                </td>
                <td className="border-2 py-1 border-black px-2">
                  <button onClick={() => deletedContact(data._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Table;
