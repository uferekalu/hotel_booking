import React from "react";

interface ISelectComp {
  data: string[]
  icon: string
}

const SelectComp: React.FC<ISelectComp> = ({ data, icon}) => {
  return (
    <div className="flex">
      <i className={icon}></i>
      <select className="text-gray-700 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 w-ful p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder:-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option value="">Where Are You Going?</option>
        {data.map((dt: string, idx) => (
          <option key={idx} value={dt}>
            {dt}
          </option>
        ))}
      </select>
    </div>
  );
};

export { SelectComp };
