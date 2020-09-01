import React from 'react'
import { FaStar, FaExternalLinkAlt } from "react-icons/fa"

const JobListingItem = ({ jobListing }) => {
  return (
    <div className="main-listings">
      <div className="invidiual-job-listings">
        <div className="listings-title">{jobListing.jobTitle}</div>
        <div className="listings-item">{jobListing.companyName}</div>
        <div className="listings-item">{jobListing.place}</div>
        <div className="listings-item">{jobListing.datePosted}</div>
      </div>

      <div className="link-listings">
          <a href={`${jobListing.jobLink}`}> <FaExternalLinkAlt className="link-logo"/> </a>
          <FaStar className = 'link-star' />
      </div>
    </div>
  );
}

export default JobListingItem

// JW-TODO: Rename "jobFunction" to "jobDepartment", "place" to "jobLocation"
