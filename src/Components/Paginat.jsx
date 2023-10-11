import React, { useState } from "react";

const Paginat = ({ items, itemsPerPage, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  return (
    <div className="flex mt-5 items-center justify-center">
      <select
        className="p-2 bg-blue-300  rounded border-blue-700 border"
        value={itemsPerPage}
        onChange={(e) => onPageChange(1, parseInt(e.target.value))}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
      </select>

      <div className="mx-4">
        Page {currentPage} of {totalPages}
      </div>
    </div>
  );
};

export default Paginat;
