import React from "react"

const CompanyItem = ({ companies }) => {
  return (
    <ul>
      <p>{companies.companyName}</p>
      <p>{companies.place}</p>
    </ul>
  )
}

export default CompanyItem
