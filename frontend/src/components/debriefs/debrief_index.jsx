import React, { useEffect } from "react"
import { connect } from "react-redux"
import { fetchAllDebriefs } from "../../actions/debrief_actions"
import DebriefItem from "./debrief_item"

const DebriefIndex = ({ debriefs, fetchAllDebriefs }) => {

    useEffect(() => {
        fetchAllDebriefs()
    }, [fetchAllDebriefs])

    return (
        <>
            <DebriefItem debriefs={debriefs}/>
        </>        
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