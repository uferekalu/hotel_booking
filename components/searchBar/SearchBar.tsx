import React from "react";

interface ISearchBar {}

const SearchBar: React.FC<ISearchBar> = () => {
  return (
    <>
    <div className="sm:flex hidden">
      <i className="bi bi-search absolute ml-3 mt-2 text-xs "></i>
      <input
        className="flex rounded-lg bg-transparent py-2 px-7 text-xs text-gray-800 border"
        type="text"
        placeholder="Search any things.."
      />
    </div>
    <div className="flex sm:hidden">
      <i className="bi bi-search absolute ml-3 mt-2 text-xs "></i>
      <input
        className="flex rounded-lg bg-transparent py-2 px-7 text-xs text-gray-800 border w-full"
        type="text"
        placeholder="Search any things.."
      />
    </div>
    </>
  );
};

export { SearchBar };
