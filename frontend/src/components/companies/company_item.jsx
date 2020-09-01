import React from "react"

const CompanyItem = ({ companies }) => {
  return (
    <ul>
      <p>{companies.companyName}</p>
      <p>{companies.place}</p>
      <br />
    </ul>
  );
};

export default CompanyItem;
