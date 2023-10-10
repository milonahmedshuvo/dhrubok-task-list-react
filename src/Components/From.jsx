import React, { useState } from "react";

const From = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "male",
    phone: "",
  });

  const [uniqueEmails, setUniqueEmails] = useState([]);
  const [errors, setErrors] = useState({});

  const genderOptions = ["male", "female", "other"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Client-side validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (uniqueEmails.includes(formData.email)) {
      newErrors.email = "Email must be unique";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    }

    if (Object.keys(newErrors).length === 0) {
      console.log("Form data:", formData);
      setUniqueEmails([...uniqueEmails, formData.email]);

      setFormData({ name: "", email: "", gender: "male", phone: "" });
    }

    setErrors(newErrors);
    console.log(formData);
  };

  return (
    <div className="">
      <div className=" px-10 py-8 shadow-xl border">
        <h2>Form Page</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex gap-1 flex-col">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-60 border-blue-400 border px-5 py-1 rounded-md"
            />
          </div>
          <p>
            {errors.name && <span className="text-red-500">{errors.name}</span>}
          </p>
          <div className="flex gap-1 mt-3 flex-col">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-60 border-blue-400 border px-5 py-1 rounded-md"
            />
          </div>
          <p>
            {errors.email && (
              <span className="text-red-500">{errors.email}</span>
            )}
          </p>
          <div className="flex gap-1 mt-3 flex-col">
            <label>Gender:</label>
            <select
              name="gender"
              className="w-60 border-blue-400 border px-5 py-1 rounded-md"
              value={formData.gender}
              onChange={handleInputChange}
            >
              {genderOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="flex gap-1 mt-3 flex-col">
            <label>Phone:</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-60 border-blue-400 border px-5 py-1 rounded-md"
            />
          </div>
          <p>
            {errors.phone && (
              <span className="text-red-500">{errors.phone}</span>
            )}
          </p>
          <button
            className="mt-8 bg-gradient-to-r duration-300 from-blue-500 via-blue-600 to-blue-700 hover:from-purple-500 hover:to-purple-700 text-white px-4 py-2 rounded-lg"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default From;
