import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import enGB from "date-fns/locale/en-GB";

registerLocale("en-GB", enGB);

const DatePickerComp = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <div className="flex">
      <i className="bi bi-card-checklist rounded-full z-50 -mr-6 mt-2.5"></i>
      <div className="relative max-w-sm">
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-8 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholderText="Check-in date"
          locale="en-GB"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg
            className="w-6 h-6 text-gray-700 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 12.586L6.707 9.293a1 1 0 0 1 1.414-1.414L10 10.172l2.879-2.879a1 1 0 0 1 1.414 1.414L10 12.586Z" />
          </svg>
        </div>
      </div>
      <div className="flex ml-2 mt-1.5">|</div>
    </div>
  );
};

export default DatePickerComp;