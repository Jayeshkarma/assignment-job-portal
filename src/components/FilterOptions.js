import React from "react";

const FilterOptions = ({ onFilterChange }) => {
  const handleFilterChange = (e) => {
    onFilterChange(e.target.value);
  };

  return (
    <div>
      <select onChange={handleFilterChange}>
        <option disabled value="">
          Sort by Date
        </option>
        <option value="asc">Oldest First</option>
        <option value="desc">Newest First</option>
      </select>
    </div>
  );
};

export default FilterOptions;
