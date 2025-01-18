/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

interface Header {
  name: string;
  isSort: boolean;
  isLink?: boolean;
  isCheckbox?: boolean;
}

interface DataTableProps {
  headers: Header[];
  data: any;
}

const getStatusLabel = (status: string): any => {
  switch (status) {
    case "active":
      return (
        <div className="py-2 px-6 w-fit flex justify-center items-center gap-2 rounded-full text-green-100 bg-green-200">
          <div className="h-2 w-2 rounded-full bg-green-100"></div>
          Active
        </div>
      );
    case "payroll_only":
      return (
        <div className="py-2 px-6 w-fit flex justify-center items-center gap-2 rounded-full text-gray-600 bg-gray-1200">
          <div className="h-2 w-2 rounded-full bg-gray-600"></div>
          Payroll Only
        </div>
      );
    case "invite_sent":
      return (
        <div className="py-2 px-6 w-fit flex justify-center items-center gap-2 rounded-full text-purple-100 bg-purple-200">
          <div className="h-2 w-2 rounded-full bg-purple-100"></div>
          Invite Sent
        </div>
      );
    default:
      return "Unknown";
  }
};

const DataTable: React.FC<DataTableProps> = ({ headers, data }) => {
  return (
    <table className="max-h-full h-fit w-full bg-white overflow-auto rounded-xl">
      <thead className="sticky top-0 left-0">
        <tr className="rounded-e-xl bg-gray-1000 h-[56px]">
          {headers.map((header, index) => (
            <th
              key={index}
              className={`px-4 py-3 text-gray-600 border-b border-gray-500 text-left font-normal`}
            >
              {header.isCheckbox ? (
                <div className="flex w-[50px] justify-center items-center">
                  <input className="w-[18px] h-[18px]" type="checkbox" />
                </div>
              ) : (
                header.name
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="">
        {data.map((row: any, rowIndex: number) => (
          <tr key={rowIndex} className="">
            {headers.map((header, colIndex) => (
              <td
                key={colIndex}
                className={`px-4 py-2 ${
                  rowIndex === data.length - 1 ? "" : "border-b"
                } ${
                  header.isLink ? "underline text-green-100 cursor-pointer" : ""
                } border-gray-500 text-sm font-semibold`}
              >
                {header.isCheckbox ? (
                  <div className="flex w-[50px] justify-center items-center">
                    <input className="w-[18px] h-[18px]" type="checkbox" />
                  </div>
                ) : header.name === "Status" ? (
                  getStatusLabel(row[header.name] as string)
                ) : (
                  row[header.name]
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
