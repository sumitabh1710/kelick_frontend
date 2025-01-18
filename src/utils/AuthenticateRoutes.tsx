"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

const AuthenticateRoutes = () => {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (pathname === "/") {
      router.replace("/dashboard");
    }
  }, [pathname]);

  return <></>;
};

export default AuthenticateRoutes;
