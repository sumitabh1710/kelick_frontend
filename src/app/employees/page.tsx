"use client";

import React, { useState } from "react";
import bulkUploadIcon from "../../../public/assets/icons/bulk_upload_icon.svg";
import addEmployeeIcon from "../../../public/assets/icons/add_employee_icon.svg";
import userMainIcon from "../../../public/assets/icons/user_main_logo.svg";
import Modal from "@/components/Modal";
import AddBulkUpload from "@/components/Employee/AddBulkUpload";
import Button from "@/components/Button";
import Loader from "@/components/Loader";
import Toast from "@/components/Toast";
import Congrats from "@/components/Employee/Congrats";
import { Confetti } from "@neoconfetti/react";
import EmployeeDetails from "@/components/Employee/EmployeeDetails";

const EmployeesPage = () => {
  const [isUpload, setIsUpload] = useState<boolean>(false);
  const [isCongrats, setIsCongrats] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showToast, setShowToast] = useState<boolean>(false);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);

  const [isDetailsLoaded, setIsDetailsLoaded] = useState<boolean>(false);

  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowToast(true);
      setShowConfetti(true);
      setIsDetailsLoaded(true);
      setTimeout(() => {
        setShowConfetti(false);
      }, 3000);
    }, 3000);
    setIsUpload(false);
  };

  return (
    <div className="w-full h-full flex bg-gray-200 text-gray-800 justify-center items-start p-4 overflow-hidden">
      {isLoading ? (
        <div className="w-full h-full flex items-center justify-center">
          <Loader />
        </div>
      ) : !isDetailsLoaded ? (
        <EmployeeDetails />
      ) : (
        <div className="h-[calc(100vh-200px)] border border-gray-500 w-full flex flex-col gap-6 justify-center items-center bg-white rounded-xl">
          <div className="">
            <img src={userMainIcon.src} />
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-gray-800 text-[28px] font-bold">
              Start building your team
            </p>
            <p className="text-gray-600 font-medium">
              Add your first team member or import your entire team.
            </p>
          </div>
          <div className="flex gap-4">
            <Button type="secondary" onClick={() => setIsUpload(true)}>
              <img src={bulkUploadIcon.src} />
              <p className="text-sm font-bold text-gray-800">Bulk Upload</p>
            </Button>
            <Button type="primary">
              <img src={addEmployeeIcon.src} />
              <p className="text-sm font-bold text-white">Add Employee</p>
            </Button>
          </div>
        </div>
      )}
      {showConfetti && (
        <div className="fixed left-0 top-0 w-screen z-[999] flex items-center justify-center h-screen">
          <Confetti destroyAfterDone={false} />
        </div>
      )}
      <Modal
        isShow={isUpload}
        onClose={false}
        title="Upload File"
        setIsShow={setIsUpload}
      >
        <AddBulkUpload setIsShow={setIsUpload} handleSubmit={handleSubmit} />
      </Modal>
      <Modal
        isShow={isCongrats}
        onClose
        title="Upload File"
        setIsShow={setIsCongrats}
      >
        <Congrats setIsShow={setIsCongrats} />
      </Modal>
      <Toast
        type="success"
        isVisible={showToast}
        onClose={() => setShowToast(false)}
        message="Employees successfully added"
      />
    </div>
  );
};

export default EmployeesPage;
