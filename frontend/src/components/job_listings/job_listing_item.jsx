import React from 'react'

const JobListingItem = ({ jobListing }) => {
  return (
    <ul className="invidiual-job-listings">
      <a href={`${jobListing.jobLink}`}>{jobListing.jobTitle}</a>
      <p>{jobListing.companyName}</p>
      <p>{jobListing.place}</p>
      <p>{jobListing.datePosted}</p>
      <br/>
    </ul>
  )
}

export default JobListingItem

// JW-TODO: Rename "jobFunction" to "jobDepartment", "place" to "jobLocation"
