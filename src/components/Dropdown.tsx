import React from "react";

interface DropdownProps {
  options: string[];
  defaultOption: string;
  onSelect: (selectedOption: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, defaultOption, onSelect }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSelect(event.target.value);
  };

  return (
    <div className="w-full px-4 py-2 bg-white border text-sm overflow-hidden border-gray-500 rounded-xl shadow-sm">
      <select
        className="w-full h-full text-gray-700 focus:outline-none"
        onChange={handleChange}
        defaultValue=""
      >
        <option value="w-full">
          {defaultOption}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option} className="text-gray-700 w-full">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
