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
          comments: debriefIntComments,
        })
    }

    const debriefUser = (debrief.user === currentUser.id)

    const debriefButtons = isEditing ? (
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <button onClick={() => setIsEditing(false)}> Close </button>
          </div>

          <div className="modal-body">
            <label> Job Title </label>
            <input
              type="text"
              value={debriefIntJobTitle}
              onChange={(event) => setDebriefIntJobTitle(event.target.value)}
            />

            <div
              className="radio-buttons"
              value={debriefIntDifficulty}
              onChange={(event) => setDebriefIntDifficulty(event.target.value)}
            >
              <label> Difficulty </label>
              <span>
                1 <input type="radio" name="selection" value={1} />
              </span>
              <span>
                2 <input type="radio" name="selection" value={2} />
              </span>
              <span>
   
                3 <input type="radio" name="selection" value={3} />
              </span>
              <span>
     
                4 <input type="radio" name="selection" value={4} />
              </span>
              <span>
    
                5 <input type="radio" name="selection" value={5} />
              </span>
            </div>

            <label> Interview Date </label>
            <input
              type="date"
              value={debriefIntDate}
              onChange={(event) => setDebriefIntDate(event.target.value)}
            />

            <label> Interview Stage </label>
            <input
              type="text"
              value={debriefIntStage}
              onChange={(event) => setDebriefIntStage(event.target.value)}
            />
            <label> Summary </label>
            <input
              type="text"
              className="summary"
              value={debriefIntSummary}
              onChange={(event) => setDebriefIntSummary(event.target.value)}
            />
            <label> Comments </label>
            <input
              type="text"
              className="comments"
              value={debriefIntComments}
              onChange={(event) => setDebriefIntComments(event.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    ) : (
      <div className="debrief-btn-container">
        <button className="debrief-btn" onClick={() => setIsEditing(true)}>
          Edit
        </button>
        <button
          className="debrief-btn"
          onClick={() => deleteDebrief(debrief._id)}
        >
          Delete
        </button>
      </div>
    );

    return (
        <div className = 'debrief-body'>
            <span>
                <p className='firstItem debrief-title'>Company: {debrief.company}</p>
            </span>
            <span>
                <p className='firstItem debrief-title'>Position Interviewed: {debrief.jobTitle} </p>
            </span>
            <span>
                <p className='firstItem debrief-date'>Interview Date: {debrief.interviewDate.toString().slice(0,10)}</p>
            </span>
            <span>
                <p className='firstItem debrief-stage'>Interview Stage: {debrief.interviewStage}</p> 
            </span>
            <span>
                <p className='firstItem debrief-difficulty'>Interview Difficulty: {debrief.difficulty}</p> 
            </span>
            <span>
                <span className='firstItem debrief-summary-span'>Interview Summary:</span> 
            </span>
            <p className="debrief-summary">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{debrief.interviewSummary}</p>
            <span>
                <p className='firstItem debrief-comment'>Comments: {debrief.comments}</p> 
            </span>
            
            {debriefUser ? debriefButtons : null}
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