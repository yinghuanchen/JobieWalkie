import React from 'react';

const JobListingItem = ({ jobListing }) => {
  return (
    <ul>
      <p>{jobListing.companyName}</p>
      {/* <p>{jobListing.jobLink}</p> */}
      <p>{jobListing.location}</p>
      <p>{jobListing.datePosted}</p>
      <a href={`${jobListing.jobLink}`}>{jobListing.jobTitle}</a>
      <br/>
      <br/>
    </ul>
  )
}

export default JobListingItem
