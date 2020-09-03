import React, { useState } from "react"
import { connect } from "react-redux"
import { deleteDebrief, updateDebrief } from "../../actions/debrief_actions"

const DebriefItem = ({ currentUser, debrief, deleteDebrief, updateDebrief }) => {

    const [isEditing, setIsEditing] = useState(false)
    const [debriefBody, setDebriefBody] = useState(debrief.interviewSummary)

    const handleSubmit = () => {
        setIsEditing(false)
        updateDebrief({
            ...debrief,
            user: currentUser.id,
            interviewSummary: debriefBody,
        })
    }

    const editBody = isEditing ? (
        <>
            <button onClick={() => setIsEditing(false)}>Close Button</button>
            <input
                type="text"
                value={debriefBody}
                onChange={(event) => setDebriefBody(event.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
        </>
    ) : (
        <>
            <button onClick={() => setIsEditing(true)}>Edit Debrief</button>
            <button onClick={() => deleteDebrief(debrief._id)}>Delete</button>
        </>
    )

    return (
        <li>
            <p>{debrief.company}</p>
            <p>{debrief.difficulty}</p>
            <p>{debrief.interviewDate}</p>
            <p>{debrief._id}</p>
            <p>{editBody}</p>
        </li>
    )
}

const mapSTP = (state) => {
    return {
        currentUser: state.session.user
    }
}

const mapDTP = (dispatch) => {
    return {
        deleteDebrief: (debrief) => dispatch(deleteDebrief(debrief)),
        updateDebrief: (debrief) => dispatch(updateDebrief(debrief))
    }
}

export default connect(mapSTP, mapDTP)(DebriefItem)