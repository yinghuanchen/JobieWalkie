import React from "react"
import JobListingItem from "./job_listing_item"

const JobListingList = ({ jobListings }) => {
    return (
        <ul>
            {
                jobListings.map((jobListing) => {
                    return (
                    <JobListingItem key={jobListing._id} jobListing={jobListing}/>
                    )
                })
            }
        </ul>
    )
}

export default JobListingList