/* eslint-disable @typescript-eslint/no-empty-object-type */
"use client";

import React, { FC, useEffect } from "react";
import successIcon from "../../public/assets/icons/success_icon.svg";

interface ToastProps {
  type: "error" | "success";
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

const Toast: FC<ToastProps> = ({ type, isVisible, onClose, message }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div
      className={`${isVisible ? 'opacity-100 z-50' : 'opacity-0 -z-50' } h-[40px] border animate-bounce flex gap-4 items-center px-4 border-gray-500 rounded-lg bg-white fixed bottom-5 left-[50%] -translate-x-[50%] transition-all shadow-md`}
    >
      {type === "success" && <img src={successIcon.src} />}
      <p className="font-semibold text-gray-800">{message}</p>
    </div>
  );
};

export default Toast;
