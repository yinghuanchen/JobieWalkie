import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createDebrief } from '../../actions/debrief_actions'

const JobListingItem = ({ jobListing, currentUser, createDebrief }) => {

    const [isDebriefing, setIsDebriefing] = useState(false)
    const [debriefBody, setDebriefBody] = useState("")

    const handleSubmit = () => {
        setIsDebriefing(false)
        createDebrief({
            body: debriefBody,
            job_listing_id: job_listing.id,
            author_id: currentUser.id
        })
    }

    const writeDebrief = isDebriefing ? (
        <>
            <input type="text" value={debriefBody} onChange={(event) => setDebriefBody(event.target.value)} />
            <button onClick={() => setIsDebriefing(false)}></button>
            <button onClick={handleSubmit}></button>
        </>
    ) : (
        <>
            <button onClick={() => setIsDebriefing(true)}></button>
        </>
    )

    return (
        <li>
            <p>{jobListing.title}</p>
            <p>{writeDebrief}</p>
            <p>Hi</p>
        </li>
    )
}

const mapSTP = (state) => {
    return {
        currentUser: state.user.id
    }
}

const mapDTP = (dispatch) => {
    return {
        createDebrief: (debrief) => dispatch(createDebrief(debrief))
    }
}

export default connect(mapSTP, mapDTP)(JobListingItem)