import React from "react";

const FilterBar = ({ filters, setFilters }) => {
  const handleFilterChange = (e) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [e.target.name]: e.target.value
    }));
    console.log("Filters Updated:", filters);
  };

  return (
    <div className="d-flex justify-content-center gap-3 my-4">
      <select className="form-select w-25" name="mealType" onChange={handleFilterChange}>
        <option value="">All Meals</option>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
      </select>

      <select className="form-select w-25" name="diet" onChange={handleFilterChange}>
        <option value="">All Diets</option>
        <option value="Vegetarian">Vegetarian</option>
        <option value="Vegan">Vegan</option>
        <option value="Gluten-Free">Gluten-Free</option>
      </select>
    </div>
  );
};

export default FilterBar;
