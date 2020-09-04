import React, { useEffect } from "react"
import { connect } from "react-redux"
import { fetchAllDebriefs } from "../../actions/debrief_actions"
import DebriefList from "./debrief_list"
import '../../stylesheets/debrief.css'

const DebriefIndex = ({ debriefs, fetchAllDebriefs }) => {

    useEffect(() => {
        fetchAllDebriefs()
    }, [fetchAllDebriefs])
    
    return (
        <div className='main-debrief'>
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