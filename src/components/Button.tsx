/* eslint-disable @typescript-eslint/no-empty-object-type */
import React, { FC } from "react";

interface ButtonProps {
  type: "primary" | "secondary";
  children: React.ReactNode;
  onClick?: () => void;
  classStyle?: string;
}

const Button: FC<ButtonProps> = ({ type, children, onClick, classStyle }) => {
  return (
    <button
      className={`cursor-pointer flex items-center ${
        type === "primary"
          ? "bg-green-100 "
          : "bg-gray-1000 border border-gray-500"
      } justify-center gap-2 rounded-xl h-[40px] px-4 ${classStyle}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
