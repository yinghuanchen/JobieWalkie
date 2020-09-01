import React from "react"
import JobListingItem from "./job_listing_item"

const JobListingList = ({ jobListings }) => {
    return (
        <ul className="job-listing-list">
            {
                jobListings.map((jobListing) => {
                    return <JobListingItem key={jobListing.id} jobListing={jobListing} />;
                })
            }
        </ul>
    )
}

export default JobListingList