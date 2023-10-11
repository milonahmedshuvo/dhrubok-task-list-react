import React from "react";

const Footer = () => {
  const universityInfo = {
    universityName: "National University",
    subject: "Islamic History and culture",
    passingYear: "2021",
  };

  return (
    <div className="bg-gray-300 p-4 ">
      <div>
        <strong>University Name:</strong> {universityInfo.universityName}
      </div>
      <div>
        <strong>Subject:</strong> {universityInfo.subject}
      </div>
      <div>
        <strong>Passing Year:</strong> {universityInfo.passingYear}
      </div>
    </div>
  );
};

export default Footer;
