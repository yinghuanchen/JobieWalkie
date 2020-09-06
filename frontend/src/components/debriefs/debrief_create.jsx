import React, { useState } from "react"
import { connect } from "react-redux"
import { withRouter, useHistory } from 'react-router-dom'
import { createDebrief } from "../../actions/debrief_actions"
import "../../stylesheets/modal.css"

const DebriefCreate = ({ currentUser, companyId, createDebrief }) => {

    const [isEditing, setIsEditing] = useState(true)

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
      <div className="modal">
        <div className="modal-content">

          <div className="modal-header">
            <span className="modal-title">CREATE DEBRIEF</span>
            <span
              className="fas fa-times-circle"
              onClick={() => {
                setIsEditing(false);
                history.push(`/companies/${companyId}`);
              }}
            >
            </span>
          </div>

          <div className="modal-body">
            <div className="job-title-input">
              <input
                type="text"
                // placeholder="Job Title"
                required
                value={debriefIntJobTitle}
                onChange={(event) => setDebriefIntJobTitle(event.target.value)}
              />
              <label>Job Title</label>
            </div>

            <div
              className="radio-buttons"
              value={debriefIntDifficulty}
              onChange={(event) => setDebriefIntDifficulty(event.target.value)}
            >
              <span className="difficulty-span"> Difficulty: </span>
              <div className="selection-container">
                <span>1</span>
                <input type="radio" name="selection" value={1} />
              </div>
              <div className="selection-container">
                <span>2</span>
                <input type="radio" name="selection" value={2} />
              </div>
              <div className="selection-container">
                <span>3</span>
                <input type="radio" name="selection" value={3} />
              </div>
              <div className="selection-container">
                <span>4</span>
                <input type="radio" name="selection" value={4} />
              </div>
              <div className="selection-container">
                <span>5</span>
                <input type="radio" name="selection" value={5} />
              </div>
            </div>

            <div className='interview-date-container'>
              <input
                type="date"
                value={debriefIntDate}
                onChange={(event) => setDebriefIntDate(event.target.value)}
              />
              <label id="date-label">Interview Date: </label>
            </div>
            <div>
              <input
                type="text"
                value={debriefIntStage}
                onChange={(event) => setDebriefIntStage(event.target.value)}
                required
              />
              <label>Interview Stage</label>
            </div>
            <div>
              <textarea
                className="summary"
                value={debriefIntSummary}
                onChange={(event) => setDebriefIntSummary(event.target.value)}
                required
              />
              <label className="summary-label">Interview Summary</label>
            </div>
            <div>
              <input
                className="comments"
                type="text"
                required
                value={debriefIntComments}
                onChange={(event) => setDebriefIntComments(event.target.value)}
              />
              <label>Comments</label>
            </div>
            <button className="submit-btn" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    );
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