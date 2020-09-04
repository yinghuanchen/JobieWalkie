import React, { useState } from "react"
import { connect } from "react-redux"
import { withRouter, useHistory } from 'react-router-dom'
import { createDebrief } from "../../actions/debrief_actions"
import "../../stylesheets/modal.css"

const DebriefCreate = ({ currentUser, companyId, createDebrief }) => {

    const [isEditing, setIsEditing] = useState(false)

    const [debriefIntJobTitle, setDebriefIntJobTitle] = useState("")
    const [debriefIntDifficulty, setDebriefIntDifficulty] = useState("")
    const [debriefIntDate, setDebriefIntDate] = useState("")
    const [debriefIntStage, setDebriefIntStage] = useState("")
    const [debriefIntSummary, setDebriefIntSummary] = useState("")
    const [debriefIntComments, setDebriefIntComments] = useState("")

    const history = useHistory()
    
    const handleSubmit = () => {
        setIsEditing(false)
        createDebrief({
            user: currentUser.id,
            company: companyId,
            jobTitle: debriefIntJobTitle,
            difficulty: debriefIntDifficulty,
            interviewDate: debriefIntDate,
            interviewStage: debriefIntStage,
            interviewSummary: debriefIntSummary,
            comments: debriefIntComments,
        }).then(() => history.push(`/companies/${companyId}`))
    }

    return (
        <>
            <div className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <span className="closeBtn" onClick={() => setIsEditing(false)}>Cancel</span>
                    </div>
                    <div className="modal-body">
                        <div className= "modal-inputs">
                            <input type="text" placeholder="Job Title" value={debriefIntJobTitle} onChange={(event) => setDebriefIntJobTitle(event.target.value)} />
                            <div value={debriefIntDifficulty} onChange={(event) => setDebriefIntDifficulty(event.target.value)}>
                                {/* <input type="radio" value={debriefIntDifficulty} onChange={(event) => setDebriefIntDifficulty(event.target.value)} /> */}
                                <input type="radio" value={1} /> 1
                                <input type="radio" value={2} /> 2
                                <input type="radio" value={3} /> 3
                                <input type="radio" value={4} /> 4
                                <input type="radio" value={5} /> 5
                            </div>
                            <input type="date" value={debriefIntDate} onChange={(event) => setDebriefIntDate(event.target.value)} />
                            <input type="text" placeholder="Interview Stage" value={debriefIntStage} onChange={(event) => setDebriefIntStage(event.target.value)} />
                            <input type="text" placeholder="Interview Summary" value={debriefIntSummary} onChange={(event) => setDebriefIntSummary(event.target.value)} />
                            <input type="text" placeholder="Comments" value={debriefIntComments} onChange={(event) => setDebriefIntComments(event.target.value)} />
                            <button onClick={handleSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapSTP = (state, ownProps) => {
    return {
      companyId: ownProps.match.params.companyId,
      currentUser: state.session.user,
    }
}

const mapDTP = (dispatch) => {
    return {
        createDebrief: (debrief) => dispatch(createDebrief(debrief)),
    }
}

export default withRouter(connect(mapSTP, mapDTP)(DebriefCreate))