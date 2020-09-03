import React, { useEffect } from "react"
import { connect } from "react-redux"
import { fetchAllDebriefs } from "../../actions/debrief_actions"
import DebriefList from "./debrief_list"

const DebriefIndex = ({ debriefs, fetchAllDebriefs }) => {

    useEffect(() => {
        fetchAllDebriefs()
    }, [fetchAllDebriefs])
    return (
        <div>
            <h1>Debriefs</h1>
            <DebriefList debriefs={debriefs}/>
        </div>        
    )
}

const mapSTP = (state) => {
    return {
        debriefs: state.debriefs.data ? state.debriefs.data : []
    }
}

const mapDTP = (dispatch) => {
    return {
        fetchAllDebriefs: () => dispatch(fetchAllDebriefs())
    }
}

export default connect(mapSTP, mapDTP)(DebriefIndex)