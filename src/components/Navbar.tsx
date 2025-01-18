/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import React, { useEffect, useState } from "react";
import mainIcon from "../../public/assets/main_icon.svg";
import textLogo from "../../public/assets/text_logo.svg";
import claimsLogo from "../../public/assets/icons/claims_icon.svg";
import dashboardLogo from "../../public/assets/icons/dashboard_icon.svg";
import employeedLogo from "../../public/assets/icons/employees_icon.svg";
import kelickLogo from "../../public/assets/icons/kelick_icon.svg";
import leavesLogo from "../../public/assets/icons/leaves_icon.svg";
import moreLogo from "../../public/assets/icons/more_icon.svg";
import payrollLogo from "../../public/assets/icons/payroll_icon.svg";
import arrowIcon from "../../public/assets/icons/arrow_icon.svg";
import notificationIcon from "../../public/assets/icons/notification_icon.svg";
import freePlanIcon from "../../public/assets/icons/free_plan_icon.svg";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const route = useRouter();

  const [showDetails, setShowDetails] = useState<Set<any>>(new Set());

  const manageOptions = [
    {
      id: 1,
      title: "Employees",
      icon: employeedLogo,
      url: "/employees",
    },
    {
      id: 2,
      title: "Payroll",
      icon: payrollLogo,
      url: "/payroll",
    },
    {
      id: 3,
      title: "Leaves",
      icon: leavesLogo,
      url: "/leaves",
    },
    {
      id: 4,
      title: "Claims",
      icon: claimsLogo,
      url: "/claims",
    },
    {
      id: 5,
      title: "More",
      icon: moreLogo,
      url: "/more",
    },
  ];

  const handleExpand = (data: number) => {
    setShowDetails((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(data)) {
        newSet.delete(data);
      } else {
        newSet.add(data);
      }
      return newSet;
    });
  };

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  return (
    <div className="w-1/5 h-full flex flex-col bg-white border-r border-gray-100 p-5">
      <div className="flex gap-3 items-center p-4">
        <img src={mainIcon.src} alt="Icon" />
        <img src={textLogo.src} alt="text" />
      </div>
      <div className="flex-1 flex flex-col gap-2 text-sm">
        <div
          className={`py-2 pl-4 flex gap-3 cursor-pointer items-center rounded-xl border hover:border-gray-500 hover:bg-gray-200 ${
            pathname.includes("/dashboard")
              ? "border-gray-500 bg-gray-200 "
              : " border-white"
          }`}
          onClick={() => route.push("/dashboard")}
        >
          <img src={dashboardLogo.src} />
          <p className="text-gray-800 font-medium">Dashboard</p>
        </div>
        <div className="flex flex-col gap-1">
          <div className="py-2 pl-4 flex justify-between">
            <p className="text-gray-300 font-bold">ORGANIZATION</p>
            <div
              className={`cursor-pointer transition-all ${
                showDetails.has(1) ? "" : "-rotate-180"
              }`}
              onClick={() => handleExpand(1)}
            >
              <img src={arrowIcon.src} />
            </div>
          </div>
          <div
            className={`transition-all ${showDetails.has(1) ? "h-10" : "h-0"}`}
          >
            {showDetails.has(1) && (
              <div
                className={`py-2 pl-4 flex cursor-pointer gap-3 items-center rounded-xl border hover:border-gray-500 hover:bg-gray-200 ${
                  pathname.includes("/kelick")
                    ? "border-gray-500 bg-gray-200 "
                    : " border-white"
                }`}
                onClick={() => route.push("/kelick")}
              >
                <img src={kelickLogo.src} />
                <p className="text-gray-800 font-medium">Kelick</p>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-1 transition-all">
          <div className="py-2 pl-4">
            <p className="text-gray-300 font-bold">MANAGE</p>
          </div>
          {manageOptions.map((each) => (
            <div
              key={each.id}
              className={`py-2 pl-4 box-content cursor-pointer transition-all flex gap-3 items-center rounded-xl border hover:border-gray-500 hover:bg-gray-200 ${
                pathname.includes(each.url)
                  ? "border-gray-500 bg-gray-200 "
                  : " border-white "
              }`}
              onClick={() => route.push(each.url)}
            >
              <img src={each.icon.src} />
              <p className="text-gray-800 font-medium">{each.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t pt-2 text-sm border-gray-100 flex flex-col gap-1">
        <div
          className={`py-2 pl-4 box-content cursor-pointer transition-all flex gap-3 items-center rounded-xl border hover:border-gray-500 hover:bg-gray-200 ${
            pathname.includes("/freePlan")
              ? "border-gray-500 bg-gray-200 "
              : " border-white "
          }`}
          onClick={() => route.push("/freePlan")}
        >
          <img src={freePlanIcon.src} />
          <p className="text-gray-800 font-medium">Free Plan</p>
        </div>
        <div
          className={`py-2 px-4 box-content cursor-pointer transition-all flex items-center justify-between rounded-xl border border-white hover:border-gray-500 hover:bg-gray-200 ${
            pathname.includes("/notifications")
              ? "border-gray-500 bg-gray-200 "
              : " border-white "
          }`}
          onClick={() => route.push("/notifications")}
        >
          <div className="flex gap-3 items-center">
            <img src={notificationIcon.src} />
            <p className="text-gray-800 font-medium">Notifications</p>
          </div>
          <div className="h-2 w-2 rounded-full bg-red-100"></div>
        </div>
        <div className="px-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-100 border border-gray-500"></div>
          <div className="flex flex-col justify-center">
            <p className="text-xs text-gray-700 font-medium">John Doe</p>
            <p className="text-[11px] text-gray-600 font-medium">
              johndoe@asure.pro
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
