import React from 'react'
import { FaHeart } from "react-icons/fa"

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
        <a href={`${jobListing.jobLink}`}>Easy Apply</a>
        <FaHeart />
      </div>
    </div>
  );
}

export default JobListingItem

// JW-TODO: Rename "jobFunction" to "jobDepartment", "place" to "jobLocation"
