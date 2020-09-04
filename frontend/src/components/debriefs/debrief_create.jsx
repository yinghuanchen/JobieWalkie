import React, { useState } from "react"
import { connect } from "react-redux"
import { withRouter, useHistory } from 'react-router-dom'
import { createDebrief, fetchCompanyDebriefs } from "../../actions/debrief_actions"

const DebriefCreate = ({ currentUser, companyId, createDebrief, fetchCompanyDebriefs }) => {

    const [debriefIntJobTitle, setDebriefIntJobTitle] = useState("")
    const [debriefIntDifficulty, setDebriefIntDifficulty] = useState("")
    const [debriefIntDate, setDebriefIntDate] = useState("")
    const [debriefIntStage, setDebriefIntStage] = useState("")
    const [debriefIntSummary, setDebriefIntSummary] = useState("")
    const [debriefIntComments, setDebriefIntComments] = useState("")

    const history = useHistory()
    
    const handleSubmit = () => {
        createDebrief({
          user: currentUser.id,
          company: companyId,
          jobTitle: debriefIntJobTitle,
          difficulty: debriefIntDifficulty,
          interviewDate: debriefIntDate,
          interviewStage: debriefIntStage,
          interviewSummary: debriefIntSummary,
          comments: debriefIntComments,
        }).then(() => fetchCompanyDebriefs(companyId));
        history.replace(`/companies/${companyId}`)
    }

    return (
        <li>
            <input type="text" value={debriefIntJobTitle} onChange={(event) => setDebriefIntJobTitle(event.target.value)} />
            <input type="integer" value={debriefIntDifficulty} onChange={(event) => setDebriefIntDifficulty(event.target.value)} />
            <input type="date" value={debriefIntDate} onChange={(event) => setDebriefIntDate(event.target.value)} />
            <input type="text" value={debriefIntStage} onChange={(event) => setDebriefIntStage(event.target.value)} />
            <input type="text" value={debriefIntSummary} onChange={(event) => setDebriefIntSummary(event.target.value)} />
            <input type="text" value={debriefIntComments} onChange={(event) => setDebriefIntComments(event.target.value)} />
            <button onClick={handleSubmit}>Submit</button>
        </li>
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
        fetchCompanyDebriefs: (companyId) => dispatch(fetchCompanyDebriefs(companyId))
    }
}

export default withRouter(connect(mapSTP, mapDTP)(DebriefCreate))