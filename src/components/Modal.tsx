/* eslint-disable @typescript-eslint/no-empty-object-type */
import React, { FC } from "react";
import cancelIcon from "../../public/assets/icons/cancel_icon.svg";

interface ModalProps {
  isShow: boolean;
  title: string;
  onClose: boolean;
  setIsShow: (data: boolean) => void;
  children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({
  children,
  title,
  onClose = true,
  isShow,
  setIsShow,
}) => {
  return (
    <div
      className={`fixed top-0 left-0 h-screen flex items-center justify-center transition-all w-screen bg-gray-1100 ${
        isShow ? "opacity-100 z-50" : "opacity-0 -z-50"
      }`}
      onClick={() => onClose && setIsShow(false)}
    >
      <div
        className="relative w-fit h-fit flex flex-col gap-4 border border-gray-500 bg-white p-4 rounded-2xl shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {!onClose && (
          <div className="flex w-full justify-between items-center">
            <p className="text-gray-700 text-xl font-bold">{title}</p>
            <div
              className="cursor-pointer p-1"
              onClick={() => setIsShow(false)}
            >
              <img src={cancelIcon.src} />
            </div>
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default Modal;
