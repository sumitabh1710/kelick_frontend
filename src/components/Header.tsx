/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const pathname = usePathname();

  const headerMap: any = {
    "/": {
      title: "Home",
      hasComp: false,
    },
    "/dashboard": {
      title: "Dashboard",
      hasComp: false,
    },
    "/employees": {
      title: "Employees",
      hasComp: false,
    },
    "/employees/details": {
      title: "Employees",
      hasComp: true,
    },
    "/kelick": {
      title: "Kelick",
      hasComp: false,
    },
    "/payroll": {
      title: "Payroll",
      hasComp: false,
    },
    "/leaves": {
      title: "Leaves",
      hasComp: false,
    },
    "/claims": {
      title: "Claims",
      hasComp: false,
    },
    "/more": {
      title: "More",
      hasComp: false,
    },
    "/freePlan": {
      title: "Free Plan",
      hasComp: false,
    },
    "/notifications": {
      title: "Notifications",
      hasComp: false,
    },
  };

  return (
    <div className="p-5 h-fit w-full flex justify-between text-gray-800 text-3xl font-bold items-center bg-white border-b border-l border-gray-900">
      {headerMap[pathname].title}
    </div>
  );
};

export default Header;
