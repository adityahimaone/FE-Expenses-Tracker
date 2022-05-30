import React from 'react';

function ExpenseFilter({ filteredYear, onChangeFilter }) {
  const handleChangeFilter = e => {
    onChangeFilter(e.target.value);
  };

  // get year now
  const currentYear = new Date().getFullYear();

  console.log(currentYear, 'currentYear');
  return (
    <div className="my-3 flex justify-between rounded-lg border-2 border-red-500 p-4">
      <div>
        <p>Filtered By Year</p>
      </div>
      <div>
        <select
          defaultValue={currentYear}
          onChange={handleChangeFilter}
          name="filterYear"
          id=""
        >
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
}

export default ExpenseFilter;
