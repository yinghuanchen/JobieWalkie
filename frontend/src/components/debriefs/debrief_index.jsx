import React, { useEffect } from "react"
import { connect } from "react-redux"
// import { fetchAllCompanies } from "../../actions/company_actions"
import { fetchAllDebriefs } from "../../actions/debrief_actions"
import DebriefList from "./debrief_list"
import '../../stylesheets/debrief.css'

const DebriefIndex = ({ companies, currentUser, debriefs, fetchAllDebriefs }) => {

    // useEffect(() => {
    //     fetchAllCompanies()
    // }, [fetchAllCompanies])

    useEffect(() => {
        fetchAllDebriefs()
    }, [fetchAllDebriefs])
    
    return (
        <div className='main-debrief'>
            <DebriefList currentUser={currentUser} companies={companies} debriefs={debriefs}/>
        </div>        
    )
}

const mapSTP = (state) => {
    return {
        companies: state.companies.data,
        currentUser: state.session.user,
        debriefs: state.debriefs.data ? state.debriefs.data : []
    }
}

const mapDTP = (dispatch) => {
    return {
        // fetchAllCompanies: () => dispatch(fetchAllCompanies()),
        fetchAllDebriefs: () => dispatch(fetchAllDebriefs())
    }
}

export default connect(mapSTP, mapDTP)(DebriefIndex)