import React, { useState } from "react"
import { connect } from "react-redux"
import { deleteDebrief, updateDebrief } from "../../actions/debrief_actions"

const DebriefItem = ({ currentUser, debrief, deleteDebrief, updateDebrief }) => {

    const [isEditing, setIsEditing] = useState(false)
    const [debriefIntJobTitle, setDebriefIntJobTitle] = useState(debrief.jobTitle)
    const [debriefIntDifficulty, setDebriefIntDifficulty] = useState(debrief.difficulty)
    const [debriefIntDate, setDebriefIntDate] = useState(debrief.interviewDate)
    const [debriefIntStage, setDebriefIntStage] = useState(debrief.interviewStage)
    const [debriefIntSummary, setDebriefIntSummary] = useState(debrief.interviewSummary)
    const [debriefIntComments, setDebriefIntComments] = useState(debrief.comments)

    const handleSubmit = () => {
        setIsEditing(false)
        updateDebrief({
            ...debrief,
            user: currentUser.id,
            company: debrief.company,
            jobTitle: debriefIntJobTitle,
            difficulty: debriefIntDifficulty,
            interviewDate: debriefIntDate,
            interviewStage: debriefIntStage,
            interviewSummary: debriefIntSummary,
            comments: debriefIntComments
        })
    }

    const editBody = isEditing ? (
        <>
            <button onClick={() => setIsEditing(false)}>Close Button</button>
            <input type="text" value={debriefIntJobTitle} onChange={(event) => setDebriefIntJobTitle(event.target.value)} />
            <input type="integer" value={debriefIntDifficulty} onChange={(event) => setDebriefIntDifficulty(event.target.value)} />
            <input type="date" value={debriefIntDate} onChange={(event) => setDebriefIntDate(event.target.value)} />
            <input type="text" value={debriefIntStage} onChange={(event) => setDebriefIntStage(event.target.value)} />
            <input type="text" value={debriefIntSummary} onChange={(event) => setDebriefIntSummary(event.target.value)}/>
            <input type="text" value={debriefIntComments} onChange={(event) => setDebriefIntComments(event.target.value)} />
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
            <p>Position Interviewed: {debrief.jobTitle}</p>
            <p>Interview Date: {debrief.interviewDate}</p>
            <p>Interview Stage: {debrief.InterviewStage}</p>
            <p>Interview Difficulty: {debrief.difficulty}</p>
            <p>Interview Summary: {debrief.interviewSummary}</p>
            <p>Comments: {debrief.comments}</p>
            <p>{editBody}</p>
            <br/>
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