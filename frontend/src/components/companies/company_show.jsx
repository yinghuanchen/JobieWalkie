import React, { useEffect } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { fetchCompanyDebriefs } from "../../actions/debrief_actions"
import { fetchCompany } from "../../actions/company_actions"
import DebriefList from "../debriefs/debrief_list"

const CompanyShow = ({ company, debriefs, fetchCompanyDebriefs, fetchCompany, match }) => {

    let companyId = match.params.companyId

    useEffect(() => {
        fetchCompany(companyId)
    }, [fetchCompany, companyId])

    useEffect(() => {
        fetchCompanyDebriefs(companyId)
    }, [fetchCompanyDebriefs, companyId])

    // const companyDebriefs = debriefs.filter(debrief => debrief.company === companyId) // Don't need this. Can delete because of "fetchCompanyDebriefs"
    if (!company) return null // This is important. The "fetch" is the asynchronous call that dictates why this line is important.

    return (
      <div>
        {/* <p>{company.name}</p> */}
        <Link to={`/debriefs/${companyId}/create`}>Create Debrief</Link>
        <DebriefList debriefs={debriefs} />
      </div>
    )
}

const mapSTP = (state) => {
    return {
        company: state.companies,
        debriefs: state.debriefs.data || []
    }
}

const mapDTP = (dispatch) => {
    return {
        fetchCompanyDebriefs: (companyId) => dispatch(fetchCompanyDebriefs(companyId)),
        fetchCompany: (companyId) => dispatch(fetchCompany(companyId)),
    }
}

export default connect(mapSTP, mapDTP)(CompanyShow)

// JW-TODO: Use useParams to replace "match"