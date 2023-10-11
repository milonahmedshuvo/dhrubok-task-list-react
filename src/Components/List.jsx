import React, { useEffect, useState } from "react";
import Paginat from "./Paginat";

const List = () => {
  const [userData, setUserData] = useState([]);
  const [uniqueEmails, setUniqueEmails] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=20")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const fetchedData = data.results.map((result) => ({
          name: `${result.name.first} ${result.name.last}`,
          email: result.email,
          gender: result.gender,
          phone: result.phone,
        }));
        // Filter out duplicate emails
        const filteredData = fetchedData.filter(
          (user) => !uniqueEmails.includes(user.email)
        );

        // Add new data to the list of unique emails
        setUniqueEmails([
          ...uniqueEmails,
          ...filteredData.map((user) => user.email),
        ]);

        // Set the user data
        setUserData([...userData, ...filteredData]);
      });
  }, []); // Run this effect only once on page load

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const handlePageChange = (page, itemsPerPage) => {
    setCurrentPage(page);
    setItemsPerPage(itemsPerPage);
  };

  const filteredData = userData.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.gender.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="">
      <h2 className="text-xl">List Page</h2>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 border-2 my-3"
      />
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-gray-200 font-bold text-sm hover:cursor-pointer">
          <tr>
            <th
              className="px-6 py-3 text-left text-gray-500 uppercase tracking-wider"
              onClick={() => handleSort("name")}
            >
              Name
            </th>
            <th
              className="px-6 py-3 text-left text-gray-500 uppercase tracking-wider"
              onClick={() => handleSort("email")}
            >
              Email
            </th>
            <th
              className="px-6 py-3 text-left text-gray-500 uppercase tracking-wider"
              onClick={() => handleSort("gender")}
            >
              Gender
            </th>
            <th
              className="px-6 py-3 text-left text-gray-500 uppercase tracking-wider"
              onClick={() => handleSort("phone")}
            >
              Phone
            </th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((user, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {user.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {user.email}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {user.gender}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {user.phone}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Paginat
        items={sortedData}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      ></Paginat>
    </div>
  );
};

export default List;
