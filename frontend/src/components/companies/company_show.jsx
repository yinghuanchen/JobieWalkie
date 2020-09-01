import React from 'react'
import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchAllDebriefs } from "../../actions/debrief_actions"
import { fetchCompany } from "../../actions/company_actions"

const CompanyShow = ({ company, debriefs, fetchAllDebriefs, fetchCompany }) => {

    let { companyId } = useParams()
    companyId = parseInt(companyId)

    useEffect(() => {
        fetchCompany(companyId)
    }, [fetchCompany, companyId])

    useEffect(() => {
        fetchAllDebriefs()
    }, [fetchAllDebriefs])

    const companyDebriefs = debriefs.filter(debrief => debrief.company_id === companyId)

    return (
        <>
            <DebriefItem debriefs={companyDebriefs}/>
        </>   
    )
}

export default CompanyShow

const mapSTP = (state, ownProps) => {
    return {
        company: state.debriefs.data[ownProps.match.params.companyId],
        debriefs: state.debriefs.data ? state.debriefs.data : []
    }
}

const mapDTP = (dispatch) => {
    return {
        fetchAllDebriefs: () => dispatch(fetchAllDebriefs()),
        fetchCompany: (companyId) => dispatch(fetchCompany(companyId))
    }
}

export default connect(mapSTP, mapDTP)(CompanyShow)