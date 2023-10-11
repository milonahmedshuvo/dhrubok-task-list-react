import React from 'react'

const TopBar = () => {
  const personalInfo = {
    name: 'Milon Ahmed Shuvo',
    address: 'Sherpur, Bogra, Bangladesh',
    contactNo: '+8801744182870',
    email: "milonahmedshuvo01@gmail.com"
  }
  return (

      <div className="flex justify-between p-2 px-7">
        <div>
          <strong>Name:</strong> {personalInfo.name}
        </div>
        <div>
          <strong>Address:</strong> {personalInfo.address}
        </div>
        <div>
          <strong>Contact No:</strong> {personalInfo.contactNo}
        </div>
        <div>
          <strong>Email:</strong> {personalInfo.email}
        </div>
      </div>

  )
}

export default TopBar;