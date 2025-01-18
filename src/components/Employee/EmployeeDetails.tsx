/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import V2Chart from "../V2Chart";
import DataTable from "../DataTable";
import searchIcon from "../../../public/assets/icons/search_icon.svg";
import Dropdown from "../Dropdown";

const EmployeeDetails = () => {
  const nationalityData = [
    { name: "Singaporean", value: 25, color: "#02B9B0" },
    { name: "PR", value: 10, color: "#FAC905" },
    { name: "Foreigners", value: 10, color: "#B774FC" },
    { name: "Others", value: 6, color: "#B3BEBE" },
  ];

  const employeeStatusData = [
    { name: "Active", value: 25, color: "#02B9B0" },
    { name: "Invite Sent", value: 10, color: "#B774FC" },
    { name: "Payroll Only", value: 6, color: "#B3BEBE" },
  ];

  const employeeTypeData = [
    { name: "Full-Timer", value: 25, color: "#02B9B0" },
    { name: "Part-Timer", value: 10, color: "#FAC905" },
    { name: "Contract", value: 5, color: "#B774FC" },
    { name: "Intern", value: 6, color: "#B3BEBE" },
  ];

  const headers = [
    { name: "", isSort: false, isCheckbox: true },
    { name: "EmployeeID", isSort: true, isLink: true },
    { name: "Employee Profile", isSort: false },
    { name: "Email", isSort: true },
    { name: "Role", isSort: true },
    { name: "Status", isSort: true },
  ];

  const data = [
    {
      EmployeeID: "FHAJ3717",
      "Employee Profile": "John Doe",
      Email: "john.doe@example.com",
      Role: "Manager",
      Status: "active",
    },
    {
      EmployeeID: "FHAJ8293",
      "Employee Profile": "Jane Smith",
      Email: "jane.smith@example.com",
      Role: "HR",
      Status: "payroll_only",
    },
    {
      EmployeeID: "FHAJ5621",
      "Employee Profile": "Robert Brown",
      Email: "robert.brown@example.com",
      Role: "Developer",
      Status: "invite_sent",
    },
    {
      EmployeeID: "FHAJ4328",
      "Employee Profile": "Emily Davis",
      Email: "emily.davis@example.com",
      Role: "Designer",
      Status: "active",
    },
    {
      EmployeeID: "FHAJ2143",
      "Employee Profile": "Michael Scott",
      Email: "michael.scott@example.com",
      Role: "Sales Lead",
      Status: "active",
    },
    {
      EmployeeID: "FHAJ2143",
      "Employee Profile": "Michael Scott",
      Email: "michael.scott@example.com",
      Role: "Sales Lead",
      Status: "active",
    },
    {
      EmployeeID: "FHAJ2143",
      "Employee Profile": "Michael Scott",
      Email: "michael.scott@example.com",
      Role: "Sales Lead",
      Status: "active",
    },
    {
      EmployeeID: "FHAJ2143",
      "Employee Profile": "Michael Scott",
      Email: "michael.scott@example.com",
      Role: "Sales Lead",
      Status: "active",
    },
    {
      EmployeeID: "FHAJ2143",
      "Employee Profile": "Michael Scott",
      Email: "michael.scott@example.com",
      Role: "Sales Lead",
      Status: "active",
    },
  ];

  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedStatus, setSelectedStatus] = useState<string>("");
  const [selectedRole, setSelectedRole] = useState<string>("");

  const [tableData, setTableData] = useState<any[]>(data);

  const handleSearchOnChange = (e: any) => {
    setSearchValue(e.target.value);
  };

  const handleStatusOnChange = (value: string) => {
    if (value === "All Status") {
      setSelectedStatus("");
    } else {
      setSelectedStatus(value);
    }
  };

  const handleRoleOnChange = (value: string) => {
    console.log(value);
    if (value === "All Role") {
      setSelectedRole("");
    } else {
      setSelectedRole(value);
    }
  };

  const transformDataToChartFormat = (inputArray: any[]) => {
    return {
      labels: inputArray.map((item) => item.name),
      datasets: [
        {
          label: "Nationality",
          data: inputArray.map((item) => item.value),
          backgroundColor: inputArray.map((item) => item.color),
          borderRadius: 20,
          hoverOffset: 4,
        },
      ],
    };
  };

  useEffect(() => {
    setTableData(
      data.filter((each: any) => {
        const matchesSearch = each["Employee Profile"]
          .toLowerCase()
          .includes(searchValue.toLowerCase());

        const matchesStatus =
          selectedStatus === "" || each.Status === selectedStatus;

        const matchesRole = selectedRole === "" || each.Role === selectedRole;

        return matchesSearch && matchesStatus && matchesRole;
      })
    );
  }, [searchValue, selectedStatus, selectedRole]);

  return (
    <div className="flex flex-col w-full h-full">
      <div className="h-[190px] w-full grid grid-cols-3 gap-4">
        <div className="bg-white rounded-xl flex flex-col justify-between h-full p-4">
          <div className="flex justify-between items-start gap-8">
            <div className="flex flex-col justify-between">
              <p className="text-xs font-medium text-gray-600">Nationality</p>
              <p className="text-4xl font-bold text-gray-800">25</p>
              <p className="text-base font-semibold text-gray-800">
                Singaporeans
              </p>
            </div>
            <div className="w-[100px] h-[100px]">
              <V2Chart
                data={transformDataToChartFormat(nationalityData)}
                chartType="doughnut"
                options={{
                  cutout: "80%",
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                }}
              />
            </div>
          </div>
          <div className="flex gap-2 flex-wrap w-3/4">
            {nationalityData.map((each) => (
              <div key={each.name} className="flex gap-2">
                <div
                  className={`w-1 h-full rounded-full`}
                  style={{ backgroundColor: each.color }}
                />
                <p className="text-sm font-bold">
                  {each.value} <span className="font-normal">{each.name}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-xl flex flex-col justify-between h-full p-4">
          <div className="flex justify-between items-start gap-8">
            <div className="flex flex-col justify-between">
              <p className="text-xs font-medium text-gray-600">Nationality</p>
              <p className="text-4xl font-bold text-gray-800">25</p>
              <p className="text-base font-semibold text-gray-800">
                Singaporeans
              </p>
            </div>
            <div className="w-[100px] h-[100px]">
              <V2Chart
                data={transformDataToChartFormat(employeeTypeData)}
                chartType="doughnut"
                options={{
                  cutout: "80%",
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                }}
              />
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
            {employeeTypeData.map((each) => (
              <div key={each.name} className="flex gap-3">
                <div
                  className={`w-1 h-full rounded-full`}
                  style={{ backgroundColor: each.color }}
                />
                <p className="text-sm font-bold">
                  {each.value}{" "}
                  <span className="font-normal pl-2">{each.name}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-xl flex flex-col justify-between h-full p-4">
          <div className="flex justify-between items-start gap-8">
            <div className="flex flex-col justify-between">
              <p className="text-xs font-medium text-gray-600">
                Employee Status
              </p>
              <p className="text-4xl font-bold text-gray-800">25</p>
              <p className="text-base font-semibold text-gray-800">
                Active Employees
              </p>
            </div>
            <div className="w-[100px] h-[100px]">
              <V2Chart
                data={transformDataToChartFormat(employeeStatusData)}
                chartType="doughnut"
                options={{
                  cutout: "80%",
                  circumference: 360,
                  rotation: -90,
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                }}
              />
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
            {employeeStatusData.map((each) => (
              <div key={each.name} className="flex gap-2">
                <div
                  className={`w-1 h-full rounded-full`}
                  style={{ backgroundColor: each.color }}
                />
                <p className="text-sm font-bold">
                  {each.value} <span className="font-normal">{each.name}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container flex-1 flex flex-col gap-2 h-full mx-auto py-2">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">All Employees</h1>
          <div className="flex gap-4">
            <div className="flex gap-2 bg-white border border-gray-500 px-3 py-1 rounded-xl">
              <img width="17px" src={searchIcon.src} />
              <input
                placeholder="Search employee"
                value={searchValue}
                onChange={handleSearchOnChange}
                className="outline-none text-sm text-gray-800"
              />
            </div>
            <div className="w-[150px]">
              <Dropdown
                options={[...new Set(data.map((each) => each.Status))]}
                value={selectedStatus}
                defaultOption="All Status"
                onSelect={handleStatusOnChange}
              />
            </div>
            <div className="w-[150px]">
              <Dropdown
                options={[...new Set(data.map((each) => each.Role))]}
                defaultOption="All Role"
                value={selectedRole}
                onSelect={handleRoleOnChange}
              />
            </div>
          </div>
        </div>
        <div className="rounded-xl max-h-[calc(100vh-400px)] overflow-auto h-fit min-w-full border border-gray-500">
          <DataTable headers={headers} data={tableData} />
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
