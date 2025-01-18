/* eslint-disable @typescript-eslint/no-empty-object-type */
import React, { FC } from "react";
import greenCheckIcon from "../../../public/assets/icons/green_check_icon.svg";
import Button from "../Button";

interface CongratsProps {
  setIsShow: (data: boolean) => void;
}

const Congrats: FC<CongratsProps> = ({ setIsShow }) => {
  return (
    <div className="flex flex-col items-center gap-8 w-[30vw] p-2">
      <img src={greenCheckIcon.src} width="80px" />
      <div className="flex flex-col items-center gap-2 text-center">
        <p className="text-xl font-bold text-gray-800">{`Congrats! You’ve successfully added all your employees!`}</p>
        <p className="text-lg font-medium text-gray-800">Would you like to generate payroll?</p>
      </div>
      <div className="flex w-full gap-2 items-center">
        <Button
          type="secondary"
          classStyle="w-full"
          onClick={() => setIsShow(false)}
        >
          <p className="text-sm font-bold text-gray-800">{`I'll do it later`}</p>
        </Button>
        <Button type="primary" classStyle="w-full" onClick={() => {}}>
          <p className="text-sm font-bold text-white">Generate payroll</p>
        </Button>
      </div>
    </div>
  );
};

export default Congrats;
