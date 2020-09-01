import React, { useState } from "react"
import { connect } from "react-redux"
import { deleteDebrief, updateDebrief } from "../../actions/debrief_actions"

const DebriefItem = ({ deleteDebrief, updateDebrief }) => {

    const [isEditing, setIsEditing] = useState(false)
    const [debriefBody, setDebriefBody] = useState(debrief.body)

    const handleSubmit = () => {
        setIsEditing(false)
        updateDebrief({
            ...debrief,
            body: debriefBody
        })
    }

    const editBody = isEditing ? (
        <>
            <button onClick={() => setIsEditing(false)}>Close Button</button>
            <input type="text" value={debriefBody} onChange={(event) => setDebriefBody(event.target.value)}/>
            <button onClick={handleSubmit}>Submit</button>
        </>
    ) : (
        <>
            <button onClick={() => setIsEditing(true)}>Edit Debrief</button>
            <button onClick={() => deleteDebrief(debrief)}>Delete</button>
        </>
    )

    return (
        <li>
            {editBody}
        </li>
    )

}

const mapSTP = (state) => {
    return {
        currentUser: state.session.users[state.session.id],
        companies: state.companies.data ? state.companies.data : []
    }
}

const mapDTP = (dispatch) => {
    return {
        deleteDebrief: (debrief) => dispatch(deleteDebrief(debrief)),
        updateDebrief: (debrief) => dispatch(updateDebrief(debrief._id))
    }
}

export default connect(mapSTP, mapDTP)(DebriefItem)