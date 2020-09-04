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
        <div className = 'debrief-body'>
            <span>
                <p className='firstItem'>Position Interviewed: </p>
                <p>{debrief.jobTitle}</p>
            </span>
            <span>
                <p className='firstItem'>Interview Date: </p>
                <p>{debrief.interviewDate}</p>
            </span>
            <span>
                <p className='firstItem' >Interview Stage: </p> 
                <p> {debrief.InterviewStage} </p>
            </span>
            <span>
                <p className='firstItem' >Interview Difficulty:</p> 
                <p>{debrief.difficulty}</p>
            </span>
            <span>
                <p className='firstItem' >Interview Summary:</p> 
                <p>{debrief.interviewSummary}</p>
            </span>
            <span>
                <p className='firstItem' >Comments: </p> 
                <p>{debrief.comments}</p>
            </span>
            
            <p>{editBody}</p>
        </div>
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