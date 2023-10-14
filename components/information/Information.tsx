import React from "react";
import { SelectComp } from "../select/Select";
import DatePickerComp from "../datePicker/DatePicker";
import { dependents, locations } from "@/utils/routes";

interface IInfo {}

const Information: React.FC<IInfo> = () => {
  return (
    <>
      <div className="sm:flex hidden bg-white rounded-lg shadow-lg py-2 px-3 w-10/12 h-14 justify-between">
        <div>
          <SelectComp data={locations} icon={"bi bi-geo-alt text-xs mt-3"} />
        </div>
        <div>
          <DatePickerComp />
        </div>
        <div>
          <SelectComp data={dependents} icon={"bi bi-person-fill text-sm mt-2"} />
        </div>
      </div>
      <div className="sm:hidden flex flex-col py-2 px-3 w-full mt-6 rounded-lg shadow-lg h-44 justify-between space-y-5 items-center bg-white">
          <SelectComp data={locations} icon={"bi bi-geo-alt text-xs mt-3"} /> 
          <DatePickerComp />
          <SelectComp data={dependents} icon={"bi bi-person-fill text-sm mt-3"} />
      </div>
    </>
  );
};

export default Information;
