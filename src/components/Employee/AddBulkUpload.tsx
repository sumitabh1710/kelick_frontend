/* eslint-disable @typescript-eslint/no-empty-object-type */

import React, { FC } from "react";
import Button from "../Button";
import excelIcon from "../../../public/assets/icons/excel_icon.svg";
import downloadIcon from "../../../public/assets/icons/download_icon.svg";
import folderIcon from "../../../public/assets/icons/folder_icon.svg";

interface AddBulkUploadProps {
  setIsShow: (data: boolean) => void;
  handleSubmit: () => void;
}

const AddBulkUpload: FC<AddBulkUploadProps> = ({ setIsShow, handleSubmit }) => {
  return (
    <div className="h-[60vh] w-[35vw] flex flex-col gap-8">
      <div className="flex-1 flex flex-col gap-4">
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex-1">
            <div className="flex flex-col items-center gap-2 justify-center w-full h-full border-2 broder transition-all border-dashed border-gray-500 hover:border-green-100 bg-gray-1000 rounded-xl">
              <img src={folderIcon.src} />
              <p className="text-xs font-medium w-1/3 text-center text-gray-300">
                Drag and drop your files here or{" "}
                <span className="font-bold underline cursor-pointer">
                  click to upload
                </span>
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center text-gray-600 text-xs font-semibold">
            <p>Supported formats: XLS, CSV</p>
            <p>Maximum file size: 25MB</p>
          </div>
        </div>
        <div className="bg-gray-200 flex items-center p-3 rounded-lg justify-between">
          <div className="flex w-3/5 gap-2 items-center">
            <img src={excelIcon.src} />
            <div className="flex flex-col">
              <p className="text-sm font-bold text-gray-800">Table Example</p>
              <p className="text-xs font-medium text-gray-600">
                You can download the attached example and use them as a starting
                point for your own file.
              </p>
            </div>
          </div>
          <Button type="secondary">
            <img src={downloadIcon.src} />
            <p className="text-xs font-bold text-gray-800 text-nowrap pr-2">
              Download XLSX
            </p>
          </Button>
        </div>
      </div>
      <div className="flex w-full justify-end items-center gap-2">
        <Button type="secondary" onClick={() => setIsShow(false)}>
          <p className="text-sm font-bold text-gray-800">Cancel</p>
        </Button>
        <Button type="primary" onClick={handleSubmit}>
          <p className="text-sm font-bold text-white">Continue</p>
        </Button>
      </div>
    </div>
  );
};

export default AddBulkUpload;
